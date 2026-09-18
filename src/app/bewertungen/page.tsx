import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { manufacturers, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bewertungen",
  description:
    "5,0 Sterne bei Google: Kundenstimmen und Vertrauenselemente von Rowi Maschinenservice, Fachbetrieb für Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/bewertungen" },
};

export default function BewertungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Bewertungen", href: "/bewertungen" }]} />
      <PageHero
        title="5,0 von 5,0 bei Google"
        lead="Kunden aus der Steinindustrie bewerten die Zusammenarbeit durchgehend mit Bestnote."
      >
        <div className="hero-in hero-in-delay-2 mt-8 flex items-center gap-2 text-gold" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" size={30} />
          ))}
        </div>
      </PageHero>

      {/* Kennzahlen */}
      <section className="border-b border-border py-14">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: 20, suffix: "+", label: "Jahre an Steinbearbeitungsmaschinen" },
            { value: manufacturers.length, suffix: "+", label: "Hersteller im Service" },
            { value: 5, decimals: 1, suffix: "", label: "Sterne im Google-Profil" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-bold text-accent">
                <CountUp value={stat.value} decimals={stat.decimals ?? 0} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Kundenstimmen */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-bold text-ink">Was Kunden sagen</h2>
            <p className="mt-3 max-w-[60ch] text-ink-soft">
              Die Original-Bewertungen stehen im Google-Profil. Ausgewählte Kundenstimmen folgen hier in Kürze.
            </p>
          </Reveal>

          <Reveal stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border-2 border-dashed border-border p-7">
                <div className="flex gap-1 text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={16} />
                  ))}
                </div>
                <p className="mt-5 text-sm italic text-ink-soft/70">
                  Platz für Kundenstimme {n} — Text folgt von Robert Wikarek.
                </p>
                <p className="mt-5 text-sm font-semibold text-ink-soft/70">Name, Betrieb, Ort</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <a
              href={siteConfig.links.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-semibold text-accent"
            >
              Alle Bewertungen bei Google lesen
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </a>
          </Reveal>
        </Container>
      </section>

      <CtaBanner title="Überzeugen Sie sich selbst" lead="Die nächste gute Bewertung könnte Ihre sein." />
    </>
  );
}
