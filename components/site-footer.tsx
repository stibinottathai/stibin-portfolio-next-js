"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadCachedContent } from "@/lib/content";

interface FooterProps {
  variant?: "main" | "marketing";
}

export default function SiteFooter({ variant = "main" }: FooterProps) {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const cached = loadCachedContent();
    if (cached?.hero?.photoUrl) {
      setPhoto(cached.hero.photoUrl);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-12 border-t border-(--border) bg-(--surface)/40 backdrop-blur-md">
      {/* Top subtle gradient accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:pt-16 sm:pb-10">
        {/* Main 4-Column Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-(--border)/80">
          {/* Column 1: Brand & Bio (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              {photo ? (
                <span className="rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[2px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt="Stibin Augustine"
                    className="size-10 rounded-full object-cover bg-(--surface)"
                  />
                </span>
              ) : (
                <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 font-mono text-sm font-bold text-slate-950 shadow-md transition-transform group-hover:scale-105">
                  SA
                </span>
              )}
              <div>
                <h3 className="text-base font-bold text-(--foreground) tracking-tight group-hover:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors">
                  Stibin Augustine
                </h3>
                <p className="font-mono text-[11px] text-(--accent)">
                  Developer &amp; Digital Marketer
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-(--muted) max-w-sm">
              Building production-grade web and mobile applications while engineering high-intent organic search rankings, AI discoverability, and scalable paid advertising.
            </p>

            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Available for projects &amp; full-time roles in UAE
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-(--foreground) uppercase mb-3.5">
              Portfolio
            </p>
            <ul className="space-y-2 text-xs text-(--muted)">
              <li>
                <Link href="/#about" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  Tech Arsenal
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Marketing & AI Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-(--foreground) uppercase mb-3.5">
              Marketing &amp; SEO
            </p>
            <ul className="space-y-2 text-xs text-(--muted)">
              <li>
                <Link href="/digital-marketing" className="hover:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors inline-block py-0.5">
                  ✦ Overview
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing#case-studies" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  Case Studies &amp; #1 Rank
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing#ai-stack" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  AI Tools &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing#evolution" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  GEO &amp; AEO Search
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing#capabilities" className="hover:text-(--foreground) transition-colors inline-block py-0.5">
                  Google &amp; Meta Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Location (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs font-semibold tracking-wider text-(--foreground) uppercase mb-3.5">
              Get in Touch
            </p>
            <div className="space-y-2 text-xs text-(--muted)">
              <a
                href="mailto:stibinaugustine3047@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-(--accent) truncate"
              >
                <span aria-hidden>✉️</span> stibinaugustine3047@gmail.com
              </a>
              <a
                href="tel:+971565564136"
                className="flex items-center gap-2 transition-colors hover:text-(--accent)"
              >
                <span aria-hidden>📞</span> +971 56 556 4136
              </a>
              <p className="flex items-center gap-2">
                <span aria-hidden>📍</span> Bur Dubai, Dubai, UAE
              </p>
            </div>

            <div className="pt-2">
              <a
                href={variant === "marketing" ? "#contact" : "/#contact"}
                className="inline-flex items-center gap-1.5 rounded-full bg-(--foreground) px-4 py-2 font-mono text-[11px] font-semibold text-(--background) transition-opacity hover:opacity-90"
              >
                Start a Conversation →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--muted)">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Stibin Augustine. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-[11px] opacity-40 transition-opacity hover:opacity-100"
            >
              Admin
            </Link>
            <span className="opacity-30">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[11px] text-(--accent) hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
