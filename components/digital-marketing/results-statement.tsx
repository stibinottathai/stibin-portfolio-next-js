"use client";

import { RESULTS_STATEMENT } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function ResultsStatement() {
  const { heading, highlightStatement, supportingCopy, indicators } = RESULTS_STATEMENT;

  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      {/* High-contrast container backdrop */}
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 lg:p-12 text-slate-100 shadow-2xl">
            {/* Background glowing gradients */}
            <div className="absolute -top-32 -right-32 size-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="max-w-3xl">
                <p className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
                  07 · The Philosophy
                </p>
                <h2 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-slate-300">
                  {heading}
                </h2>
                <p className="mt-2 text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-fuchsia-300 sm:text-4xl lg:text-5xl sm:leading-[1.15]">
                  {highlightStatement}
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {supportingCopy}
                </p>
              </div>

              {/* Three Static Indicators (Zero fake numbers) */}
              <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-3 pt-5 sm:pt-6 border-t border-slate-800">
                {indicators.map((ind) => (
                  <div
                    key={ind.title}
                    className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition-all hover:border-cyan-400/50 hover:bg-slate-900"
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-300 mb-3">
                      {ind.icon}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-slate-100">
                      {ind.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] font-semibold text-cyan-400">
                      {ind.subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {ind.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
