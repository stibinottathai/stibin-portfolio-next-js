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

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  tech: string[];
  link?: string;
  linkText?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Development" | "Marketing" | "AI & GEO";
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
  badgeUrl?: string;
  certificateUrl?: string;
  skills: string[];
  description?: string;
}

export interface PortfolioContent {
  hero: Hero;
  about: About;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  socials: SocialLink[];
}

/* ------------------------------------------------------------------ */
/* Core Services (Full-Stack, Mobile, AI, Digital Marketing)          */
/* ------------------------------------------------------------------ */

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "full-stack-web",
    title: "Full-Stack Web Development",
    category: "Web & SaaS Engineering",
    description:
      "High-performance web applications, responsive platforms, and bespoke SaaS products built with Next.js, React, Node.js, and TypeScript. Engineered for lightning-fast speeds, secure architecture, and optimal SEO crawlability.",
    deliverables: [
      "Custom Next.js & React Web Apps",
      "RESTful API & Database Architecture",
      "Interactive Dashboards & Portals",
      "Speed & Core Web Vitals Optimization",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS"],
    link: "#projects",
    linkText: "View Web Projects →",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    category: "iOS & Android Apps",
    description:
      "Production-grade cross-platform mobile apps for iOS and Android using Flutter and Dart. Crafted with Clean Architecture, predictable reactive state management (Riverpod/Bloc), offline support, and smooth 60fps animations.",
    deliverables: [
      "Cross-Platform iOS & Android Apps",
      "Clean Architecture & Riverpod/Bloc",
      "Payment Gateways & KYC Integration",
      "Real-Time Sync with Firebase / Supabase",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Clean Architecture", "REST APIs"],
    link: "#projects",
    linkText: "View Mobile Apps →",
  },
  {
    id: "ai-solutions",
    title: "AI Development & Automations",
    category: "AI Integrations & Agents",
    description:
      "Integrating cutting-edge generative AI, OpenAI/LLM APIs, AI agents, intelligent chatbots, and automated workflows into web and mobile ecosystems to automate repetitive business tasks and supercharge user engagement.",
    deliverables: [
      "OpenAI & LLM API Integrations",
      "Custom AI Chatbots & Assistants",
      "Business Workflow Automation",
      "AI-Assisted Web & Mobile Features",
    ],
    tech: ["OpenAI API", "LLMs", "AI Agents", "Python", "Prompt Engineering"],
    link: "/digital-marketing#ai-stack",
    linkText: "Explore AI Capabilities →",
  },
  {
    id: "digital-marketing-seo",
    title: "Digital Marketing, SEO, AEO & GEO",
    category: "Search & Growth Optimization",
    description:
      "Full-funnel digital marketing combining organic search (#1 Google SEO rankings), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO for ChatGPT/Perplexity), and high-ROI Google & Meta ad campaigns.",
    deliverables: [
      "Technical, On-Page & Local Dubai SEO",
      "AEO & GEO Optimization (AI & Answer Search)",
      "Google Ads (Search, Display, PMax)",
      "Meta Ads (Facebook & Instagram Funnels)",
    ],
    tech: ["Technical SEO", "AEO", "GEO", "Google Ads", "Meta Ads", "Analytics"],
    link: "/digital-marketing",
    linkText: "View Marketing Case Studies →",
  },
];

