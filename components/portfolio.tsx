"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  loadCachedContent,
  mergeWithDefaults,
  subscribeContent,
  type PortfolioContent,
  type Project,
} from "@/lib/content";
import { auth, initAnalytics, isAdminEmail } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { sendMessage } from "@/lib/messages";
import { STRINGS, type UIStrings } from "@/lib/i18n";
import ChatWidget from "./chat-widget";
import JobFit from "./job-fit";
import Reveal from "./reveal";

/* ------------------------------------------------------------------ */
/* Typing effect for hero roles                                        */
/* ------------------------------------------------------------------ */

function TypedRoles({ roles }: { roles: string[] }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;
    const current = roles[roleIndex % roles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          ),
        deleting ? 35 : 65,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span className="text-gradient font-semibold">
      {text}
      <span className="caret" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Theme + language toggles                                            */
/* ------------------------------------------------------------------ */

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
      // Storage unavailable (private mode) — theme still applies this visit.
    }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="flex size-10 items-center justify-center rounded-full border border-(--border) text-base transition-colors hover:border-cyan-400/40"
    >
      {theme === null ? "◐" : theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}



/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

function Nav({
  name,
  photoUrl,
  t,
  isAdmin,
}: {
  name: string;
  photoUrl: string;
  t: UIStrings;
  isAdmin: boolean;
}) {
  const [open, setOpen] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    ...(isAdmin ? [{ href: "#job-fit", label: t.nav.jobFit }] : []),
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-(--background)/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          {photoUrl ? (
            <span className="rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[2px]">
              {/* eslint-disable-next-line @next/next/no-img-element -- src can be a data URI or any external host set from the admin panel */}
              <img
                src={photoUrl}
                alt={name}
                className="block size-9 rounded-full object-cover"
              />
            </span>
          ) : (
            <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 font-mono text-sm font-bold text-slate-950">
              {initials}
            </span>
          )}
          <span className="text-sm font-semibold tracking-wide">{name}</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-(--foreground) px-4 py-2 text-sm font-semibold text-(--background) transition-opacity hover:opacity-85"
          >
            {t.nav.hireMe}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="flex size-10 items-center justify-center rounded-lg border border-(--border)"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-(--border) bg-(--background)/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-(--muted) hover:text-(--foreground)"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
        {kicker}
      </p>
      <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

function Hero({ content, t }: { content: PortfolioContent; t: UIStrings }) {
  const { hero } = content;
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora absolute -top-20 left-[10%] size-[420px] bg-cyan-500/60" />
        <div
          className="aurora absolute top-40 right-[5%] size-[380px] bg-indigo-500/60"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="aurora absolute -bottom-32 left-[40%] size-[350px] bg-fuchsia-500/40"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-[1fr_auto] lg:gap-14">
        <div>
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {hero.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl">
              {t.hero.greeting}{" "}
              <span className="text-gradient">{hero.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-xl text-(--muted) sm:text-2xl">
              <TypedRoles roles={hero.roles} />
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--muted) sm:text-lg">
              {hero.tagline}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.03]"
              >
                {t.hero.viewWork}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-(--border) px-7 py-3 text-sm font-semibold transition-colors hover:border-cyan-400/40 hover:text-(--accent)"
              >
                {t.hero.getInTouch}
              </a>
              {hero.resumeUrl && (
                <a
                  href={hero.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-(--muted) underline-offset-4 hover:text-(--foreground) hover:underline"
                >
                  {t.hero.downloadCV}
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-(--muted)">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden>📍</span> {hero.location}
              </span>
              <a
                href={`mailto:${hero.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-(--accent)"
              >
                <span aria-hidden>✉️</span> {hero.email}
              </a>
              <a
                href={`tel:${hero.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-(--accent)"
              >
                <span aria-hidden>📞</span> {hero.phone}
              </a>
            </div>
          </Reveal>
        </div>

        {hero.photoUrl && (
          <Reveal delay={200} className="hidden lg:block">
            <div className="group relative w-80">
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 opacity-70" />
              {/* eslint-disable-next-line @next/next/no-img-element -- src can be a data URI or any external host set from the admin panel */}
              <img
                src={hero.photoUrl}
                alt={hero.name}
                className="relative aspect-4/5 w-full rounded-[2rem] object-cover"
              />
              <span className="absolute -end-3 -bottom-4 rounded-xl border border-(--border) bg-(--surface-2)/95 px-4 py-2 font-mono text-xs text-(--accent) shadow-lg backdrop-blur">
                {hero.headline}
              </span>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function AboutSection({
  content,
  t,
}: {
  content: PortfolioContent;
  t: UIStrings;
}) {
  const { about } = content;
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        kicker={t.sections.aboutKicker}
        title={t.sections.aboutTitle}
      />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-base leading-relaxed text-(--muted) sm:text-lg">
            {about.summary}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {about.stats.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="card h-full p-5">
                <p className="text-gradient text-3xl font-bold">{s.value}</p>
                <p className="mt-1.5 text-xs leading-snug text-(--muted)">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILL_ICONS = ["📱", "🌐", "🗄️", "🛠️", "⚡", "🎯"];

function SkillsSection({
  content,
  t,
}: {
  content: PortfolioContent;
  t: UIStrings;
}) {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        kicker={t.sections.skillsKicker}
        title={t.sections.skillsTitle}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {content.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="card card-hover h-full p-6">
              <h3 className="mb-4 flex items-center gap-2.5 text-lg font-semibold">
                <span aria-hidden>{SKILL_ICONS[i % SKILL_ICONS.length]}</span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({
  content,
  t,
}: {
  content: PortfolioContent;
  t: UIStrings;
}) {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20"
    >
      <SectionHeading
        kicker={t.sections.experienceKicker}
        title={t.sections.experienceTitle}
      />
      <div className="relative ms-2 space-y-10 border-s border-(--border) ps-8 sm:ms-4 sm:ps-12">
        {content.experience.map((job, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="relative">
              <span className="absolute top-1.5 -start-[41px] flex size-4 items-center justify-center sm:-start-[57px]">
                <span className="size-3 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-400 ring-4 ring-cyan-400/15" />
              </span>
              <div className="card card-hover p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-(--accent)">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-end text-xs text-(--muted)">
                    <p className="font-mono">{job.period}</p>
                    <p className="mt-0.5">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-(--muted)"
                    >
                      <span className="mt-1 text-(--accent)" aria-hidden>
                        ▹
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  delay,
  t,
}: {
  project: Project;
  delay: number;
  t: UIStrings;
}) {
  const inner = (
    <div className="card card-hover flex h-full flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <span
          className={`rounded-md px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide uppercase ${
            project.category === "Mobile"
              ? "bg-indigo-400/10 text-indigo-700 dark:text-indigo-300"
              : "bg-cyan-400/10 text-cyan-700 dark:text-cyan-300"
          }`}
        >
          {project.category === "Mobile" ? t.projects.mobile : t.projects.web}
        </span>
        <span className="text-xs text-(--muted)">{project.tag}</span>
      </div>
      <h3 className="text-base font-semibold">
        {project.title}
        {project.link && (
          <span className="ms-1.5 text-(--accent)" aria-hidden>
            ↗
          </span>
        )}
      </h3>
      <p className="mt-2.5 grow text-sm leading-relaxed text-(--muted)">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="chip !px-2.5 !py-1 !text-[0.68rem]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Reveal delay={delay} className="h-full">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="block h-full"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </Reveal>
  );
}

function ProjectsSection({
  content,
  t,
}: {
  content: PortfolioContent;
  t: UIStrings;
}) {
  const [filter, setFilter] = useState<"All" | "Mobile" | "Web">("All");

  const projects = useMemo(() => {
    const list =
      filter === "All"
        ? content.projects
        : content.projects.filter((p) => p.category === filter);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [content.projects, filter]);

  const filterLabels: Record<"All" | "Mobile" | "Web", string> = {
    All: t.projects.all,
    Mobile: t.projects.mobile,
    Web: t.projects.web,
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20"
    >
      <SectionHeading
        kicker={t.sections.projectsKicker}
        title={t.sections.projectsTitle}
      />

      <Reveal>
        <div className="mb-8 flex gap-2">
          {(["All", "Mobile", "Web"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-(--foreground) text-(--background)"
                  : "border border-(--border) text-(--muted) hover:text-(--foreground)"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={(i % 3) * 80} t={t} />
        ))}
      </div>
    </section>
  );
}

function EducationSection({
  content,
  t,
}: {
  content: PortfolioContent;
  t: UIStrings;
}) {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20"
    >
      <SectionHeading
        kicker={t.sections.educationKicker}
        title={t.sections.educationTitle}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {content.education.map((edu, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="card card-hover h-full p-6">
              <p className="font-mono text-xs text-(--accent)">{edu.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{edu.school}</h3>
              <p className="mt-1 text-sm text-(--muted)">{edu.degree}</p>
              {edu.details && (
                <p className="mt-3 text-xs leading-relaxed text-(--muted)">
                  {edu.details}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactForm({ t }: { t: UIStrings }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

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
      <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-8 text-center">
        <p className="text-4xl" aria-hidden>
          ✅
        </p>
        <h3 className="mt-4 text-lg font-semibold">{t.contact.sentTitle}</h3>
        <p className="mt-2 text-sm text-(--muted)">{t.contact.sentBody}</p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-xs font-medium text-(--accent) hover:underline"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="contact-name">
            {t.contact.yourName}
          </label>
          <input
            id="contact-name"
            className="input"
            value={form.name}
            required
            maxLength={100}
            placeholder={t.contact.namePlaceholder}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="label" htmlFor="contact-email">
            {t.contact.yourEmail}
          </label>
          <input
            id="contact-email"
            className="input"
            type="email"
            value={form.email}
            required
            maxLength={200}
            placeholder={t.contact.emailPlaceholder}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="contact-message">
          {t.contact.message}
        </label>
        <textarea
          id="contact-message"
          className="input resize-y leading-relaxed"
          rows={5}
          value={form.message}
          required
          maxLength={3000}
          placeholder={t.contact.messagePlaceholder}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      {state === "error" && (
        <p className="text-xs text-red-600 dark:text-red-300">
          {t.contact.error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] disabled:opacity-50"
      >
        {state === "sending" ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
}

function ContactSection({
  content,
  t,
}: {
  content: PortfolioContent;
  t: UIStrings;
}) {
  const { hero, socials } = content;
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
                  {t.sections.contactKicker}
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.contact.titleA}{" "}
                  <span className="text-gradient">{t.contact.titleB}</span>
                </h2>
                <p className="mt-5 text-(--muted)">
                  {t.contact.lead(hero.location.split(",")[0])}
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <a
                    href={`mailto:${hero.email}`}
                    className="flex items-center gap-3 text-(--muted) transition-colors hover:text-(--accent)"
                  >
                    <span aria-hidden>✉️</span> {hero.email}
                  </a>
                  <a
                    href={`tel:${hero.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-(--muted) transition-colors hover:text-(--accent)"
                  >
                    <span aria-hidden>📞</span> {hero.phone}
                  </a>
                  <p className="flex items-center gap-3 text-(--muted)">
                    <span aria-hidden>📍</span> {hero.location}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target={s.url.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-(--muted) underline-offset-4 transition-colors hover:text-(--accent) hover:underline"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <ContactForm t={t} />
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-(--border) py-8 text-center text-xs text-(--muted)">
        <p>{t.footer(hero.name, new Date().getFullYear())}</p>
        <Link
          href="/admin"
          className="mt-2 inline-block opacity-40 transition-opacity hover:opacity-100"
        >
          Admin
        </Link>
      </footer>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Root                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  // null = still waiting for the first data; never render stale defaults.
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    initAnalytics();
    const cached = loadCachedContent();
    if (cached) setContent(cached);
    
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setIsAdmin(isAdminEmail(user?.email));
    });
    
    const unsubscribeContent = subscribeContent(setContent);
    
    return () => {
      unsubscribeAuth();
      unsubscribeContent();
    };
  }, []);

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-gradient animate-pulse font-mono text-2xl font-bold">
          &lt;/&gt;
        </span>
      </div>
    );
  }

  const t = STRINGS.en;

  return (
    <div className="relative">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20" />
      <Nav
        name={content.hero.name}
        photoUrl={content.hero.photoUrl}
        t={t}
        isAdmin={isAdmin}
      />
      <main>
        <Hero content={content} t={t} />
        <AboutSection content={content} t={t} />
        <SkillsSection content={content} t={t} />
        <ExperienceSection content={content} t={t} />
        <ProjectsSection content={content} t={t} />
        <EducationSection content={content} t={t} />
        {isAdmin && <JobFit t={t} />}
        <ContactSection content={content} t={t} />
      </main>

      <ChatWidget name={content.hero.name} />
    </div>
  );
}
