"use client";

import { EVOLUTION_CARDS, EVOLUTION_STEPS } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function SearchEvolution() {
  return (
    <section id="evolution" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      {/* Background glow accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
              02 · The Modern Landscape
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From Search Engines to <span className="text-gradient">AI Engines</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-(--muted) sm:text-lg">
              Search is changing. Visibility is no longer only about ranking a webpage. Modern digital marketing also requires being present where people ask questions, compare businesses and discover information through AI.
            </p>
          </div>
        </Reveal>

        {/* Horizontal Visual Progression Banner */}
        <Reveal delay={120} className="mt-14">
          <div className="card relative overflow-hidden p-6 sm:p-8 bg-(--surface-2)/40 border-(--border)/80 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-wider text-(--accent) uppercase">
                The Search Evolution Timeline
              </span>
              <span className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">
                Multi-Generational Visibility
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EVOLUTION_STEPS.map((step, idx) => (
                <div
                  key={step.label}
                  className="relative flex flex-col rounded-xl border border-(--border) bg-(--card-bg) p-4.5 transition-all hover:border-cyan-400/40 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-(--accent)">
                      {`Phase 0${idx + 1}`}
                    </span>
                    <span className="rounded bg-(--chip-bg) px-1.5 py-0.5 text-[10px] font-medium text-(--muted)">
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-(--foreground)">
                    {step.label}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-(--muted)">
                    {step.description}
                  </p>

                  {idx < EVOLUTION_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-(--accent) font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Three Large Comparison Cards: SEO, AEO, GEO */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {EVOLUTION_CARDS.map((card, idx) => (
            <Reveal key={card.id} delay={idx * 100} className="h-full">
              <div className="card card-hover flex h-full flex-col p-7 relative overflow-hidden group">
                {/* Visual top accent indicator */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    idx === 0
                      ? "bg-cyan-400"
                      : idx === 1
                        ? "bg-indigo-400"
                        : "bg-fuchsia-400"
                  }`}
                />

                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-(--border) bg-(--surface-2) text-2xl shadow-sm group-hover:scale-105 transition-transform">
                    {card.icon}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider ${
                      idx === 0
                        ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300"
                        : idx === 1
                          ? "border border-indigo-400/30 bg-indigo-400/10 text-indigo-600 dark:text-indigo-300"
                          : "border border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-600 dark:text-fuchsia-300"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-(--foreground)">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gradient">
                  {card.tagline}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-sm leading-relaxed text-(--muted)">
                  {card.description}
                </p>

                {/* Focus Points */}
                <div className="mt-6 pt-5 border-t border-(--border)/80 space-y-2.5">
                  <p className="font-mono text-[10px] tracking-wider text-(--muted) uppercase font-semibold">
                    Strategic Focus
                  </p>
                  {card.focusPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs text-(--foreground)/85">
                      <span className="text-(--accent) mt-0.5">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
