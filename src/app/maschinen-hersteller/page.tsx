import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ManufacturerList from "@/components/ManufacturerList";

export const metadata: Metadata = {
  title: "Maschinen & Hersteller",
  description:
    "Service für Steinbearbeitungsmaschinen namhafter Hersteller: Löffler, Kolb, Comandulli, Marmo Meccanica und weitere. Service für weitere Hersteller auf Anfrage.",
  alternates: { canonical: "/maschinen-hersteller" },
};

export default function MaschinenHerstellerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Maschinen & Hersteller", href: "/maschinen-hersteller" }]} />
      <PageHero
        eyebrow="Maschinen & Hersteller"
        title="Service für Steinbearbeitungsmaschinen namhafter Hersteller"
        lead="Ob Sägen, Fräsen, Poliermaschinen oder Bearbeitungszentren: Service wird für Maschinen zahlreicher namhafter Hersteller aus der Steinbearbeitung angeboten."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <p className="text-ink-soft">
            Die folgenden Hersteller decken einen Großteil der in Steinmetz- und Natursteinbetrieben
            eingesetzten Maschinen ab. Ist Ihr Hersteller nicht aufgeführt, fragen Sie gerne trotzdem an — Service
            für weitere Hersteller ist auf Anfrage möglich.
          </p>
          <div className="mt-10">
            <ManufacturerList />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ihr Hersteller ist nicht dabei?"
        lead="Sprechen Sie uns direkt an — Service für weitere Hersteller ist auf Anfrage möglich."
      />
    </>
  );
}
