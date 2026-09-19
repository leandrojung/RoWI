import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import RoundCarousel from "@/components/motion/RoundCarousel";
import SectionSeam from "@/components/ui/SectionSeam";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Werkstatt & Galerie",
  description:
    "Einblick in die Werkstatt von Rowi Maschinenservice in Heiden — moderne Steinbearbeitungsmaschinen, präzise Reparaturen, bundesweite Einsätze.",
  alternates: { canonical: "/werkstatt" },
};

const galleryImages = [
  {
    src: "/fotos/werkstatt-01.jpg",
    alt: "Nahaufnahme Spindelkopf einer Steinbearbeitungsmaschine bei der Revision",
  },
  {
    src: "/fotos/werkstatt-02.jpg",
    alt: "Donatoni CNC-Brückensäge nach Aufstellung und Inbetriebnahme",
  },
  {
    src: "/fotos/werkstatt-03.jpg",
    alt: "Blick in die Werkstatt von Rowi Maschinenservice — mehrere Maschinen in Betrieb",
  },
  {
    src: "/fotos/werkstatt-04.jpg",
    alt: "Donatoni DET 625 CNC-Bearbeitungszentrum — Neuaufstellung und Einrichtung",
  },
  {
    src: "/fotos/werkstatt-05.jpg",
    alt: "Serviceeinsatz an einer CNC-Poliermaschine — Werkzeug und Ersatzteile bereitgelegt",
  },
  {
    src: "/fotos/werkstatt-06.jpg",
    alt: "Musa Next Kantenschleifmaschine — Aufstellung in neuem Produktionsgebäude",
  },
  {
    src: "/fotos/werkstatt-07.jpg",
    alt: "Schaltschrank-Revision — Steuerungstechnik einer Steinbearbeitungsmaschine",
  },
  {
    src: "/fotos/werkstatt-08.jpg",
    alt: "X-Drive Fräskopf in Aktion — Konturbearbeitung an Granit und Naturstein",
  },
];

const highlights = [
  {
    icon: "gear" as const,
    title: "Voll ausgestattete Werkstatt",
    text: "In Heiden (Münsterland) steht eine komplett ausgestattete Werkstatt für Revisionen, Instandsetzungen und Umbauarbeiten zur Verfügung.",
  },
  {
    icon: "truck" as const,
    title: "Mobil im ganzen Bundesgebiet",
    text: "Für größere Maschinen und dringende Einsätze kommt das Rowi-Team direkt zum Kunden — mit dem kompletten Werkzeug im Servicefahrzeug.",
  },
  {
    icon: "shield" as const,
    title: "18+ Hersteller, 1 Ansprechpartner",
    text: "Ob Donatoni, Comandulli, Prussiani oder Spielvogel — Robert Wikarek kennt die Eigenheiten jeder Anlage aus langjähriger Praxis.",
  },
];

export default function WerkstattPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Werkstatt", href: "/werkstatt" }]} />

      <PageHero
        title="Unsere Werkstatt"
        lead="Einblick in die tägliche Arbeit — Reparaturen, Aufstellungen und Wartung an Steinbearbeitungsmaschinen."
        seamTo="ink"
      />

      {/* 3D Carousel */}
      <section className="bg-ink" aria-label="Galerie">
        <RoundCarousel
          images={galleryImages}
          imageWidth={400}
          imageHeight={300}
          spacing={4}
          speed={2.5}
          direction="right"
          tilt={-7}
          background="#1a1a1a"
          height={560}
        />
        <p className="py-3 text-center text-xs text-white/30 bg-ink select-none">
          Ziehen zum Drehen · Drag to rotate
        </p>
      </section>
      <SectionSeam from="ink" to="white" />

      {/* Highlights */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={h.icon} size={22} />
                </span>
                <h2 className="mt-4 text-lg font-bold text-ink">{h.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <SectionSeam from="white" to="muted" />

      {/* Foto-Hinweis */}
      <section className="bg-surface-muted py-10">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <p className="text-sm text-ink-soft">
              Weitere Einblicke in aktuelle Projekte und Einsätze finden Sie im{" "}
              <Link href="/aktuelles" className="font-semibold text-accent hover:underline">
                Aktuelles-Bereich
              </Link>
              . Fotos werden laufend ergänzt.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner seamFrom="muted" />
    </>
  );
}
