import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Reparatur, Wartung, Sofortdienst, Maschinenaufstellung, Fehlersuche, Ersatzteile, Schulungen und An-/Verkauf von Steinbearbeitungsmaschinen — alle Leistungen im Überblick.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Leistungen", href: "/leistungen" }]} />
      <PageHero
        eyebrow="Leistungen"
        title="Service, Wartung & Verkauf von Steinbearbeitungsmaschinen"
        lead="Von der akuten Reparatur bis zum planbaren Wartungstermin, von der Ersatzteilbeschaffung bis zur CNC-Schulung — alle Leistungen rund um Ihre Steinbearbeitungsmaschine aus einer Hand."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
