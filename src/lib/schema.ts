import { siteConfig } from "./site-config";
import type { Service } from "./services-data";

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": orgId,
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.contact.phone,
    faxNumber: siteConfig.contact.fax,
    email: siteConfig.contact.email,
    vatID: siteConfig.vatId,
    priceRange: "Preise auf Anfrage",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    sameAs: [siteConfig.links.instagram, siteConfig.links.googleBusinessProfile],
    // Hinweis: Kein aggregateRating ausgegeben, solange die Anzahl der Google-Bewertungen
    // nicht final bestätigt ist ([TODO], siehe site-config.ts). Ein Sternewert ohne
    // belastbare reviewCount-Angabe wäre laut Google-Richtlinien für strukturierte Daten
    // nicht zulässig.
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": orgId },
    inLanguage: "de-DE",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "Service",
    "@id": `${siteConfig.url}/leistungen/${service.slug}#service`,
    name: service.navLabel,
    serviceType: service.navLabel,
    description: service.metaDescription,
    provider: { "@id": orgId },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Steinmetze, Bildhauer, natursteinverarbeitende Betriebe, Baumärkte",
    },
  };
}

export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
