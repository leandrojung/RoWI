import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usps, targetAudience } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Robert Wikarek — Industriemechaniker und Inhaber von Rowi Maschinenservice. Über 20 Jahre Erfahrung im Service für Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Über uns", href: "/ueber-uns" }]} />
      <PageHero
        eyebrow="Über uns"
        title="Ihr Fachbetrieb für Steinbearbeitungsmaschinen"
        lead="Rowi Maschinenservice steht für fundiertes technisches Wissen, Zuverlässigkeit und Termintreue — mit dem klaren Fokus auf Steinbearbeitungsmaschinen."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid min-w-0 gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="prose-content min-w-0 max-w-none space-y-5 text-ink-soft">
            <h2 className="text-2xl font-bold text-ink">Der Weg zu Rowi Maschinenservice</h2>
            <p>
              Hinter Rowi Maschinenservice steht Robert Wikarek, ausgebildeter Industriemechaniker mit
              Fachrichtung Betriebstechnik. Seit 2001 ist er im Kundendienst für Steinbearbeitungsmaschinen
              tätig — zunächst als Monteur bei der Industriebedarf Gördes GmbH in Dorsten, wo er zuletzt als
              Geschäftsführer Verantwortung trug. Seit Januar 2012 ist er mit Rowi Maschinenservice selbstständig
              und hat sich seither vollständig auf Kunden aus der Steinindustrie spezialisiert.
            </p>
            <p>
              Diese über 20-jährige Erfahrung im Service für Steinbearbeitungsmaschinen ist die Grundlage für
              den heutigen Fachbetrieb: fundiertes technisches Verständnis für Mechanik, Steuerungstechnik und
              die besonderen Belastungen, denen Steinbearbeitungsmaschinen im Dauerbetrieb ausgesetzt sind.
            </p>

            <h2 className="text-2xl font-bold text-ink">Standort Heiden im Münsterland</h2>
            <p>
              Die Werkstatt von Rowi Maschinenservice befindet sich in Heiden im Münsterland, gut erreichbar
              über die B67 und die A31. Von hier aus erfolgt der Service sowohl in der eigenen Werkstatt als
              auch mobil deutschlandweit direkt bei Ihnen vor Ort.
            </p>

            <h2 className="text-2xl font-bold text-ink">Werte, die die Arbeit prägen</h2>
            <p>
              Fachkompetenz, Zuverlässigkeit und Termintreue sind keine Marketing-Floskeln, sondern der Anspruch,
              mit dem jeder Auftrag angegangen wird. Dazu gehört auch eine ehrliche Einschätzung: Wenn eine
              Reparatur wirtschaftlich keinen Sinn mehr ergibt, wird das offen kommuniziert — statt unnötige
              Kosten zu verursachen.
            </p>

            <h2 className="text-2xl font-bold text-ink">Spezialisiert auf die Steinindustrie</h2>
            <p>
              Rowi Maschinenservice ist bewusst kein Maschinenservice für alles, sondern konzentriert sich
              vollständig auf Steinbearbeitungsmaschinen. Zur Zielgruppe zählen {targetAudience.join(", ")} —
              sowohl Einzelfirmen als auch Klein- und Großbetriebe.
            </p>
          </div>

          <aside className="min-w-0 space-y-4">
            <div className="rounded-lg border border-border p-6">
              <h2 className="font-semibold text-ink">Auf einen Blick</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                {usps.map((usp) => (
                  <li key={usp.title} className="flex gap-2">
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      ✓
                    </span>
                    <span>{usp.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CtaBanner
        title="Lernen Sie uns persönlich kennen"
        lead="Nehmen Sie Kontakt auf — wir besprechen gemeinsam, wie wir Ihnen weiterhelfen können."
      />
    </>
  );
}
