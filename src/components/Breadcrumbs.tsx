import Link from "next/link";
import JsonLd from "./JsonLd";
import SectionSeam, { type SeamTone } from "./ui/SectionSeam";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({
  items,
  seamTo = "ink",
}: {
  items: Crumb[];
  /** Farbe des direkt folgenden Abschnitts — auf fast jeder Unterseite die dunkle Hero. */
  seamTo?: SeamTone;
}) {
  const full: Crumb[] = [{ name: "Startseite", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface-muted">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-3 text-sm text-ink-soft sm:px-6">
          {full.map((crumb, index) => {
            const isLast = index === full.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {index > 0 && (
                  <span aria-hidden="true" className="mx-1 text-ink-soft/60">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-accent hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
        <JsonLd
          data={jsonLdGraph([
            breadcrumbSchema(full.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href === "/" ? "" : c.href}` }))),
          ])}
        />
      </nav>
      <SectionSeam from="muted" to={seamTo} />
    </>
  );
}
