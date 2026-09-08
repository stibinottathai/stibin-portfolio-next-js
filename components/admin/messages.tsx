"use client";

import { useEffect, useState } from "react";
import {
  deleteMessage,
  setMessageRead,
  subscribeMessages,
  type ContactMessage,
} from "@/lib/messages";

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
