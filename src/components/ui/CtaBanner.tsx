import Link from "next/link";
import Container from "./Container";
import Icon from "../Icon";
import { siteConfig } from "@/lib/site-config";

export default function CtaBanner({
  title = "Maschine steht? Rufen Sie an.",
  lead = "Kurze Schilderung genügt — Sie bekommen eine ehrliche Einschätzung, keine Verkaufsnummer.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-accent text-white">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <Container className="relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <h2 className="max-w-[18ch] text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-[52ch] text-white/85">{lead}</p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-bold text-accent transition-transform duration-300 hover:scale-[1.02]"
          >
            <Icon name="phone" size={20} />
            {siteConfig.contact.phoneDisplay}
          </a>
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
  );
}
