import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/ui/CtaBanner";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle.replace(/ \| Rowi Maschinenservice$/, ""),
    description: post.metaDescription,
    alternates: { canonical: `/aktuelles/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[{ name: "Aktuelles", href: "/aktuelles" }, { name: post.title, href: `/aktuelles/${post.slug}` }]}
        seamTo="white"
      />

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{post.category}</p>
          <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>
          <time dateTime={post.date} className="mt-3 block text-sm text-ink-soft">
            {post.dateDisplay}
          </time>

          <div className="mt-8 space-y-6">
            {post.content.map((block, index) => (
              <div key={index}>
                {block.heading && <h2 className="text-2xl font-bold text-ink">{block.heading}</h2>}
                <div className={block.heading ? "mt-3 space-y-4" : "space-y-4"}>
                  {block.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-6 text-sm">
            <Link href="/aktuelles" className="font-semibold text-accent hover:underline">
              ← Zurück zur Übersicht
            </Link>
            <Link href="/kontakt#kontaktformular" className="font-semibold text-accent hover:underline">
              Anfrage stellen →
            </Link>
          </div>
        </Container>
      </article>

      <CtaBanner />
    </>
  );
}
