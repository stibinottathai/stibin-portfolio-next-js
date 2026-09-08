export interface MarketingHeroData {
  eyebrow: string;
  author: {
    name: string;
    role: string;
    photoUrl: string;
    status: string;
  };
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

export interface AISkillCluster {
  id: string;
  category: string;
  icon: string;
  headline: string;
  description: string;
  skills: string[];
  badgeColor?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  type: string;
  statusBadge?: string;
  keywordHighlight?: string;
  highlight: string;
  description: string;
  impactMetrics: string[];
  tags: string[];
  icon: string;
  accentColor: string;
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
  category: "SEO" | "Paid Ads & Social" | "AI & Discovery" | "Strategy & Growth" | "Technical";
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
  eyebrow: "DIGITAL MARKETING, SEO & PAID GROWTH",
  author: {
    name: "Stibin Augustine",
    role: "Digital Marketer & Full-Stack Engineer",
    photoUrl: "/avatar.svg",
    status: "Available for Consultations & Growth",
  },
  heading: "Digital Marketing That Gets Found, Understood & Chosen.",
  highlightWords: ["Found,", "Understood", "& Chosen."],
  supportingText:
    "I combine organic search (SEO, AEO, GEO), targeted performance advertising (Google Ads & Meta Ads), social media management, and modern web engineering to scale brands and capture high-intent buyers.",
  primaryCta: {
    label: "View Proven Results",
    href: "#case-studies",
  },
  secondaryCta: {
    label: "Explore Skills & Tools",
    href: "#expertise",
  },
  statPills: [
    "Ranked #1 on Google",
    "Google Ads",
    "Meta Ads (FB & IG)",
    "Social Media Management",
    "GEO & AEO",
    "AI Automation",
    "Technical SEO",
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Proven Case Studies & Track Record                              */
/* ------------------------------------------------------------------ */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "btbanana",
    title: "Btbanana.com",
    domain: "btbanana.com",
    type: "Cross-Border E-Commerce & Tech Hardware",
    keywordHighlight: 'Ranked #1 for "buy laptops from dubai to india"',
    highlight: "Ranked #1 on Google & Generated High-Volume Inbound Leads",
    description:
      'Engineered an SEO-first cross-border business website targeting high-intent buyers searching to import laptops from Dubai to India. Successfully attained the #1 organic ranking on Google for "buy laptops from dubai to india", generating a massive pipeline of qualified B2B/B2C buyer leads.',
    impactMetrics: [
      "#1 Google SERP Ranking",
      "High-intent inbound lead generation",
      "Cross-border search intent optimization",
      "Complete technical SEO architecture",
    ],
    tags: [
      "E-Commerce SEO",
      "#1 Google Rank",
      "Lead Generation",
      "Intent Matching",
      "Commercial Keyword Strategy",
    ],
    icon: "💻",
    accentColor: "from-cyan-400 to-blue-500",
  },
  {
    id: "brandovastudio",
    title: "Brandovastudio.com",
    domain: "brandovastudio.com",
    type: "Creative & Digital Branding Agency",
    keywordHighlight: "SEO-Friendly Studio & Discovery Platform",
    highlight: "Search-Optimized Digital Presence Built for Client Acquisition",
    description:
      "Designed and developed an SEO-friendly agency web platform built to showcase portfolio assets, establish brand authority, and convert prospective enterprise clients seeking creative and branding solutions.",
    impactMetrics: [
      "Clean semantic site hierarchy",
      "High Core Web Vitals speed scores",
      "Optimized client inquiry conversion paths",
      "Entity & brand authority signals",
    ],
    tags: [
      "Agency SEO",
      "Brand Positioning",
      "Technical SEO",
      "Conversion UX",
      "Creative Portfolio",
    ],
    icon: "🎨",
    accentColor: "from-indigo-400 to-purple-500",
  },
  {
    id: "promax-cleaning",
    title: "Promax Cleaning",
    domain: "Promax Cleaning Upgrade",
    type: "Commercial & Residential Services",
    statusBadge: "Active Upgradation (PHP)",
    keywordHighlight: "PHP Platform Modernization & Local SEO",
    highlight: "Complete Platform Upgrade & Local Search Optimization",
    description:
      "Currently undergoing a comprehensive website modernization and platform upgrade on PHP. Revamping outdated backend architecture, drastically accelerating page load times, and building high-converting local service landing pages for top local search dominance.",
    impactMetrics: [
      "Full PHP website modernization",
      "Local map pack & service area targeting",
      "Performance & mobile speed overhaul",
      "High-ticket service lead funnel",
    ],
    tags: [
      "Platform Upgrade",
      "PHP Modernization",
      "Local SEO",
      "Service Pages",
      "Under Development",
    ],
    icon: "🧹",
    accentColor: "from-amber-400 to-emerald-500",
  },
];

/* ------------------------------------------------------------------ */
/* 3. "What I Do" (Digital Marketing & Paid Ads Expertise)             */
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
    id: "paid-ads",
    title: "Google Ads & Meta Ads",
    subtitle: "PPC & Paid Acquisition",
    description:
      "Design and manage high-ROI Google Search & Display campaigns alongside Meta (Facebook & Instagram) targeted ad funnels.",
    tags: [
      "Google Search Ads",
      "Meta Ads (FB & IG)",
      "Audience Targeting",
      "Retargeting Funnels",
      "Ad Copywriting",
      "ROAS Optimization",
    ],
    icon: "🎯",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    subtitle: "Brand Growth & Engagement",
    description:
      "Build consistent brand presence, community engagement, structured content calendars, and creative multi-platform distribution.",
    tags: [
      "Channel Strategy",
      "Instagram & Facebook",
      "LinkedIn Growth",
      "Content Calendars",
      "Community Engagement",
      "Social Analytics",
    ],
    icon: "📱",
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
      "Content designed around users, search intent, ad funnels, and core business objectives.",
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
      "Understand what is working and use data to improve marketing decisions and campaign ROI.",
    tags: [
      "Google Analytics 4",
      "Search Console",
      "Ad Conversion Tracking",
      "Traffic Analysis",
      "ROAS & CAC Tracking",
      "Performance Reporting",
    ],
    icon: "📊",
  },
];

