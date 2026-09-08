"use client";

import { useState } from "react";
import Link from "next/link";
import { MARKETING_CTA } from "@/lib/marketing-content";
import { sendMessage } from "@/lib/messages";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";

function QuickContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setState("sending");
    try {
      await sendMessage(form);
      setState("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-6 text-center">
        <p className="text-3xl" aria-hidden>
          ✅
        </p>
        <h3 className="mt-3 text-lg font-semibold text-(--foreground)">Message Received!</h3>
        <p className="mt-1.5 text-xs text-(--muted)">
          Thank you for reaching out. I&apos;ll review your project details and get back to you shortly.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-5 text-xs font-medium text-(--accent) hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="mktg-name">
            Your Name
          </label>
          <input
            id="mktg-name"
            className="input"
            value={form.name}
            required
            maxLength={100}
            placeholder="e.g. Sarah Jenkins"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="label" htmlFor="mktg-email">
            Your Email
          </label>
          <input
            id="mktg-email"
            className="input"
            type="email"
            value={form.email}
            required
            maxLength={200}
            placeholder="e.g. sarah@business.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="mktg-message">
          Project Details / Goals
        </label>
        <textarea
          id="mktg-message"
          className="input resize-y leading-relaxed"
          rows={4}
          value={form.message}
          required
          maxLength={3000}
          placeholder="Tell me about your website, SEO, or digital marketing goals..."
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      {state === "error" && (
        <p className="text-xs text-red-600 dark:text-red-300">
          Something went wrong sending your message. Please email directly at stibinaugustine3047@gmail.com
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
      >
        {state === "sending" ? "Sending Request…" : "Send Marketing Inquiry →"}
      </button>
    </form>
  );
}

export default function MarketingCTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="card relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading & Copy */}
              <div className="lg:col-span-6">
                <p className="mb-1.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-(--accent) uppercase">
                  08 · Let&apos;s Collaborate
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  {MARKETING_CTA.heading}
                </h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-(--muted)">
                  {MARKETING_CTA.description}
                </p>

                {/* Author Snippet */}
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-(--border) bg-(--surface-2)/60 p-2.5 max-w-sm">
                  <div className="size-9 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[2px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/avatar.svg"
                      alt="Stibin Augustine"
                      className="size-full rounded-full object-cover bg-(--surface)"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-(--foreground)">Stibin Augustine</p>
                    <p className="font-mono text-[10px] text-(--accent)">Digital Marketer &amp; Developer</p>
                  </div>
                </div>

                {/* Direct info list */}
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-(--muted)">
                  <a
                    href="mailto:stibinaugustine3047@gmail.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-(--accent)"
                  >
                    <span aria-hidden>✉️</span> stibinaugustine3047@gmail.com
                  </a>
                  <a
                    href="tel:+971565564136"
                    className="flex items-center gap-2.5 transition-colors hover:text-(--accent)"
                  >
                    <span aria-hidden>📞</span> +971 56 556 4136
                  </a>
                  <p className="flex items-center gap-2.5">
                    <span aria-hidden>📍</span> Dubai, United Arab Emirates
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--chip-bg) px-5 py-2 text-xs font-semibold text-(--foreground) transition-colors hover:border-cyan-400/40 hover:bg-(--surface-2)"
                  >
                    <span>←</span>
                    {MARKETING_CTA.secondaryButton.label}
                  </Link>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-6 rounded-2xl border border-(--border) bg-(--surface)/70 p-5 sm:p-6 backdrop-blur">
                <p className="mb-3 font-mono text-xs font-semibold text-(--accent) uppercase tracking-wider">
                  Direct Project Inquiry
                </p>
                <QuickContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Redesigned Premium Site Footer */}
      <SiteFooter variant="marketing" />
    </section>
  );
}
