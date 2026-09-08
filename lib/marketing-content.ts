export interface MarketingHeroData {
  eyebrow: string;
  heading: string;
  highlightWords: string[];
  supportingText: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  statPills: string[];
}

export interface ExpertiseCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface EvolutionStep {
  label: string;
  description: string;
  tag: string;
}

export interface EvolutionCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  focusPoints: string[];
  icon: string;
  badge: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ToolCategory {
  category: string;
  icon: string;
  tools: string[];
}

export interface AdvantagePillar {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
}

export interface MarketingCapability {
  id: string;
  title: string;
  description: string;
  category: "SEO" | "AI & Discovery" | "Strategy & Growth" | "Technical";
  icon: string;
}

export interface StaticIndicator {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

/* ------------------------------------------------------------------ */
/* 1. Hero Data                                                        */
/* ------------------------------------------------------------------ */

export const HERO_DATA: MarketingHeroData = {
  eyebrow: "DIGITAL MARKETING",
  heading: "Digital Marketing That Gets Found, Understood & Chosen.",
  highlightWords: ["Found,", "Understood", "& Chosen."],
  supportingText:
    "I combine digital marketing strategy with technical expertise to build websites and online experiences that are optimized for search, visibility, discoverability and growth.",
  primaryCta: {
    label: "View My Expertise",
    href: "#expertise",
  },
  secondaryCta: {
    label: "Let's Work Together",
    href: "#contact",
  },
  statPills: [
    "SEO",
    "AEO",
    "GEO",
    "Content Strategy",
    "Analytics",
    "Technical Marketing",
  ],
};

/* ------------------------------------------------------------------ */
/* 2. "What I Do" (Digital Marketing Expertise)                        */
/* ------------------------------------------------------------------ */

export const EXPERTISE_CARDS: ExpertiseCardData[] = [
  {
    id: "seo",
    title: "SEO",
    subtitle: "Search Engine Optimization",
    description:
      "Optimize websites to improve organic visibility, rankings, technical health and search performance.",
    tags: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Keyword Research",
      "Local SEO",
      "SEO Audits",
    ],
    icon: "🔍",
  },
  {
    id: "aeo",
    title: "AEO",
    subtitle: "Answer Engine Optimization",
    description:
      "Structure content so businesses can become more visible in AI-powered search, answer engines and conversational search experiences.",
    tags: [
      "Question Research",
      "Structured Content",
      "FAQ Optimization",
      "Search Intent",
      "Featured Snippets",
      "AI Search Visibility",
    ],
    icon: "💬",
  },
  {
    id: "geo",
    title: "GEO",
    subtitle: "Generative Engine Optimization",
    description:
      "Optimize digital presence and content for visibility across modern generative search and AI discovery platforms.",
    tags: [
      "AI Search",
      "Entity Optimization",
      "Content Structure",
      "Brand Visibility",
      "Authority Signals",
      "AI Discoverability",
    ],
    icon: "✨",
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    subtitle: "Intent-Driven Communication",
    description:
      "Content designed around users, search intent and business objectives.",
    tags: [
      "Content Planning",
      "Blog Strategy",
      "Landing Pages",
      "Copywriting",
      "Search Intent",
      "Content Optimization",
    ],
    icon: "✍️",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    subtitle: "Proximity & Map Pack Dominance",
    description:
      "Help local businesses become easier to discover when customers search nearby.",
    tags: [
      "Google Business Profile",
      "Local Keywords",
      "Location Pages",
      "Citations",
      "Reviews",
      "Local Content",
    ],
    icon: "📍",
  },
  {
    id: "analytics",
    title: "Analytics & Performance",
    subtitle: "Data-Driven Decisions",
    description:
      "Understand what is working and use data to improve marketing decisions.",
    tags: [
      "Google Analytics",
      "Search Console",
      "Keyword Tracking",
      "Traffic Analysis",
      "Conversion Tracking",
      "Performance Reporting",
    ],
    icon: "📊",
  },
];

/* ------------------------------------------------------------------ */
/* 3. Search Visibility & Evolution                                    */
/* ------------------------------------------------------------------ */

export const EVOLUTION_STEPS: EvolutionStep[] = [
  {
    label: "Google Search",
    tag: "Traditional Indexing",
    description: "Matching keywords against indexed web documents.",
  },
  {
    label: "Featured Answers",
    tag: "Direct Snippets",
    description: "Extracting direct, high-confidence snippet answers.",
  },
  {
    label: "AI Search",
    tag: "Conversational Retrieval",
    description: "Multimodal and conversational search engines.",
  },
  {
    label: "Generative Discovery",
    tag: "LLM Syntheses",
    description: "AI-generated overviews synthesizing verified entities.",
  },
];

