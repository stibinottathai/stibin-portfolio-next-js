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
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Aurora Ambient Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="aurora absolute -top-20 left-[15%] size-[400px] bg-cyan-500/40" />
        <div
          className="aurora absolute top-20 right-[10%] size-[360px] bg-indigo-500/40"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="aurora absolute bottom-0 left-[35%] size-[320px] bg-fuchsia-500/30"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col items-center text-center">
          {/* Unified Prominent Author & Domain Badge */}
          <Reveal>
            <div className="mb-4 sm:mb-6 inline-flex max-w-full items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-full border border-(--border) bg-(--surface-2)/90 p-1.5 sm:p-2 pe-4 sm:pe-5 backdrop-blur-xl shadow-lg shadow-cyan-500/10 transition-all hover:border-cyan-400/50 hover:shadow-cyan-500/20">
              {/* Photo with vibrant gradient ring */}
              <div className="relative size-12 sm:size-14 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 p-[2.5px] shadow-md shadow-cyan-500/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo || HERO_DATA.author.photoUrl || "/avatar.svg"}
                  alt={HERO_DATA.author.name}
                  className="size-full rounded-full object-cover bg-(--surface)"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/avatar.svg";
                  }}
                />
                <span className="absolute -bottom-0.5 -end-0.5 flex size-3.5 sm:size-4 items-center justify-center rounded-full bg-(--surface) ring-2 ring-(--surface)">
                  <span className="size-2 sm:size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </div>
              {/* Text info */}
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="truncate text-xs sm:text-sm font-bold text-(--foreground) tracking-tight">
                    {HERO_DATA.author.name}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    <span className="size-1 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>
                <span className="truncate font-mono text-[10px] sm:text-[11px] font-medium text-(--accent)">
                  SEO, Paid Ads &amp; AI Growth
                </span>
              </div>
            </div>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={60}>
            <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl sm:leading-[1.12]">
              Digital Marketing That Gets{" "}
              <span className="text-gradient block sm:inline">
                Found, Understood &amp; Chosen.
              </span>
            </h1>
          </Reveal>

          {/* Supporting Text */}
          <Reveal delay={120}>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm leading-relaxed text-(--muted) sm:text-base sm:leading-relaxed">
              {HERO_DATA.supportingText}
            </p>
          </Reveal>

          {/* Dual CTAs */}
          <Reveal delay={180}>
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={HERO_DATA.primaryCta.href}
                className="group rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 px-7 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/30 cursor-pointer"
              >
                {HERO_DATA.primaryCta.label}
                <span className="ms-1.5 inline-block transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a
                href={HERO_DATA.secondaryCta.href}
                className="rounded-full border border-(--border) bg-(--chip-bg) px-7 py-3 text-xs sm:text-sm font-semibold text-(--foreground) backdrop-blur transition-all hover:border-cyan-400/50 hover:bg-(--surface-2) cursor-pointer"
              >
                {HERO_DATA.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          {/* Stat / Focus Pills Row */}
          <Reveal delay={240}>
            <div className="mt-6 sm:mt-8 w-full max-w-3xl border-t border-(--border)/60 pt-4 sm:pt-5">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {HERO_DATA.statPills.map((pill, idx) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--chip-bg) px-3 py-1 text-[11px] sm:text-xs font-medium text-(--foreground) transition-colors hover:border-cyan-400/40 hover:bg-(--surface-2)"
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
        </div>
      </div>
    </section>
  );
}
