import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import CookieBanner from "@/components/cookie-consent/CookieBanner";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.claim}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Service, Wartung, Reparatur und Verkauf von Steinbearbeitungsmaschinen. Fachbetrieb in Heiden, im Einsatz deutschlandweit.",
  keywords: [
    "Steinbearbeitungsmaschinen",
    "Steinbearbeitungsmaschinen Service",
    "Steinbearbeitungsmaschinen Reparatur",
    "Steinbearbeitungsmaschinen Wartung",
    "Maschinenservice Heiden",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} – ${siteConfig.claim}`,
    description:
      "Service, Wartung, Reparatur und Verkauf von Steinbearbeitungsmaschinen. Fachbetrieb in Heiden, im Einsatz deutschlandweit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <JsonLd data={jsonLdGraph([organizationSchema(), websiteSchema()])} />
        <Header />
        <main id="main-content" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
        <CookieBanner />
      </body>
    </html>
  );
}
