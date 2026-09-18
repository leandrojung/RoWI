import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Einsatzgebiet",
  description:
    "Werkstatt und Sitz in Heiden im Münsterland, mobiler Service für Steinbearbeitungsmaschinen deutschlandweit.",
  alternates: { canonical: "/einsatzgebiet" },
};

export default function EinsatzgebietPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Einsatzgebiet", href: "/einsatzgebiet" }]} />
      <PageHero
        title="Sitz in Heiden, unterwegs in ganz Deutschland"
        lead="Werkstatt im Münsterland, mobiler Service bundesweit — je nachdem, was für Ihre Maschine schneller geht."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
              <Icon name="pin" size={22} />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink">Werkstatt &amp; Sitz in Heiden</h2>
            <p className="mt-3 max-w-[55ch] text-ink-soft">
              Firmensitz und Werkstatt liegen in Heiden im Münsterland, gut erreichbar über B67 und A31. Hier
              wird alles repariert, was besser auf der Werkbank liegt.
            </p>

            <dl className="mt-7 space-y-3 rounded-2xl border border-border p-6 text-sm">
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 text-ink-soft">Adresse</dt>
                <dd className="font-semibold text-ink">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </dd>
              </div>
              <div className="flex gap-4 border-t border-border pt-3">
                <dt className="w-28 shrink-0 text-ink-soft">Geöffnet</dt>
                <dd className="font-semibold text-ink">{siteConfig.openingHours.labelLong}</dd>
              </div>
              <div className="flex gap-4 border-t border-border pt-3">
                <dt className="w-28 shrink-0 text-ink-soft">Anfahrt</dt>
                <dd className="font-semibold text-ink">über B67 und A31</dd>
              </div>
            </dl>

            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 font-semibold text-accent"
            >
              Route in Google Maps öffnen
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </a>

            <div className="mt-7">
              <GoogleMapEmbed />
            </div>
          </Reveal>

          <Reveal className="min-w-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
              <Icon name="truck" size={22} />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink">Mobiler Service bundesweit</h2>
            <p className="mt-3 max-w-[55ch] text-ink-soft">
              Die meisten Einsätze finden direkt beim Kunden statt — unabhängig davon, wo in Deutschland der
              Betrieb sitzt. Maschinen dieser Größe transportiert man nicht mal eben.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                { title: "Reparatur vor Ort", text: "Fehlersuche und Instandsetzung direkt an der Anlage." },
                { title: "Wartung im Betrieb", text: "Planbare Termine, abgestimmt auf Ihre Produktion." },
                { title: "Aufstellung & Umzug", text: "Inbetriebnahme, Umstellung und Wiederaufbau." },
                { title: "Schulung an Ihrer Maschine", text: "CNC-Einweisung mit Ihren echten Werkstücken." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 rounded-xl border border-border p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon name="check" size={14} strokeWidth={2.4} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-ink">{item.title}</span>
                    <span className="block text-sm text-ink-soft">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 rounded-xl bg-surface-muted p-5 text-sm text-ink-soft">
              Wie schnell wir bei Ihnen sein können, hängt von Entfernung und Dringlichkeit ab. Rufen Sie an —
              dann bekommen Sie eine konkrete Aussage statt einer Werbeversprechung.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        title="Egal wo Ihr Betrieb steht"
        lead="Schildern Sie kurz Ihr Anliegen — wir sagen Ihnen, wie und wann wir es lösen."
      />
    </>
  );
}
