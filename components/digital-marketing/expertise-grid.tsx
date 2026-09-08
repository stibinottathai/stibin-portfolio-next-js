"use client";

import { EXPERTISE_CARDS } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function ExpertiseGrid() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 sm:py-14">
      {/* Section Header */}
      <Reveal>
        <div className="mb-6 sm:mb-8">
          <p className="mb-1.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-(--accent) uppercase">
            01 · What I Do
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Digital Marketing &amp; Paid Growth Expertise
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-(--muted)">
            A combination of SEO, paid advertising (Google &amp; Meta Ads), content strategy, social media, and technical execution.
          </p>
        </div>
      </Reveal>

      {/* Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE_CARDS.map((card, idx) => (
          <Reveal key={card.id} delay={idx * 70} className="h-full">
            <div className="card card-hover flex h-full flex-col p-6 sm:p-7 group relative overflow-hidden">
              {/* Subtle top indicator bar */}
              <div
                className={`absolute top-0 inset-x-0 h-1 transition-opacity duration-300 ${
                  idx % 3 === 0
                    ? "bg-gradient-to-r from-cyan-400 to-cyan-500"
                    : idx % 3 === 1
                      ? "bg-gradient-to-r from-indigo-400 to-indigo-500"
                      : "bg-gradient-to-r from-fuchsia-400 to-fuchsia-500"
                } opacity-30 group-hover:opacity-100`}
              />

              {/* Card Top */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-2) text-xl shadow-xs group-hover:scale-110 transition-transform">
                  {card.icon}
                </span>
                <span className="font-mono text-xs font-semibold text-(--muted) uppercase tracking-wider">
                  {`0${idx + 1}`}
                </span>
              </div>

              {/* Headings */}
              <div>
                <h3 className="text-xl font-bold tracking-tight text-(--foreground) group-hover:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-(--accent)">
                  {card.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="mt-3.5 grow text-sm leading-relaxed text-(--muted)">
                {card.description}
              </p>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-(--border)/70">
                <p className="mb-2.5 font-mono text-[10px] tracking-wider text-(--muted) uppercase">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip !px-2.5 !py-1 !text-[0.7rem] group-hover:border-cyan-400/25 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
