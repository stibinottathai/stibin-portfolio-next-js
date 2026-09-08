"use client";

import { useEffect, useState } from "react";
import { HERO_DATA } from "@/lib/marketing-content";
import { loadCachedContent } from "@/lib/content";
import Reveal from "@/components/reveal";

export default function MarketingHero() {
  const [photo, setPhoto] = useState(HERO_DATA.author.photoUrl);

  useEffect(() => {
    const cached = loadCachedContent();
    if (cached?.hero?.photoUrl) {
      setPhoto(cached.hero.photoUrl);
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Aurora Ambient Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="aurora absolute -top-24 left-[15%] size-[460px] bg-cyan-500/50" />
        <div
          className="aurora absolute top-32 right-[10%] size-[400px] bg-indigo-500/50"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="aurora absolute bottom-0 left-[35%] size-[360px] bg-fuchsia-500/35"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          {/* Author Profile Intro Badge with Small Photo */}
          <Reveal>
            <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-(--border) bg-(--surface-2)/85 p-1.5 pe-4 sm:pe-5 backdrop-blur-md shadow-lg shadow-cyan-500/5 transition-all hover:border-cyan-400/40">
              {/* Photo with gradient ring */}
              <div className="relative size-10 sm:size-11 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={HERO_DATA.author.name}
                  className="size-full rounded-full object-cover bg-(--surface)"
                />
                <span className="absolute -bottom-0.5 -end-0.5 flex size-3.5 items-center justify-center rounded-full bg-(--surface)">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </div>
              {/* Text info */}
              <div className="text-left min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="truncate text-xs sm:text-sm font-bold text-(--foreground) tracking-tight">
                    {HERO_DATA.author.name}
                  </span>
                  <span className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-cyan-600 dark:text-cyan-300">
                    SEO &amp; Growth
                  </span>
                </div>
                <p className="truncate font-mono text-[10px] text-(--muted)">
                  {HERO_DATA.author.role}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Eyebrow badge */}
          <Reveal delay={40}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-700 dark:text-cyan-300 uppercase">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan-400" />
              </span>
              {HERO_DATA.eyebrow}
            </div>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={80}>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:leading-[1.1]">
              Digital Marketing That Gets{" "}
              <span className="text-gradient block sm:inline">
                Found, Understood &amp; Chosen.
              </span>
            </h1>
          </Reveal>

          {/* Supporting Text */}
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--muted) sm:text-lg sm:leading-relaxed">
              {HERO_DATA.supportingText}
            </p>
          </Reveal>

          {/* Dual CTAs */}
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={HERO_DATA.primaryCta.href}
                className="group rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/30"
              >
                {HERO_DATA.primaryCta.label}
                <span className="ms-1.5 inline-block transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a
                href={HERO_DATA.secondaryCta.href}
                className="rounded-full border border-(--border) bg-(--chip-bg) px-8 py-3.5 text-sm font-semibold text-(--foreground) backdrop-blur transition-all hover:border-cyan-400/50 hover:bg-(--surface-2)"
              >
                {HERO_DATA.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          {/* Stat / Focus Pills Row */}
          <Reveal delay={320}>
            <div className="mt-14 w-full max-w-4xl border-t border-(--border)/60 pt-8">
              <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.25em] text-(--muted) uppercase">
                Core Domains of Focus &amp; Execution
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {HERO_DATA.statPills.map((pill, idx) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--chip-bg) px-3.5 py-1.5 text-xs font-medium text-(--foreground) transition-colors hover:border-cyan-400/40 hover:bg-(--surface-2)"
                  >
                    <span
                      className={`size-1.5 rounded-full ${
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

          {/* Abstract Search & Discovery Visual Showcase */}
          <Reveal delay={400} className="mt-12 w-full max-w-3xl">
            <div className="card relative overflow-hidden p-6 sm:p-8 text-left shadow-2xl">
              <div className="flex items-center justify-between border-b border-(--border)/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-400/60" />
                  <span className="size-3 rounded-full bg-amber-400/60" />
                  <span className="size-3 rounded-full bg-emerald-400/60" />
                  <span className="ms-2 font-mono text-xs text-(--muted)">
                    discoverability-matrix.ts
                  </span>
                </div>
                <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  LIVE ENGINE
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-(--border) bg-(--surface-2)/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-(--muted)">Search Organic</span>
                    <span className="font-mono text-xs text-cyan-400">#1 SERP</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold">Technical &amp; On-Page</p>
                  <p className="mt-1 text-[11px] text-(--muted)">
                    Fast indexing &amp; Core Web Vitals health
                  </p>
                </div>

                <div className="rounded-xl border border-(--border) bg-(--surface-2)/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-(--muted)">Answer Engine</span>
                    <span className="font-mono text-xs text-indigo-400">Featured</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold">Semantic Schema</p>
                  <p className="mt-1 text-[11px] text-(--muted)">
                    JSON-LD entity data &amp; question intent
                  </p>
                </div>

                <div className="rounded-xl border border-(--border) bg-(--surface-2)/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-(--muted)">Generative AI</span>
                    <span className="font-mono text-xs text-fuchsia-400">Synthesized</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold">Authority Graph</p>
                  <p className="mt-1 text-[11px] text-(--muted)">
                    Brand presence cited in LLM search
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
