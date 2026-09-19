import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLegalLinks, footerServiceLinks } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import Icon from "./Icon";
import LiquidButton from "./ui/LiquidButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Image
              src="/logo-light.png"
              alt={`${siteConfig.name} Logo`}
              width={488}
              height={275}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Service, Wartung und Verkauf von Steinbearbeitungsmaschinen. Seit 2012 selbstständig, seit 2001 in
              der Branche.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
                @{siteConfig.social.instagramHandle}
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white/40">Leistungen</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/leistungen/${service.slug}`} className="text-white/70 transition-colors hover:text-white">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white/40">Service</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/maschinen-hersteller" className="text-white/70 transition-colors hover:text-white">
                  Hersteller
                </Link>
              </li>
              <li>
                <Link href="/aktuelles" className="text-white/70 transition-colors hover:text-white">
                  Aktuelles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white/40">Direkt erreichen</h2>
            <div className="mt-4 space-y-3">
              <LiquidButton
                href={siteConfig.contact.phoneHref}
                rounded={8}
                padding="12px 16px"
                blobSize={64}
                className="w-full text-sm"
              >
                <Icon name="phone" size={18} />
                {siteConfig.contact.phoneDisplay}
              </LiquidButton>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp schreiben
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 px-1 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Icon name="mail" size={18} />
                {siteConfig.contact.email}
              </a>
              <p className="flex items-center gap-3 px-1 text-sm text-white/60">
                <Icon name="clock" size={18} />
                {siteConfig.openingHours.labelLong}
              </p>
              <p className="flex items-start gap-3 px-1 text-sm text-white/60">
                <span className="mt-0.5">
                  <Icon name="pin" size={18} />
                </span>
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} — {siteConfig.owner}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => {
              const isFile = link.href.startsWith("/") && /\.[a-z0-9]+$/i.test(link.href);
              return (
                <li key={link.href}>
                  {isFile ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
