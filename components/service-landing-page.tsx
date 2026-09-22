import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { SERVICE_PAGES, type ServicePageData } from "@/lib/service-pages";

interface ServiceLandingPageProps {
  service: ServicePageData;
}

export default function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const otherServices = SERVICE_PAGES.filter((item) => item.slug !== service.slug);

  return (
    <div className="relative min-h-screen">
      <div className="bg-grid pointer-events-none fixed inset-0 -z-20" />

      <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/90 backdrop-blur-xl">
        <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/" className="font-bold tracking-tight text-(--foreground)">
            Stibin <span className="text-(--accent)">Augustine</span>
          </Link>
          <div className="hidden items-center gap-5 text-sm text-(--muted) sm:flex">
            <Link href="/services" className="transition-colors hover:text-(--foreground)">Services</Link>
            <Link href="/#projects" className="transition-colors hover:text-(--foreground)">Portfolio</Link>
            <Link href="/digital-marketing" className="transition-colors hover:text-(--foreground)">Digital Marketing</Link>
          </div>
          <Link
            href="/#contact"
            className="rounded-full bg-(--foreground) px-4 py-2 text-xs font-semibold text-(--background) transition-opacity hover:opacity-90"
          >
            Discuss a project
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">{service.eyebrow}</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-(--foreground) sm:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-(--muted) sm:text-lg">{service.description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/#contact" className="rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-bold text-slate-950">
                Get a project estimate
              </Link>
              <Link href="/#projects" className="rounded-full border border-(--border) bg-(--surface)/70 px-6 py-3 text-sm font-semibold text-(--foreground)">
                View relevant work
              </Link>
            </div>
            <p className="mt-5 text-xs text-(--muted)">Based in Bur Dubai · Available across Dubai, UAE and remotely</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-(--accent)">Direct answer</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--foreground)">What I can deliver</h2>
            <p className="mt-5 text-base leading-8 text-(--muted)">{service.summary}</p>
          </div>
          <aside className="card p-6" aria-label="Project outcomes">
            <h2 className="text-lg font-bold text-(--foreground)">Typical outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-(--muted)">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3"><span className="text-cyan-400" aria-hidden>✓</span><span>{outcome}</span></li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="border-y border-(--border) bg-(--surface)/35 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-wider text-(--accent)">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--foreground)">How I can help</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {service.capabilities.map((capability) => (
                <article key={capability.title} className="card h-full p-6">
                  <h3 className="text-lg font-bold text-(--foreground)">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-(--accent)">Delivery process</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--foreground)">A clear route from brief to launch</h2>
              <ol className="mt-8 space-y-6">
                {service.process.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs font-bold text-(--accent)">{String(index + 1).padStart(2, "0")}</span>
                    <div><h3 className="font-bold text-(--foreground)">{step.title}</h3><p className="mt-1 text-sm leading-6 text-(--muted)">{step.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="card p-6 sm:p-8">
                <h2 className="text-xl font-bold text-(--foreground)">Experience you can verify</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-(--muted)">
                  {service.proofPoints.map((point) => <li key={point} className="flex gap-3"><span className="text-cyan-400" aria-hidden>◆</span><span>{point}</span></li>)}
                </ul>
                <h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-wider text-(--foreground)">Tools & technologies</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => <span key={technology} className="chip">{technology}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-(--border) bg-(--surface)/35 px-5 py-16" id="faq">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-wider text-(--accent)">Questions answered</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--foreground)">Frequently asked questions</h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="card group p-5 open:border-cyan-400/35">
                  <summary className="cursor-pointer list-none font-semibold text-(--foreground)">{faq.question}<span className="float-right text-(--accent) group-open:rotate-45">+</span></summary>
                  <p className="mt-4 border-t border-(--border) pt-4 text-sm leading-7 text-(--muted)">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-(--foreground)">Explore related freelance services in Dubai</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="card card-hover p-5">
                <span className="text-sm font-semibold text-(--foreground)">{item.shortTitle}</span>
                <span className="mt-2 block text-xs text-(--accent)">View service →</span>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/digital-marketing" className="text-sm font-semibold text-(--accent) hover:underline">Digital marketing, SEO, AEO &amp; GEO services →</Link>
          </div>
        </section>

        <section className="px-5 pb-10 pt-4">
          <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-fuchsia-500/10 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-(--foreground)">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--muted)">Share the goal, current stage and preferred timeline. I’ll help identify the most practical next step and whether we are a good fit.</p>
            <Link href="/#contact" className="mt-7 inline-flex rounded-full bg-(--foreground) px-6 py-3 text-sm font-bold text-(--background)">Contact Stibin</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
