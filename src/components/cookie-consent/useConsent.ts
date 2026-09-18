"use client";

import { useMemo, useSyncExternalStore } from "react";
import { subscribeToConsent, readConsentRaw, parseConsent } from "./consent-store";

function getServerSnapshot() {
  return null;
}

export function useConsent() {
  const raw = useSyncExternalStore(subscribeToConsent, readConsentRaw, getServerSnapshot);
  const consent = useMemo(() => parseConsent(raw), [raw]);

  return {
    consent,
    hasDecided: consent !== null,
    externalAllowed: consent?.categories.external ?? false,
  };
}
