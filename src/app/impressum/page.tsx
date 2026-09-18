import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Rowi Maschinenservice gemäß § 5 TMG und § 18 Abs. 2 MStV.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Impressum", href: "/impressum" }]} />
      <PageHero title="Impressum" />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8 text-ink-soft">
          <div>
            <h2 className="text-xl font-bold text-ink">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              {siteConfig.name}
              <br />
              Inhaber: {siteConfig.owner}
              <br />
              {/* [TODO] Rechtsform vor Live-Gang mit Robert Wikarek bestätigen. */}
              Rechtsform: Einzelunternehmen [TODO: bitte bestätigen]
            </p>
            <p className="mt-3">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              {siteConfig.address.countryName}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Kontakt</h2>
            <p className="mt-3">
              Telefon: {siteConfig.contact.phoneDisplay}
              <br />
              Festnetz: {siteConfig.contact.landlineDisplay}
              <br />
              Telefax: {siteConfig.contact.faxDisplay}
              <br />
              E-Mail: {siteConfig.contact.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {siteConfig.vatId}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Handelsregister</h2>
            <p className="mt-3">
              [TODO — Handelsregister und Registernummer ergänzen, sofern vorhanden. Bei einem eingetragenen
              Einzelunternehmen ohne Handelsregistereintrag entfällt diese Angabe.]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Vertretungsberechtigte Person</h2>
            <p className="mt-3">{siteConfig.owner}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              {siteConfig.owner}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Bildquellen</h2>
            <p className="mt-3">
              [TODO — Bildquellen-/Fotografen-Credits ergänzen, sobald lizenziertes Bildmaterial verwendet wird.]
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-5 text-sm">
            Dieses Impressum ist ein Muster und ersetzt keine rechtliche Beratung. Vor Veröffentlichung sollte
            eine rechtliche Prüfung erfolgen.
          </div>
        </Container>
      </section>
    </>
  );
}
