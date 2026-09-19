"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig, navigationMain } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import Icon from "./Icon";
import LiquidButton from "./ui/LiquidButton";
import RubberSegment from "./ui/RubberSegment";

const navItems = navigationMain.map((item) => ({ value: item.href, label: item.label }));

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  const activeHref =
    navItems.map((i) => i.value).find((href) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    }) ?? navItems[0].value;

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

        <nav aria-label="Hauptnavigation" className="hidden flex-1 items-center justify-center lg:flex">
          <RubberSegment
            items={navItems}
            value={activeHref}
            onChange={(href) => router.push(href)}
            trackColor="rgba(26,26,26,0.07)"
            thumbColor="#c8102e"
            textColor="#3f3f46"
            activeTextColor="#ffffff"
            size="sm"
            radius={9}
            inset={3}
            equalSlots={false}
            stretch={110}
            squash={3}
            speed={1}
            glide={75}
            draggable={true}
            aria-label="Hauptnavigation"
          />
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
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(200,16,46,0.35)]"
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
