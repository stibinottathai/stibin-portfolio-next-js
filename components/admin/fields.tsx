"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";

/* Small reusable form controls shared by the admin section editors. */

export function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  rows = 4,
  aiContext,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  /** When set, shows an "Improve with AI" button; describes the field to the model (e.g. "professional summary"). */
  aiContext?: string;
}) {
  const [aiBusy, setAiBusy] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);

  const improve = async () => {
    if (!value.trim() || aiBusy) return;
    setAiBusy(true);
    setAiError(null);
    const original = value;
    try {
      const idToken = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: "improve",
          text: original,
          context: aiContext,
          idToken,
        }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "AI is unavailable right now.");
      }
      setPrevious(original);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let out = "";
      for (;;) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        out += decoder.decode(chunk, { stream: true });
        onChange(out);
      }
      if (!out.trim()) {
        onChange(original);
        setPrevious(null);
        throw new Error("AI returned nothing — please try again.");
      }
    } catch (err) {
      setAiError(err instanceof Error ? err.message : "AI request failed.");
    } finally {
      setAiBusy(false);
    }
  };

  return (
    <div>
      <div className="mb-0.5 flex items-center justify-between gap-3">
        <label className="label !mb-0">{label}</label>
        {aiContext && (
          <div className="flex items-center gap-3">
            {previous !== null && !aiBusy && (
              <button
                type="button"
                onClick={() => {
                  onChange(previous);
                  setPrevious(null);
                }}
                className="text-[0.7rem] font-medium text-(--muted) hover:text-(--foreground)"
              >
                ↺ Undo AI
              </button>
            )}
            <button
              type="button"
              onClick={improve}
              disabled={aiBusy || !value.trim()}
              className="text-[0.7rem] font-semibold text-(--accent) hover:underline disabled:opacity-50"
            >
              {aiBusy ? "Improving…" : "✦ Improve with AI"}
            </button>
          </div>
        )}
      </div>
      <textarea
        className="input mt-1.5 resize-y leading-relaxed"
        rows={rows}
        value={value}
        disabled={aiBusy}
        onChange={(e) => onChange(e.target.value)}
      />
      {aiError && (
        <p className="mt-1 text-xs text-red-600 dark:text-red-300">{aiError}</p>
      )}
    </div>
  );
}

/** Editable list of strings (roles, bullet points, tech chips, skills). */
export function StringList({
  label,
  values,
  onChange,
  multiline = false,
  addLabel = "Add item",
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  multiline?: boolean;
  addLabel?: string;
}) {
  const update = (i: number, v: string) =>
    onChange(values.map((old, j) => (j === i ? v : old)));
  const remove = (i: number) => onChange(values.filter((_, j) => j !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <label className="label">{label}</label>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex items-start gap-2">
            {multiline ? (
              <textarea
                className="input resize-y leading-relaxed"
                rows={2}
                value={v}
                onChange={(e) => update(i, e.target.value)}
              />
            ) : (
              <input
                className="input"
                value={v}
                onChange={(e) => update(i, e.target.value)}
              />
            )}
            <RowControls
              onUp={() => move(i, -1)}
              onDown={() => move(i, 1)}
              onRemove={() => remove(i)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...values, ""])}
          className="text-xs font-medium text-(--accent) hover:underline"
        >
          + {addLabel}
        </button>
      </div>
    </div>
  );
}

export function RowControls({
  onUp,
  onDown,
  onRemove,
}: {
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
}) {
  const btn =
    "flex size-7 items-center justify-center rounded border border-(--border) text-xs text-(--muted) transition-colors hover:text-(--foreground)";
  return (
    <div className="flex shrink-0 gap-1">
      <button type="button" className={btn} onClick={onUp} title="Move up">
        ↑
      </button>
      <button type="button" className={btn} onClick={onDown} title="Move down">
        ↓
      </button>
      <button
        type="button"
        className={`${btn} hover:border-red-400/40 hover:text-red-400`}
        onClick={onRemove}
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
}

/** Card wrapper for one entry inside a list editor (a job, a project…). */
export function EntryCard({
  title,
  onUp,
  onDown,
  onRemove,
  children,
}: {
  title: string;
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="card space-y-4 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="truncate text-sm font-semibold">{title || "Untitled"}</p>
        <RowControls onUp={onUp} onDown={onDown} onRemove={onRemove} />
      </div>
      {children}
    </div>
  );
}

export function AddButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-dashed border-(--border) py-3 text-sm font-medium text-(--muted) transition-colors hover:border-cyan-400/40 hover:text-(--accent)"
    >
      + {label}
    </button>
  );
}
