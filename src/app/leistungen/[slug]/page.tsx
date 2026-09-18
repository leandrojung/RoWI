import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import { getServiceBySlug, services } from "@/lib/services-data";
import { siteConfig, targetAudience } from "@/lib/site-config";
import { faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { withSoftHyphens } from "@/lib/typography";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle.replace(/ \| Rowi Maschinenservice$/, ""),
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: service.navLabel, href: `/leistungen/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div className="absolute inset-0 grid-texture" aria-hidden="true" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative py-14 sm:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <span className="hero-in flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
                <Icon name={service.icon} size={28} />
              </span>
              <h1 className="hero-in hero-in-delay-1 mt-6 max-w-[20ch] text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.08]">
                {withSoftHyphens(service.h1)}
              </h1>
              <p className="hero-in hero-in-delay-2 mt-5 max-w-[58ch] text-lg text-white/70">{service.intro}</p>
            </div>
            <div className="hero-in hero-in-delay-3 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center justify-center gap-3 rounded-xl bg-accent px-6 py-3.5 font-bold text-white transition-colors hover:bg-accent-dark"
              >
                <Icon name="phone" size={18} />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/25 px-6 py-3.5 font-semibold transition-colors hover:bg-white hover:text-ink"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Kernaussagen */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl border border-border p-7">
                <h2 className="text-lg font-bold text-ink">{highlight.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{highlight.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Ablauf als Zeitstrahl */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-bold text-ink">So läuft es ab</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {index < service.process.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Vorteile + Zielgruppe */}
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="min-w-0">
            <h2 className="text-3xl font-bold text-ink">Was Sie davon haben</h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon name="check" size={14} strokeWidth={2.4} />
                  </span>
                  <span className="text-ink-soft">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="min-w-0">
            <div className="rounded-2xl bg-ink p-8 text-white">
              <h2 className="text-xl font-bold">Für wen?</h2>
              <ul className="mt-5 space-y-3">
                {targetAudience.map((group) => (
                  <li key={group} className="flex items-center gap-3 text-white/80">
                    <span className="text-accent">
                      <Icon name="check" size={16} strokeWidth={2.4} />
                    </span>
                    {group}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">
                Einzelfirma oder Großbetrieb — der Service ist derselbe.
              </p>
              <Link
                href="/einsatzgebiet"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <Icon name="truck" size={16} />
                Auch bundesweit im Einsatz
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface-muted py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink">Häufige Fragen</h2>
          </Reveal>
          <Reveal className="mt-8">
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Verwandte Leistungen */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">Passt außerdem dazu</h2>
          </Reveal>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/leistungen/${related.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-border p-5 transition-all duration-300 hover:border-ink hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={related.icon} size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-ink">{related.navLabel}</span>
                  <span className="block text-sm text-ink-soft">{related.teaser}</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
      <JsonLd data={jsonLdGraph([serviceSchema(service), faqSchema(service.faqs)])} />
    </>
  );
}
