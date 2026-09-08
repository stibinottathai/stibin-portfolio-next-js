"use client";

import { CASE_STUDIES } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative scroll-mt-24 overflow-hidden py-10 sm:py-14">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_65%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <Reveal>
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-300 uppercase tracking-widest mb-2">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
              Verified Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Proven Results &amp; Real Business Impact
            </h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-(--muted)">
              Real search performance, proven #1 rankings, and live client platforms engineered for organic lead generation and business growth.
            </p>
          </div>
        </Reveal>

        {/* Case Study Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 100} className="h-full">
              <div className="card card-hover flex h-full flex-col p-6 sm:p-8 relative overflow-hidden group">
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${study.accentColor}`}
                />

                {/* Card Header & Badges */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-(--border) bg-(--surface-2) text-2xl shadow-xs group-hover:scale-105 transition-transform">
                    {study.icon}
                  </span>
                  {study.statusBadge ? (
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-amber-600 dark:text-amber-300">
                      {study.statusBadge}
                    </span>
                  ) : study.liveUrl ? (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-cyan-600 dark:text-cyan-300 transition-all hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-105 active:scale-95 cursor-pointer"
                      title={`Visit live website: ${study.title}`}
                    >
                      <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Live Website ↗
                    </a>
                  ) : (
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-cyan-600 dark:text-cyan-300">
                      Live Platform
                    </span>
                  )}
                </div>

                {/* Domain & Type */}
                <div>
                  {study.liveUrl ? (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title inline-flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight text-(--foreground) hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
                    >
                      <span>{study.title}</span>
                      <span className="text-sm text-(--accent) transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-(--foreground) group-hover:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                  )}
                  <p className="font-mono text-xs text-(--accent) mt-0.5">
                    {study.type}
                  </p>
                </div>

                {/* Keyword / Key Highlight Callout */}
                {study.keywordHighlight && (
                  <div className="mt-4 rounded-xl border border-cyan-400/25 bg-cyan-400/5 p-3">
                    <p className="font-mono text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-300 tracking-wider">
                      Key Achievement
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-(--foreground)">
                      {study.keywordHighlight}
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-(--muted) grow">
                  {study.description}
                </p>

                {/* Key Deliverables / Metrics */}
                <div className="mt-6 pt-4 border-t border-(--border)/80 space-y-2">
                  <p className="font-mono text-[10px] tracking-wider text-(--muted) uppercase font-semibold">
                    Core Impact
                  </p>
                  {study.impactMetrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-start gap-2 text-xs text-(--foreground)/90 font-medium"
                    >
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 pt-3 flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip !px-2 !py-0.5 !text-[10px]"
                    >
                      {tag}
                    </span>
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
