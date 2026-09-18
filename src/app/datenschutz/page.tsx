import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Rowi Maschinenservice gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Datenschutz", href: "/datenschutz" }]} />
      <PageHero title="Datenschutzerklärung" />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8 text-ink-soft">
          <div>
            <h2 className="text-xl font-bold text-ink">1. Verantwortlicher</h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:
            </p>
            <p className="mt-3">
              {siteConfig.owner}
              <br />
              {siteConfig.name}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              Telefon: {siteConfig.contact.phoneDisplay}
              <br />
              E-Mail: {siteConfig.contact.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="mt-3">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich
              ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers
              (Art. 6 Abs. 1 lit. a DSGVO), zur Erfüllung eines Vertrags bzw. vorvertraglicher Maßnahmen (Art. 6
              Abs. 1 lit. b DSGVO) oder auf Grundlage unseres berechtigten Interesses an einer sicheren und
              effizienten Bereitstellung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">3. Bereitstellung der Website und Erstellung von Logfiles</h2>
            <p className="mt-3">
              Beim Aufruf dieser Website erfasst unser Hosting-Anbieter automatisiert Informationen, die Ihr
              Browser technisch übermittelt (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp,
              verwendetes Betriebssystem, aufgerufene Seite). Diese Daten sind für den technisch fehlerfreien
              Betrieb der Website erforderlich und werden auf Grundlage unseres berechtigten Interesses (Art. 6
              Abs. 1 lit. f DSGVO) verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">4. Hosting</h2>
            <p className="mt-3">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die dabei durch den Hoster
              verarbeiteten personenbezogenen Daten umfassen insbesondere die in Ziffer 3 genannten Logfile-Daten.
            </p>
            <p className="mt-3">
              [TODO — konkreter Hosting-Anbieter vor Live-Gang final bestätigen und hier eintragen, inkl. Hinweis
              auf den mit dem Hoster abgeschlossenen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">5. Cookies und lokale Speicherung</h2>
            <p className="mt-3">
              Diese Website verwendet ausschließlich technisch notwendige Cookies bzw. eine lokale Speicherung
              im Browser (localStorage), die zur Speicherung Ihrer Cookie-Einstellungen erforderlich ist. Diese
              Speicherung ist zur Bereitstellung der Website erforderlich und erfolgt auf Grundlage von § 25 Abs.
              2 Nr. 2 TTDSG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-3">
              Weitere, nicht technisch notwendige Cookies oder Tracking-Dienste (z. B. Statistik-Tools) sind auf
              dieser Website aktuell nicht eingebunden. Sollte sich dies künftig ändern, wird diese
              Datenschutzerklärung entsprechend aktualisiert und eine vorherige Einwilligung über den
              Cookie-Banner eingeholt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">6. Google Maps</h2>
            <p className="mt-3">
              Auf den Seiten „Einsatzgebiet“ und „Kontakt“ bieten wir die Einbindung einer Karte des Dienstes
              Google Maps an, betrieben von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Die Karte wird erst geladen, nachdem Sie über unser Cookie-Einstellungen-Tool ausdrücklich
              der Kategorie „Externe Inhalte“ zugestimmt haben (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mt-3">
              Wird die Karte geladen, kann Google unter anderem Ihre IP-Adresse verarbeiten. Weitere Informationen
              zur Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google unter{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent"
              >
                policies.google.com/privacy
              </a>
              . Ohne Ihre Zustimmung zeigen wir stattdessen einen einfachen Link zu Google Maps an, dessen Aufruf
              in einem neuen Tab erfolgt und der erst dann eine Verbindung zu Google herstellt.
            </p>
            <p className="mt-3">
              Sie können Ihre Zustimmung jederzeit über die{" "}
              <Link href="/cookie-einstellungen" className="underline hover:text-accent">
                Cookie-Einstellungen
              </Link>{" "}
              widerrufen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">7. Schriftarten (Google Fonts)</h2>
            <p className="mt-3">
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten die Schriftart „Inter“. Die
              Schriftdateien werden zum Zeitpunkt der Erstellung der Website lokal auf unserem eigenen Server
              eingebunden (Self-Hosting). Beim Besuch dieser Website findet dadurch keine Verbindung zu Servern
              von Google statt und es werden keine Daten an Google übermittelt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">8. Kontaktformular</h2>
            <p className="mt-3">
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
              für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung dieser Daten erfolgt auf
              Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch Absenden des Formulars
              erteilen.
            </p>
            <p className="mt-3">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen — insbesondere handels- und steuerrechtliche Aufbewahrungsfristen — bleiben unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">9. Auftragsverarbeiter</h2>
            <p className="mt-3">
              Zur Bereitstellung dieser Website und zur Bearbeitung von Kontaktanfragen setzen wir unter anderem
              folgende Auftragsverarbeiter im Sinne von Art. 28 DSGVO ein, mit denen jeweils ein entsprechender
              Vertrag zur Auftragsverarbeitung besteht bzw. vor Live-Gang abgeschlossen wird:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>unser Hosting-Anbieter (siehe Ziffer 4)</li>
              <li>[TODO — ggf. Anbieter für den technischen Versand von Formularanfragen ergänzen]</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">10. Speicherdauer</h2>
            <p className="mt-3">
              Sofern innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Berechtigte gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">11. Ihre Rechte</h2>
            <p className="mt-3">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die
              Zukunft widerrufen, etwa formlos per E-Mail an {siteConfig.contact.email}.
            </p>
            <p className="mt-3">
              Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, z. B. bei der für
              Nordrhein-Westfalen zuständigen Landesbeauftragten für Datenschutz und Informationsfreiheit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">12. Datenschutzbeauftragter</h2>
            <p className="mt-3">
              Ob die Bestellung eines Datenschutzbeauftragten gesetzlich erforderlich ist, hängt unter anderem
              von der Mitarbeiterzahl ab. [TODO — Mitarbeiterzahl mit Robert Wikarek klären und diesen Abschnitt
              bei Bedarf um Kontaktdaten eines Datenschutzbeauftragten ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">13. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mt-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">14. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="mt-3">
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website und
              Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es
              notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-5 text-sm">
            Diese Datenschutzerklärung ist ein Muster und ersetzt keine rechtliche Beratung. Vor Veröffentlichung
            sollte eine rechtliche Prüfung erfolgen.
          </div>
        </Container>
      </section>
    </>
  );
}
