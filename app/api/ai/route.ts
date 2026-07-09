import {
  loadContent,
  type PortfolioContent,
} from "@/lib/content";
import { FIREBASE_WEB_API_KEY, isAdminEmail } from "@/lib/firebase";

const MODEL = process.env.OPENROUTER_MODEL ?? "deepseek/deepseek-v4-flash";

/* ------------------------------------------------------------------ */
/* Rate limiting (per IP per task, resets hourly)                      */
/* ------------------------------------------------------------------ */

const LIMITS: Record<string, number> = {
  jobfit: 10,
  improve: 60,
  reply: 60,
};

const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string, limit: number): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }
  entry.count += 1;
  if (hits.size > 5000) hits.clear();
  return entry.count > limit;
}

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

let cachedContent: { data: PortfolioContent; expires: number } | null = null;

async function getContent(): Promise<PortfolioContent> {
  if (cachedContent && Date.now() < cachedContent.expires) {
    return cachedContent.data;
  }
  const data = await loadContent();
  cachedContent = { data, expires: Date.now() + 5 * 60 * 1000 };
  return data;
}

function contentForPrompt(content: PortfolioContent): PortfolioContent {
  // The photo can be a ~100 KB data URI — never send it to the model.
  return { ...content, hero: { ...content.hero, photoUrl: "" } };
}

async function callOpenRouter(
  apiKey: string,
  messages: { role: string; content: string }[],
  options: { stream: boolean; maxTokens: number },
): Promise<Response> {
  return fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://stibin.online",
      "X-Title": "Portfolio AI",
    },
    body: JSON.stringify({
      model: MODEL,
      stream: options.stream,
      max_tokens: options.maxTokens,
      messages,
    }),
  });
}

/** Converts an OpenRouter SSE body into a plain-text token stream. */
function sseToTextStream(body: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";
  return body.pipeThrough(
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
}

async function streamTask(
  apiKey: string,
  system: string,
  user: string,
  maxTokens: number,
): Promise<Response> {
  const upstream = await callOpenRouter(
    apiKey,
    [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    { stream: true, maxTokens },
  );
  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("OpenRouter error", upstream.status, detail.slice(0, 500));
    return Response.json(
      { error: "The AI service is unavailable right now." },
      { status: 502 },
    );
  }
  return new Response(sseToTextStream(upstream.body), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/** Verifies a Firebase ID token and checks the email allowlist. */
async function verifyAdmin(idToken: unknown): Promise<boolean> {
  if (typeof idToken !== "string" || !idToken) return false;
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_WEB_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      },
    );
    if (!res.ok) return false;
    const data = await res.json();
    return isAdminEmail(data.users?.[0]?.email);
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ */
/* POST /api/ai                                                        */
/* ------------------------------------------------------------------ */

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "AI features are not configured on this server." },
      { status: 503 },
    );
  }

  let body: {
    task?: string;
    idToken?: string;
    jd?: string;
    lang?: string;
    text?: string;
    context?: string;
    name?: string;
    email?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const task = body.task ?? "";
  const limit = LIMITS[task];
  if (!limit) {
    return Response.json({ error: "Unknown task." }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(`${task}:${ip}`, limit)) {
    return Response.json(
      { error: "Too many requests — please try again later." },
      { status: 429 },
    );
  }

  /* ---------- public tasks ---------- */

  if (task === "jobfit") {
    const jd = typeof body.jd === "string" ? body.jd.trim().slice(0, 6000) : "";
    if (jd.length < 80) {
      return Response.json(
        { error: "Please paste a fuller job description (at least a few lines)." },
        { status: 400 },
      );
    }
    const content = await getContent();
    return streamTask(
      apiKey,
      `You are a recruiting analyst embedded in ${content.hero.name}'s portfolio website. A recruiter has pasted a job description. Compare it honestly against the candidate's profile below.

Write in PLAIN TEXT (no markdown symbols) with these short sections, each with its heading on its own line:
FIT: one or two sentences with an overall verdict (Strong match / Good match / Partial match) and why.
KEY MATCHES: 3-6 dash bullets mapping the candidate's real skills/experience to the role's requirements.
RELEVANT PROJECTS: 1-3 dash bullets naming the candidate's most relevant real projects.
GAPS: 1-3 dash bullets honestly noting requirements not evidenced in the profile (never invent skills).
BOTTOM LINE: one or two sentences, and invite the recruiter to reach out via the contact form or ${content.hero.email}.

CANDIDATE PROFILE (JSON):
${JSON.stringify(contentForPrompt(content))}`,
      `JOB DESCRIPTION:\n${jd}`,
      900,
    );
  }

  /* ---------- admin tasks (require a valid admin ID token) ---------- */

  if (!(await verifyAdmin(body.idToken))) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }

  if (task === "improve") {
    const text =
      typeof body.text === "string" ? body.text.trim().slice(0, 4000) : "";
    const context =
      typeof body.context === "string" ? body.context.slice(0, 100) : "text";
    if (!text) {
      return Response.json({ error: "Nothing to improve." }, { status: 400 });
    }
    return streamTask(
      apiKey,
      `You are an expert copywriter for developer portfolios. Rewrite the ${context} the user sends to be sharper, more professional, and more impactful for recruiters. Keep the original meaning and facts exactly — never invent achievements. Keep roughly the same length and the same voice/person as the original. Output ONLY the rewritten text, plain text, no markdown, no quotes, no commentary.`,
      text,
      600,
    );
  }

  if (task === "reply") {
    const name = typeof body.name === "string" ? body.name.slice(0, 100) : "";
    const message =
      typeof body.message === "string" ? body.message.trim().slice(0, 3000) : "";
    if (!message) {
      return Response.json({ error: "No message to reply to." }, { status: 400 });
    }
    const content = await getContent();
    return streamTask(
      apiKey,
      `You are drafting an email reply on behalf of ${content.hero.name}, a ${content.hero.headline} based in ${content.hero.location}. Write a warm, professional, concise reply (under 150 words) to the enquiry below. Address the sender by name, respond to what they actually asked, propose a concrete next step (a call, sharing more details, etc.), and sign off with ${content.hero.name}'s name. Plain text only, no markdown, no subject line.`,
      `Enquiry from ${name || "a visitor"}:\n${message}`,
      400,
    );
  }

  return Response.json({ error: "Unknown task." }, { status: 400 });
}