export const EVOLUTION_CARDS: EvolutionCard[] = [
  {
    id: "seo-card",
    title: "SEO",
    tagline: "Get discovered in search results.",
    description:
      "Traditional organic search rankings through keyword matching, crawlability, on-page optimization, and high-quality backlink authority.",
    focusPoints: [
      "Crawl efficiency & clean site hierarchy",
      "Search intent & keyword clusters",
      "Fast Core Web Vitals & mobile indexing",
    ],
    icon: "🎯",
    badge: "Search Engines",
  },
  {
    id: "aeo-card",
    title: "AEO",
    tagline: "Get selected for answers.",
    description:
      "Formatting and structuring information with precision so search engines can pull immediate, direct answers into featured snippets and voice assistants.",
    focusPoints: [
      "Question-focused semantic copywriting",
      "Deep schema markup & JSON-LD entities",
      "Concise answers paired with rich depth",
    ],
    icon: "💡",
    badge: "Answer Engines",
  },
  {
    id: "geo-card",
    title: "GEO",
    tagline: "Get discovered through generative AI.",
    description:
      "Optimizing brand entities, citations, and content architecture so Large Language Models cite, synthesize, and recommend your business.",
    focusPoints: [
      "Entity authority & knowledge graphs",
      "Unambiguous facts and quote-worthy context",
      "Multi-platform digital footprint signals",
    ],
    icon: "🔮",
    badge: "Generative AI",
  },
];

/* ------------------------------------------------------------------ */
/* 4. Marketing Process (5-Step Stepper)                              */
/* ------------------------------------------------------------------ */

