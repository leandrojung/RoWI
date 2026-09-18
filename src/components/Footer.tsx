import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLegalLinks, footerServiceLinks } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.svg" alt={`${siteConfig.name} Logo`} width={160} height={40} className="h-9 w-auto invert" />
            <p className="mt-4 text-sm text-white/70">{siteConfig.claim}</p>
            <p className="mt-4 text-sm text-white/70">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram: @{siteConfig.social.instagramHandle}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">Leistungen</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/leistungen/${service.slug}`} className="text-white/70 hover:text-white">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">Service</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/maschinen-hersteller" className="text-white/70 hover:text-white">
                  Maschinen &amp; Hersteller
                </Link>
              </li>
              <li>
                <Link href="/aktuelles" className="text-white/70 hover:text-white">
                  Aktuelles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">Kontakt</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.openingHours.label}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} — {siteConfig.owner}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