/* ------------------------------------------------------------------ */
/* 4. Search Visibility & Evolution                                    */
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
/* 5. Comprehensive AI Tools & Automation Arsenal                      */
/* ------------------------------------------------------------------ */

export const AI_SKILL_CLUSTERS: AISkillCluster[] = [
  {
    id: "ai-search-seo",
    category: "AI Search & SEO",
    icon: "🧠",
    headline: "Generative & Answer Engine Dominance",
    description:
      "Harnessing AI to reverse-engineer search intent, map complex topical entities, and optimize visibility in AI overviews and conversational queries.",
    skills: [
      "AI Search Optimization",
      "GEO (Generative Engine Optimization)",
      "AEO (Answer Engine Optimization)",
      "AI Keyword Research",
      "Search Intent Analysis",
      "AI Content Optimization",
      "AI Competitor Research",
      "AI SERP Analysis",
      "Entity & Topic Optimization",
    ],
  },
  {
    id: "ai-content-copy",
    category: "AI Copywriting & Content",
    icon: "✍️",
    headline: "High-Volume, High-Quality Content Creation",
    description:
      "Leveraging prompt engineering and frontier LLMs to write, optimize, and repurpose high-converting, human-refined marketing and ad copy.",
    skills: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity",
      "AI Copywriting",
      "Ad Copy Generation",
      "Content Rewriting & Optimization",
      "AI-Assisted Blog Writing",
      "Prompt Engineering",
    ],
  },
  {
    id: "ai-automation-agents",
    category: "AI Automation & Agents",
    icon: "⚙️",
    headline: "Scalable Workflow Automation",
    description:
      "Building autonomous AI pipelines and agentic processes for deep competitor research, dataset analysis, and repetitive marketing operations.",
    skills: [
      "AI Workflow Automation",
      "AI Agents",
      "Prompt-Based Automation",
      "AI-Assisted Research",
      "AI Data Analysis",
      "AI Workflow Design",
    ],
  },
  {
    id: "ai-creative-media",
    category: "AI Creative, Design & Video",
    icon: "🎨",
    headline: "Multimodal Visual & Audio Generation",
    description:
      "Producing custom ad creatives, social visuals, video edits, and voice assets using generative media suites.",
    skills: [
      "Adobe Firefly",
      "Canva AI",
      "AI Image Generation & Editing",
      "Social Media Creative Generation",
      "Ad Creative Generation",
      "AI Video Generation & Editing",
      "AI Voice Generation",
      "AI Subtitles & Captions",
      "AI Content Repurposing",
    ],
  },
  {
    id: "ai-dev-engineering",
    category: "AI-Assisted Development",
    icon: "💻",
    headline: "Next-Gen AI Website Engineering",
    description:
      "Supercharging frontend and full-stack development with modern AI coding environments, intelligent debugging, and API integrations.",
    skills: [
      "Claude Code",
      "ChatGPT for Development",
      "AI-Assisted Coding",
      "AI Code Generation & Debugging",
      "AI Website Development",
      "AI API Integration",
      "Vibe Coding",
      "Next.js + AI",
    ],
  },
];

