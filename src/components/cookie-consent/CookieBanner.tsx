"use client";

import { useState } from "react";
import Link from "next/link";
import { useConsent } from "./useConsent";
import { acceptAll, rejectNonEssential } from "./consent-store";
import CookieSettingsForm from "./CookieSettingsForm";
import LiquidButton from "../ui/LiquidButton";

export default function CookieBanner() {
  const { hasDecided } = useConsent();
  const [showSettings, setShowSettings] = useState(false);

  if (hasDecided) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-heading"
      className="fixed inset-x-0 bottom-0 border-t border-border bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)]"
      style={{ zIndex: "var(--z-banner)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
        <h2 id="cookie-banner-heading" className="text-base font-semibold text-ink">
          Cookie-Einstellungen
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Wir verwenden nur technisch notwendige Cookies, um diese Website zuverlässig bereitzustellen. Optional
          können Sie externe Inhalte wie die Google-Maps-Karte zulassen. Mehr dazu in unserer{" "}
          <Link href="/datenschutz" className="underline hover:text-accent">
            Datenschutzerklärung
          </Link>
          .
        </p>

        {showSettings && (
          <div className="mt-4 animate-fade-in">
            <CookieSettingsForm compact />
          </div>
        )}

        {!showSettings && (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="rounded-md border-2 border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white sm:order-1"
            >
              Ablehnen
            </button>
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="rounded-md border-2 border-border px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink sm:order-2"
            >
              Einstellungen
            </button>
            <LiquidButton
              as="button"
              type="button"
              onClick={acceptAll}
              rounded={6}
              padding="12px 20px"
              blobSize={60}
              className="text-sm sm:order-3"
            >
              Alle akzeptieren
            </LiquidButton>
          </div>
        )}
      </div>
    </div>
  );
}
