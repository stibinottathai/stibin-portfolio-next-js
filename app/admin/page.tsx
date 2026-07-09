"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { auth, googleProvider, isAdminEmail } from "@/lib/firebase";
import {
  DEFAULT_CONTENT,
  loadContent,
  saveContent,
  type PortfolioContent,
} from "@/lib/content";
import {
  HeroEditor,
  AboutEditor,
  SkillsEditor,
  ExperienceEditor,
  ProjectsEditor,
  EducationEditor,
  SocialsEditor,
} from "@/components/admin/editors";
import MessagesInbox from "@/components/admin/messages";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "socials", label: "Social Links" },
  { id: "messages", label: "📥 Messages" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

/* ------------------------------------------------------------------ */
/* Auth screens                                                        */
/* ------------------------------------------------------------------ */

function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="card w-full max-w-md p-8 text-center">{children}</div>
    </div>
  );
}

function SignInScreen({ onError }: { onError: (msg: string) => void }) {
  const [busy, setBusy] = useState(false);

  const signIn = async () => {
    setBusy(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      onError(err instanceof Error ? err.message : "Sign-in failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthCard>
      <p className="mb-2 font-mono text-xs font-semibold tracking-[0.25em] text-(--accent) uppercase">
        Admin Panel
      </p>
      <h1 className="text-2xl font-bold">Portfolio Editor</h1>
      <p className="mt-3 text-sm text-(--muted)">
        Sign in with your Google account to edit the portfolio content. Only
        authorised accounts can make changes.
      </p>
      <button
        onClick={signIn}
        disabled={busy}
        className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-(--foreground) px-6 py-3 text-sm font-semibold text-(--background) transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52Z"
          />
        </svg>
        {busy ? "Signing in…" : "Sign in with Google"}
      </button>
      <Link
        href="/"
        className="mt-5 inline-block text-xs text-(--muted) hover:text-(--foreground)"
      >
        ← Back to portfolio
      </Link>
    </AuthCard>
  );
}

function DeniedScreen({ email }: { email: string }) {
  return (
    <AuthCard>
      <p className="text-3xl" aria-hidden>
        🔒
      </p>
      <h1 className="mt-3 text-xl font-bold">Access denied</h1>
      <p className="mt-3 text-sm text-(--muted)">
        <span className="font-mono text-(--foreground)">{email}</span> is not
        authorised to edit this portfolio.
      </p>
      <button
        onClick={() => signOut(auth)}
        className="mt-6 rounded-full border border-(--border) px-6 py-2.5 text-sm font-semibold hover:border-cyan-400/40 hover:text-(--accent)"
      >
        Sign out
      </button>
    </AuthCard>
  );
}

/* ------------------------------------------------------------------ */
/* Editor                                                              */
/* ------------------------------------------------------------------ */

function Editor({ user }: { user: User }) {
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [section, setSection] = useState<SectionId>("hero");
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    loadContent().then(setContent);
  }, []);

  // Warn before closing the tab with unsaved changes.
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-(--muted)">
        Loading content…
      </div>
    );
  }

  const patch = (p: Partial<PortfolioContent>) => {
    setContent({ ...content, ...p });
    setDirty(true);
    setStatus(null);
  };

  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      await saveContent(content);
      setDirty(false);
      setStatus("Saved — the live site updates instantly.");
    } catch (err) {
      setStatus(
        `Save failed: ${err instanceof Error ? err.message : "unknown error"}. Check that Firestore is created and the security rules are deployed.`,
      );
    } finally {
      setSaving(false);
    }
  };

  const resetToDefaults = () => {
    if (
      confirm(
        "Replace the current editor content with the built-in CV defaults? (Nothing is saved until you press Save.)",
      )
    ) {
      setContent(structuredClone(DEFAULT_CONTENT));
      setDirty(true);
      setStatus(null);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-(--border) bg-(--background)/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-400 text-xs font-bold text-slate-950">
              ✎
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Portfolio Editor</p>
              <p className="truncate text-xs text-(--muted)">{user.email}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <Link
              href="/"
              target="_blank"
              className="hidden rounded-full border border-(--border) px-4 py-2 text-xs font-medium text-(--muted) hover:text-(--foreground) sm:block"
            >
              View site ↗
            </Link>
            <button
              onClick={save}
              disabled={saving || !dirty}
              className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-5 py-2 text-xs font-semibold text-slate-950 transition-opacity disabled:opacity-40"
            >
              {saving ? "Saving…" : dirty ? "Save changes" : "Saved"}
            </button>
            <button
              onClick={() => signOut(auth)}
              className="rounded-full border border-(--border) px-4 py-2 text-xs font-medium text-(--muted) hover:text-(--foreground)"
            >
              Sign out
            </button>
          </div>
        </div>
        {status && (
          <div
            className={`border-t border-(--border) px-5 py-2 text-center text-xs ${
              status.startsWith("Save failed")
                ? "bg-red-500/10 text-red-600 dark:text-red-300"
                : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
            }`}
          >
            {status}
          </div>
        )}
      </header>

      <div className="mx-auto flex max-w-6xl gap-8 px-5 py-8">
        {/* Section nav */}
        <aside className="hidden w-44 shrink-0 md:block">
          <nav className="sticky top-24 space-y-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                className={`block w-full rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors ${
                  section === s.id
                    ? "bg-(--surface-2) font-semibold text-(--foreground)"
                    : "text-(--muted) hover:text-(--foreground)"
                }`}
              >
                {s.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={resetToDefaults}
                className="block w-full rounded-lg px-3.5 py-2.5 text-left text-xs text-(--muted) hover:text-red-600 dark:hover:text-red-300"
              >
                ↺ Reset to CV defaults
              </button>
            </div>
          </nav>
        </aside>

        {/* Active editor */}
        <main className="min-w-0 flex-1">
          {/* Mobile section picker */}
          <div className="mb-5 md:hidden">
            <select
              className="input"
              value={section}
              onChange={(e) => setSection(e.target.value as SectionId)}
            >
              {SECTIONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <h2 className="mb-5 text-xl font-bold">
            {SECTIONS.find((s) => s.id === section)?.label}
          </h2>

          {section === "hero" && <HeroEditor content={content} patch={patch} />}
          {section === "about" && <AboutEditor content={content} patch={patch} />}
          {section === "skills" && <SkillsEditor content={content} patch={patch} />}
          {section === "experience" && (
            <ExperienceEditor content={content} patch={patch} />
          )}
          {section === "projects" && (
            <ProjectsEditor content={content} patch={patch} />
          )}
          {section === "education" && (
            <EducationEditor content={content} patch={patch} />
          )}
          {section === "socials" && (
            <SocialsEditor content={content} patch={patch} />
          )}
          {section === "messages" && <MessagesInbox />}
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page (auth gate)                                                    */
/* ------------------------------------------------------------------ */

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-(--muted)">
        Checking authentication…
      </div>
    );
  }

  if (!user) {
    return (
      <>
        {error && (
          <p className="bg-red-500/10 px-5 py-2 text-center text-xs text-red-600 dark:text-red-300">
            {error}
          </p>
        )}
        <SignInScreen onError={setError} />
      </>
    );
  }

  if (!isAdminEmail(user.email)) {
    return <DeniedScreen email={user.email ?? "unknown"} />;
  }

  return <Editor user={user} />;
}
