"use client";

import { useState } from "react";
import { DEVELOPER_ADVANTAGE } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function DeveloperMarketer() {
  const { marketingPillar, techPillar } = DEVELOPER_ADVANTAGE;
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    issuer: string;
    date: string;
    image: string;
    badge: string;
    stage: string;
  } | null>(null);

  const certifications = [
    {
      title: "AI Appreciate 2025 — AI For All",
      stage: "Stage 2 · Applied AI & Project Lifecycle",
      issuer: "Intel & Digital India (CBSE)",
      date: "16/08/2026",
      badgeImage: "/certifications/intel-ai-appreciate-badge.png",
      certImage: "/certifications/intel-ai-appreciate-certificate.png",
      badge: "Intel Certified",
      description:
        "Official national certification in Applied Artificial Intelligence concepts, machine learning project lifecycle, algorithmic fairness, and problem-solving with AI.",
      skills: ["Applied AI", "Machine Learning", "AI Project Lifecycle", "Algorithmic Fairness", "Intel AI"],
    },
    {
      title: "AI Aware 2025 — AI For All",
      stage: "Stage 1 · AI Foundations & Domains",
      issuer: "Intel & Digital India (CBSE)",
      date: "16/08/2026",
      badgeImage: "/certifications/intel-ai-aware-badge.png",
      certImage: "/certifications/intel-ai-aware-certificate.png",
      badge: "Intel Certified",
      description:
        "Official national certification demonstrating mastery of foundational AI domains, computer vision, natural language processing, and responsible AI ethics.",
      skills: ["AI Fundamentals", "Computer Vision", "NLP", "Responsible AI", "Intel AI"],
    },
  ];

  return (
    <section id="advantage" className="relative scroll-mt-24 overflow-hidden py-10 sm:py-14">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-1.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-(--accent) uppercase">
              05 · The Hybrid Edge
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {DEVELOPER_ADVANTAGE.heading}
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-(--muted)">
              {DEVELOPER_ADVANTAGE.copy}
            </p>
          </div>
        </Reveal>

        {/* Dual Pillar Comparison with Central Connector */}
        <div className="mt-6 sm:mt-8 grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Column 1: Digital Marketing */}
          <Reveal delay={100} className="lg:col-span-5 h-full">
            <div className="card card-hover flex h-full flex-col p-7 sm:p-8 border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.03] to-transparent">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-2xl shadow-sm">
                  {marketingPillar.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-(--foreground)">
                    {marketingPillar.title}
                  </h3>
                  <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                    {marketingPillar.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 pt-6 border-t border-(--border)/80">
                {marketingPillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-(--foreground)/90"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-cyan-400/15 font-mono text-[10px] text-cyan-600 dark:text-cyan-300 font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Central Visual Bridge on desktop */}
          <Reveal delay={200} className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <div className="flex size-14 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 text-slate-950 font-bold text-xl shadow-lg shadow-cyan-500/20">
              +
            </div>
            <div className="mt-4 hidden lg:block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) font-semibold">
                Synergy
              </span>
            </div>
          </Reveal>

          {/* Column 2: Development */}
          <Reveal delay={300} className="lg:col-span-5 h-full">
            <div className="card card-hover flex h-full flex-col p-7 sm:p-8 border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.03] to-transparent">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-400/10 text-2xl shadow-sm">
                  {techPillar.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-(--foreground)">
                    {techPillar.title}
                  </h3>
                  <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    {techPillar.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 pt-6 border-t border-(--border)/80">
                {techPillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-(--foreground)/90"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-indigo-400/15 font-mono text-[10px] text-indigo-600 dark:text-indigo-300 font-bold">
                      ⚡
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Central Visual Banner Statement */}
        <Reveal delay={350} className="mt-6 sm:mt-8">
          <div className="card relative overflow-hidden p-5 sm:p-6 text-center bg-(--surface-2)/60 border-cyan-400/30 shadow-xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-70" />
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-(--foreground)">
              <span className="text-gradient">
                {DEVELOPER_ADVANTAGE.centralConnection}
              </span>
            </h4>
            <p className="mt-2.5 max-w-2xl mx-auto text-xs sm:text-sm text-(--muted) leading-relaxed">
              {DEVELOPER_ADVANTAGE.centralDescription}
            </p>
          </div>
        </Reveal>

        {/* Verified Intel Certifications Block at the bottom of the developer section */}
        <Reveal delay={400} className="mt-8 sm:mt-10">
          <div className="border-t border-(--border)/80 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-(--accent) uppercase tracking-wider">
                    Verified Credentials &amp; Certifications
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-(--foreground)">
                  Official Intel &amp; Digital India AI Certifications
                </h3>
              </div>
              <span className="font-mono text-xs text-(--muted) rounded-full bg-(--chip-bg) px-3 py-1 border border-(--border)">
                Issued to Stibin Augustine · 2026
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="card card-hover group relative overflow-hidden p-6 border border-cyan-500/30 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-indigo-500/[0.04] flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Badge Tag & Date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 px-3 py-1 font-mono text-[10px] font-bold text-cyan-700 dark:text-cyan-300">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {cert.badge}
                      </span>
                      <span className="font-mono text-xs text-(--muted)">
                        {cert.date}
                      </span>
                    </div>

                    {/* Badge Image Visual */}
                    <div
                      onClick={() =>
                        setSelectedCert({
                          title: cert.title,
                          issuer: cert.issuer,
                          date: cert.date,
                          image: cert.certImage,
                          badge: cert.badge,
                          stage: cert.stage,
                        })
                      }
                      className="mb-4 flex items-center justify-center p-4 rounded-2xl bg-(--surface-2)/80 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all cursor-pointer shadow-inner"
                      title="Click to view full certificate"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cert.badgeImage}
                        alt={`${cert.title} Badge — Stibin Augustine`}
                        className="h-32 sm:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
                      />
                    </div>

                    {/* Title & Stage */}
                    <h4 className="text-lg font-bold tracking-tight text-(--foreground) group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="mt-0.5 font-mono text-xs font-semibold text-(--accent)">
                      {cert.issuer}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-(--muted)">
                      {cert.stage}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-(--muted)">
                      {cert.description}
                    </p>

                    {/* Skills Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="chip !px-2.5 !py-0.5 !text-[0.68rem] bg-(--chip-bg) border-(--border)/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action link */}
                  <div className="mt-5 pt-4 border-t border-(--border)/60 flex items-center justify-between gap-3 text-xs">
                    <span className="font-mono text-[10px] text-(--muted)">
                      Verified Gov &amp; Intel Program
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCert({
                          title: cert.title,
                          issuer: cert.issuer,
                          date: cert.date,
                          image: cert.certImage,
                          badge: cert.badge,
                          stage: cert.stage,
                        })
                      }
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-(--accent) hover:underline cursor-pointer"
                    >
                      <span>View Full Certificate</span>
                      <span aria-hidden>↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full card p-5 sm:p-6 bg-(--surface) border-cyan-400/40 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-(--border)">
              <div>
                <span className="font-mono text-[10px] font-bold text-(--accent) uppercase tracking-wider">
                  Verified Certificate · {selectedCert.issuer}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-(--foreground)">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="flex size-8 items-center justify-center rounded-full bg-(--surface-2) border border-(--border) text-(--muted) hover:text-(--foreground) hover:border-cyan-400 cursor-pointer"
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-(--border)/80 bg-slate-950/30 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Official Certificate — Stibin Augustine`}
                className="w-full h-auto object-contain max-h-[70vh] rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-mono text-(--muted)">
                Recipient: <strong className="text-(--foreground)">Stibin Augustine</strong> · Completed {selectedCert.date}
              </span>
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-4 py-1.5 font-semibold text-slate-950 transition-transform hover:scale-105"
              >
                <span>Open Full Image ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
