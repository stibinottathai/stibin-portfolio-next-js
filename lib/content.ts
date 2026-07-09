import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface Hero {
  name: string;
  /** Image URL or data URI shown in the hero; empty hides the photo. */
  photoUrl: string;
  headline: string;
  roles: string[];
  tagline: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  resumeUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface About {
  summary: string;
  stats: Stat[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  title: string;
  category: "Mobile" | "Web";
  tag: string;
  description: string;
  tech: string[];
  link: string;
  featured: boolean;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface PortfolioContent {
  hero: Hero;
  about: About;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  socials: SocialLink[];
}

/* ------------------------------------------------------------------ */
/* Default content (seeded from Stibin's CVs)                          */
/* ------------------------------------------------------------------ */

export const DEFAULT_CONTENT: PortfolioContent = {
  hero: {
    name: "Stibin Augustine",
    photoUrl: "/avatar.svg",
    headline: "Flutter & Front-End Developer",
    roles: [
      "Flutter Developer",
      "Next.js / React Developer",
      "Mobile & Web Application Engineer",
    ],
    tagline:
      "I build production-grade mobile and web applications — from GovTech platforms for the Qatar Olympic Committee to fintech apps moving money across borders.",
    location: "Bur Dubai, Dubai, UAE",
    email: "stibinaugustine3047@gmail.com",
    phone: "+971 56 556 4136",
    availability: "Available immediately · UAE Visit Visa",
    resumeUrl: "",
  },
  about: {
    summary:
      "Results-driven developer with 4+ years of hands-on experience delivering scalable cross-platform mobile and web applications across fintech, GovTech, e-commerce, and enterprise domains. Proven track record building production-grade apps for the Qatar Olympic Committee and UAE-based international remittance platforms. Strong command of Clean Architecture, state management (Riverpod, Bloc, Provider), REST API integration, Firebase, and Supabase — now specialising in modern web development with Next.js, React, TypeScript, and Tailwind CSS, and experienced in AI-assisted, agentic coding workflows.",
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "15+", label: "Apps & Platforms Shipped" },
      { value: "30+", label: "Reusable UI Components Built" },
      { value: "3", label: "Industries: Fintech · GovTech · E-commerce" },
    ],
  },
  skills: [
    {
      category: "Mobile",
      items: [
        "Flutter (Mobile & Web)",
        "Dart",
        "Riverpod",
        "Bloc",
        "Provider",
        "Clean Architecture",
        "MVVM",
      ],
    },
    {
      category: "Web",
      items: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Zustand",
        "SEO Optimisation",
      ],
    },
    {
      category: "Backend & BaaS",
      items: [
        "Firebase (Auth, Firestore, Realtime DB, FCM)",
        "Supabase",
        "REST APIs",
        "Node.js",
        "Python",
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Figma",
        "Vercel",
        "Agile / Scrum",
        "AI-assisted & agentic coding",
        "AES-256 Encryption",
      ],
    },
  ],
  experience: [
    {
      company: "App Station (Subsidiary of Applab, Qatar)",
      role: "Flutter Developer",
      period: "Sep 2024 – Feb 2026",
      location: "Qatar (Remote)",
      points: [
        "Architected and delivered Khadoom, a cross-platform Flutter mobile & web app for the Qatar Olympic Committee, streamlining HR operations — leave requests, approvals, delegations, and grievance management.",
        "Implemented Clean Architecture across presentation, domain, and data layers, ensuring scalability, testability, and long-term maintainability of a complex enterprise codebase.",
        "Adopted Riverpod for predictable, reactive state management, reducing UI-related bugs and improving developer productivity.",
        "Built a library of 30+ responsive, reusable UI components optimised for both Flutter Mobile and Web, cutting feature development time by ~25%.",
        "Integrated multiple REST APIs and engineered robust data-flow pipelines, ensuring reliable data consistency across the application.",
      ],
    },
    {
      company: "Active Lobby",
      role: "Flutter Developer",
      period: "Oct 2022 – Sep 2024",
      location: "Kerala, India (Remote – UAE Clients)",
      points: [
        "Co-developed LM Pay, a Flutter web & mobile cross-border remittance platform enabling UAE residents to transfer funds to 10+ countries with real-time multi-currency exchange rates.",
        "Implemented MVVM architecture with Provider, achieving clean separation between UI, business logic, and data layers.",
        "Integrated payment gateway, KYC compliance, and transaction-tracking REST APIs in a secure, regulation-compliant money-transfer flow.",
        "Applied performance optimisation (lazy loading, widget caching) that improved app startup time and reduced frame drops on lower-end devices.",
        "Enforced security best practices: encrypted local storage, token refresh flows, and input validation to protect sensitive financial data.",
      ],
    },
    {
      company: "Tazy Solutions",
      role: "Flutter Developer",
      period: "Jan 2022 – Oct 2022",
      location: "Remote",
      points: [
        "Built a Flutter mobile app for internal blood donation management — donor registration, blood-group filtering, and request workflows.",
        "Integrated Firebase Authentication, Firestore, and Realtime Database for secure, real-time data handling, with FCM push notifications.",
        "Applied Provider for efficient state management and delivered a clean, responsive UI following Material Design guidelines.",
      ],
    },
  ],
  projects: [
    {
      title: "Khadoom — Qatar Olympic Committee",
      category: "Mobile",
      tag: "GovTech · Enterprise",
      description:
        "Enterprise HR and workflow management platform built for the Qatar Olympic Committee. Leave requests and approvals, delegation management, and grievance submissions for committee staff.",
      tech: ["Flutter", "Riverpod", "Clean Architecture", "REST APIs"],
      link: "",
      featured: true,
    },
    {
      title: "LM Pay — Cross-Border Remittance",
      category: "Mobile",
      tag: "Fintech",
      description:
        "International money-transfer platform for UAE residents sending funds to 10+ countries. Multi-currency support, KYC onboarding, real-time exchange rates, and transaction history.",
      tech: ["Flutter", "Provider", "MVVM", "REST APIs"],
      link: "",
      featured: true,
    },
    {
      title: "ReVault (TechBasket) — E-Commerce",
      category: "Web",
      tag: "E-Commerce",
      description:
        "Full-stack e-commerce platform for refurbished electronics across 9 categories — advanced search and filtering, Google Sign-In, multi-admin roles, cart persistence, order processing, and stock management. Deployed on Vercel.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase", "Zustand"],
      link: "",
      featured: true,
    },
    {
      title: "Daily Updates News",
      category: "Web",
      tag: "Media · Publishing",
      description:
        "Article publishing platform covering 9 content categories with trending articles, category-based navigation, paginated feeds, SEO optimisation, and a responsive mobile-first UI.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      link: "",
      featured: true,
    },
    {
      title: "Personal Password Manager",
      category: "Web",
      tag: "Security",
      description:
        "Zero-trust, client-side encrypted password manager. All credentials are AES-256 encrypted in the browser before any data leaves the device — plaintext is never stored or transmitted.",
      tech: ["Next.js", "TypeScript", "Web Crypto API", "Firebase"],
      link: "",
      featured: false,
    },
    {
      title: "LuckUndo — Gaming Platform",
      category: "Web",
      tag: "Gaming",
      description:
        "Browser-based luck & fortune gaming platform with interactive dice, a spinning fortune wheel, and scratch cards. Persistent player profiles, daily streaks, an in-app coin economy, and a real-time leaderboard.",
      tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "",
      featured: false,
    },
    {
      title: "Smart Wallet — AI Expense Tracker",
      category: "Mobile",
      tag: "AI · Fintech",
      description:
        "Intelligent expense tracker that records income and expenses and uses AI to analyse spending patterns, delivering clear, actionable insights with built-in bill reminders.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "",
      featured: false,
    },
    {
      title: "QuickReceipt — Billing & Business",
      category: "Mobile",
      tag: "SME Tools",
      description:
        "All-in-one billing and business management app for retailers, wholesalers, and small business owners — invoicing, inventory, and daily operations in a single, easy-to-use app.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "",
      featured: false,
    },
    {
      title: "Wedding Invitation Website",
      category: "Web",
      tag: "Experience Site",
      description:
        "Custom single-page bilingual digital wedding invitation with interactive guest features, family listings, venue maps, a Wishes Wall, and smooth scroll animations. Custom domain on Vercel.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://ourweddinginvite.xyz",
      featured: false,
    },
    {
      title: "ATS AI CV Builder",
      category: "Web",
      tag: "AI · Tools",
      description:
        "Resume generation tool producing ATS-optimised, keyword-rich CVs that avoid common rejection points, tailored for tech professionals targeting the Gulf market.",
      tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "",
      featured: false,
    },
    {
      title: "Shop Ledger & Flow Tracker",
      category: "Mobile",
      tag: "Utility Apps",
      description:
        "Two Flutter apps: Shop Ledger digitises daily shop operations (sales, purchases, credits, stock); Flow Tracker offers period logging, cycle prediction, and reminders.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "",
      featured: false,
    },
    {
      title: "Site Ledger — Construction Manager",
      category: "Mobile",
      tag: "In Development",
      description:
        "Offline-first construction site management app for contractors — project expenses, labour attendance, material inventory, daily site activities, and progress tracking.",
      tech: ["Flutter", "Offline-first", "Local Storage"],
      link: "",
      featured: false,
    },
  ],
  education: [
    {
      school: "Manipal University Jaipur",
      degree: "Bachelor of Computer Applications (BCA) — Online",
      period: "2024 – 2027 (Expected)",
      details:
        "Coursework: Programming, Databases, Operating Systems, Cloud Computing",
    },
    {
      school: "NTTF",
      degree: "Diploma in Computer Engineering (3 Years)",
      period: "Completed",
      details: "",
    },
  ],
  socials: [
    { label: "Email", url: "mailto:stibinaugustine3047@gmail.com" },
    { label: "Phone", url: "tel:+971565564136" },
    { label: "Website", url: "https://stibin.online" },
  ],
};

