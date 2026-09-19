import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import LiquidButton from "@/components/ui/LiquidButton";
import { siteConfig, processSteps } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Rowi Maschinenservice erreichen: Telefon, WhatsApp, E-Mail oder Kontaktformular. Fachbetrieb für Steinbearbeitungsmaschinen in Heiden.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} />
      <PageHero
        title="Schneller Draht statt Warteschleife"
        lead="Sie erreichen direkt Robert Wikarek — keine Hotline, kein Callcenter."
      />

      {/* Drei Wege */}
      <section className="border-b border-border py-14">
        <Container className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <LiquidButton
            href={siteConfig.contact.phoneHref}
            rounded={16}
            padding="32px"
            blobSize={140}
            contentDirection="column"
            contentWrap
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <Icon name="phone" size={30} />
            <span className="text-lg font-bold">{siteConfig.contact.phoneDisplay}</span>
            <span className="text-sm text-white/80">Am schnellsten während der Öffnungszeiten</span>
          </LiquidButton>

          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl bg-[#25D366] p-8 text-center text-white transition-transform duration-300 hover:-translate-y-1"
          >
            <Icon name="whatsapp" size={30} />
            <span className="text-lg font-bold">WhatsApp</span>
            <span className="text-sm text-white/90">Foto vom Defekt spart oft eine Anfahrt</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-ink"
          >
            <span className="text-accent">
              <Icon name="mail" size={30} />
            </span>
            <span className="text-lg font-bold text-ink">E-Mail</span>
            <span className="text-sm text-ink-soft">{siteConfig.contact.email}</span>
          </a>
        </Container>
      </section>

      {/* Formular + Daten */}
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="min-w-0">
            <h2 className="text-2xl font-bold text-ink">Kontaktdaten</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex gap-4">
                <dt className="flex w-32 shrink-0 items-center gap-2 text-ink-soft">
                  <Icon name="pin" size={16} />
                  Adresse
                </dt>
                <dd className="font-semibold text-ink">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </dd>
              </div>
              <div className="flex gap-4 border-t border-border pt-4">
                <dt className="flex w-32 shrink-0 items-center gap-2 text-ink-soft">
                  <Icon name="phone" size={16} />
                  Mobil
                </dt>
                <dd>
                  <a href={siteConfig.contact.phoneHref} className="font-semibold text-ink hover:text-accent">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 border-t border-border pt-4">
                <dt className="w-32 shrink-0 pl-6 text-ink-soft">Festnetz</dt>
                <dd>
                  <a href={siteConfig.contact.landlineHref} className="font-semibold text-ink hover:text-accent">
                    {siteConfig.contact.landlineDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 border-t border-border pt-4">
                <dt className="w-32 shrink-0 pl-6 text-ink-soft">Telefax</dt>
                <dd className="font-semibold text-ink">{siteConfig.contact.faxDisplay}</dd>
              </div>
              <div className="flex gap-4 border-t border-border pt-4">
                <dt className="flex w-32 shrink-0 items-center gap-2 text-ink-soft">
                  <Icon name="clock" size={16} />
                  Geöffnet
                </dt>
                <dd className="font-semibold text-ink">{siteConfig.openingHours.labelLong}</dd>
              </div>
            </dl>

            <h2 className="mt-12 text-2xl font-bold text-ink">Was nach Ihrer Anfrage passiert</h2>
            <ol className="mt-6 space-y-4">
              {processSteps.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-ink">{step.title}</span>
                    <span className="block text-sm text-ink-soft">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-ink">Anfahrt</h2>
              <div className="mt-5">
                <GoogleMapEmbed />
              </div>
            </div>
          </Reveal>

          <Reveal
            id="kontaktformular"
            className="min-w-0 scroll-mt-28 self-start rounded-2xl border border-border bg-surface-muted p-7 sm:p-9"
          >
            <h2 className="text-2xl font-bold text-ink">Anfrage stellen</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Je konkreter die Beschreibung, desto besser die erste Einschätzung. Maschinentyp und Baujahr
              helfen immer.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
