"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="flex size-10 items-center justify-center rounded-full border border-(--border) text-base transition-colors hover:border-cyan-400/40 cursor-pointer"
    >
      {theme === null ? "◐" : theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default function MarketingNav() {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("portfolio_content_v1");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.hero?.photoUrl) setPhoto(parsed.hero.photoUrl);
      }
    } catch {
      // ignore
    }
  }, []);

  const navLinks = [
    { href: "#case-studies", label: "Results" },
    { href: "#expertise", label: "Expertise" },
    { href: "#evolution", label: "Search Evolution" },
    { href: "#ai-stack", label: "AI Stack" },
    { href: "#process", label: "Process" },
    { href: "#advantage", label: "Tech Advantage" },
    { href: "#capabilities", label: "Capabilities" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Brand / Home Link */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            {photo ? (
              <span className="rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt="Stibin Augustine"
                  className="block size-9 rounded-full object-cover bg-(--surface)"
                />
              </span>
            ) : (
              <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 font-mono text-sm font-bold text-slate-950 shadow-sm transition-transform group-hover:scale-105">
                SA
              </span>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-(--foreground)">
                Stibin Augustine
              </span>
              <span className="font-mono text-[10px] tracking-wider text-(--accent) uppercase">
                Digital Marketing &amp; SEO
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wide text-(--muted) transition-colors hover:text-(--foreground)"
            >
              {link.label}
            </a>
          ))}

          <div className="h-4 w-px bg-(--border)" />

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--chip-bg) px-3 py-1 text-xs font-medium text-(--muted) transition-colors hover:border-cyan-400/40 hover:text-(--foreground)"
          >
            <span className="size-1.5 rounded-full bg-cyan-400" />
            Developer Profile
          </Link>

          <ThemeToggle />

          <a
            href="#contact"
            className="rounded-full bg-(--foreground) px-4 py-2 text-xs font-semibold tracking-wide text-(--background) transition-all hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/"
            className="rounded-full border border-(--border) px-2.5 py-1 text-[11px] text-(--muted)"
          >
            Dev Profile
          </Link>
          <ThemeToggle />
          <button
            className="flex size-10 items-center justify-center rounded-lg border border-(--border) text-(--foreground)"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-t border-(--border) bg-(--background)/95 px-5 py-5 backdrop-blur-xl lg:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground)"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-(--border) flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-(--accent)"
              >
                ← Back to Main Portfolio
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full text-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 py-2.5 text-xs font-semibold text-slate-950"
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
