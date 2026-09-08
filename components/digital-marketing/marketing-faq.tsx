"use client";

import { useState } from "react";
import { MARKETING_FAQS } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function MarketingFAQ() {
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleQuestion = (i: number) => {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i],
    );
  };

  const toggleAllQuestions = () => {
    if (openIndices.length === MARKETING_FAQS.length) {
      setOpenIndices([]);
    } else {
      setOpenIndices(MARKETING_FAQS.map((_, idx) => idx));
    }
  };

  return (
    <section id="faq" className="relative scroll-mt-24 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Expandable Section Header Card */}
        <Reveal>
          <div
            onClick={() => setIsSectionOpen((prev) => !prev)}
            className="card card-hover group relative overflow-hidden p-6 sm:p-8 cursor-pointer border border-cyan-500/30 bg-(--surface-2)/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-400"
            role="button"
            tabIndex={0}
            aria-expanded={isSectionOpen}
            aria-controls="marketing-faq-container"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsSectionOpen((prev) => !prev);
              }
            }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-50 transition-opacity group-hover:opacity-100" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
                    MARKETING &amp; STRATEGY FAQ
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
                    <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {MARKETING_FAQS.length} Q&amp;As
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-(--foreground)">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-(--muted) max-w-2xl">
                  Click to expand direct answers on how SEO, Google Ads, Meta Ads, and AI automation work together to drive measurable revenue.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <span className="hidden sm:inline-block font-mono text-xs font-semibold text-cyan-300 group-hover:underline">
                  {isSectionOpen ? "Collapse Section" : "Expand Section"}
                </span>
                <div
                  className={`flex size-11 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 font-mono text-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-400 group-hover:text-slate-950 ${
                    isSectionOpen ? "rotate-180 bg-cyan-400 text-slate-950" : ""
                  }`}
                >
                  ↓
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Expandable Section Body */}
        {isSectionOpen && (
          <div id="marketing-faq-container" className="mt-8 mx-auto max-w-3xl space-y-3.5 animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex items-center justify-between pb-1 px-1">
              <span className="font-mono text-xs text-(--muted)">
                Showing all {MARKETING_FAQS.length} Strategic Marketing Questions
              </span>
              <button
                onClick={toggleAllQuestions}
                className="text-xs font-medium text-(--accent) hover:underline cursor-pointer"
              >
                {openIndices.length === MARKETING_FAQS.length ? "Collapse All Answers" : "Expand All Answers"}
              </button>
            </div>

            {MARKETING_FAQS.map((faq, i) => {
              const isOpen = openIndices.includes(i);
              return (
                <div
                  key={i}
                  className={`card overflow-hidden border transition-all duration-200 ${
                    isOpen
                      ? "border-cyan-400/50 bg-(--surface-2)/60 shadow-md shadow-cyan-500/5"
                      : "border-(--border)/80 hover:border-cyan-400/40 bg-(--card-bg)"
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start cursor-pointer transition-colors"
                  >
                    <span className="flex items-center gap-3 font-semibold text-sm sm:text-base text-(--foreground)">
                      <span className={`font-mono text-xs transition-colors ${isOpen ? "text-cyan-400 font-bold" : "text-(--accent)"} shrink-0`}>
                        0{i + 1}
                      </span>
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-mono transition-all duration-200 ${
                        isOpen
                          ? "rotate-180 bg-cyan-400 text-slate-950 border-cyan-400 font-bold"
                          : "border-(--border) text-(--muted) hover:border-cyan-400/40"
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-(--muted) border-t border-(--border)/50 bg-(--surface-2)/40 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3 text-center">
              <button
                onClick={() => setIsSectionOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-(--muted) hover:text-(--foreground) hover:underline cursor-pointer"
              >
                <span>Collapse FAQ Section ↑</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


