import type { Metadata } from "next";
import DigitalMarketingView from "@/components/digital-marketing/digital-marketing-view";
import { MARKETING_FAQS } from "@/lib/marketing-content";

const siteUrl = "https://stibin.website";
const pageUrl = `${siteUrl}/digital-marketing`;

export const metadata: Metadata = {
  title: "Digital Marketing Freelancer in Dubai | SEO, AEO, GEO & Paid Ads | Stibin Augustine",
  description:
    "Strategic Digital Marketing, Technical SEO (#1 Google Rankings), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and Google & Meta Ads in Dubai, UAE by Stibin Augustine. Full-stack development meets AI growth.",
  keywords: [
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
    "Google Ads expert Dubai",
    "Meta Ads specialist Dubai",
    "Facebook Ads UAE",
    "Instagram Ads UAE",
    "PPC Advertising Dubai",

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

    // Case Studies & Track Record
    "buy laptops from dubai to india",
    "Btbanana",
    "Brandovastudio",
    "Stibin Augustine Marketing",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Digital Marketing, SEO, AEO, GEO & Google Ads Specialist in Dubai | Stibin Augustine",
    description:
      "Strategic Digital Marketing, Performance Ads (Google & Meta), Technical SEO, AEO, and GEO in Dubai, UAE. Proven #1 Google rankings and high-conversion web engineering.",
    url: pageUrl,
    siteName: "Stibin Augustine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO, AEO, GEO & Google Ads Specialist in Dubai | Stibin Augustine",
    description:
      "Strategic Digital Marketing, Google & Meta Ads, Technical SEO (#1 Rankings), and Generative Search Optimization (AEO/GEO) in Dubai.",
  },
};

export default function DigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Digital Marketing & SEO",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}/#service`,
        name: "Stibin Augustine — Digital Marketing, Ads & SEO Services",
        url: pageUrl,
        description:
          "Strategic Digital Marketing, Google Ads, Meta Ads Management, Social Media Strategy, Technical SEO, AEO, and GEO optimization services combining marketing strategy with modern web engineering.",
        provider: {
          "@type": "Person",
          name: "Stibin Augustine",
          url: siteUrl,
          jobTitle: "Digital Marketing Specialist & Full-Stack Developer",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bur Dubai",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE",
          },
        },
        areaServed: [
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "City",
            name: "Dubai",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Marketing, Paid Ads & SEO Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Search Engine Optimization (SEO & #1 Rankings)",
                description:
                  "Technical SEO, On-page SEO, Commercial intent keyword research, and rank #1 execution.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads & PPC Campaign Management",
                description:
                  "Search Ads, Display campaigns, Performance Max, and high-conversion landing page funnels.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta Ads (Facebook & Instagram Advertising)",
                description:
                  "Audience targeting, lookalikes, creative split testing, and retargeting funnels.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Management & Strategy",
                description:
                  "Brand growth, content calendar scheduling, community engagement, and multi-channel distribution.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & Generative Engine Optimization (GEO / AEO)",
                description:
                  "Optimizing digital presence and entity signals for ChatGPT, Perplexity, Gemini, and generative AI search.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Tools & Workflow Automation",
                description:
                  "Implementing AI agents, prompt engineering, and automated content generation workflows.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full-Stack Website Development & Modernization",
                description:
                  "Next.js, React, and modern platform upgrades engineered for speed and search dominance.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: MARKETING_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
