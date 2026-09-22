import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { SERVICE_PAGES, SITE_URL } from "@/lib/service-pages";

const pageUrl = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title: { absolute: "Freelance Developer Services in Dubai, UAE" },
  description:
    "Explore freelance web, Next.js, WordPress, Flutter, iOS and Android app development services in Dubai by Stibin Augustine.",
  keywords: [
    "freelance developer Dubai",
    "freelance web developer Dubai",
    "freelance app developer Dubai",
    "Next.js developer Dubai",
    "WordPress developer Dubai",
    "Flutter developer Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Freelance Developer Services in Dubai, UAE",
    description: "Web, Next.js, WordPress and mobile app development services for Dubai and UAE businesses.",
    url: pageUrl,
    siteName: "Stibin Augustine Portfolio",
    locale: "en_AE",
    type: "website",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: "Freelance developer services in Dubai",
        itemListElement: SERVICE_PAGES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${SITE_URL}/services/${service.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="bg-grid pointer-events-none fixed inset-0 -z-20" />
      <header className="border-b border-(--border) bg-(--background)/90 backdrop-blur-xl">
        <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="font-bold tracking-tight text-(--foreground)">Stibin <span className="text-(--accent)">Augustine</span></Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/#projects" className="text-(--muted) hover:text-(--foreground)">Portfolio</Link>
            <Link href="/#contact" className="rounded-full bg-(--foreground) px-4 py-2 text-xs font-semibold text-(--background)">Contact</Link>
          </div>
        </nav>
      </header>
      <main>
        <section className="mx-auto max-w-5xl px-5 pb-14 pt-20 text-center sm:pt-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">Dubai-based · UAE & remote delivery</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-(--foreground) sm:text-6xl">Freelance developer services in Dubai</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-(--muted) sm:text-lg">
            Web and mobile development that combines production engineering, search visibility and conversion thinking—from a single-page business site to an enterprise Flutter application.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_PAGES.map((service) => (
              <article key={service.slug} className="card card-hover flex h-full flex-col p-7">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-(--accent)">{service.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-(--foreground)">{service.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-(--muted)">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.technologies.slice(0, 5).map((technology) => <span key={technology} className="chip">{technology}</span>)}
                </div>
                <Link href={`/services/${service.slug}`} className="mt-6 text-sm font-semibold text-(--accent) hover:underline">Explore {service.shortTitle.toLowerCase()} →</Link>
              </article>
            ))}
            <article className="card card-hover flex h-full flex-col p-7">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-(--accent)">SEO · AEO · GEO · Paid media</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-(--foreground)">Digital Marketing in Dubai</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-(--muted)">Technical and on-page SEO, answer engine optimization, generative engine optimization, Google Ads and Meta Ads—supported by direct technical implementation.</p>
              <Link href="/digital-marketing" className="mt-6 text-sm font-semibold text-(--accent) hover:underline">Explore digital marketing →</Link>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-(--foreground)">Not sure which service fits?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--muted)">Share the outcome you need. I can recommend the simplest suitable stack and a realistic first scope.</p>
          <Link href="/#contact" className="mt-7 inline-flex rounded-full bg-(--foreground) px-6 py-3 text-sm font-bold text-(--background)">Discuss your project</Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
