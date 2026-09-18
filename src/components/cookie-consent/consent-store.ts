"use client";

export type ConsentCategories = {
  necessary: true;
  external: boolean;
};

export type ConsentRecord = {
  categories: ConsentCategories;
  decidedAt: string;
};

const STORAGE_KEY = "rowi-cookie-consent";
export const CONSENT_EVENT = "rowi-cookie-consent-change";

export function readConsentRaw(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function parseConsent(raw: string | null): ConsentRecord | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (!parsed || typeof parsed !== "object" || !parsed.categories) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(categories: ConsentCategories) {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = { categories, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage kann in manchen Browserkontexten (z. B. privates Fenster) blockiert sein.
    // Die Einwilligung gilt dann nur für die aktuelle Sitzung.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
}

export function acceptAll() {
  writeConsent({ necessary: true, external: true });
}

export function rejectNonEssential() {
  writeConsent({ necessary: true, external: false });
}
