import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import ManufacturerMarquee from "@/components/ManufacturerMarquee";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import PopcornText from "@/components/motion/PopcornText";
import ImageFlip from "@/components/motion/ImageFlip";
import VanReveal from "@/components/motion/VanReveal";
import LiquidButton from "@/components/ui/LiquidButton";
import { siteConfig, usps, processSteps, manufacturers } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { faqCategories } from "@/lib/faq-data";
import { faqSchema, jsonLdGraph } from "@/lib/schema";
import type { IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Maschinenservice & Wartung — Rowi Maschinenservice",
  description:
    "Rowi Maschinenservice: Reparatur, Wartung, Sofortdienst, Ersatzteile und An-/Verkauf von Maschinen. Fachbetrieb in Heiden, deutschlandweit im Einsatz.",
  alternates: { canonical: "/" },
};

const homepageFaqs = faqCategories.flatMap((c) => c.items).slice(0, 5);

const highlightService = services.find((s) => s.slug === "sofortdienst")!;
const otherServices = services.filter((s) => s.slug !== "sofortdienst");

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-white">
        {/* Full-bleed background photo */}
        <Image
          src="/fotos/werkstatt-03.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-ink/78" aria-hidden="true" />
        {/* Bottom gradient — softens transition to trust bar */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ink/55" aria-hidden="true" />

        {/* Content stack — centered */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-28 text-center">
          {/* Badge */}
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Seit 2012 selbstständig · seit 2001 in der Branche
          </p>

          {/* Headline */}
          <h1 className="hero-in hero-in-delay-1 mt-6 max-w-[18ch] text-[clamp(2.75rem,6vw,4.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-balance">
            <PopcornText
              text="Maschinenservice & Wartung direkt vom Fachmann"
              tag="span"
              appearTrigger="default"
              stagger={0.018}
              rotationRange={18}
              startY={28}
              transition={{ type: "spring", stiffness: 420, damping: 16, mass: 0.9 }}
            />
          </h1>

          {/* Lead text */}
          <p className="hero-in hero-in-delay-2 mt-6 max-w-[48ch] text-lg leading-relaxed text-white/70">
            Fachbetrieb in Heiden — im Einsatz in ganz Deutschland. Für Steinmetze, Bildhauer,
            Natursteinbetriebe und Baumärkte.
          </p>

          {/* CTAs */}
          <div className="hero-in hero-in-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <LiquidButton
              href={siteConfig.contact.phoneHref}
              fill="#c8102e"
              blobColor="#8b0b1c"
              textColor="#ffffff"
              rounded={9999}
              padding="16px 32px"
              blobSize={80}
            >
              <Icon name="phone" size={20} />
              {siteConfig.contact.phoneDisplay}
            </LiquidButton>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              <Icon name="whatsapp" size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Vertrauensleiste */}
      <section className="border-y border-border bg-white">
        <Container className="grid grid-cols-2 divide-x divide-y divide-border sm:divide-y-0 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-8 text-center">
            <span className="flex items-center gap-1 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={15} />
              ))}
            </span>
            <p className="text-3xl font-bold text-ink">
              <CountUp value={5} decimals={1} />
            </p>
            <p className="text-sm text-ink-soft">Google-Bewertung</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-8 text-center">
            <span className="text-accent" aria-hidden="true">
              <Icon name="clock" size={24} />
            </span>
            <p className="text-3xl font-bold text-ink">
              <CountUp value={20} />+
            </p>
            <p className="text-sm text-ink-soft">Jahre Erfahrung</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-8 text-center">
            <span className="text-accent" aria-hidden="true">
              <Icon name="shield" size={24} />
            </span>
            <p className="text-3xl font-bold text-ink">
              <CountUp value={manufacturers.length} />+
            </p>
            <p className="text-sm text-ink-soft">Hersteller im Service</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-8 text-center">
            <span className="text-accent" aria-hidden="true">
              <Icon name="truck" size={24} />
            </span>
            <p className="text-3xl font-bold leading-none text-ink">Bundesweit</p>
            <p className="text-sm text-ink-soft">Mobiler Einsatz</p>
          </div>
        </Container>
      </section>

      {/* Firmenwagen — Einsatzsignal */}
      <section
        className="overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 45% 100% at 0% 50%, rgba(200,16,46,0.09) 0%, transparent 65%), " +
            "radial-gradient(ellipse 45% 100% at 100% 50%, rgba(200,16,46,0.09) 0%, transparent 65%), " +
            "#ffffff",
        }}
      >
        <Container className="grid grid-cols-1 items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-0 lg:py-0">
          {/* Text */}
          <Reveal className="py-0 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Mobiler Einsatz</p>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Deutschlandweit direkt zu Ihrer Maschine
            </h2>
            <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-ink-soft">
              Vollausgerüsteter Firmenwagen, ein fester Ansprechpartner — kein Callcenter, keine Fremdvergabe.
              Robert Wikarek kommt persönlich.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/85"
              >
                <Icon name="phone" size={17} />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface"
              >
                <Icon name="whatsapp" size={17} />
                WhatsApp schreiben
              </a>
            </div>
          </Reveal>
          {/* Van */}
          <VanReveal />
        </Container>
      </section>

      {/* Leistungen */}
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="max-w-[16ch] text-3xl font-bold text-white sm:text-4xl">
                <PopcornText text="Alles für Ihre Maschine, aus einer Hand" tag="span" appearTrigger="scroll" stagger={0.025} rotationRange={15} />
              </h2>
              <p className="mt-3 max-w-[55ch] text-white/50">
                Von der Eilreparatur bis zur Schulung — ein Ansprechpartner für den gesamten
                Maschinenlebenszyklus.
              </p>
            </div>
            <Link
              href="/leistungen"
              className="group inline-flex shrink-0 items-center gap-2 font-semibold text-accent"
            >
              Alle Leistungen im Überblick
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sofortdienst — volle Breite, dominanter Block */}
            <Link
              href={`/leistungen/${highlightService.slug}`}
              className="group relative col-span-full overflow-hidden rounded-2xl p-10 text-white sm:p-14"
              style={{ background: "linear-gradient(135deg, #c8102e 0%, #8b0b1c 60%, #5a0612 100%)" }}
            >
              {/* Glow orb */}
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 transition-transform duration-700 group-hover:scale-150"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              {/* Pulsing live badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Sofortdienst — Produktion steht?
              </span>

              <div className="relative mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Icon name={highlightService.icon} size={52} />
                  <h3 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
                    Jetzt Soforteinsatz melden
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-lg text-white/75">
                    Dringende Fälle werden vorgezogen — telefonische Ersteinschätzung sofort,
                    Einsatz deutschlandweit.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-3 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 font-bold transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-accent">
                  Jetzt melden
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="arrow-right" size={18} />
                  </span>
                </span>
              </div>
            </Link>

            {/* Weitere Leistungen */}
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-white/8 p-7 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(200,16,46,0.15)", color: "#c8102e" }}
                >
                  <Icon name={service.icon} size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{service.navLabel}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">{service.teaser}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent/70 transition-all duration-300 group-hover:gap-3 group-hover:text-accent">
                  Mehr erfahren
                  <Icon name="arrow-right" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Hersteller-Laufband */}
      <section className="border-y border-border bg-surface-muted py-14">
        <Container>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Service für die Marken Ihrer Werkstatt</h2>
            <p className="max-w-[55ch] text-ink-soft">
              Über {manufacturers.length} Hersteller — und wenn Ihrer nicht dabei ist, fragen Sie einfach.
            </p>
          </div>
        </Container>
        <div className="mt-10">
          <ManufacturerMarquee />
        </div>
        <Container className="mt-8 text-center">
          <Link href="/maschinen-hersteller" className="group inline-flex items-center gap-2 font-semibold text-accent">
            Alle Hersteller ansehen
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <Icon name="arrow-right" size={18} />
            </span>
          </Link>
        </Container>
      </section>

      {/* Über uns */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <Reveal className="min-w-0">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Bei uns packt der Chef selbst mit an
            </h2>
            <div className="mt-5 max-w-[62ch] space-y-4 text-ink-soft">
              <p>
                Robert Wikarek ist ausgebildeter Industriemechaniker, Fachrichtung Betriebstechnik. Seit 2001
                im Maschinenservice aktiv — erst im Kundendienst, seit 2012 selbstständig mit dem eigenen Betrieb.
              </p>
              <p>
                Sie haben einen Ansprechpartner. Der, der ans Telefon geht, ist auch der, der später an Ihrer
                Maschine steht — unterstützt von einem eingespielten Team.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Industriemechaniker", "Betriebstechnik", "Im Service seit 2001"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink"
                >
                  <span className="text-accent">
                    <Icon name="check" size={15} />
                  </span>
                  {chip}
                </span>
              ))}
            </div>
            <Link href="/ueber-uns" className="group mt-7 inline-flex items-center gap-2 font-semibold text-accent">
              Mehr über den Betrieb
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          </Reveal>

          {/* Foto-Grid — alle 3 Bilder sofort sichtbar */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {/* Inhaber — groß, linke Spalte, 2 Zeilen hoch */}
              <div className="relative row-span-2 overflow-hidden rounded-xl" style={{ minHeight: "360px" }}>
                <Image
                  src="/fotos/inhaber-einsatz.webp"
                  alt="Robert Wikarek beim Einsatz an der Maschine"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* Team */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/fotos/team.webp"
                  alt="Das Rowi-Team auf der Fachmesse"
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* Firmenwagen */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/fotos/firmenwagen.webp"
                  alt="Rowi Maschinenservice Firmenwagen"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ablauf */}
      <section className="border-y border-border bg-ink py-20 text-white sm:py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-3xl font-bold sm:text-4xl">
              <PopcornText text="Vier Schritte bis die Maschine wieder läuft" tag="span" appearTrigger="scroll" stagger={0.025} rotationRange={15} />
            </h2>
          </Reveal>
          <Reveal stagger className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent text-lg font-bold text-accent">
                    {step.step}
                  </span>
                  {index < processSteps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-white/15 lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Stärken */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-bold text-ink sm:text-4xl">
              <PopcornText text="Warum Betriebe uns anrufen" tag="span" appearTrigger="scroll" stagger={0.03} rotationRange={15} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((usp) => (
              <div key={usp.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon name={usp.icon as IconName} size={22} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-ink">{usp.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{usp.description}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-surface-muted p-6">
              <p className="text-sm text-ink-soft">Noch Fragen offen?</p>
              <a
                href={siteConfig.contact.phoneHref}
                className="mt-2 text-xl font-bold text-accent transition-colors hover:text-accent-dark"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-ink-soft">{siteConfig.openingHours.labelLong}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Bewertungen & Einsatzgebiet */}
      <section className="border-t border-border bg-surface-muted py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between rounded-2xl bg-white p-8 sm:p-10">
            <div>
              <span className="flex items-center gap-1 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={22} />
                ))}
              </span>
              <p className="mt-5 text-4xl font-bold text-ink">5,0 von 5,0</p>
              <p className="mt-2 max-w-[42ch] text-ink-soft">
                So bewerten Kunden aus der Steinindustrie die Zusammenarbeit bei Google.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.links.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:underline"
              >
                Bei Google ansehen
              </a>
              <Link href="/bewertungen" className="font-semibold text-ink hover:underline">
                Referenzen
              </Link>
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-between rounded-2xl bg-white p-8 sm:p-10">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                <Icon name="pin" size={22} />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Heiden im Münsterland</h2>
              <p className="mt-2 max-w-[42ch] text-ink-soft">
                Werkstatt und Sitz an der Friesenstraße, gut erreichbar über B67 und A31. Der mobile Service
                fährt bundesweit.
              </p>
              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-ink-soft">Adresse</dt>
                  <dd className="font-medium text-ink">
                    {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-ink-soft">Geöffnet</dt>
                  <dd className="font-medium text-ink">{siteConfig.openingHours.labelLong}</dd>
                </div>
              </dl>
            </div>
            <Link href="/einsatzgebiet" className="mt-8 font-semibold text-accent hover:underline">
              Einsatzgebiet ansehen
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="min-w-0">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Kurz beantwortet</h2>
            <p className="mt-3 max-w-[40ch] text-ink-soft">
              Die Fragen, die am häufigsten kommen. Alles Weitere gerne am Telefon.
            </p>
            <Link href="/faq" className="group mt-5 inline-flex items-center gap-2 font-semibold text-accent">
              Alle Fragen
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          </Reveal>
          <Reveal className="min-w-0">
            <FaqAccordion items={homepageFaqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
      <JsonLd data={jsonLdGraph([faqSchema(homepageFaqs)])} />
    </>
  );
}
