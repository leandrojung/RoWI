import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { manufacturers, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bewertungen",
  description:
    "5,0 Sterne bei Google: Kundenstimmen und Vertrauenselemente von Rowi Maschinenservice, Fachbetrieb für Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/bewertungen" },
};

// Platzhalter-Struktur für Kundenstimmen — Texte folgen später von Robert Wikarek.
const testimonialPlaceholders = [1, 2, 3];

export default function BewertungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Bewertungen", href: "/bewertungen" }]} />
      <PageHero
        eyebrow="Bewertungen"
        title="Was Kunden über Rowi Maschinenservice sagen"
        lead="Kunden aus der Steinindustrie bewerten die Zusammenarbeit mit Rowi Maschinenservice durchgehend mit Bestnote."
      >
        <div className="mt-6">
          <StarRating />
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-ink">Kundenstimmen</h2>
          <p className="mt-2 max-w-2xl text-ink-soft">
            [TODO — echte Kundenstimmen folgen von Robert Wikarek. Die folgenden Kacheln sind vorbereitete
            Platzhalter für 3 Bewertungen und werden vor Live-Gang mit echten Texten befüllt.]
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonialPlaceholders.map((n) => (
              <div key={n} className="rounded-lg border border-dashed border-border p-6">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="var(--color-accent)">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-ink-soft">
                  „[Platzhalter für Kundenstimme {n} — Text folgt]“
                </p>
                <p className="mt-4 text-sm font-semibold text-ink">[Name / Betrieb, Ort]</p>
              </div>
            ))}
          </div>
          <a
            href={siteConfig.links.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex font-semibold text-accent hover:underline"
          >
            Alle Bewertungen bei Google ansehen →
          </a>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-ink">Warum Kunden vertrauen</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-6">
              <p className="text-3xl font-bold text-accent">20+</p>
              <p className="mt-1 text-sm text-ink-soft">Jahre Erfahrung im Service für Steinbearbeitungsmaschinen</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <p className="text-3xl font-bold text-accent">{manufacturers.length}+</p>
              <p className="mt-1 text-sm text-ink-soft">Hersteller, für deren Maschinen Service angeboten wird</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <p className="text-3xl font-bold text-accent">5,0 ★</p>
              <p className="mt-1 text-sm text-ink-soft">Durchschnittliche Bewertung bei Google</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
