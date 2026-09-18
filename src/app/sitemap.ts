import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { blogPosts } from "@/lib/blog-data";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/ueber-uns", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/maschinen-hersteller", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/einsatzgebiet", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/bewertungen", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/aktuelles", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/leistungen/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/aktuelles/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
