import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import type { Auth } from "firebase/auth";
import type { Analytics } from "firebase/analytics";
import { app, FIREBASE_WEB_API_KEY } from "./firebase-core";

export { FIREBASE_WEB_API_KEY };
export const auth: Auth =
  typeof window !== "undefined" ? getAuth(app) : (null as unknown as Auth);
export const db: Firestore =
  typeof window !== "undefined"
    ? getFirestore(app)
    : (null as unknown as Firestore);
export const googleProvider: GoogleAuthProvider =
  typeof window !== "undefined"
    ? new GoogleAuthProvider()
    : (null as unknown as GoogleAuthProvider);

let analytics: Analytics | null = null;

/** Loads Analytics in the browser only (it crashes during SSR/build). */
export async function initAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (analytics) return analytics;
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
  return analytics;
}

/**
 * Emails allowed to edit the portfolio. Gmail ignores dots in the local
 * part, so comparison is done on the dot-stripped, lowercased form.
 */
const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || "")
  .split(",")
  .map(e => e.trim())
  .filter(Boolean);

function normalizeEmail(email: string): string {
  const [local, domain] = email.toLowerCase().split("@");
  if (!domain) return email.toLowerCase();
  const cleanLocal = domain === "gmail.com" ? local.replace(/\./g, "") : local;
  return `${cleanLocal}@${domain}`;
}

const normalizedAdmins = ADMIN_EMAILS.map(normalizeEmail);

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return normalizedAdmins.includes(normalizeEmail(email));
}
