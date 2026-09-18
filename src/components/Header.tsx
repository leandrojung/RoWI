"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigationMain } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${siteConfig.name} — Startseite`}>
          <Image
            src="/logo.svg"
            alt={`${siteConfig.name} Logo`}
            width={180}
            height={44}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationMain.map((item) => {
              if (item.label === "Leistungen") {
                return (
                  <li key={item.href} className="relative">
                    <div
                      onMouseEnter={() => setLeistungenOpen(true)}
                      onMouseLeave={() => setLeistungenOpen(false)}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-accent"
                        aria-expanded={leistungenOpen}
                        aria-haspopup="true"
                        onClick={() => setLeistungenOpen((v) => !v)}
                      >
                        Leistungen
                        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </button>
                      {leistungenOpen && (
                        <ul className="absolute left-0 top-full w-72 rounded-md border border-border bg-white py-2 shadow-lg">
                          <li>
                            <Link
                              href="/leistungen"
                              className="block px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-muted hover:text-accent"
                            >
                              Alle Leistungen im Überblick
                            </Link>
                          </li>
                          <li className="my-1 border-t border-border" />
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/leistungen/${service.slug}`}
                                className="block px-4 py-2 text-sm text-ink hover:bg-surface-muted hover:text-accent"
                              >
                                {service.navLabel}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="rounded-md border border-border p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Mobile Hauptnavigation" className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navigationMain.map((item) => {
              if (item.label === "Leistungen") {
                return (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/leistungen"
                        className="block flex-1 rounded-md px-3 py-2 text-base font-medium text-ink hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        Leistungen
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileLeistungenOpen}
                        aria-label="Leistungen-Unterpunkte anzeigen"
                        className="p-2"
                        onClick={() => setMobileLeistungenOpen((v) => !v)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                          className={mobileLeistungenOpen ? "rotate-180" : ""}
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </button>
                    </div>
                    {mobileLeistungenOpen && (
                      <ul className="ml-3 border-l border-border pl-3">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/leistungen/${service.slug}`}
                              className="block rounded-md px-3 py-2 text-sm text-ink-soft hover:text-accent"
                              onClick={() => setMobileOpen(false)}
                            >
                              {service.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-ink hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={siteConfig.contact.phoneHref}
                className="block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Jetzt anrufen: {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
