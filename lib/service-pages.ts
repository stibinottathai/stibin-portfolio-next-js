export const SITE_URL = "https://stibin.website";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  summary: string;
  keywords: string[];
  outcomes: string[];
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  technologies: string[];
  proofPoints: string[];
  faqs: ServiceFaq[];
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "web-developer-dubai",
    eyebrow: "Freelance web development · Dubai, UAE",
    title: "Freelance Web Developer in Dubai",
    shortTitle: "Web Development",
    metaTitle: "Freelance Web Developer in Dubai, UAE",
    metaDescription:
      "Hire Stibin Augustine, a freelance web developer in Dubai for fast Next.js, React, WordPress and full-stack websites built for SEO, leads and growth.",
    description:
      "Custom, search-ready websites and web applications for Dubai businesses—from fast marketing sites to secure full-stack platforms.",
    summary:
      "I am a Dubai-based freelance web developer with 4+ years of experience delivering responsive websites, SaaS products, dashboards and e-commerce experiences. Every build combines clear user journeys, semantic HTML, technical SEO, mobile performance and maintainable code so the website can attract traffic and convert it into enquiries.",
    keywords: [
      "freelance web developer",
      "freelance web developer Dubai",
      "web developer in Dubai",
      "web developer in UAE",
      "best web developer Dubai",
      "top web developer Dubai",
      "full stack developer Dubai",
      "website developer near me",
      "website development Dubai UAE",
      "web developer portfolio Dubai",
    ],
    outcomes: [
      "A fast, mobile-first website aligned with your business goals",
      "SEO-friendly architecture, metadata and structured content",
      "Accessible interfaces with clear calls to action",
      "Reliable deployment, analytics and conversion tracking",
    ],
    capabilities: [
      {
        title: "Business & portfolio websites",
        description:
          "Professional websites that explain your offer clearly, establish trust and turn local or international visitors into qualified enquiries.",
      },
      {
        title: "Full-stack web applications",
        description:
          "Secure portals, dashboards, booking flows, e-commerce experiences and custom business tools with robust APIs and data layers.",
      },
      {
        title: "Website redesign & optimization",
        description:
          "Modernization of slow or outdated sites with improved UX, Core Web Vitals, mobile usability, analytics and technical SEO.",
      },
    ],
    process: [
      { title: "Discover", description: "Define the audience, commercial goal, required features and measurable success criteria." },
      { title: "Design & architect", description: "Plan the information hierarchy, user journeys, technical stack and search-friendly page structure." },
      { title: "Build & test", description: "Develop responsive interfaces, integrations and content with performance and accessibility checks." },
      { title: "Launch & improve", description: "Deploy, connect analytics and Search Console, then refine using real performance data." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "WordPress", "Firebase", "Supabase", "Tailwind CSS"],
    proofPoints: [
      "4+ years of hands-on web and app development",
      "Next.js platforms, e-commerce, publishing and business tools shipped",
      "Development and SEO handled together—not as separate handoffs",
      "Based in Bur Dubai and available across the UAE or remotely",
    ],
    faqs: [
      {
        question: "How do I find a freelance web developer near me in Dubai?",
        answer:
          "Stibin Augustine is based in Bur Dubai and works with clients across Dubai and the UAE. You can arrange an initial call or discuss an on-site meeting when the project requires it. Remote delivery is also available.",
      },
      {
        question: "What does a freelance web developer in Dubai cost?",
        answer:
          "The cost depends on page count, design complexity, content, integrations and whether the project is a website or a custom web application. After a short discovery call, you receive a defined scope, timeline and project estimate.",
      },
      {
        question: "Can you build an SEO-friendly website?",
        answer:
          "Yes. Builds include semantic structure, crawlable navigation, page metadata, canonical URLs, structured data, sitemap and robots controls, image optimization, mobile performance and analytics foundations where relevant.",
      },
      {
        question: "Do you maintain websites after launch?",
        answer:
          "Yes. Ongoing support can include updates, monitoring, speed improvements, technical SEO, content changes and feature development based on an agreed maintenance scope.",
      },
    ],
  },
  {
    slug: "nextjs-developer-dubai",
    eyebrow: "Next.js & React engineering · Dubai, UAE",
    title: "Freelance Next.js Developer in Dubai",
    shortTitle: "Next.js Development",
    metaTitle: "Freelance Next.js Developer in Dubai, UAE",
    metaDescription:
      "Dubai freelance Next.js developer for fast, SEO-ready React websites, SaaS apps, dashboards and e-commerce platforms using TypeScript and modern APIs.",
    description:
      "Production-ready Next.js and React development for companies that need speed, search visibility and a codebase built to scale.",
    summary:
      "I build Next.js applications with server-rendered, search-accessible content, responsive React interfaces and TypeScript-first architecture. Projects can range from high-converting corporate websites to authenticated dashboards, e-commerce platforms, AI-enabled tools and content systems.",
    keywords: [
      "freelance Next.js developer",
      "Next.js developer Dubai",
      "NextJS developer UAE",
      "freelance React developer Dubai",
      "React developer UAE",
      "full stack Next.js developer",
      "Next.js website development Dubai",
      "TypeScript developer Dubai",
      "Next.js SEO developer",
    ],
    outcomes: [
      "Server-rendered pages that search engines and AI crawlers can understand",
      "Fast navigation and optimized loading on mobile devices",
      "Type-safe, component-based code that is easier to maintain",
      "API, database, authentication and third-party integrations",
    ],
    capabilities: [
      { title: "Next.js websites", description: "Content-rich marketing and corporate websites using the App Router, reusable components and SEO-focused rendering." },
      { title: "SaaS & dashboards", description: "Authenticated products, admin panels, customer portals and workflow tools with practical data architecture." },
      { title: "Commerce & integrations", description: "Product experiences, payments, Firebase or Supabase services, REST APIs, analytics and automation integrations." },
    ],
    process: [
      { title: "Technical discovery", description: "Clarify users, features, content model, integrations, traffic expectations and deployment constraints." },
      { title: "Architecture", description: "Choose rendering and caching strategies, component boundaries, data flows and an SEO-safe URL hierarchy." },
      { title: "Implementation", description: "Build in TypeScript with responsive UI, validation, error handling and measurable performance budgets." },
      { title: "Release", description: "Test production behavior, deploy, connect monitoring and document the important operating decisions." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Firebase", "Supabase", "REST APIs", "Vercel"],
    proofPoints: [
      "Multiple production Next.js platforms and portfolio projects",
      "Experience with e-commerce, publishing, AI tools and secure utilities",
      "Strong overlap between web engineering, technical SEO and conversion UX",
      "Dubai-based availability for UAE and remote projects",
    ],
    faqs: [
      { question: "Why hire a freelance Next.js developer in Dubai?", answer: "A Dubai-based freelancer offers direct communication and local market context while keeping delivery flexible. Next.js is well suited to fast websites and full-stack products that need modern React UX plus crawlable server-rendered content." },
      { question: "Is Next.js good for SEO?", answer: "Yes, when implemented correctly. Next.js supports server rendering, static generation, metadata, sitemaps, structured data and image optimization. Technical choices still need to match the site’s content and search intent." },
      { question: "Can you migrate an existing React or WordPress site to Next.js?", answer: "Yes. A migration starts with URL, content, analytics and backlink mapping so valuable pages and redirects are preserved. The new site can use a headless CMS or another content workflow depending on your team." },
      { question: "Can you work on an existing Next.js codebase?", answer: "Yes. I can audit and improve an existing application, fix performance or SEO issues, add features, integrate APIs and modernize architecture after reviewing the repository and deployment setup." },
    ],
  },
  {
    slug: "wordpress-developer-dubai",
    eyebrow: "WordPress websites · Dubai, UAE",
    title: "Freelance WordPress Developer in Dubai",
    shortTitle: "WordPress Development",
    metaTitle: "Freelance WordPress Developer in Dubai, UAE",
    metaDescription:
      "Freelance WordPress developer in Dubai for responsive business websites, landing pages, SEO improvements, speed optimization and ongoing support.",
    description:
      "Practical WordPress development for Dubai businesses that need an editable, responsive website with strong search and performance foundations.",
    summary:
      "I help businesses create and improve WordPress websites with clear page structure, responsive layouts, conversion-focused content and sound on-page SEO. Engagements can include new builds, landing pages, technical cleanup, performance work, analytics and ongoing website updates.",
    keywords: [
      "WordPress developer",
      "freelance WordPress developer",
      "freelance WordPress developer in Dubai",
      "WordPress developer Dubai UAE",
      "WordPress Dubai UAE",
      "WordPress website developer near me",
      "WordPress SEO Dubai",
      "WordPress speed optimization Dubai",
      "WordPress website maintenance UAE",
    ],
    outcomes: [
      "An editable website aligned with your brand and customer journey",
      "Responsive pages that work across common screen sizes",
      "Cleaner on-page SEO, crawlability and conversion paths",
      "A maintainable setup with a defined update workflow",
    ],
    capabilities: [
      { title: "Business websites", description: "Structured service, company, portfolio and contact pages designed to communicate value and generate enquiries." },
      { title: "Landing pages", description: "Focused pages for SEO, Google Ads or Meta Ads campaigns with clear copy, tracking and calls to action." },
      { title: "Optimization & support", description: "Speed, mobile usability, metadata, content structure, analytics, fixes and agreed ongoing maintenance." },
    ],
    process: [
      { title: "Audit & brief", description: "Review the business goals, audience, content, current website and required editing workflow." },
      { title: "Structure & content", description: "Map useful pages and search intent before configuring layouts and reusable content sections." },
      { title: "Build & optimize", description: "Implement responsive pages, forms, analytics and essential technical and on-page SEO." },
      { title: "Handover & support", description: "Launch safely, explain the editing workflow and agree any ongoing update or optimization plan." },
    ],
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "Technical SEO", "Google Analytics", "Search Console"],
    proofPoints: [
      "Web development and digital marketing knowledge in one engagement",
      "SEO-aware page planning rather than design-only delivery",
      "Landing page and conversion tracking experience",
      "Local availability from Bur Dubai plus remote support",
    ],
    faqs: [
      { question: "Are you a freelance WordPress developer in Dubai?", answer: "Yes. Stibin Augustine is based in Bur Dubai and supports WordPress and broader web projects for businesses across Dubai and the UAE, with remote collaboration also available." },
      { question: "Can you improve an existing WordPress website?", answer: "Yes. Work can include page and content updates, responsive layout fixes, on-page SEO, metadata, speed improvements, analytics, conversion tracking and landing pages after an initial audit." },
      { question: "Do you provide WordPress SEO services?", answer: "Yes. WordPress SEO work can cover search intent and page mapping, headings, internal links, metadata, schema, indexing controls, sitemap review, speed and Search Console setup. Rankings depend on competition, authority, content and ongoing execution." },
      { question: "Should I choose WordPress or Next.js?", answer: "WordPress is often a practical choice when a familiar editing interface and conventional content workflow are priorities. Next.js can be stronger for highly custom products, application behavior and fine-grained performance. I can recommend the better fit after reviewing the requirements." },
    ],
  },
  {
    slug: "app-developer-dubai",
    eyebrow: "iOS & Android app development · Dubai, UAE",
    title: "Freelance App Developer in Dubai",
    shortTitle: "Mobile App Development",
    metaTitle: "Freelance App Developer in Dubai | iOS & Android",
    metaDescription:
      "Hire a freelance app developer in Dubai for cross-platform iOS and Android apps, Flutter MVPs, Firebase integrations and scalable mobile products.",
    description:
      "Cross-platform mobile app development for startups and businesses—from MVP planning to reliable iOS and Android delivery.",
    summary:
      "I am a freelance mobile app developer in Dubai with 4+ years of Flutter experience across enterprise, fintech, government and business applications. I build maintainable cross-platform apps for iOS and Android with clean architecture, dependable state management, secure APIs and responsive interfaces.",
    keywords: [
      "freelance app developer",
      "freelance app developer in Dubai",
      "app developer in Dubai",
      "mobile app developer Dubai",
      "best app developer Dubai",
      "best mobile app developer",
      "best iOS app developer in Dubai",
      "Android app developer Dubai",
      "cross platform app developer Dubai",
      "app developer portfolio",
    ],
    outcomes: [
      "One maintainable product for both iOS and Android",
      "Clean architecture suited to continued feature development",
      "Secure API, authentication, payment and notification integrations",
      "Testing, release preparation and post-launch support options",
    ],
    capabilities: [
      { title: "Startup MVPs", description: "Focused first releases that validate the product idea without losing sight of security, usability or future growth." },
      { title: "Business & enterprise apps", description: "Workflow, HR, fintech, inventory, billing and operations apps backed by practical architecture and integrations." },
      { title: "Existing app development", description: "Feature delivery, API integration, UI improvements, performance investigation and architecture cleanup for Flutter codebases." },
    ],
    process: [
      { title: "Product discovery", description: "Define target users, core problem, must-have journeys, technical constraints and a realistic first release." },
      { title: "UX & architecture", description: "Map screens and states, choose integrations and establish maintainable app and data architecture." },
      { title: "Iterative development", description: "Build testable features in milestones with regular demos and feedback rather than a single late reveal." },
      { title: "Release & support", description: "Prepare production builds, assist with store requirements and plan monitoring, fixes and future releases." },
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Bloc", "Firebase", "REST APIs", "Clean Architecture", "iOS & Android"],
    proofPoints: [
      "4+ years specializing in Flutter mobile development",
      "Enterprise app delivered for the Qatar Olympic Committee",
      "UAE cross-border fintech and KYC/payment experience",
      "Multiple business, utility and AI-enabled app projects",
    ],
    faqs: [
      { question: "How do I hire an app developer near me in Dubai?", answer: "Stibin Augustine is based in Bur Dubai and available for mobile app projects across Dubai and the UAE. Start with a discovery call to review the idea, users, features, timeline and existing designs or backend systems." },
      { question: "Do you build both Android and iOS apps?", answer: "Yes. I use Flutter to build cross-platform applications for Android and iOS from one maintainable codebase while adapting platform-specific behavior where the product requires it." },
      { question: "Can you build a mobile app MVP?", answer: "Yes. I can help reduce an idea to a clear first release, identify technical risks, plan the API and data model, build the Flutter app and prepare it for testing and store submission." },
      { question: "What types of apps have you developed?", answer: "My experience includes enterprise HR workflows, cross-border remittance, billing, inventory, expense tracking, construction operations, healthcare utilities and AI-assisted products. Selected examples are available in the portfolio." },
    ],
  },
  {
    slug: "flutter-developer-dubai",
    eyebrow: "Flutter specialist · Dubai, UAE",
    title: "Freelance Flutter Developer in Dubai",
    shortTitle: "Flutter Development",
    metaTitle: "Freelance Flutter Developer in Dubai, UAE",
    metaDescription:
      "Dubai Flutter developer with 4+ years building cross-platform iOS, Android and web apps using Dart, Riverpod, Bloc, Firebase and clean architecture.",
    description:
      "Specialist Flutter engineering for scalable cross-platform products, enterprise workflows and polished mobile experiences.",
    summary:
      "I build Flutter apps for iOS, Android and web using Clean Architecture and dependable state-management patterns such as Riverpod, Bloc and Provider. My production experience includes government enterprise workflows, UAE fintech, secure API integrations, payment and KYC flows, notifications and reusable responsive UI systems.",
    keywords: [
      "Flutter developer",
      "Flutter developer Dubai",
      "best Flutter developer in Dubai",
      "top Flutter developer",
      "freelance Flutter developer UAE",
      "cross platform developer Dubai",
      "best freelance cross platform developer",
      "Dart developer Dubai",
      "Flutter app development Dubai",
      "Flutter developer near me",
    ],
    outcomes: [
      "Consistent iOS and Android experiences from one Flutter codebase",
      "Predictable state management and testable application layers",
      "Responsive components for phones, tablets and Flutter web",
      "Production integrations with APIs, Firebase and notifications",
    ],
    capabilities: [
      { title: "New Flutter applications", description: "Architecture and development for MVPs, business apps and production products across iOS and Android." },
      { title: "Enterprise Flutter", description: "Complex roles, approval flows, reusable design systems, REST integrations and maintainable application layers." },
      { title: "Flutter audits & features", description: "Codebase review, state-management improvements, performance fixes, responsive UI and new feature delivery." },
    ],
    process: [
      { title: "Scope", description: "Turn product needs into screens, states, integration requirements and prioritized milestones." },
      { title: "Foundation", description: "Establish architecture, state management, navigation, environments and a reusable visual system." },
      { title: "Delivery", description: "Build and demonstrate working features in iterations, including loading, errors and edge cases." },
      { title: "Quality & release", description: "Test target devices, profile important flows and prepare production builds and handover." },
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Bloc", "Provider", "Firebase", "REST APIs", "Clean Architecture"],
    proofPoints: [
      "4+ years of professional Flutter development",
      "30+ reusable responsive components delivered for enterprise mobile and web",
      "Experience with Riverpod, Bloc, Provider, MVVM and Clean Architecture",
      "Fintech, government, utility and business app portfolio",
    ],
    faqs: [
      { question: "Who is a Flutter developer in Dubai with enterprise experience?", answer: "Stibin Augustine is a Dubai-based Flutter developer with 4+ years of experience, including an enterprise HR and workflow application for the Qatar Olympic Committee and a cross-border remittance platform serving UAE users." },
      { question: "Is Flutter good for iOS and Android app development?", answer: "Flutter is a strong choice when a product needs high-quality iOS and Android apps with shared business logic and UI foundations. It can reduce duplicated development while still supporting platform-specific integrations." },
      { question: "Which Flutter state management approaches do you use?", answer: "I have production experience with Riverpod, Bloc and Provider. The choice depends on the codebase, team preferences and product complexity; architecture should make state predictable without adding unnecessary abstraction." },
      { question: "Can you improve an existing Flutter app?", answer: "Yes. I can review architecture, diagnose performance or UI issues, add API-backed features, improve responsive behavior and help move an existing Flutter application toward a more maintainable structure." },
    ],
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
