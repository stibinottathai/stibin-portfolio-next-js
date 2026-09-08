"use client";
 
import { useEffect, useState } from "react";
import Link from "next/link";
import { loadCachedContent } from "@/lib/content";

function SunIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode)
    }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex size-7.5 sm:size-8 items-center justify-center rounded-full border border-(--border) bg-(--surface-2)/80 text-(--muted) transition-all hover:border-cyan-400/50 hover:text-(--foreground) hover:scale-105 active:scale-95 dark:border-cyan-500/30 dark:bg-slate-900/90 dark:text-cyan-200 dark:hover:border-cyan-400 cursor-pointer"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === null ? (
        <span className="size-2 rounded-full bg-(--muted)/40 animate-pulse" />
      ) : theme === "dark" ? (
        <SunIcon className="size-3.5 transition-transform duration-300 group-hover:rotate-45 text-amber-300" />
      ) : (
        <MoonIcon className="size-3.5 transition-transform duration-300 group-hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
}

export default function MarketingNav() {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<string>("/avatar.svg");

  useEffect(() => {
    const cached = loadCachedContent();
    if (cached?.hero?.photoUrl) {
      setPhoto(cached.hero.photoUrl);
    }
  }, []);

  const navLinks = [
    { href: "#case-studies", label: "Results & #1 Rank" },
    { href: "#expertise", label: "Services" },
    { href: "#ai-stack", label: "AI & GEO" },
    { href: "#process", label: "Process" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Brand / Profile (Scrolls to top of Digital Marketing) */}
        <div className="flex items-center gap-3">
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group">
            <span className="relative flex size-9 sm:size-10 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[2px] transition-transform group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo || "/avatar.svg"}
                alt="Stibin Augustine"
                className="size-full rounded-full object-cover bg-(--surface)"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/avatar.svg";
                }}
              />
              <span className="absolute -bottom-0.5 -end-0.5 flex size-2.5 items-center justify-center rounded-full bg-(--surface)">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-(--foreground) transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-indigo-300 group-hover:to-fuchsia-300">
                Stibin Augustine
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-300">
                Digital Marketing &amp; SEO
              </span>
            </div>
          </a>
        </div>

        {/* Center Streamlined Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-(--border) bg-(--surface-2)/60 p-1 backdrop-blur dark:border-cyan-500/30 dark:bg-slate-900/85 dark:backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1 text-xs font-medium text-(--muted) transition-all hover:bg-(--surface) hover:text-(--foreground) dark:hover:bg-gradient-to-r dark:hover:from-cyan-500/20 dark:hover:to-indigo-500/20 dark:hover:text-cyan-200 dark:hover:border dark:hover:border-cyan-400/30"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--chip-bg) px-3.5 py-1.5 font-mono text-[11px] font-medium text-(--muted) transition-all hover:border-cyan-400 hover:text-(--foreground) dark:border-cyan-500/40 dark:bg-cyan-950/40 dark:text-cyan-200 dark:hover:border-cyan-300"
          >
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            ← Developer
          </Link>

          <ThemeToggle />

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-4.5 py-1.5 text-xs font-semibold text-slate-950 transition-all hover:scale-[1.04]"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex size-9 items-center justify-center rounded-lg border border-(--border) bg-(--card-bg) text-(--foreground) dark:border-cyan-500/40 dark:bg-slate-900/80 dark:text-cyan-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            <span className="text-base">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-(--border) bg-(--background)/95 px-5 py-4 backdrop-blur-xl md:hidden animate-in slide-in-from-top-2 duration-200 dark:bg-slate-950/95 dark:border-cyan-500/25">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground) dark:hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-(--border) dark:border-cyan-500/20 flex flex-col gap-2.5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-xs font-medium text-(--accent)"
              >
                ← Back to Main Developer Portfolio
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full text-center rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 py-2 text-xs font-semibold text-slate-950"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
