"use client";

import { TOOLS_DATA } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function ToolsAndTechnologies() {
  return (
    <section id="tools" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
      {/* Section Header */}
      <Reveal>
        <div className="mb-12 sm:mb-16">
          <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
            04 · Stack &amp; Tooling
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tools &amp; Technologies
          </h2>
          <p className="mt-3 max-w-2xl text-base text-(--muted) sm:text-lg">
            Practical platforms, analytical suites, and modern frameworks leveraged to research, execute, and scale digital marketing.
          </p>
        </div>
      </Reveal>

      {/* Categorized Pill Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {TOOLS_DATA.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 80}>
            <div className="card card-hover flex h-full flex-col p-6 sm:p-7 group">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-(--border)/80 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-(--border) bg-(--surface-2) text-lg shadow-xs group-hover:scale-105 transition-transform">
                    {group.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-(--foreground)">
                      {group.category}
                    </h3>
                    <p className="font-mono text-[11px] text-(--muted)">
                      {group.tools.length} Core Tools &amp; Practices
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-(--accent)">
                  {`0${idx + 1}`}
                </span>
              </div>

              {/* Tools Pill List */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-(--border) bg-(--surface-2)/80 px-3.5 py-2 text-xs font-medium text-(--foreground) transition-all hover:border-cyan-400/40 hover:bg-(--surface-2) hover:text-cyan-600 dark:hover:text-cyan-300"
                  >
                    <span className="size-1.5 rounded-full bg-cyan-400/80" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
