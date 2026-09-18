import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieSettingsForm from "@/components/cookie-consent/CookieSettingsForm";

export const metadata: Metadata = {
  title: "Cookie-Einstellungen",
  description: "Verwalten Sie hier jederzeit Ihre Cookie-Einstellungen für rowi-maschinenservice.de.",
  alternates: { canonical: "/cookie-einstellungen" },
  robots: { index: false, follow: true },
};

export default function CookieEinstellungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cookie-Einstellungen", href: "/cookie-einstellungen" }]} />
      <PageHero
        title="Cookie-Einstellungen"
        lead="Hier können Sie Ihre Einwilligung zu optionalen Inhalten jederzeit einsehen und ändern."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <CookieSettingsForm />
        </Container>
      </section>
    </>
  );
}
