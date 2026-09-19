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
      className="group relative flex items-center whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-[0_4px_14px_rgba(200,16,46,0.35)]"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <header
      className="sticky top-0 border-b border-border/60 bg-white/88 shadow-[0_2px_24px_rgba(0,0,0,0.09)] backdrop-blur-xl"
      style={{ zIndex: "var(--z-sticky)", borderTop: "3px solid #c8102e" }}
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
          <ul className="flex items-center gap-1">
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
                      className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
                        leistungenOpen
                          ? "bg-accent text-white shadow-[0_4px_14px_rgba(200,16,46,0.35)]"
                          : "text-ink hover:bg-accent hover:text-white hover:shadow-[0_4px_14px_rgba(200,16,46,0.35)]"
                      }`}
                      aria-expanded={leistungenOpen}
                      aria-haspopup="true"
                      onClick={() => setLeistungenOpen((v) => !v)}
                    >
                      Leistungen
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
                      className={`absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
                        leistungenOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                      style={{ zIndex: "var(--z-dropdown)" }}
                    >
                      {/* Red accent line connecting button to dropdown */}
                      <div className="absolute left-1/2 top-0 h-3 w-[2px] -translate-x-1/2 bg-accent" />

                      <ul className="grid grid-cols-2 gap-1 rounded-2xl border border-border/40 bg-white/92 p-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/leistungen/${service.slug}`}
                              className="group/item flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-accent/20 hover:bg-accent/[0.05]"
                              onClick={() => setLeistungenOpen(false)}
                            >
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-ink-soft transition-all duration-200 group-hover/item:bg-accent group-hover/item:text-white">
                                <Icon name={service.icon} size={16} />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-ink transition-colors duration-200 group-hover/item:text-accent">
                                  {service.navLabel}
                                </span>
                                <span className="block text-xs leading-relaxed text-ink-soft">{service.teaser}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li className="col-span-2 mt-1 border-t border-border/60 pt-2">
                          <Link
                            href="/leistungen"
                            className="flex items-center justify-center gap-2 rounded-xl bg-accent/[0.06] p-2.5 text-sm font-bold text-accent transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-[0_4px_14px_rgba(200,16,46,0.3)]"
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
          className="rounded-lg border border-border p-2.5 transition-colors hover:border-accent hover:text-accent lg:hidden"
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
        <nav id="mobile-menu" aria-label="Mobile Hauptnavigation" className="border-t border-border/60 bg-white/92 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navigationMain.map((item) => {
              if (item.label === "Leistungen") {
                return (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/leistungen"
                        className="block flex-1 rounded-lg px-3 py-2.5 text-base font-semibold text-ink transition-colors hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        Leistungen
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileLeistungenOpen}
                        aria-label="Leistungen-Unterpunkte anzeigen"
                        className="rounded-lg p-2.5 transition-colors hover:text-accent"
                        onClick={() => setMobileLeistungenOpen((v) => !v)}
                      >
                        <svg width="16" height="16" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`}>
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    {mobileLeistungenOpen && (
                      <ul className="ml-3 border-l-2 border-accent pl-3">
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
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-ink transition-all hover:bg-accent/[0.06] hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="grid grid-cols-2 gap-2 pt-3">
              <LiquidButton
                href={siteConfig.contact.phoneHref}
                rounded={8}
                padding="12px 16px"
                blobSize={54}
                className="w-full text-sm shadow-[0_4px_14px_rgba(200,16,46,0.35)]"
              >
                <Icon name="phone" size={16} />
                Anrufen
              </LiquidButton>
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
