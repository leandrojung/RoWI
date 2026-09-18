import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug, services } from "@/lib/services-data";
import { targetAudience } from "@/lib/site-config";
import { faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";

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
      <PageHero eyebrow="Leistung" title={service.h1} lead={service.intro} />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div className="space-y-5 text-ink-soft">
              {service.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">Vorteile im Überblick</h2>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-ink-soft">
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">So läuft der Ablauf</h2>
              <ol className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {service.process.map((step, index) => (
                  <li key={step.title} className="rounded-lg border border-border p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="mt-3 font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">Für wen geeignet?</h2>
              <p className="mt-4 text-ink-soft">
                Diese Leistung richtet sich an {targetAudience.join(", ")} — sowohl Einzelfirmen als auch Klein-
                und Großbetriebe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink">Häufige Fragen zu {service.navLabel.toLowerCase()}</h2>
              <div className="mt-5">
                <FaqAccordion items={service.faqs} />
              </div>
            </div>

            <p className="rounded-lg border border-border bg-surface-muted p-5 text-sm text-ink-soft">
              Dieser Service ist nicht auf Heiden beschränkt — der Einsatz erfolgt bei Bedarf{" "}
              <Link href="/einsatzgebiet" className="font-semibold text-accent hover:underline">
                deutschlandweit
              </Link>
              .
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border p-6">
              <h2 className="font-semibold text-ink">Verwandte Leistungen</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {relatedServices.map((related) => (
                  <li key={related.slug}>
                    <Link href={`/leistungen/${related.slug}`} className="font-medium text-accent hover:underline">
                      {related.navLabel}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/leistungen" className="font-medium text-ink hover:text-accent hover:underline">
                    Alle Leistungen im Überblick
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CtaBanner />
      <JsonLd data={jsonLdGraph([serviceSchema(service), faqSchema(service.faqs)])} />
    </>
  );
}
