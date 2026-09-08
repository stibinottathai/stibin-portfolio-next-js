"use client";

import { DEVELOPER_ADVANTAGE } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function DeveloperMarketer() {
  const { marketingPillar, techPillar } = DEVELOPER_ADVANTAGE;

  return (
    <section id="advantage" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
              05 · The Hybrid Edge
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {DEVELOPER_ADVANTAGE.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-(--muted) sm:text-lg">
              {DEVELOPER_ADVANTAGE.copy}
            </p>
          </div>
        </Reveal>

        {/* Dual Pillar Comparison with Central Connector */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Column 1: Digital Marketing */}
          <Reveal delay={100} className="lg:col-span-5 h-full">
            <div className="card card-hover flex h-full flex-col p-7 sm:p-8 border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.03] to-transparent">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-2xl shadow-sm">
                  {marketingPillar.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-(--foreground)">
                    {marketingPillar.title}
                  </h3>
                  <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                    {marketingPillar.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 pt-6 border-t border-(--border)/80">
                {marketingPillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-(--foreground)/90"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-cyan-400/15 font-mono text-[10px] text-cyan-600 dark:text-cyan-300 font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Central Visual Bridge on desktop */}
          <Reveal delay={200} className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <div className="flex size-14 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 text-slate-950 font-bold text-xl shadow-lg shadow-cyan-500/20">
              +
            </div>
            <div className="mt-4 hidden lg:block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) font-semibold">
                Synergy
              </span>
            </div>
          </Reveal>

          {/* Column 2: Development */}
          <Reveal delay={300} className="lg:col-span-5 h-full">
            <div className="card card-hover flex h-full flex-col p-7 sm:p-8 border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.03] to-transparent">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-400/10 text-2xl shadow-sm">
                  {techPillar.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-(--foreground)">
                    {techPillar.title}
                  </h3>
                  <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    {techPillar.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 pt-6 border-t border-(--border)/80">
                {techPillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-(--foreground)/90"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-indigo-400/15 font-mono text-[10px] text-indigo-600 dark:text-indigo-300 font-bold">
                      ⚡
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Central Visual Banner Statement */}
        <Reveal delay={350} className="mt-10">
          <div className="card relative overflow-hidden p-6 sm:p-8 text-center bg-(--surface-2)/60 border-cyan-400/30 shadow-xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-70" />
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-(--foreground)">
              <span className="text-gradient">
                {DEVELOPER_ADVANTAGE.centralConnection}
              </span>
            </h4>
            <p className="mt-2.5 max-w-2xl mx-auto text-xs sm:text-sm text-(--muted) leading-relaxed">
              {DEVELOPER_ADVANTAGE.centralDescription}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
