import type { Metadata } from "next";
import DigitalMarketingView from "@/components/digital-marketing/digital-marketing-view";

const siteUrl = "https://stibinaugustine.com";
const pageUrl = `${siteUrl}/digital-marketing`;

export const metadata: Metadata = {
  title: "Digital Marketing, SEO, Google Ads, Meta Ads & AI Growth",
  description:
    "Strategic Digital Marketing, Performance Advertising (Google Ads & Meta Ads), Social Media Management, and Technical SEO by Stibin Augustine. Ranked #1 on Google for high-intent keywords, combining full-stack development with AI automation.",
  keywords: [
    "Digital Marketing",
    "Google Ads",
    "Google Ads Expert",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "PPC Advertising",
    "Social Media Management",
    "Social Media Marketing",
    "SEO Expert",
    "Technical SEO",
    "Ranked #1 Google",
    "Buy laptops from dubai to india",
    "Btbanana",
    "Brandovastudio",
    "AEO Optimization",
    "Answer Engine Optimization",
    "GEO Optimization",
    "Generative Engine Optimization",
    "AI Search Visibility",
    "ChatGPT",
    "Claude",
    "Claude Code",
    "Gemini",
    "Perplexity",
    "Adobe Firefly",
    "Canva AI",
    "Prompt Engineering",
    "AI Copywriting",
    "AI Agents",
    "AI Automation",
    "Content Strategy",
    "Local SEO",
    "Google Search Console",
    "Search Console Optimization",
    "SEO Audits",
    "Landing Page Optimization",
    "Conversion Optimization",
    "Developer Marketer",
    "PHP Website Upgrade",
    "Dubai SEO",
    "UAE Digital Marketing",
    "Stibin Augustine Marketing",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Digital Marketing, SEO, Google Ads, Meta Ads & AI Growth — Stibin Augustine",
    description:
      "Strategic Digital Marketing, Performance Ads (Google & Meta), Social Media Management, and Technical SEO. Proven #1 Google rankings and high-conversion web engineering.",
    url: pageUrl,
    siteName: "Stibin Augustine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO, Google Ads, Meta Ads & AI Growth — Stibin Augustine",
    description:
      "Strategic Digital Marketing, Google Ads, Meta Ads, Social Media Strategy, and Technical Search Optimization.",
  },
};

export default function DigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Stibin Augustine — Digital Marketing, Ads & SEO Services",
    url: pageUrl,
    description:
      "Strategic Digital Marketing, Google Ads, Meta Ads Management, Social Media Strategy, Technical SEO, AEO, and GEO optimization services combining marketing strategy with modern web engineering.",
    provider: {
      "@type": "Person",
      name: "Stibin Augustine",
      url: siteUrl,
      jobTitle: "Digital Marketer & Full-Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing, Paid Ads & SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization (SEO & #1 Rankings)",
            description: "Technical SEO, On-page SEO, Commercial intent keyword research, and rank #1 execution.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads & PPC Campaign Management",
            description: "Search Ads, Display campaigns, Performance Max, and high-conversion landing page funnels.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meta Ads (Facebook & Instagram Advertising)",
            description: "Audience targeting, lookalikes, creative split testing, and retargeting funnels.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management & Strategy",
            description: "Brand growth, content calendar scheduling, community engagement, and multi-channel distribution.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Generative Engine Optimization (GEO / AEO)",
            description: "Optimizing digital presence and entity signals for ChatGPT, Perplexity, Gemini, and generative AI search.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Tools & Workflow Automation",
            description: "Implementing AI agents, prompt engineering, and automated content generation workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Strategy & Copywriting",
            description: "Intent-driven content planning, AI-assisted copywriting, and search optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO & Google Business Profile",
            description: "Map pack visibility, local citations, and geo-targeted optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Website Development & Modernization",
            description: "Next.js, React, and PHP platform upgrades engineered for speed and search dominance.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalMarketingView />
    </>
  );
}
