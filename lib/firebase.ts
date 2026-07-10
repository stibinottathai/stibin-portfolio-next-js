import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/** Public web API key — also used server-side to verify ID tokens. */
export const FIREBASE_WEB_API_KEY = firebaseConfig.apiKey;

export const app = typeof window !== "undefined" ? (getApps().length ? getApp() : initializeApp(firebaseConfig)) : null as any;
export const auth = typeof window !== "undefined" ? getAuth(app) : null as any;
export const db = typeof window !== "undefined" ? getFirestore(app) : null as any;
export const googleProvider = typeof window !== "undefined" ? new GoogleAuthProvider() : null as any;

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