/* ------------------------------------------------------------------ */
/* Homepage FAQs (AEO & GEO High-Intent Q&A)                           */
/* ------------------------------------------------------------------ */

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "Who is Stibin Augustine?",
    answer:
      "Stibin Augustine is a Full-Stack Developer and Digital Marketing Specialist based in Bur Dubai, Dubai, UAE. With 4+ years of hands-on experience, he builds scalable mobile applications (Flutter), modern web platforms (Next.js/React), AI integrations, and drives revenue-focused digital marketing, SEO, AEO, and GEO search campaigns for clients in the UAE and internationally.",
    category: "General",
  },
  {
    question: "What services does Stibin Augustine offer in Dubai, UAE?",
    answer:
      "Stibin Augustine offers four core services: (1) Full-Stack Web Development (Next.js, React, Node.js, TypeScript), (2) Cross-Platform Mobile App Development (Flutter for iOS & Android), (3) AI Integrations & Workflow Automation (OpenAI API, LLMs, AI agents), and (4) Digital Marketing & Search Optimization (Technical SEO, #1 Google rankings, AEO, GEO, Google Ads, and Meta Ads).",
    category: "General",
  },
  {
    question: "Is Stibin Augustine available for freelance projects and remote work?",
    answer:
      "Yes. Stibin is based in Bur Dubai, Dubai, UAE for local UAE engagements and on-site meetings, and also works with international clients remotely across the GCC, Europe, North America, and Asia for full-stack development, mobile apps, and digital marketing consulting.",
    category: "General",
  },
  {
    question: "What technologies does Stibin Augustine specialize in?",
    answer:
      "For front-end & web: Next.js, React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Zustand. For mobile: Flutter, Dart, Riverpod, Bloc, Provider, Clean Architecture, and MVVM. For cloud/backend: Firebase (Auth, Firestore, FCM), Supabase, RESTful APIs, and Node.js. For marketing & AI: Google Search Console, Google Ads, Meta Ads Manager, OpenAI APIs, and AI workflow automation.",
    category: "Development",
  },
  {
    question: "What is AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)?",
    answer:
      "AEO (Answer Engine Optimization) formats and structures your digital content to win direct answers in voice search, Google AI Overviews, and conversational AI assistants. GEO (Generative Engine Optimization) optimizes semantic entities, facts, and authority signals so generative AI platforms (like ChatGPT, Perplexity, Gemini, and Claude) accurately identify and cite your brand when users ask for recommendations.",
    category: "AI & GEO",
  },
  {
    question: "Can Stibin Augustine build AI-powered web and mobile applications?",
    answer:
      "Yes. Stibin integrates AI APIs, large language models (LLMs), conversational agents, and automated data pipelines into Next.js web applications and Flutter mobile apps, enabling intelligent features like automated analysis, AI chat, and workflow automation.",
    category: "AI & GEO",
  },
  {
    question: "How can I contact or hire Stibin Augustine?",
    answer:
      "You can reach Stibin Augustine directly via email at stibinaugustine3047@gmail.com, by phone or WhatsApp at +971 56 556 4136, or by submitting the contact form on this website. He responds promptly to project inquiries, consulting requests, and contract opportunities.",
    category: "General",
  },
];

/* ------------------------------------------------------------------ */
/* Default content (seeded from Stibin's CVs & positioning)           */
/* ------------------------------------------------------------------ */

