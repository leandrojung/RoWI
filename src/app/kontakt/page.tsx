import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Rowi Maschinenservice: Telefon, E-Mail oder Kontaktformular. Fachbetrieb für Steinbearbeitungsmaschinen in Heiden, deutschlandweit im Einsatz.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} />
      <PageHero
        eyebrow="Kontakt"
        title="Nehmen Sie Kontakt auf"
        lead="Ob Reparatur, Wartung oder eine allgemeine Frage — wir melden uns schnellstmöglich mit einer Rückmeldung."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-ink">Kontaktdaten</h2>
              <dl className="mt-4 space-y-3 text-sm text-ink-soft">
                <div>
                  <dt className="font-semibold text-ink">Adresse</dt>
                  <dd>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Telefon</dt>
                  <dd>
                    <a href={siteConfig.contact.phoneHref} className="hover:text-accent">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Telefax</dt>
                  <dd>{siteConfig.contact.faxDisplay}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">E-Mail</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Öffnungszeiten</dt>
                  <dd>{siteConfig.openingHours.label}</dd>
                </div>
              </dl>
            </div>

            <p className="rounded-lg border border-border bg-surface-muted p-5 text-sm text-ink-soft">
              Wir bemühen uns um eine schnelle Rückmeldung auf Ihre Anfrage. Bei dringenden Anliegen erreichen Sie
              uns am schnellsten telefonisch während der Öffnungszeiten.
            </p>

            <div>
              <h2 className="text-xl font-bold text-ink">Anfahrt</h2>
              <div className="mt-4">
                <GoogleMapEmbed />
              </div>
            </div>
          </div>

          <div id="kontaktformular" className="scroll-mt-24 rounded-lg border border-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Anfrage stellen</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Füllen Sie das Formular aus — wir melden uns so schnell wie möglich bei Ihnen zurück.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
