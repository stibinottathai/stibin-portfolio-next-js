import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCy1yjQGCTdBN0hKMUqEdXeYZVgAAXaDaM",
  authDomain: "stibin-nextjs-portfolio.firebaseapp.com",
  projectId: "stibin-nextjs-portfolio",
  storageBucket: "stibin-nextjs-portfolio.firebasestorage.app",
  messagingSenderId: "620171100227",
  appId: "1:620171100227:web:9d9d0e467902d125ff14f6",
  measurementId: "G-TLBCPKJJV4",
};

/** Public web API key — also used server-side to verify ID tokens. */
export const FIREBASE_WEB_API_KEY = firebaseConfig.apiKey;

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

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
const ADMIN_EMAILS = [
  "stib.inau.gus.tin.e.07@gmail.com",
  "stibinaugustine3047@gmail.com",
];

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
