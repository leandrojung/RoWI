import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Aktuelles",
  description:
    "Praxiswissen rund um Wartung, Reparatur und Service von Steinbearbeitungsmaschinen.",
  alternates: { canonical: "/aktuelles" },
};

export default function AktuellesPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Breadcrumbs items={[{ name: "Aktuelles", href: "/aktuelles" }]} />
      <PageHero
        title="Praxiswissen aus der Werkstatt"
        lead="Was sich in über 20 Jahren an Steinbearbeitungsmaschinen gelernt hat."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <Link
              href={`/aktuelles/${featured.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border transition-shadow duration-300 hover:shadow-lg lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="p-8 sm:p-10">
                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                  {featured.category}
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink transition-colors group-hover:text-accent sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-[55ch] text-ink-soft">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4">
                  <time dateTime={featured.date} className="text-sm text-ink-soft">
                    {featured.dateDisplay}
                  </time>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                    Lesen
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Icon name="arrow-right" size={16} />
                    </span>
                  </span>
                </div>
              </div>
              <div className="hidden items-center justify-center bg-ink p-10 lg:flex">
                <Icon name="gear" size={90} className="text-white/15" />
              </div>
            </Link>
          </Reveal>

          <Reveal stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/aktuelles/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-full bg-surface-muted px-3 py-1 text-xs font-bold text-ink-soft">
                  {post.category}
                </span>
                <h2 className="mt-4 text-xl font-bold text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <time dateTime={post.date} className="text-xs text-ink-soft">
                    {post.dateDisplay}
                  </time>
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="arrow-right" size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