export const DEFAULT_CONTENT: PortfolioContent = {
  hero: {
    name: "Stibin Augustine",
    photoUrl: "/avatar.svg",
    headline: "Full-Stack Developer & Digital Marketing Specialist",
    roles: [
      "Full-Stack Developer (Next.js & React)",
      "Digital Marketer & SEO Specialist",
      "Mobile App Engineer (Flutter)",
      "AI Integrations & Automations Developer",
    ],
    tagline:
      "I engineer production-grade web & mobile applications and deliver high-impact digital marketing, SEO, AEO, and GEO visibility for businesses in Dubai, UAE, and worldwide.",
    location: "Bur Dubai, Dubai, UAE",
    email: "stibinaugustine3047@gmail.com",
    phone: "+971 56 556 4136",
    availability: "Available for Projects & Roles · Dubai, UAE",
    resumeUrl: "",
  },
  about: {
    summary:
      "Results-driven Full-Stack Developer and Digital Marketing Specialist based in Dubai, UAE, with 4+ years of hands-on experience delivering scalable web applications, cross-platform mobile apps, and high-ROI digital marketing campaigns. Proven track record building enterprise applications for the Qatar Olympic Committee, fintech cross-border remittance platforms in the UAE, and achieving #1 Google organic rankings for commercial search terms. Expert in Next.js, React, TypeScript, Flutter, Firebase, AI integrations (OpenAI/LLMs), technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance advertising across Google Ads and Meta Ads.",
    stats: [
      { value: "4+", label: "Years Hands-On Experience" },
      { value: "15+", label: "Apps & Web Platforms Shipped" },
      { value: "#1", label: "Google Organic Rankings Achieved" },
      { value: "100%", label: "Dubai & Global Client Availability" },
    ],
  },
  skills: [
    {
      category: "Full-Stack Web Development",
      items: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Node.js",
        "Tailwind CSS",
        "HTML5 / Semantic CSS3",
        "Zustand",
        "REST APIs",
      ],
    },
    {
      category: "Mobile App Development",
      items: [
        "Flutter (Mobile & Web)",
        "Dart",
        "Riverpod",
        "Bloc",
        "Provider",
        "Clean Architecture",
        "MVVM",
        "Android & iOS Deployment",
      ],
    },
    {
      category: "Digital Marketing, SEO & Paid Ads",
      items: [
        "Technical & On-Page SEO",
        "AEO (Answer Engine Optimization)",
        "GEO (Generative Engine Optimization)",
        "Google Ads (PPC & Search)",
        "Meta Ads (Facebook & Instagram)",
        "Google Search Console",
        "Social Media Strategy",
        "Keyword Intent Research",
      ],
    },
    {
      category: "AI, Backend & Cloud Architecture",
      items: [
        "AI API Integrations (OpenAI / LLMs)",
        "AI Workflow Automation",
        "AI-Assisted Coding",
        "Firebase (Auth, Firestore, FCM)",
        "Supabase",
        "Git & GitHub",
        "Vercel Deployment",
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
  certifications: [
    {
      title: "AI Aware 2025 — AI For All",
      issuer: "Intel & Digital India (CBSE)",
      issueDate: "16/08/2026 · Verified Certificate",
      credentialId: "INTEL-AI-AWARE-2025",
      credentialUrl: "/certifications/intel-ai-aware-certificate.png",
      badge: "Intel AI Certified",
      badgeUrl: "/certifications/intel-ai-aware-badge.png",
      certificateUrl: "/certifications/intel-ai-aware-certificate.png",
      description:
        "Official certification for completing the AI Aware stage of the national AI For All initiative by Intel, Digital India, and CBSE. Demonstrates foundational mastery of AI domains, computer vision, natural language processing, and responsible AI ethics.",
      skills: ["AI Fundamentals", "Computer Vision", "NLP", "AI Ethics", "Intel AI For All"],
    },
    {
      title: "AI Appreciate 2025 — AI For All",
      issuer: "Intel & Digital India (CBSE)",
      issueDate: "16/08/2026 · Verified Certificate",
      credentialId: "INTEL-AI-APPRECIATE-2025",
      credentialUrl: "/certifications/intel-ai-appreciate-certificate.png",
      badge: "Intel AI Certified",
      badgeUrl: "/certifications/intel-ai-appreciate-badge.png",
      certificateUrl: "/certifications/intel-ai-appreciate-certificate.png",
      description:
        "Official certification for completing the AI Appreciate stage of the national AI For All initiative by Intel, Digital India, and CBSE. Covers applied artificial intelligence, machine learning project lifecycle, algorithmic fairness, and practical problem-solving with AI.",
      skills: ["Applied AI", "Machine Learning", "AI Project Lifecycle", "Algorithmic Fairness", "Intel AI For All"],
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

const getPortfolioDoc = () => doc(db, "portfolio", "content");
const CACHE_KEY = "portfolio-content-cache-v2";



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
    certifications:
      data.certifications && data.certifications.length > 0
        ? data.certifications
        : DEFAULT_CONTENT.certifications,
    education: data.education ?? DEFAULT_CONTENT.education,
    socials: data.socials ?? DEFAULT_CONTENT.socials,
  };
}

export async function loadContent(): Promise<PortfolioContent> {
  try {
    const snap = await getDoc(getPortfolioDoc());
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
    getPortfolioDoc(),
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
  await setDoc(getPortfolioDoc(), content);
}
