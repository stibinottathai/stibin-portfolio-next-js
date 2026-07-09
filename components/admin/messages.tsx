"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  deleteMessage,
  setMessageRead,
  subscribeMessages,
  type ContactMessage,
} from "@/lib/messages";

/** Streams an AI-drafted reply for one enquiry, with copy + email actions. */
function ReplyDraft({ msg }: { msg: ContactMessage }) {
  const [draft, setDraft] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    setBusy(true);
    setError(null);
    setDraft("");
    try {
      const idToken = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: "reply",
          name: msg.name,
          email: msg.email,
          message: msg.message,
          idToken,
        }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "AI is unavailable right now.");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let out = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        out += decoder.decode(value, { stream: true });
        setDraft(out);
      }
      if (!out.trim()) throw new Error("AI returned nothing — try again.");
    } catch (err) {
      setDraft(null);
      setError(err instanceof Error ? err.message : "AI request failed.");
    } finally {
      setBusy(false);
    }
  };

  const copy = async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Couldn't copy — select and copy manually.");
    }
  };

  return (
    <div className="mt-3">
      {draft === null ? (
        <button
          onClick={generate}
          disabled={busy}
          className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium text-(--accent) hover:border-cyan-400/40 disabled:opacity-50"
        >
          ✦ Draft reply with AI
        </button>
      ) : (
        <div className="rounded-xl border border-cyan-400/20 bg-(--surface-2) p-4">
          <p className="mb-2 text-[0.68rem] font-semibold tracking-wide text-(--accent) uppercase">
            AI draft
          </p>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {draft}
            {busy && <span className="caret" />}
          </p>
          {!busy && (
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={copy}
                className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium hover:border-cyan-400/40 hover:text-(--accent)"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
              <a
                href={`mailto:${msg.email}?subject=${encodeURIComponent("Re: your message on stibin.online")}&body=${encodeURIComponent(draft)}`}
                className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium hover:border-cyan-400/40 hover:text-(--accent)"
              >
                Open in email
              </a>
              <button
                onClick={generate}
                className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium text-(--muted) hover:text-(--foreground)"
              >
                ↻ Regenerate
              </button>
              <button
                onClick={() => setDraft(null)}
                className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium text-(--muted) hover:text-(--foreground)"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      )}
      {error && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-300">{error}</p>
      )}
    </div>
  );
}

function formatDate(msg: ContactMessage): string {
  if (!msg.createdAt) return "just now";
  return msg.createdAt.toDate().toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function MessagesInbox() {
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return subscribeMessages(setMessages, (err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="card border-red-400/30 p-6 text-sm leading-relaxed text-red-600 dark:text-red-300">
        Couldn&apos;t load messages: {error}
        <p className="mt-2 text-(--muted)">
          Make sure the latest <code>firestore.rules</code> (including the
          <code> messages</code> block) is published in the Firebase console.
        </p>
      </div>
    );
  }

  if (!messages) {
    return <p className="text-sm text-(--muted)">Loading messages…</p>;
  }

  if (messages.length === 0) {
    return (
      <div className="card p-10 text-center">
        <p className="text-3xl" aria-hidden>
          📭
        </p>
        <p className="mt-3 text-sm text-(--muted)">
          No messages yet. When visitors use the contact form on your
          portfolio, their enquiries appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`card p-5 ${msg.read ? "opacity-70" : "border-cyan-400/30"}`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-sm font-semibold">
                {!msg.read && (
                  <span
                    className="size-2 shrink-0 rounded-full bg-cyan-400"
                    title="Unread"
                  />
                )}
                {msg.name}
              </p>
              <a
                href={`mailto:${msg.email}`}
                className="text-xs text-(--accent) hover:underline"
              >
                {msg.email}
              </a>
            </div>
            <p className="shrink-0 font-mono text-xs text-(--muted)">
              {formatDate(msg)}
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed whitespace-pre-wrap text-(--muted)">
            {msg.message}
          </p>
          <ReplyDraft msg={msg} />
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`mailto:${msg.email}?subject=Re: your message on stibin.online`}
              className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium hover:border-cyan-400/40 hover:text-(--accent)"
            >
              Reply by email
            </a>
            <button
              onClick={() => setMessageRead(msg.id, !msg.read)}
              className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium text-(--muted) hover:text-(--foreground)"
            >
              Mark as {msg.read ? "unread" : "read"}
            </button>
            <button
              onClick={() => {
                if (confirm(`Delete the message from ${msg.name}?`)) {
                  deleteMessage(msg.id);
                }
              }}
              className="rounded-full border border-(--border) px-4 py-1.5 text-xs font-medium text-(--muted) hover:border-red-400/40 hover:text-red-600 dark:hover:text-red-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
