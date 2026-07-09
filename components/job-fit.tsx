"use client";

import { useState } from "react";
import type { UIStrings } from "@/lib/i18n";
import Reveal from "./reveal";

export default function JobFit({
  t,
}: {
  t: UIStrings;
}) {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyze = async () => {
    const text = jd.trim();
    if (text.length < 80) {
      setError(t.jobFit.tooShort);
      return;
    }
    setError(null);
    setResult("");
    setBusy(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: "jobfit", jd: text }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "The AI is unavailable right now.");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setResult(answer);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="job-fit" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <Reveal>
        <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
          {t.sections.jobFitKicker}
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {t.sections.jobFitTitle}
        </h2>
        <p className="mb-8 max-w-2xl text-(--muted)">{t.jobFit.blurb}</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <textarea
              className="input min-h-64 resize-y leading-relaxed"
              value={jd}
              maxLength={6000}
              placeholder={t.jobFit.placeholder}
              onChange={(e) => setJd(e.target.value)}
            />
            {error && (
              <p className="text-xs text-red-600 dark:text-red-300">{error}</p>
            )}
            <button
              onClick={analyze}
              disabled={busy || !jd.trim()}
              className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.03] disabled:opacity-50"
            >
              {busy ? t.jobFit.analyzing : t.jobFit.analyze}
            </button>
          </div>

          <div className="card min-h-64 p-6">
            {result ? (
              <p className="text-sm leading-relaxed whitespace-pre-wrap text-(--foreground)">
                {result}
                {busy && <span className="caret" />}
              </p>
            ) : (
              <div className="flex h-full min-h-52 items-center justify-center text-sm text-(--muted)">
                {busy ? (
                  <span className="animate-pulse">{t.jobFit.analyzing}</span>
                ) : (
                  <span className="text-4xl opacity-40" aria-hidden>
                    🎯
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
