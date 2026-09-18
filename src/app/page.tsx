import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import ServiceCard from "@/components/ServiceCard";
import ManufacturerList from "@/components/ManufacturerList";
import StarRating from "@/components/StarRating";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { siteConfig, usps, processSteps, targetAudience } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { faqCategories } from "@/lib/faq-data";
import { faqSchema, jsonLdGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service & Wartung für Steinbearbeitungsmaschinen",
  description:
    "Rowi Maschinenservice: Reparatur, Wartung, Sofortdienst, Ersatzteile und Verkauf von Steinbearbeitungsmaschinen. Fachbetrieb in Heiden, deutschlandweit im Einsatz.",
  alternates: { canonical: "/" },
};

const homepageFaqs = faqCategories.flatMap((c) => c.items).slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <Container className="grid min-w-0 gap-10 py-16 sm:py-20 lg:grid-cols-[3fr_2fr] lg:items-center lg:py-24">
          <div className="min-w-0 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Fachbetrieb für Steinbearbeitungsmaschinen
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              Service &amp; Wartung für Steinbearbeitungsmaschinen – Ihr Fachbetrieb in Heiden &amp; deutschlandweit
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Als spezialisierter Ansprechpartner für Steinmetze, Bildhauer, natursteinverarbeitende Betriebe und
              Baumärkte sorgt Rowi Maschinenservice mit über 20 Jahren Branchenerfahrung dafür, dass Ihre
              Maschinen zuverlässig laufen — fachkundig, termintreu und nachvollziehbar dokumentiert.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.phoneHref}
                className="rounded-md bg-accent px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-accent-dark"
              >
                Jetzt anrufen: {siteConfig.contact.phoneDisplay}
              </a>
              <Link
                href="/kontakt#kontaktformular"
                className="rounded-md border-2 border-white px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Anfrage stellen
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              <div>
                <dt className="text-sm text-white/60">Google-Bewertung</dt>
                <dd className="mt-1 text-xl font-bold">5,0 ★</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Erfahrung</dt>
                <dd className="mt-1 text-xl font-bold">20+ Jahre</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Öffnungszeiten</dt>
                <dd className="mt-1 text-xl font-bold">Mo–Sa 8–18 Uhr</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Einsatzgebiet</dt>
                <dd className="mt-1 text-xl font-bold">Deutschlandweit</dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm rounded-2xl border border-white/15 bg-white/5 p-8">
            <Image
              src="/logo.svg"
              alt={`${siteConfig.name} Logo`}
              width={220}
              height={54}
              className="h-14 w-auto invert"
            />
            <p className="mt-8 text-sm text-white/70">
              [Platzhalter für Foto: Robert Wikarek bei der Arbeit an einer Steinbearbeitungsmaschine in der
              Werkstatt in Heiden]
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-bold text-ink">Warum Rowi Maschinenservice?</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Fünf Gründe, warum Steinmetze, Bildhauer und natursteinverarbeitende Betriebe auf die Zusammenarbeit
            mit Rowi Maschinenservice setzen.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {usps.map((usp) => (
              <div key={usp.title} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold text-ink">{usp.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{usp.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-ink">Unsere Leistungen</h2>
              <p className="mt-3 max-w-2xl text-ink-soft">
                Von der Reparatur bis zum Verkauf — alles rund um Ihre Steinbearbeitungsmaschine aus einer Hand.
              </p>
            </div>
            <Link href="/leistungen" className="font-semibold text-accent hover:underline">
              Alle Leistungen im Überblick →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-bold text-ink">Service für Maschinen namhafter Hersteller</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Ob Löffler, Kolb, Comandulli oder Marmo Meccanica — profitieren Sie von Erfahrung mit einer Vielzahl
            an Herstellern aus einer Hand.
          </p>
          <div className="mt-10">
            <ManufacturerList />
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-ink py-16 text-white sm:py-20">
        <Container className="grid min-w-0 gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Über uns</p>
            <h2 className="mt-3 text-3xl font-bold">Robert Wikarek — Ihr direkter Ansprechpartner</h2>
          </div>
          <div className="min-w-0">
            <p className="text-white/80">
              Ausgebildeter Industriemechaniker, Fachrichtung Betriebstechnik. Seit 2001 im Kundendienst für
              Steinbearbeitungsmaschinen tätig, seit Januar 2012 selbstständig mit Rowi Maschinenservice —
              spezialisiert auf Kunden aus der Steinindustrie: {targetAudience.join(", ")}.
            </p>
            <Link href="/ueber-uns" className="mt-5 inline-flex font-semibold text-accent hover:underline">
              Mehr über Rowi Maschinenservice →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-bold text-ink">So läuft die Zusammenarbeit ab</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-lg border border-border p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-muted py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold text-ink">Bewertungen unserer Kunden</h2>
          <StarRating />
          <p className="max-w-2xl text-ink-soft">
            Kunden aus der Steinindustrie bewerten die Zusammenarbeit mit Rowi Maschinenservice durchgehend mit
            Bestnote.
          </p>
          <Link href="/bewertungen" className="font-semibold text-accent hover:underline">
            Alle Bewertungen ansehen →
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold text-ink">Einsatzgebiet: Heiden &amp; deutschlandweit</h2>
            <p className="mt-4 text-ink-soft">
              Die Werkstatt befindet sich in Heiden im Münsterland, gut erreichbar über B67 und A31. Der mobile
              Service erfolgt deutschlandweit — direkt bei Ihnen im Betrieb.
            </p>
            <Link href="/einsatzgebiet" className="mt-5 inline-flex font-semibold text-accent hover:underline">
              Zum Einsatzgebiet →
            </Link>
          </div>
          <div className="min-w-0 rounded-lg border border-border bg-surface-muted p-8 text-sm text-ink-soft">
            <p className="font-semibold text-ink">{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <p className="mt-4">{siteConfig.openingHours.label}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold text-ink">Häufige Fragen</h2>
            <Link href="/faq" className="font-semibold text-accent hover:underline">
              Alle Fragen ansehen →
            </Link>
          </div>
          <div className="mt-8">
            <FaqAccordion items={homepageFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner />
      <JsonLd data={jsonLdGraph([faqSchema(homepageFaqs)])} />
    </>
  );
}