export const MARKETING_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Foundation & Alignment",
    description:
      "Understand the business, audience, competitors and objectives.",
    deliverables: [
      "Business & audience profiling",
      "Current baseline audit",
      "Core growth goals alignment",
    ],
  },
  {
    step: "02",
    title: "Research",
    subtitle: "Intelligence & Opportunities",
    description:
      "Research keywords, search intent, competitors and opportunities.",
    deliverables: [
      "High-intent keyword mapping",
      "Competitor gap analysis",
      "AI & question query research",
    ],
  },
  {
    step: "03",
    title: "Optimize",
    subtitle: "Architecture & Foundation",
    description:
      "Improve technical SEO, content, structure and overall digital presence.",
    deliverables: [
      "Technical health & schema fixes",
      "On-page metadata & hierarchy",
      "Local listings & entity optimization",
    ],
  },
  {
    step: "04",
    title: "Create",
    subtitle: "Execution & Assets",
    description:
      "Build useful, search-friendly content and landing pages.",
    deliverables: [
      "High-converting landing pages",
      "Intent-matched articles & FAQs",
      "UX & speed-optimized layouts",
    ],
  },
  {
    step: "05",
    title: "Measure",
    subtitle: "Analysis & Iteration",
    description:
      "Analyze performance and continuously identify opportunities for improvement.",
    deliverables: [
      "Search Console & GA4 monitoring",
      "Ranking & conversion tracking",
      "Continuous optimization roadmap",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5. Tools & Technologies                                             */
/* ------------------------------------------------------------------ */

export const TOOLS_DATA: ToolCategory[] = [
  {
    category: "Search & SEO",
    icon: "🔎",
    tools: [
      "Google Search Console",
      "Google Analytics",
      "Google Business Profile",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
    ],
  },
  {
    category: "Content",
    icon: "📝",
    tools: [
      "Google Docs",
      "WordPress",
      "Canva",
      "Content Planning",
      "Keyword Research",
    ],
  },
  {
    category: "Technical",
    icon: "⚡",
    tools: [
      "Next.js",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Marketing",
    icon: "📈",
    tools: [
      "SEO",
      "AEO",
      "GEO",
      "Local SEO",
      "Content Strategy",
      "Conversion Optimization",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 6. Developer + Marketer Advantage                                   */
/* ------------------------------------------------------------------ */

export const DEVELOPER_ADVANTAGE: {
  heading: string;
  copy: string;
  marketingPillar: AdvantagePillar;
  techPillar: AdvantagePillar;
  centralConnection: string;
  centralDescription: string;
} = {
  heading: "I Don't Just Market Websites. I Understand How They're Built.",
  copy: "Because I also work with modern web technologies, I can approach digital marketing from both the marketing and technical side.",
  marketingPillar: {
    title: "Digital Marketing",
    subtitle: "Strategy, Audience & Growth",
    icon: "🎯",
    items: [
      "SEO strategy",
      "Keyword research",
      "Content optimization",
      "AEO",
      "GEO",
      "Local SEO",
      "Analytics",
    ],
  },
  techPillar: {
    title: "Development",
    subtitle: "Architecture, Speed & Code",
    icon: "💻",
    items: [
      "Next.js",
      "React",
      "JavaScript",
      "Technical SEO",
      "Website performance",
      "Responsive development",
      "UX implementation",
    ],
  },
  centralConnection: "Marketing + Technology = Better Digital Experiences",
  centralDescription:
    "No handoff friction between marketing ideas and code execution. Technical issues get solved in the codebase, not just flagged in a slide deck.",
};

/* ------------------------------------------------------------------ */
/* 7. Marketing Capabilities (What I Can Help With)                    */
/* ------------------------------------------------------------------ */

export const MARKETING_CAPABILITIES: MarketingCapability[] = [
  {
    id: "cap-1",
    title: "Website SEO",
    description:
      "Holistic search optimization ensuring every page is indexable, properly tagged, and positioned to rank for core services.",
    category: "SEO",
    icon: "🌐",
  },
  {
    id: "cap-2",
    title: "SEO Audits",
    description:
      "Deep diagnostics covering crawl errors, site architecture, metadata health, broken links, and ranking bottlenecks.",
    category: "Technical",
    icon: "🔬",
  },
  {
    id: "cap-3",
    title: "Keyword Research",
    description:
      "Identifying commercial, informational, and long-tail search terms that bring motivated customers, not just passive clicks.",
    category: "Strategy & Growth",
    icon: "🔑",
  },
  {
    id: "cap-4",
    title: "Local SEO",
    description:
      "Optimizing Google Business Profile, geo-targeted landing pages, citations, and local signals to capture nearby searches.",
    category: "SEO",
    icon: "📍",
  },
  {
    id: "cap-5",
    title: "Technical SEO",
    description:
      "Optimizing robots.txt, XML sitemaps, canonical tags, structured schema JSON-LD, and Core Web Vitals performance.",
    category: "Technical",
    icon: "⚙️",
  },
  {
    id: "cap-6",
    title: "Content Optimization",
    description:
      "Refining on-page copy, headings, and semantic depth to match search intent and outrank competing answers.",
    category: "Strategy & Growth",
    icon: "✏️",
  },
  {
    id: "cap-7",
    title: "AEO Strategy",
    description:
      "Structuring content to win answer snippets, FAQ sections, and top placements on conversational answer engines.",
    category: "AI & Discovery",
    icon: "💬",
  },
  {
    id: "cap-8",
    title: "GEO Strategy",
    description:
      "Positioning your brand and entity definitions to be reliably retrieved and cited in generative AI search overviews.",
    category: "AI & Discovery",
    icon: "✨",
  },
  {
    id: "cap-9",
    title: "Landing Page Optimization",
    description:
      "Designing responsive, fast-loading landing pages structured for immediate clarity and high conversion rates.",
    category: "Strategy & Growth",
    icon: "🚀",
  },
  {
    id: "cap-10",
    title: "Competitor Research",
    description:
      "Uncovering what competitors are ranking for, where their content falls short, and how to capture their market share.",
    category: "Strategy & Growth",
    icon: "🕵️",
  },
  {
    id: "cap-11",
    title: "Search Visibility",
    description:
      "Building a multi-channel discoverability footprint spanning search engines, directories, maps, and AI discovery tools.",
    category: "SEO",
    icon: "📡",
  },
  {
    id: "cap-12",
    title: "Website Performance",
    description:
      "Eliminating render-blocking assets, optimizing images, and ensuring blazing fast load speeds for search and UX.",
    category: "Technical",
    icon: "⚡",
  },
];

/* ------------------------------------------------------------------ */
/* 8. Results-Oriented Statement                                       */
/* ------------------------------------------------------------------ */

export const RESULTS_STATEMENT = {
  heading: "The Goal Isn't Just More Traffic.",
  highlightStatement: "It's getting the right people to discover you.",
  supportingCopy:
    "Visibility without relevance is vanity. My work focuses on building genuine discoverability, matching real intent, creating trust with your audience, and turning searchers into customers.",
  indicators: [
    {
      title: "Visibility",
      subtitle: "Be easier to discover.",
      description:
        "Rank in search results, map packs, and AI answer engines where potential clients are actively looking.",
      icon: "👁️",
    },
    {
      title: "Relevance",
      subtitle: "Match real search intent.",
      description:
        "Deliver exact answers and solutions that match what users actually need, building instant credibility.",
      icon: "🎯",
    },
    {
      title: "Conversion",
      subtitle: "Turn attention into action.",
      description:
        "Guide engaged visitors smoothly through clear messaging, fast performance, and frictionless CTAs.",
      icon: "⚡",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 9. CTA Section                                                      */
/* ------------------------------------------------------------------ */

export const MARKETING_CTA = {
  heading: "Have a Website That Deserves More Visibility?",
  description:
    "Let's build a stronger digital presence through better search visibility, better content and better digital experiences.",
  primaryButton: {
    label: "Start a Conversation",
    href: "#contact",
  },
  secondaryButton: {
    label: "View My Portfolio",
    href: "/",
  },
};
