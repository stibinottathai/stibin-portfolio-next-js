import type { Metadata } from "next";
import DigitalMarketingView from "@/components/digital-marketing/digital-marketing-view";

const siteUrl = "https://stibinaugustine.com";
const pageUrl = `${siteUrl}/digital-marketing`;

export const metadata: Metadata = {
  title: "Digital Marketing, SEO, AEO & GEO Expertise",
  description:
    "Strategic Digital Marketing and Technical Search Optimization by Stibin Augustine. Combining SEO, AEO, GEO, content strategy, analytics, and full-stack development to build discoverable, high-converting digital experiences.",
  keywords: [
    "Digital Marketing",
    "SEO Expert",
    "Technical SEO",
    "AEO Optimization",
    "Answer Engine Optimization",
    "GEO Optimization",
    "Generative Engine Optimization",
    "AI Search Visibility",
    "Content Strategy",
    "Local SEO",
    "Google Search Console",
    "Search Console Optimization",
    "SEO Audits",
    "Landing Page Optimization",
    "Conversion Optimization",
    "Developer Marketer",
    "Dubai SEO",
    "UAE Digital Marketing",
    "Stibin Augustine Marketing",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Digital Marketing, SEO, AEO & GEO Expertise — Stibin Augustine",
    description:
      "Strategic Digital Marketing and Technical Search Optimization. Combining SEO, AEO, GEO, analytics, and full-stack development for search visibility and growth.",
    url: pageUrl,
    siteName: "Stibin Augustine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO, AEO & GEO Expertise — Stibin Augustine",
    description:
      "Strategic Digital Marketing and Technical Search Optimization for modern search engines and AI discovery platforms.",
  },
};

export default function DigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Stibin Augustine — Digital Marketing & SEO Services",
    url: pageUrl,
    description:
      "Strategic Digital Marketing, Technical SEO, AEO, and GEO optimization services combining marketing strategy with modern web development.",
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
      name: "Digital Marketing & SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization (SEO)",
            description: "Technical SEO, On-page SEO, Keyword research, and SEO audits.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Answer Engine Optimization (AEO)",
            description: "Structuring content for direct answers and AI search snippet visibility.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generative Engine Optimization (GEO)",
            description: "Optimizing digital presence and entity signals for generative AI engines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Strategy & Copywriting",
            description: "Intent-driven content planning, landing page copy, and search optimization.",
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
            name: "Analytics & Performance Reporting",
            description: "Google Analytics 4, Search Console monitoring, and conversion tracking.",
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
