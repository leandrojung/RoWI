import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import PopcornText from "@/components/motion/PopcornText";
import LiquidButton from "@/components/ui/LiquidButton";
import { getServiceBySlug, services } from "@/lib/services-data";
import { siteConfig, targetAudience } from "@/lib/site-config";
import { faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { withSoftHyphens } from "@/lib/typography";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle.replace(/ \| Rowi Maschinenservice$/, ""),
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const isSofortdienst = service.slug === "sofortdienst";

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: service.navLabel, href: `/leistungen/${service.slug}` },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        {/* Decorative large bg icon */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.035]"
          aria-hidden="true"
          style={{ fontSize: 0 }}
        >
          <Icon name={service.icon} size={380} />
        </div>

        {/* Red glow — top right */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,16,46,0.18) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        {/* Red glow — bottom left */}
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,16,46,0.10) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <Container className="relative py-20 sm:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: content */}
            <div className="min-w-0 flex-1">
              {/* Badge */}
              {service.badge && (
                <span className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                  {isSofortdienst && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-80" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                  )}
                  {service.badge}
                </span>
              )}

              {/* Icon block */}
              <div className="hero-in flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/30">
                <Icon name={service.icon} size={32} />
              </div>

              {/* H1 with PopcornText */}
              <h1 className="hero-in hero-in-delay-1 mt-6 max-w-[22ch] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.02em]">
                <PopcornText
                  text={withSoftHyphens(service.h1)}
                  tag="span"
                  appearTrigger="default"
                  stagger={0.018}
                  rotationRange={14}
                  transition={{ type: "spring", stiffness: 400, damping: 16, mass: 0.9 }}
                />
              </h1>

              {/* Intro */}
              <p className="hero-in hero-in-delay-2 mt-5 max-w-[56ch] text-lg leading-relaxed text-white/65">
                {service.intro}
              </p>
            </div>

            {/* Right: CTAs */}
            <div className="hero-in hero-in-delay-3 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-2 lg:flex-col lg:pt-[88px]">
              <LiquidButton
                href={siteConfig.contact.phoneHref}
                rounded={9999}
                padding="16px 32px"
                blobSize={72}
                className="shadow-lg shadow-accent/25"
              >
                <Icon name="phone" size={18} />
                {siteConfig.contact.phoneDisplay}
              </LiquidButton>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 font-semibold transition-all duration-300 hover:border-white/50 hover:bg-white/8"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {[
              { value: "20+", label: "Jahre Erfahrung" },
              { value: "18+", label: "Hersteller" },
              { value: "5,0 ★", label: "Google-Bewertung", accent: true },
              { value: "Bundesweit", label: "Mobiler Einsatz" },
            ].map(({ value, label, accent }) => (
              <div key={label}>
                <p className={`text-2xl font-bold ${accent ? "text-accent" : "text-white"}`}>{value}</p>
                <p className="mt-1 text-sm text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Kernaussagen ─────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Das Wichtigste auf einen Blick</h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {service.highlights.map((highlight, i) => (
              <div
                key={highlight.title}
                className="relative overflow-hidden rounded-2xl p-8"
                style={
                  i === 0
                    ? { background: "linear-gradient(135deg, #c8102e 0%, #8b0b1c 100%)", color: "#fff" }
                    : { background: "var(--color-ink, #1a1a2e)", color: "#fff" }
                }
              >
                {/* Decorative number */}
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none text-[5rem] font-black leading-none opacity-10"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl ${i === 0 ? "bg-white/20" : "bg-accent/20"}`}>
                  <Icon name={service.icon} size={20} />
                </div>
                <h3 className="text-lg font-bold">{highlight.title}</h3>
                <p className={`mt-2.5 text-sm leading-relaxed ${i === 0 ? "text-white/75" : "text-white/60"}`}>
                  {highlight.text}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Ablauf ───────────────────────────────────────── */}
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">So läuft es ab</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {index < service.process.length - 1 && (
                  <div
                    className="absolute left-[4.5rem] top-8 hidden h-px w-[calc(100%+2rem)] bg-white/10 lg:block"
                    aria-hidden="true"
                  />
                )}
                {/* Step number circle */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10">
                  <span className="text-lg font-black text-accent">{index + 1}</span>
                </div>
                {/* Decorative large number behind */}
                <span
                  className="pointer-events-none absolute left-0 top-0 select-none text-[4.5rem] font-black leading-none text-white/[0.04]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Vorteile + Zielgruppe ────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="min-w-0">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Was Sie davon haben</h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Icon name="check" size={14} strokeWidth={2.5} />
                  </span>
                  <span className="pt-0.5 text-ink-soft">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="min-w-0">
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "linear-gradient(160deg, #1e1e2e 0%, #2a0a10 100%)" }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                <Icon name="target" size={20} />
              </div>
              <h2 className="text-xl font-bold">Für wen?</h2>
              <ul className="mt-5 space-y-3">
                {targetAudience.map((group) => (
                  <li key={group} className="flex items-center gap-3 text-white/80">
                    <span className="text-accent">
                      <Icon name="check" size={15} strokeWidth={2.4} />
                    </span>
                    {group}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/50">
                Einzelfirma oder Großbetrieb — der Service ist derselbe.
              </p>
              <Link
                href="/einsatzgebiet"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <Icon name="van" size={15} />
                Auch bundesweit im Einsatz
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Häufige Fragen</h2>
          </Reveal>
          <Reveal className="mt-8">
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* ── Verwandte Leistungen ─────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">Passt außerdem dazu</h2>
          </Reveal>
          <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/leistungen/${related.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
                  <Icon name={related.icon} size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-ink">{related.navLabel}</span>
                  <span className="block text-sm text-ink-soft">{related.teaser}</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
      <JsonLd data={jsonLdGraph([serviceSchema(service), faqSchema(service.faqs)])} />
    </>
  );
}
