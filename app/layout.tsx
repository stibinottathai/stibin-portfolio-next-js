import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp-button";
import ScrollProgress from "@/components/scroll-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://stibinaugustine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stibin Augustine | Full-Stack Developer & Digital Marketer in Dubai",
    template: "%s | Stibin Augustine",
  },
  description:
    "Stibin Augustine is a Full-Stack Developer & Digital Marketing Specialist based in Dubai, UAE. 4+ years engineering scalable web applications (Next.js, React), mobile apps (Flutter), AI integrations, and high-ROI digital marketing (SEO, AEO, GEO, Google Ads, Meta Ads). Available for Dubai and remote projects.",
  keywords: [
    // Personal Brand
    "Stibin Augustine",
    "Stibin Augustine developer",
    "Stibin Augustine digital marketer",
    "Stibin Augustine full stack developer",
    "Stibin Augustine Dubai",
    "Stibin Augustine UAE",
    "Stibin Augustine web developer",
    "Stibin Augustine software developer",
    "Stibin Augustine digital marketing",
    "Stibin Augustine portfolio",

    // Full-Stack & Web Development Dubai / UAE
    "full stack developer Dubai",
    "full stack developer UAE",
    "full stack developer in Dubai",
    "full stack developer in UAE",
    "freelance full stack developer Dubai",
    "freelance full stack developer UAE",
    "full stack web developer Dubai",
    "full stack web developer UAE",
    "freelance web developer Dubai",
    "freelance web developer UAE",
    "web developer Dubai",
    "web developer UAE",
    "software developer Dubai",
    "freelance software developer Dubai",
    "custom web development Dubai",
    "web development freelancer Dubai",

    // Digital Marketing & Ads Dubai / UAE
    "digital marketing freelancer Dubai",
    "digital marketing freelancer UAE",
    "best digital marketing freelancer Dubai",
    "freelance digital marketer Dubai",
    "freelance digital marketer UAE",
    "digital marketing expert Dubai",
    "digital marketing expert UAE",
    "digital marketing specialist Dubai",
    "digital marketing consultant Dubai",
    "digital marketing consultant UAE",
    "digital marketing services Dubai",
    "digital marketing services UAE",
    "online marketing freelancer Dubai",
    "performance marketing freelancer Dubai",
    "AI digital marketing freelancer Dubai",

    // SEO Dubai / UAE
    "SEO freelancer Dubai",
    "SEO freelancer UAE",
    "SEO expert Dubai",
    "SEO expert UAE",
    "SEO consultant Dubai",
    "SEO consultant UAE",
    "freelance SEO specialist Dubai",
    "freelance SEO expert UAE",
    "local SEO expert Dubai",
    "technical SEO freelancer Dubai",
    "SEO services Dubai",
    "SEO services UAE",
    "website SEO expert Dubai",
    "search engine optimization Dubai",

    // AEO / GEO / AI Search
    "AEO expert Dubai",
    "AEO consultant Dubai",
    "Answer Engine Optimization Dubai",
    "Answer Engine Optimization UAE",
    "GEO expert Dubai",
    "Generative Engine Optimization Dubai",
    "Generative Engine Optimization UAE",
    "AI SEO consultant Dubai",
    "AI SEO freelancer Dubai",
    "AI search optimization Dubai",
    "AI search optimization UAE",
    "ChatGPT SEO consultant",
    "Google AI Overview optimization",
    "AI visibility consultant Dubai",
    "AI search visibility UAE",
    "LLM SEO consultant",
    "generative search optimization",

    // AI Development & Automation Dubai / UAE
    "AI developer Dubai",
    "AI developer UAE",
    "freelance AI developer Dubai",
    "AI consultant Dubai",
    "AI solutions developer Dubai",
    "AI application developer Dubai",
    "AI web developer Dubai",
    "AI app developer Dubai",
    "AI automation developer Dubai",
    "AI automation freelancer Dubai",
    "AI integration developer Dubai",
    "AI chatbot developer Dubai",
    "AI SaaS developer Dubai",
    "generative AI developer Dubai",
    "OpenAI developer Dubai",
    "LLM developer Dubai",
    "AI API integration Dubai",
    "AI agent developer Dubai",

    // Technologies
    "Next.js developer Dubai",
    "Next.js developer UAE",
    "React developer Dubai",
    "React developer UAE",
    "React.js developer Dubai",
    "Node.js developer Dubai",
    "Node.js developer UAE",
    "backend developer Dubai",
    "TypeScript developer Dubai",
    "JavaScript developer Dubai",
    "API developer Dubai",
    "REST API developer UAE",
    "Flutter developer Dubai",
    "Flutter developer UAE",
    "mobile app developer Dubai",
    "mobile app developer UAE",
    "freelance mobile app developer Dubai",
  ],
  authors: [{ name: "Stibin Augustine", url: siteUrl }],
  creator: "Stibin Augustine",
  publisher: "Stibin Augustine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Stibin Augustine | Full-Stack Developer & Digital Marketer in Dubai",
    description:
      "Full-Stack Web & Mobile Developer and Digital Marketing Specialist based in Dubai, UAE. 4+ years shipping scalable apps (Next.js, Flutter), AI integrations, and ROI-driven SEO, AEO, and Google/Meta Ads.",
    url: siteUrl,
    siteName: "Stibin Augustine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stibin Augustine | Full-Stack Developer & Digital Marketer in Dubai",
    description:
      "Full-Stack Developer (Next.js, Flutter) & Digital Marketing Specialist in Dubai, UAE. Available for freelance & full-time roles.",
    creator: "@stibinaugustine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google729fcc3e471b4f22",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Stibin Augustine",
      givenName: "Stibin",
      familyName: "Augustine",
      jobTitle: "Full-Stack Developer & Digital Marketing Specialist",
      description:
        "Full-Stack Developer and Digital Marketing Specialist based in Bur Dubai, Dubai, UAE. 4+ years of experience engineering Next.js web applications, Flutter mobile apps, AI solutions, and high-ROI digital marketing campaigns (SEO, AEO, GEO, Google Ads, Meta Ads).",
      url: siteUrl,
      image: `${siteUrl}/icon-512.png`,
      email: "mailto:stibinaugustine3047@gmail.com",
      telephone: "+971565564136",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bur Dubai",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Mobile App Development",
        "Flutter",
        "Dart",
        "Android Development",
        "iOS Development",
        "Clean Architecture",
        "Firebase",
        "Supabase",
        "REST APIs",
        "AI Integrations",
        "OpenAI API",
        "LLMs",
        "AI Agents",
        "Workflow Automation",
        "Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
        "Google Ads",
        "Meta Ads",
        "Performance Marketing",
        "Local SEO Dubai",
      ],
      sameAs: [
        "https://stibin.online",
        "https://github.com/stibinottathai",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance & Independent Consultancy",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Stibin Augustine — Full-Stack Developer & Digital Marketer Portfolio",
      description:
        "Official portfolio and services website of Stibin Augustine, Full-Stack Developer & Digital Marketing Specialist based in Dubai, UAE.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Stibin Augustine | Full-Stack Developer & Digital Marketer in Dubai",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){document.documentElement.dataset.theme="dark"}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootStructuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ScrollProgress />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
