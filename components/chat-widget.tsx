"use client";

import { useEffect, useRef, useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const STARTERS = [
  "What's his tech stack?",
  "Tell me about his fintech experience",
  "Is he available to hire?",
];

export default function ChatWidget({ name }: { name: string }) {
  const firstName = name.split(" ")[0] || name;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || busy) return;
    setError(null);
    setInput("");
    const history: ChatMessage[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(history);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "The AI is unavailable right now.");
      }
      // Stream tokens into the last assistant message as they arrive.
      setMessages([...history, { role: "assistant", content: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) {
        throw new Error("The AI returned an empty answer — please try again.");
      }
    } catch (err) {
      setMessages(history);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <div className={`fixed right-5 bottom-16 z-50 ${open ? "" : "chat-float"}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : `Chat with ${firstName}'s AI assistant`}
        className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 shadow-xl shadow-cyan-500/30 transition-transform hover:scale-105"
      >
        {!open && (
          <span
            className="chat-ring absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400"
            aria-hidden
          />
        )}
        {open ? (
          <svg
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="#020617"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-7" fill="#020617" aria-hidden>
            {/* AI sparkle mark: one large four-point star + two companions */}
            <path d="M10 2.5l1.7 4.9c.15.44.5.79.94.94l4.9 1.7-4.9 1.7c-.44.15-.79.5-.94.94L10 17.5l-1.7-4.9c-.15-.44-.5-.79-.94-.94l-4.9-1.7 4.9-1.7c.44-.15.79-.5.94-.94L10 2.5Z" />
            <path d="M18.5 12.5l.95 2.72c.08.25.28.44.52.52l2.72.95-2.72.95c-.25.08-.44.28-.52.52l-.95 2.73-.95-2.73c-.08-.25-.28-.44-.52-.52l-2.73-.95 2.73-.95c.25-.08.44-.28.52-.52l.95-2.72Z" />
            <path d="M16.75 2.75l.6 1.72c.05.15.17.27.32.32l1.71.6-1.71.6c-.15.05-.27.17-.32.32l-.6 1.71-.6-1.71a.52.52 0 0 0-.32-.32l-1.72-.6 1.72-.6c.15-.05.27-.17.32-.32l.6-1.72Z" />
          </svg>
        )}
      </button>
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed right-5 bottom-34 z-50 flex h-[62vh] max-h-[540px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-2xl">
          <div className="border-b border-(--border) bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 px-5 py-4">
            <p className="text-sm font-semibold">
              Ask AI about {firstName}{" "}
              <span className="ml-1 rounded-full bg-cyan-400/10 px-2 py-0.5 text-[0.65rem] font-medium text-cyan-700 dark:text-cyan-300">
                DeepSeek
              </span>
            </p>
            <p className="mt-0.5 text-xs text-(--muted)">
              Answers come from this portfolio&apos;s live content
            </p>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-(--muted)">
                  Hi! I can answer questions about {firstName}&apos;s skills,
                  projects, and experience. Try one of these:
                </p>
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-xl border border-(--border) px-4 py-2.5 text-left text-sm text-(--muted) transition-colors hover:border-cyan-400/40 hover:text-(--foreground)"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "ml-auto rounded-br-sm bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950"
                    : "rounded-bl-sm bg-(--surface-2) text-(--foreground)"
                }`}
              >
                {m.content}
                {/* Streaming cursor on the growing assistant message */}
                {busy && m.role === "assistant" && i === messages.length - 1 && (
                  <span className="caret" />
                )}
              </div>
            ))}

            {busy && messages[messages.length - 1]?.role === "user" && (
              <div className="w-fit rounded-2xl rounded-bl-sm bg-(--surface-2) px-4 py-2.5 text-sm text-(--muted)">
                <span className="animate-pulse">Thinking…</span>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-600 dark:text-red-300">{error}</p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-(--border) p-3"
          >
            <input
              ref={inputRef}
              className="input"
              value={input}
              maxLength={2000}
              placeholder={`Ask about ${firstName}…`}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-400 font-semibold text-slate-950 transition-opacity disabled:opacity-40"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}
