"use client";

import { useEffect, useState } from "react";
import { HERO_DATA } from "@/lib/marketing-content";
import { loadCachedContent } from "@/lib/content";
import Reveal from "@/components/reveal";

export default function MarketingHero() {
  const [photo, setPhoto] = useState(HERO_DATA.author.photoUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cached = loadCachedContent();
    if (cached?.hero?.photoUrl) {
      setPhoto(cached.hero.photoUrl);
    }
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section id="top" className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
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
          {/* Unified Prominent Author & Domain Badge (Clickable with Pop-up) */}
          <Reveal>
            <button
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
              title="Click to view Stibin Augustine's full profile photo"
              className="group mb-4 sm:mb-6 inline-flex max-w-full items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-full border border-(--border) bg-(--surface-2)/90 p-1.5 sm:p-2 pe-4 sm:pe-5 backdrop-blur-xl transition-all hover:border-cyan-400/80 hover:bg-(--surface-2) hover:scale-[1.02] active:scale-95 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {/* Photo with vibrant gradient ring & expand icon */}
              <div className="relative size-12 sm:size-14 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 p-[2.5px] transition-transform group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo || HERO_DATA.author.photoUrl || "/avatar.svg"}
                  alt={HERO_DATA.author.name}
                  className="size-full rounded-full object-cover bg-(--surface)"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/avatar.svg";
                  }}
                />

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 rounded-full bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>

                {/* Expand Corner Badge Indicator */}
                <span
                  className="absolute -top-1 -right-1 flex size-4 sm:size-4.5 items-center justify-center rounded-full bg-cyan-400 text-slate-950 font-bold shadow-sm ring-2 ring-(--surface) group-hover:scale-115 transition-transform"
                  title="Expandable"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-2.5"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>

                {/* Live Status Pulse Dot */}
                <span className="absolute -bottom-0.5 -end-0.5 flex size-3.5 sm:size-4 items-center justify-center rounded-full bg-(--surface) ring-2 ring-(--surface)">
                  <span className="size-2 sm:size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </div>

              {/* Text info with visible Click Indicator */}
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="truncate text-xs sm:text-sm font-bold text-(--foreground) tracking-tight group-hover:text-cyan-400 transition-colors">
                    {HERO_DATA.author.name}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    <span className="size-1 rounded-full bg-emerald-400" />
                    Available
                  </span>
                  <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-cyan-500/15 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500/25 transition-all">
                    <span>🔍</span> Tap to expand
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="truncate font-mono text-[10px] sm:text-[11px] font-medium text-(--accent)">
                    SEO, Paid Ads &amp; AI Growth
                  </span>
                  <span className="xs:hidden text-[9px] font-semibold text-cyan-500 dark:text-cyan-300">
                    · 🔍 Expand
                  </span>
                </div>
              </div>
            </button>
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
            <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2.5 sm:gap-4 w-full max-w-lg mx-auto">
              <a
                href={HERO_DATA.primaryCta.href}
                className="group flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 px-3 py-2.5 sm:px-7 sm:py-3 text-[11px] xs:text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/30 cursor-pointer whitespace-nowrap"
              >
                <span>{HERO_DATA.primaryCta.label}</span>
                <span className="ms-1 inline-block transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a
                href={HERO_DATA.secondaryCta.href}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-(--border) bg-(--chip-bg) px-3 py-2.5 sm:px-7 sm:py-3 text-[11px] xs:text-xs sm:text-sm font-semibold text-(--foreground) backdrop-blur transition-all hover:border-cyan-400/50 hover:bg-(--surface-2) cursor-pointer whitespace-nowrap"
              >
                <span>{HERO_DATA.secondaryCta.label}</span>
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

      {/* Enlarged Profile Photo Modal / Pop-up (Mobile Friendly) */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged profile photo of Stibin Augustine"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[340px] xs:max-w-sm sm:max-w-md overflow-hidden rounded-3xl border border-(--border) bg-(--surface-2)/95 p-5 sm:p-7 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200 text-center"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full border border-(--border) bg-(--card-bg) text-(--muted) hover:text-(--foreground) hover:border-cyan-400/60 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Ambient Background Gradient inside card */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />

            {/* Enlarged Photo Frame */}
            <div className="mx-auto mt-2 relative size-44 xs:size-52 sm:size-60 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 p-[3px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo || HERO_DATA.author.photoUrl || "/avatar.svg"}
                alt={HERO_DATA.author.name}
                className="size-full rounded-[13px] xs:rounded-[21px] sm:rounded-[29px] object-cover bg-(--surface)"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/avatar.svg";
                }}
              />
              <span className="absolute bottom-2 right-2 flex size-4 sm:size-5 items-center justify-center rounded-full bg-(--surface) ring-2 ring-(--surface)">
                <span className="size-2.5 sm:size-3 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>

            {/* Author Details */}
            <div className="mt-4 sm:mt-5">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-(--foreground) tracking-tight">
                  {HERO_DATA.author.name}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] sm:text-xs font-medium text-(--accent)">
                Digital Marketing, SEO &amp; Paid Ads Expert
              </p>
              <p className="mt-2 text-xs text-(--muted) max-w-xs mx-auto leading-relaxed">
                4+ years experience · Based in Dubai, UAE · Specialized in organic search (#1 Google rank), Google Ads, Meta Ads &amp; full-stack web engineering.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href="https://wa.me/971565564136?text=Hi%20Stibin,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20for%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95"
                >
                  <span>💬</span> WhatsApp Stibin
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-transform hover:scale-105"
                >
                  Send Inquiry →
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-(--border) bg-(--chip-bg) px-3.5 py-2 text-xs font-medium text-(--foreground) hover:bg-(--surface) transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
