import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqCategories, allFaqItems } from "@/lib/faq-data";
import { faqSchema, jsonLdGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Häufige Fragen zu Rowi Maschinenservice: Leistungen, Hersteller, Preise, Öffnungszeiten, Einsatzgebiet und Ablauf.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        title="Häufig gestellte Fragen"
        lead="Antworten auf die wichtigsten Fragen rund um Rowi Maschinenservice — von Leistungen über Preise bis zum Einsatzgebiet."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-12">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-ink">{category.category}</h2>
              <div className="mt-5">
                <FaqAccordion items={category.items} />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Ihre Frage war nicht dabei?"
        lead="Kontaktieren Sie uns direkt — wir beantworten Ihr Anliegen gerne persönlich."
      />
      <JsonLd data={jsonLdGraph([faqSchema(allFaqItems)])} />
    </>
  );
}
