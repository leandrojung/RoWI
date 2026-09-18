import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/site-config";

export default function CtaBanner({
  title = "Bereit für den nächsten Schritt?",
  lead = "Schildern Sie uns Ihr Anliegen — wir melden uns schnellstmöglich mit einer Einschätzung zurück.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-accent text-white">
      <Container className="flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-white/90">{lead}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.contact.phoneHref}
            className="rounded-md bg-white px-6 py-3.5 text-center text-sm font-semibold text-accent transition hover:bg-white/90"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
          <Link
            href="/kontakt#kontaktformular"
            className="rounded-md border-2 border-white px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-accent"
          >
            Anfrage stellen
          </Link>
        </div>
      </Container>
    </section>
  );
}
