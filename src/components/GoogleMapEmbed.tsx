"use client";

import { useState } from "react";
import { useConsent } from "./cookie-consent/useConsent";
import { acceptAll } from "./cookie-consent/consent-store";
import LiquidButton from "./ui/LiquidButton";
import { siteConfig } from "@/lib/site-config";

const mapQuery = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`
);

export default function GoogleMapEmbed() {
  const { externalAllowed, hasDecided } = useConsent();
  const [justAllowed, setJustAllowed] = useState(false);

  const isVisible = externalAllowed || justAllowed;

  if (isVisible) {
    return (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border sm:aspect-video">
        <iframe
          title={`Anfahrt zu ${siteConfig.name} in ${siteConfig.address.city}`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          className="h-full w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-lg border border-border bg-surface-muted p-6 text-center sm:aspect-video">
      <p className="max-w-sm text-sm text-ink-soft">
        Die Karte wird von Google Maps geladen. Dabei können Daten an Google übertragen werden. Bitte stimmen Sie
        dem Laden externer Inhalte zu, oder öffnen Sie die Anfahrt direkt bei Google Maps.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <LiquidButton
          as="button"
          type="button"
          onClick={() => {
            acceptAll();
            setJustAllowed(true);
          }}
          rounded={6}
          padding="10px 16px"
          blobSize={56}
          contentWrap
          className="max-w-[16rem] text-sm"
        >
          Karte laden & Cookies akzeptieren
        </LiquidButton>
        <a
          href={siteConfig.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border-2 border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
        >
          Auf Google Maps öffnen
        </a>
      </div>
      {!hasDecided && (
        <p className="text-xs text-ink-soft">Sie können Ihre Auswahl jederzeit in den Cookie-Einstellungen ändern.</p>
      )}
    </div>
  );
}
