"use client";

import { AI_CORE_PILLS, AI_SKILL_CLUSTERS } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function AICapabilities() {
  return (
    <section id="ai-stack" className="relative scroll-mt-24 overflow-hidden py-10 sm:py-14">
      {/* Background radial gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(129,140,248,0.06),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-0.5 font-mono text-[10px] font-semibold text-indigo-600 dark:text-indigo-300 uppercase mb-2">
              <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Next-Gen Tooling &amp; AI
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              AI Tools &amp; <span className="text-gradient">Intelligent Automation</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-(--muted)">
              Combining frontier AI models, prompt engineering, agentic automation, and AI-assisted development to accelerate marketing output, ranking velocity, and content intelligence.
            </p>
          </div>
        </Reveal>

        {/* Highlighted AI Core Pills Strip */}
        <Reveal delay={80}>
          <div className="card relative overflow-hidden p-5 sm:p-6 bg-(--surface-2)/60 border-indigo-400/25 shadow-xl mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-(--border)/80 pb-3.5 mb-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-(--foreground)">
                  AI &amp; Automation Arsenal
                </h3>
                <p className="font-mono text-[11px] text-(--muted)">
                  Core models, frameworks &amp; AI-assisted workflows
                </p>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-indigo-400/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
                Frontier Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {AI_CORE_PILLS.map((pill, idx) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--card-bg) px-3.5 py-2 text-xs sm:text-sm font-semibold text-(--foreground) shadow-xs transition-all hover:border-cyan-400/50 hover:bg-(--surface-2) hover:scale-105"
                >
                  <span
                    className={`size-2 rounded-full ${
                      idx % 3 === 0
                        ? "bg-cyan-400"
                        : idx % 3 === 1
                          ? "bg-indigo-400"
                          : "bg-fuchsia-400"
                    }`}
                  />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 5 Deep AI Capability Clusters Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AI_SKILL_CLUSTERS.map((cluster, idx) => (
            <Reveal key={cluster.id} delay={idx * 80} className="h-full">
              <div className="card card-hover flex h-full flex-col p-6 sm:p-7 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-2) text-xl shadow-xs group-hover:scale-110 transition-transform">
                    {cluster.icon}
                  </span>
                  <span className="font-mono text-xs font-semibold text-(--muted) uppercase tracking-wider">
                    {`0${idx + 1}`}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-(--foreground) group-hover:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors">
                  {cluster.category}
                </h3>
                <p className="mt-1 font-mono text-xs text-(--accent)">
                  {cluster.headline}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-(--muted) grow">
                  {cluster.description}
                </p>

                <div className="mt-5 pt-4 border-t border-(--border)/80">
                  <p className="font-mono text-[10px] tracking-wider text-(--muted) uppercase font-semibold mb-2.5">
                    Skills &amp; Workflows
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="chip !px-2.5 !py-1 !text-[0.7rem] group-hover:border-indigo-400/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