/* ------------------------------------------------------------------ */
/* Firestore access                                                    */
/* ------------------------------------------------------------------ */

const CONTENT_DOC = doc(db, "portfolio", "content");
const CACHE_KEY = "portfolio-content-cache-v1";



/**
 * Last content received from Firestore, kept in localStorage so repeat
 * visitors see the current content immediately instead of the built-in
 * defaults flashing while the live data loads.
 */
export function loadCachedContent(): PortfolioContent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return mergeWithDefaults(JSON.parse(raw) as Partial<PortfolioContent>);
  } catch {
    return null;
  }
}

function cacheContent(data: Partial<PortfolioContent> | undefined): void {
  try {
    if (data) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(CACHE_KEY);
    }
  } catch {
    // Quota exceeded or storage unavailable — the live subscription still works.
  }
}

/**
 * Deep-merges saved data over the defaults so newly added fields in the
 * code always have a value even if the Firestore doc predates them.
 */
export function mergeWithDefaults(
  data: Partial<PortfolioContent> | undefined,
): PortfolioContent {
  if (!data) return DEFAULT_CONTENT;
  return {
    hero: { ...DEFAULT_CONTENT.hero, ...data.hero },
    about: { ...DEFAULT_CONTENT.about, ...data.about },
    skills: data.skills ?? DEFAULT_CONTENT.skills,
    experience: data.experience ?? DEFAULT_CONTENT.experience,
    projects: data.projects ?? DEFAULT_CONTENT.projects,
    education: data.education ?? DEFAULT_CONTENT.education,
    socials: data.socials ?? DEFAULT_CONTENT.socials,
  };
}

export async function loadContent(): Promise<PortfolioContent> {
  try {
    const snap = await getDoc(CONTENT_DOC);
    return mergeWithDefaults(
      snap.exists() ? (snap.data() as Partial<PortfolioContent>) : undefined,
    );
  } catch {
    return DEFAULT_CONTENT;
  }
}

/** Live subscription used by the public site so edits appear instantly. */
export function subscribeContent(
  onChange: (content: PortfolioContent) => void,
): () => void {
  return onSnapshot(
    CONTENT_DOC,
    (snap) => {
      const data = snap.exists()
        ? (snap.data() as Partial<PortfolioContent>)
        : undefined;
      cacheContent(data);
      onChange(mergeWithDefaults(data));
    },
    () => {
      // Permission or network errors: fall back to cache, then defaults.
      onChange(loadCachedContent() ?? DEFAULT_CONTENT);
    },
  );
}

export async function saveContent(content: PortfolioContent): Promise<void> {
  await setDoc(CONTENT_DOC, content);
}