export const AI_CORE_PILLS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "Claude Code",
  "Adobe Firefly",
  "Canva AI",
  "Prompt Engineering",
  "Google Ads",
  "Meta Ads",
  "Social Media",
  "AI SEO",
  "GEO",
  "AEO",
  "AI Agents",
  "AI Automation",
  "AI-Assisted Development",
];

/* ------------------------------------------------------------------ */
/* 6. Marketing Process (5-Step Stepper)                              */
/* ------------------------------------------------------------------ */

export const MARKETING_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Foundation & Alignment",
    description:
      "Understand the business, audience, competitors, ad budgets, and objectives.",
    deliverables: [
      "Business & audience profiling",
      "Current baseline audit (SEO & Ads)",
      "Core growth goals alignment",
    ],
  },
  {
    step: "02",
    title: "Research",
    subtitle: "Intelligence & Opportunities",
    description:
      "Research high-intent keywords, audience personas, competitors, and ad opportunities.",
    deliverables: [
      "High-intent keyword & search mapping",
      "Competitor ad & SEO gap analysis",
      "Question & prompt query research",
    ],
  },
  {
    step: "03",
    title: "Optimize",
    subtitle: "Architecture & Campaign Setup",
    description:
      "Improve technical SEO, setup ad tracking pixels, build audience funnels, and refine social profiles.",
    deliverables: [
      "Technical health & schema fixes",
      "Conversion tracking & pixel setup",
      "Local listings & social profile branding",
    ],
  },
  {
    step: "04",
    title: "Create & Launch",
    subtitle: "Execution & Assets",
    description:
      "Build high-converting landing pages, creative ad copy, social assets, and search-friendly content.",
    deliverables: [
      "High-converting landing pages",
      "Targeted Google & Meta ad creatives",
      "Social media content calendars",
    ],
  },
  {
    step: "05",
    title: "Measure & Scale",
    subtitle: "Analysis & Iteration",
    description:
      "Analyze performance, optimize ROAS, adjust bids, and continuously scale winning channels.",
    deliverables: [
      "Search Console, GA4 & Ad Manager monitoring",
      "ROAS & conversion cost optimization",
      "Continuous growth roadmap",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 7. Tools & Technologies                                             */
/* ------------------------------------------------------------------ */

export const TOOLS_DATA: ToolCategory[] = [
  {
    category: "Paid Ads & Performance",
    icon: "🎯",
    tools: [
      "Google Ads",
      "Google Keyword Planner",
      "Meta Ads Manager",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Campaign Manager",
      "Ad Conversion Pixels",
      "Remarketing Funnels",
    ],
  },
  {
    category: "Social Media & Creative",
    icon: "📱",
    tools: [
      "Meta Business Suite",
      "Instagram Management",
      "LinkedIn Growth",
      "Canva",
      "Adobe Firefly",
      "Buffer / Hootsuite",
      "Content Calendars",
      "Social Analytics",
    ],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity",
      "Claude Code",
      "Adobe Firefly",
      "Canva AI",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    category: "Search & SEO Suites",
    icon: "🔎",
    tools: [
      "Google Search Console",
      "Google Analytics 4",
      "Google Business Profile",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
    ],
  },
  {
    category: "Content & Copywriting",
    icon: "📝",
    tools: [
      "SEO Copywriting",
      "Ad Copywriting",
      "Google Docs",
      "WordPress",
      "Content Planning",
      "Search Intent Mapping",
    ],
  },
  {
    category: "Technical & Code",
    icon: "⚡",
    tools: [
      "Next.js",
      "React",
      "JavaScript",
      "PHP",
      "HTML5 & CSS3",
      "Tailwind CSS",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 8. Developer + Marketer Advantage                                   */
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
  copy: "Because I also work with modern web technologies, I can approach digital marketing from both the marketing strategy and technical engineering side.",
  marketingPillar: {
    title: "Digital Marketing, Ads & AI",
    subtitle: "Strategy, Audience & Growth",
    icon: "🎯",
    items: [
      "SEO strategy & #1 rankings",
      "Google Ads (Search & Display PPC)",
      "Meta Ads (Facebook & Instagram Funnels)",
      "Social media management & strategy",
      "Keyword research & search intent",
      "AEO & GEO optimization",
      "AI workflow automation & analytics",
    ],
  },
  techPillar: {
    title: "Technical Engineering",
    subtitle: "Architecture, Speed & Code",
    icon: "💻",
    items: [
      "Next.js & React architecture",
      "PHP modernization & upgrades",
      "PPC landing page performance",
      "Conversion tracking & pixel code",
      "Technical SEO & schema JSON-LD",
      "Core Web Vitals & mobile speed",
      "AI code generation with Claude Code",
    ],
  },
  centralConnection: "Marketing Strategy + Technical Execution = Scalable Growth",
  centralDescription:
    "No handoff friction between marketing campaigns and code execution. Ad pixels, landing pages, technical SEO bottlenecks, and performance tuning are implemented directly in the codebase.",
};

/* ------------------------------------------------------------------ */
/* 9. Marketing Capabilities (What I Can Help With)                    */
/* ------------------------------------------------------------------ */

export const MARKETING_CAPABILITIES: MarketingCapability[] = [
  {
    id: "cap-1",
    title: "Website SEO",
    description:
      "Holistic search optimization ensuring every page is indexable, properly tagged, and positioned to rank for core commercial terms.",
    category: "SEO",
    icon: "🌐",
  },
  {
    id: "cap-google-ads",
    title: "Google Ads Management",
    description:
      "High-intent Search, Display, and Performance Max campaigns engineered for maximum ROAS, lead capture, and low cost-per-click.",
    category: "Paid Ads & Social",
    icon: "🎯",
  },
  {
    id: "cap-meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Targeted paid social funnels, custom lookalikes, creative split testing, and retargeting campaigns built for measurable conversions.",
    category: "Paid Ads & Social",
    icon: "📊",
  },
  {
    id: "cap-social-mgmt",
    title: "Social Media Management",
    description:
      "Multi-channel social strategy, content scheduling, brand voice consistency, creative storytelling, and active audience engagement.",
    category: "Paid Ads & Social",
    icon: "📱",
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
      "Identifying high-intent commercial and long-tail search terms that bring motivated customers, not just passive clicks.",
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
      "Refining on-page copy, headings, and semantic depth with AI tools to match search intent and outrank competing answers.",
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
      "Designing responsive, fast-loading landing pages structured for immediate clarity and high conversion rates from ads and organic search.",
    category: "Strategy & Growth",
    icon: "🚀",
  },
];

/* ------------------------------------------------------------------ */
/* 10. Results-Oriented Statement                                      */
/* ------------------------------------------------------------------ */

export const RESULTS_STATEMENT = {
  heading: "The Goal Isn't Just More Traffic.",
  highlightStatement: "It's getting the right people to discover you.",
  supportingCopy:
    "Visibility without relevance is vanity. My work focuses on building genuine discoverability through organic search and precision paid ads, matching real intent, creating trust with your audience, and turning searchers into high-value customers.",
  indicators: [
    {
      title: "Visibility",
      subtitle: "Be easier to discover.",
      description:
        "Rank in search results, map packs, social feeds, and AI answer engines where potential clients are actively looking.",
      icon: "👁️",
    },
    {
      title: "Relevance",
      subtitle: "Match real search intent.",
      description:
        "Deliver exact answers and solutions that match what users actually need, building instant credibility and high ad quality scores.",
      icon: "🎯",
    },
    {
      title: "Conversion",
      subtitle: "Turn attention into action.",
      description:
        "Guide engaged visitors smoothly through clear messaging, fast performance, and frictionless CTAs that maximize ROI.",
      icon: "⚡",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 11. CTA Section                                                     */
/* ------------------------------------------------------------------ */

export const MARKETING_CTA = {
  heading: "Have a Website That Deserves More Visibility?",
  description:
    "Let's build a stronger digital presence through better search visibility, Google & Meta Ads, social media management, and cutting-edge AI tools.",
  primaryButton: {
    label: "Start a Conversation",
    href: "#contact",
  },
  secondaryButton: {
    label: "View My Portfolio",
    href: "/",
  },
};
