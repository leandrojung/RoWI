import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Einsatzgebiet",
  description:
    "Werkstatt und Firmensitz von Rowi Maschinenservice in Heiden im Münsterland, mobiler Service für Steinbearbeitungsmaschinen deutschlandweit.",
  alternates: { canonical: "/einsatzgebiet" },
};

export default function EinsatzgebietPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Einsatzgebiet", href: "/einsatzgebiet" }]} />
      <PageHero
        eyebrow="Einsatzgebiet"
        title="Unser Einsatzgebiet – Standort Heiden, Service deutschlandweit"
        lead="Die Werkstatt ist in Heiden im Münsterland zu Hause. Der Service für Steinbearbeitungsmaschinen erfolgt darüber hinaus mobil in ganz Deutschland."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">Werkstatt & Sitz in Heiden</h2>
            <p className="mt-4 text-ink-soft">
              Der Firmensitz und die Werkstatt von Rowi Maschinenservice befinden sich in Heiden im Münsterland
              (Nordrhein-Westfalen) und sind sowohl über die B67 als auch über die A31 gut erreichbar.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-surface-muted p-6 text-sm text-ink-soft">
              <p className="font-semibold text-ink">{siteConfig.name}</p>
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
              <p className="mt-3">{siteConfig.openingHours.label}</p>
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex font-semibold text-accent hover:underline"
              >
                Route in Google Maps öffnen →
              </a>
            </div>
            <div className="mt-6">
              <GoogleMapEmbed />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink">Deutschlandweiter mobiler Service</h2>
            <p className="mt-4 text-ink-soft">
              Rowi Maschinenservice ist nicht nur regional, sondern deutschlandweit für Steinmetze, Bildhauer,
              natursteinverarbeitende Betriebe und Baumärkte im Einsatz. Ob Reparatur, Wartung oder
              Inbetriebnahme: Der mobile Service erfolgt bei Bedarf direkt bei Ihnen vor Ort, unabhängig davon,
              wo in Deutschland sich Ihr Betrieb befindet.
            </p>
            <p className="mt-4 text-ink-soft">
              {/* [TODO] Falls es tatsächliche Schwerpunktregionen gibt, hier ergänzen — sonst bewusst allgemein gehalten. */}
              Die Einsatzplanung erfolgt individuell nach Entfernung, Dringlichkeit und Art des Anliegens. Sprechen
              Sie uns einfach direkt auf Ihren Standort an.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Egal wo Sie sind — sprechen Sie uns an"
        lead="Ob Werkstatt in Heiden oder mobiler Einsatz deutschlandweit: Wir finden die passende Lösung für Ihre Situation."
      />
    </>
  );
}
