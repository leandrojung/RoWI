import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import SectionSeam from "@/components/ui/SectionSeam";
import LiquidButton from "@/components/ui/LiquidButton";
import { manufacturerGroups, manufacturers, siteConfig } from "@/lib/site-config";
import type { IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Maschinen & Hersteller",
  description:
    "Service für Steinbearbeitungsmaschinen von Löffler, Kolb, Comandulli, Thibaut, Marmo Meccanica und weiteren Herstellern. Weitere Marken auf Anfrage.",
  alternates: { canonical: "/maschinen-hersteller" },
};

export default function MaschinenHerstellerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Maschinen & Hersteller", href: "/maschinen-hersteller" }]} />
      <PageHero
        title="Service für die Marken Ihrer Werkstatt"
        lead={`Sägen, Fräsen, Poliermaschinen, Pumpen und Absauganlagen — Erfahrung mit über ${manufacturers.length} Herstellern.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {manufacturerGroups.map((group) => (
              <Reveal
                key={group.category}
                className="rounded-2xl border border-border p-7 transition-shadow duration-300 hover:shadow-md sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                    <Icon name={group.icon as IconName} size={22} />
                  </span>
                  <h2 className="text-xl font-bold text-ink">{group.category}</h2>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.brands.map((brand) => (
                    <li key={brand.name}>
                      {brand.url ? (
                        <a
                          href={brand.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-lg bg-surface-muted px-4 py-2.5 text-sm font-semibold text-ink-soft transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-[0_4px_12px_rgba(200,16,46,0.3)]"
                        >
                          {brand.name}
                          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true" className="opacity-60">
                            <path d="M7 1h4v4M11 1L5 7M2 3H1v8h8V9" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ) : (
                        <span className="rounded-lg bg-surface-muted px-4 py-2.5 text-sm font-semibold text-ink-soft">
                          {brand.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionSeam from="white" to="muted" />

      <section className="bg-surface-muted py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <h2 className="text-3xl font-bold text-ink">Ihre Marke ist nicht dabei?</h2>
            <p className="mt-4 max-w-[55ch] text-ink-soft">
              Die Liste zeigt die Hersteller, die am häufigsten auf dem Tisch liegen — sie ist nicht
              abschließend. Vieles an Steinbearbeitungsmaschinen ähnelt sich technisch stark. Fragen Sie
              einfach mit Maschinentyp und Baujahr an.
            </p>
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
              <Link
                href="/kontakt#kontaktformular"
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-ink px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <Icon name="mail" size={18} />
                Maschine anfragen
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <PhotoFrame photo="workshopWide" aspect="aspect-[4/3]" />
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        title="Unsicher, ob Ihre Maschine dabei ist?"
        lead="Ein kurzer Anruf klärt das schneller als jede Liste."
        seamFrom="muted"
      />
    </>
  );
}
