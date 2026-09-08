"use client";

import { MARKETING_CAPABILITIES } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function MarketingCapabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
      {/* Section Header */}
      <Reveal>
        <div className="mb-12 sm:mb-16">
          <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
            06 · Scope of Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What I Can Help With
          </h2>
          <p className="mt-3 max-w-2xl text-base text-(--muted) sm:text-lg">
            High-impact digital marketing solutions tailored for businesses seeking meaningful search visibility, qualified traffic, and brand authority.
          </p>
        </div>
      </Reveal>

      {/* 12-Card Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MARKETING_CAPABILITIES.map((item, idx) => (
          <Reveal key={item.id} delay={(idx % 4) * 60} className="h-full">
            <div className="card card-hover flex h-full flex-col p-5 sm:p-6 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-(--border) bg-(--surface-2) text-lg shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </span>
                <span className="rounded bg-(--chip-bg) px-2 py-0.5 font-mono text-[10px] font-semibold text-(--muted)">
                  {item.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-(--foreground) group-hover:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-(--muted) grow">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
