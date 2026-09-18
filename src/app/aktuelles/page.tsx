import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Aktuelles",
  description:
    "News, Ratgeber und Hintergrundwissen rund um Wartung, Reparatur und Service von Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/aktuelles" },
};

export default function AktuellesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Aktuelles", href: "/aktuelles" }]} />
      <PageHero
        eyebrow="Aktuelles"
        title="Wissenswertes rund um Steinbearbeitungsmaschinen"
        lead="Praxisnahe Beiträge zu Wartung, Reparatur und der Auswahl des richtigen Service-Partners."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex h-full flex-col rounded-lg border border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{post.category}</p>
                <h2 className="mt-2 text-lg font-bold text-ink">
                  <Link href={`/aktuelles/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h2>
                <time dateTime={post.date} className="mt-2 text-xs text-ink-soft">
                  {post.dateDisplay}
                </time>
                <p className="mt-3 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                <Link
                  href={`/aktuelles/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                >
                  Weiterlesen
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
