import Link from "next/link";
import Container from "./Container";
import Icon from "../Icon";
import LiquidButton from "./LiquidButton";
import SectionSeam, { type SeamTone } from "./SectionSeam";
import { siteConfig } from "@/lib/site-config";

export default function CtaBanner({
  title = "Maschine steht? Rufen Sie an.",
  lead = "Kurze Schilderung genügt — Sie bekommen eine ehrliche Einschätzung, keine Verkaufsnummer.",
  seamFrom = "white",
}: {
  title?: string;
  lead?: string;
  /** Farbe des direkt vorangehenden Abschnitts — meist die normale weiße Seitenfläche. */
  seamFrom?: SeamTone;
}) {
  return (
    <>
      <SectionSeam from={seamFrom} to="accent" />
      <section className="relative overflow-hidden bg-accent text-white">
        <div className="stripe-drift absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-24 right-[8%] h-72 w-72 rounded-full bg-white/10 blur-[90px]" aria-hidden="true" />
        <Container className="relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              {siteConfig.openingHours.label} — persönlich erreichbar
            </p>
            <h2 className="max-w-[18ch] text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-[52ch] text-white/85">{lead}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
            <LiquidButton
              href={siteConfig.contact.phoneHref}
              fill="#ffffff"
              blobColor="#e8e8e8"
              textColor="#c8102e"
              rounded={12}
              padding="16px 28px"
              blobSize={76}
            >
              <Icon name="phone" size={20} />
              {siteConfig.contact.phoneDisplay}
            </LiquidButton>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              <Icon name="whatsapp" size={20} />
              WhatsApp
            </a>
            <Link
              href="/kontakt#kontaktformular"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              <Icon name="mail" size={20} />
              Formular
            </Link>
          </div>
        </Container>
      </section>
      <SectionSeam from="accent" to="ink" />
    </>
  );
}
