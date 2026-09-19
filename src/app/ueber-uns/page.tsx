import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import LiquidButton from "@/components/ui/LiquidButton";
import { siteConfig, targetAudience } from "@/lib/site-config";
import { withSoftHyphens } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Robert Wikarek, Industriemechaniker und Inhaber von Rowi Maschinenservice. Über 20 Jahre an Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/ueber-uns" },
};

const milestones = [
  {
    year: "2001",
    title: "Start im Kundendienst",
    text: "Als Monteur bei der Industriebedarf Gördes GmbH in Dorsten — erste Jahre an Steinbearbeitungsmaschinen.",
  },
  {
    year: "bis 2011",
    title: "Vom Monteur zum Geschäftsführer",
    text: "Verantwortung für Serviceeinsätze, Kunden und Abläufe im selben Betrieb.",
  },
  {
    year: "2012",
    title: "Eigener Betrieb",
    text: "Gründung von rowi Maschinenservice in Heiden, spezialisiert auf die Steinindustrie.",
  },
  {
    year: "heute",
    title: "Werkstatt und bundesweiter Service",
    text: "Werkstatt an der Friesenstraße, mobile Einsätze in ganz Deutschland.",
  },
];

const values = [
  {
    icon: "shield" as const,
    title: "Ehrliche Einschätzung",
    text: "Lohnt sich eine Reparatur nicht mehr, sagen wir das — auch wenn wir daran nichts verdienen.",
  },
  {
    icon: "clock" as const,
    title: "Termintreue",
    text: "Zugesagt ist zugesagt. Wenn etwas dazwischenkommt, erfahren Sie es vorher, nicht hinterher.",
  },
  {
    icon: "wrench" as const,
    title: "Handwerk statt Teiletausch",
    text: "Erst die Ursache finden, dann reparieren. Teile auf Verdacht wechseln kann jeder.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Über uns", href: "/ueber-uns" }]} />

      {/* Persönlicher Auftakt — mit echtem Foto statt Raster-Banner */}
      <div className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/12 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h1 className="hero-in max-w-[20ch] text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08]">
              {withSoftHyphens("Ein Mann, ein Fach, über 20 Jahre")}
            </h1>
            <p className="hero-in hero-in-delay-1 mt-5 max-w-[54ch] text-lg text-white/70">
              Rowi Maschinenservice ist kein anonymer Dienstleister. Sie sprechen mit dem, der auch an Ihrer
              Maschine arbeitet.
            </p>
          </div>
          <div className="hero-in hero-in-delay-2 relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl shadow-2xl shadow-black/40 lg:mx-0 lg:max-w-sm">
            <Image
              src="/fotos/inhaber-einsatz.webp"
              alt="Robert Wikarek im Einsatz an einer Maschine"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 280px, 384px"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </Container>
      </div>

      {/* Vorstellung */}
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <PhotoFrame photo="robertPortrait" aspect="aspect-[4/5]" className="mx-auto w-full max-w-sm lg:max-w-none" />
          </Reveal>
          <Reveal className="min-w-0">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Robert Wikarek</h2>
            <p className="mt-2 font-semibold text-accent">Inhaber &amp; Ihr direkter Ansprechpartner</p>
            <div className="mt-6 max-w-[62ch] space-y-4 text-ink-soft">
              <p>
                Ausgebildeter Industriemechaniker, Fachrichtung Betriebstechnik. Seit 2001 an
                Steinbearbeitungsmaschinen — erst im Kundendienst, später als Geschäftsführer, seit Januar 2012
                mit dem eigenen Betrieb in Heiden.
              </p>
              <p>
                In dieser Zeit sind hunderte Maschinen durch die Hände gegangen: Sägen, Fräsen, Poliermaschinen,
                Bearbeitungszentren. Man merkt schnell, welche Bauteile zuerst aufgeben und woran es liegt, wenn
                die Präzision nachlässt.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LiquidButton
                href={siteConfig.contact.phoneHref}
                rounded={12}
                padding="14px 24px"
                blobSize={68}
              >
                <Icon name="phone" size={18} />
                {siteConfig.contact.phoneDisplay}
              </LiquidButton>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-ink px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Werdegang */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-bold text-ink">Der Weg hierher</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.year}>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-bold text-white">
                    {milestone.year}
                  </span>
                  {index < milestones.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 font-bold text-ink">{milestone.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{milestone.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Haltung */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-[22ch] text-3xl font-bold text-ink sm:text-4xl">Worauf Sie sich verlassen können</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon name={value.icon} size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Werkstatt & Zielgruppe */}
      <section className="border-t border-border bg-ink py-16 text-white sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <PhotoFrame photo="workshopWide" aspect="aspect-[4/3]" tone="dark" />
          </Reveal>
          <Reveal className="min-w-0">
            <h2 className="text-3xl font-bold">Werkstatt in Heiden, unterwegs in ganz Deutschland</h2>
            <p className="mt-4 max-w-[55ch] text-white/70">
              In der Werkstatt an der Friesenstraße wird repariert, was besser auf der Werkbank liegt. Alles
              andere passiert direkt bei Ihnen im Betrieb.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/40">Kunden sind</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {targetAudience.map((group) => (
                <li key={group} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                  {group}
                </li>
              ))}
            </ul>
            <Link href="/einsatzgebiet" className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent">
              Einsatzgebiet ansehen
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBanner title="Lernen Sie uns kennen" lead="Ein Anruf genügt — Sie sprechen direkt mit Robert Wikarek." />
    </>
  );
}
