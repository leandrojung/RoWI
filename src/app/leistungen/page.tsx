import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Reparatur, Wartung, Sofortdienst, Aufstellung, Fehlersuche, Ersatzteile, CNC-Schulungen und An-/Verkauf von Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Leistungen", href: "/leistungen" }]} />
      <PageHero
        title="Acht Leistungen, ein Ansprechpartner"
        lead="Von der Eilreparatur bis zur CNC-Schulung — alles rund um Ihre Steinbearbeitungsmaschine."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
