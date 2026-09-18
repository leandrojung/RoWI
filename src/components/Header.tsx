"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigationMain } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import Icon from "./Icon";
import LiquidButton from "./ui/LiquidButton";

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex items-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink transition-all duration-200 hover:bg-accent/[0.06] hover:text-accent"
    >
      <span className="relative inline-block">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      </span>
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <header
      className="sticky top-0 border-b border-border/60 bg-white/85 shadow-[0_2px_20px_rgba(0,0,0,0.07)] backdrop-blur-xl"
      style={{ zIndex: "var(--z-sticky)" }}
    >
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>

      {/* Info-Leiste */}
      <div className="hidden bg-ink text-white lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs">
          <p className="flex items-center gap-2 text-white/70">
            <Icon name="pin" size={14} />
            {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city} — Service deutschlandweit
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/70">
              <Icon name="clock" size={14} />
              {siteConfig.openingHours.label}
            </span>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <Icon name="whatsapp" size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.name} — Startseite`}>
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} Logo`}
            width={488}
            height={275}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-0.5">
            {navigationMain.map((item) => {
              if (item.label === "Leistungen") {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setLeistungenOpen(true)}
                    onMouseLeave={() => setLeistungenOpen(false)}
                  >
                    <button
                      type="button"
                      className="group relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink transition-all duration-200 hover:bg-accent/[0.06] hover:text-accent"
                      aria-expanded={leistungenOpen}
                      aria-haspopup="true"
                      onClick={() => setLeistungenOpen((v) => !v)}
                    >
                      <span className="relative inline-block">
                        Leistungen
                        <span
                          aria-hidden
                          className="absolute -bottom-0.5 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
                        />
                      </span>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                        className={`flex-shrink-0 transition-transform duration-200 ${leistungenOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2 transition-all duration-200 ease-out ${
                        leistungenOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                      style={{ zIndex: "var(--z-dropdown)" }}
                    >
                      <ul className="grid grid-cols-2 gap-1 rounded-2xl border border-border/50 bg-white/90 p-2 shadow-2xl backdrop-blur-xl">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/leistungen/${service.slug}`}
                              className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-accent/[0.06]"
                              onClick={() => setLeistungenOpen(false)}
                            >
                              <span className="mt-0.5 text-ink-soft transition-colors duration-200 group-hover/item:text-accent">
                                <Icon name={service.icon} size={18} />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-ink transition-colors duration-200 group-hover/item:text-accent">
                                  {service.navLabel}
                                </span>
                                <span className="block text-xs text-ink-soft">{service.teaser}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li className="col-span-2 mt-1 border-t border-border/60 pt-2">
                          <Link
                            href="/leistungen"
                            className="flex items-center justify-center gap-2 rounded-xl p-2 text-sm font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-white"
                            onClick={() => setLeistungenOpen(false)}
                          >
                            Alle Leistungen im Überblick
                            <Icon name="arrow-right" size={16} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <LiquidButton
          href={siteConfig.contact.phoneHref}
          fill="#c8102e"
          blobColor="#8b0b1c"
          textColor="#ffffff"
          rounded={8}
          padding="12px 20px"
          blobSize={60}
          className="hidden shrink-0 lg:inline-flex"
        >
          <Icon name="phone" size={18} />
          <span className="text-sm">{siteConfig.contact.phoneDisplay}</span>
        </LiquidButton>

        <button
          type="button"
          className="rounded-lg border border-border p-2.5 transition-colors hover:border-ink lg:hidden"
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
        <nav id="mobile-menu" aria-label="Mobile Hauptnavigation" className="border-t border-border/60 bg-white/90 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navigationMain.map((item) => {
              if (item.label === "Leistungen") {
                return (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/leistungen"
                        className="block flex-1 rounded-lg px-3 py-2.5 text-base font-medium text-ink transition-colors hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        Leistungen
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileLeistungenOpen}
                        aria-label="Leistungen-Unterpunkte anzeigen"
                        className="p-2.5"
                        onClick={() => setMobileLeistungenOpen((v) => !v)}
                      >
                        <svg width="16" height="16" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`}>
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    {mobileLeistungenOpen && (
                      <ul className="ml-3 border-l border-border pl-3">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/leistungen/${service.slug}`}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="text-accent">
                                <Icon name={service.icon} size={16} />
                              </span>
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
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink transition-colors hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="grid grid-cols-2 gap-2 pt-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-white"
              >
                <Icon name="phone" size={16} />
                Anrufen
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
              >
                <Icon name="whatsapp" size={16} />
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
