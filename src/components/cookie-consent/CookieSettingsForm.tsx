"use client";

import { useState } from "react";
import { writeConsent, acceptAll, rejectNonEssential } from "./consent-store";
import { useConsent } from "./useConsent";
import LiquidButton from "../ui/LiquidButton";

type Props = {
  onSaved?: () => void;
  compact?: boolean;
};

export default function CookieSettingsForm({ onSaved, compact = false }: Props) {
  const { consent } = useConsent();
  // Lokales Override, solange der Nutzer den Schalter in dieser Sitzung noch nicht bewegt hat;
  // danach bleibt die gespeicherte Einwilligung (consent) die Quelle der Wahrheit.
  const [override, setOverride] = useState<boolean | null>(null);
  const external = override ?? consent?.categories.external ?? false;
  const [savedHint, setSavedHint] = useState<string | null>(null);

  function handleSave() {
    writeConsent({ necessary: true, external });
    setSavedHint("Ihre Auswahl wurde gespeichert.");
    onSaved?.();
  }

  function handleAcceptAll() {
    acceptAll();
    setOverride(true);
    setSavedHint("Alle Kategorien wurden akzeptiert.");
    onSaved?.();
  }

  function handleRejectAll() {
    rejectNonEssential();
    setOverride(false);
    setSavedHint("Es werden nur technisch notwendige Cookies verwendet.");
    onSaved?.();
  }

  return (
    <div className={compact ? "" : "space-y-6"}>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-surface-muted p-4">
          <div>
            <p className="font-semibold text-ink">Technisch notwendig</p>
            <p className="mt-1 text-sm text-ink-soft">
              Erforderlich für den grundlegenden Betrieb der Website, z. B. Speicherung Ihrer Cookie-Auswahl. Kann
              nicht deaktiviert werden.
            </p>
          </div>
          <span
            className="mt-1 shrink-0 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white"
            aria-hidden="true"
          >
            Immer aktiv
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
          <div>
            <label htmlFor="consent-external" className="font-semibold text-ink">
              Externe Inhalte (Karten)
            </label>
            <p className="mt-1 text-sm text-ink-soft">
              Ermöglicht das Laden der eingebetteten Google-Maps-Karte auf der Einsatzgebiet- und Kontaktseite.
              Dabei kann Google Daten verarbeiten, u. a. Ihre IP-Adresse. Ohne Zustimmung zeigen wir stattdessen
              einen Link zu Google Maps an.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            id="consent-external"
            aria-checked={external}
            onClick={() => setOverride(!external)}
            className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition-colors ${
              external ? "bg-accent" : "bg-gray-300"
            }`}
          >
            <span className="sr-only">Externe Inhalte (Karten) {external ? "deaktivieren" : "aktivieren"}</span>
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                external ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleRejectAll}
          className="flex-1 rounded-md border-2 border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
        >
          Nur notwendige akzeptieren
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="flex-1 rounded-md border-2 border-border px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
        >
          Auswahl speichern
        </button>
        <LiquidButton
          as="button"
          type="button"
          onClick={handleAcceptAll}
          rounded={6}
          padding="12px 20px"
          blobSize={60}
          className="flex-1 text-sm"
        >
          Alle akzeptieren
        </LiquidButton>
      </div>
      <p role="status" className="min-h-5 text-sm text-ink-soft">
        {savedHint}
      </p>
    </div>
  );
}
