"use client";

import { MARKETING_PROCESS_STEPS } from "@/lib/marketing-content";
import Reveal from "@/components/reveal";

export default function MarketingProcess() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      {/* Section Header */}
      <Reveal>
        <div className="mb-14 sm:mb-16">
          <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
            03 · Methodology
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How I Approach Digital Marketing
          </h2>
          <p className="mt-3 max-w-2xl text-base text-(--muted) sm:text-lg">
            A structured, analytical five-step framework engineered for lasting search visibility and sustainable conversions.
          </p>
        </div>
      </Reveal>

      {/* Stepper / Timeline Layout */}
      <div className="relative">
        {/* Continuous connector line on desktop */}
        <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-400 to-fuchsia-400 opacity-25" />

        <div className="space-y-6">
          {MARKETING_PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 80}>
              <div className="card card-hover relative overflow-hidden p-6 sm:p-8 transition-all">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  {/* Step Number & Title */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 font-mono text-lg font-bold text-(--accent) shadow-sm">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-(--foreground)">
                        {step.title}
                      </h3>
                      <p className="font-mono text-xs text-(--muted)">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm leading-relaxed text-(--muted)">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables / Key Milestones */}
                  <div className="lg:col-span-4 rounded-xl border border-(--border) bg-(--surface-2)/60 p-3.5 sm:p-4">
                    <p className="mb-2 font-mono text-[10px] tracking-wider text-(--accent) uppercase font-semibold">
                      Key Outcomes
                    </p>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-(--foreground)/85"
                        >
                          <span className="size-1 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
