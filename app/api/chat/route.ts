import { loadContent } from "@/lib/content";
import type { PortfolioContent } from "@/lib/content";

const MODEL = process.env.OPENROUTER_MODEL ?? "deepseek/deepseek-v4-flash";
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

/* ------------------------------------------------------------------ */
/* Basic in-memory rate limiting (per IP, resets hourly)               */
/* ------------------------------------------------------------------ */

const RATE_LIMIT = 30; // requests per IP per hour
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }
  entry.count += 1;
  if (hits.size > 5000) hits.clear(); // crude memory cap
  return entry.count > RATE_LIMIT;
}

/* ------------------------------------------------------------------ */
/* System prompt built from the live portfolio content                 */
/* ------------------------------------------------------------------ */

// Content changes rarely; cache it for 5 minutes to avoid a Firestore
// read on every chat message.
let cachedContent: { data: PortfolioContent; expires: number } | null = null;

async function getContent(): Promise<PortfolioContent> {
  if (cachedContent && Date.now() < cachedContent.expires) {
    return cachedContent.data;
  }
  const data = await loadContent();
  cachedContent = { data, expires: Date.now() + 5 * 60 * 1000 };
  return data;
}

function buildSystemPrompt(content: PortfolioContent): string {
  const { hero } = content;
  return `You are the friendly AI assistant embedded in ${hero.name}'s personal portfolio website. Visitors are usually recruiters, hiring managers, or fellow developers.

Your job:
- Answer questions about ${hero.name} — skills, experience, projects, education, availability — using ONLY the portfolio data below.
- Be warm, concise, and professional. Prefer short paragraphs or brief bullet lists. Never invent facts that are not in the data.
- Write in PLAIN TEXT only — absolutely no markdown syntax (no **, ##, backticks, or [links](…)). Use simple dashes for lists.
- If you don't know something from the data, say so honestly and suggest asking ${hero.name} directly.
- If a visitor seems interested in hiring or collaborating, encourage them to use the contact form on this page or email ${hero.email}.
- Politely decline questions unrelated to ${hero.name} or this portfolio (politics, general coding help, etc.) and steer back to the portfolio.
- Reply in the language the visitor writes in.

PORTFOLIO DATA (JSON):
${JSON.stringify(content)}`;
}

/* ------------------------------------------------------------------ */
/* POST /api/chat — proxies to OpenRouter and streams plain text back  */
/* ------------------------------------------------------------------ */

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured on this server." },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages — please try again later." },
      { status: 429 },
    );
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      throw new Error("bad shape");
    }
    messages = body.messages
      .slice(-MAX_MESSAGES)
      .filter(
        (m: ChatMessage) =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string",
      )
      .map((m: ChatMessage) => ({
        role: m.role,
        content: m.content.slice(0, MAX_MESSAGE_LENGTH),
      }));
    if (messages.length === 0) throw new Error("bad shape");
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const content = await getContent();

  const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://stibin.online",
      "X-Title": `${content.hero.name} Portfolio Chat`,
    },
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      max_tokens: 800,
      messages: [
        { role: "system", content: buildSystemPrompt(content) },
        ...messages,
      ],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("OpenRouter error", upstream.status, detail.slice(0, 500));
    return Response.json(
      { error: "The AI service is unavailable right now." },
      { status: 502 },
    );
  }

  // Convert OpenRouter's SSE stream into a plain text stream of tokens.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const textStream = upstream.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const data = line.trim();
          if (!data.startsWith("data:")) continue;
          const payload = data.slice(5).trim();
          if (payload === "[DONE]") continue;
          try {
            const token = JSON.parse(payload).choices?.[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          } catch {
            // Ignore malformed keep-alive lines.
          }
        }
      },
    }),
  );

  return new Response(textStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
