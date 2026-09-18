import { siteConfig } from "@/lib/site-config";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-border bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.12)] lg:hidden">
      <a
        href={siteConfig.contact.phoneHref}
        className="flex items-center justify-center gap-2 border-r border-border py-3 text-sm font-semibold text-ink"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.9 21 3 12.1 3 1c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
        </svg>
        Anrufen
      </a>
      <a
        href="/kontakt#kontaktformular"
        className="flex items-center justify-center gap-2 bg-accent py-3 text-sm font-semibold text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16v13H7l-3 3V4Z" />
        </svg>
        Anfrage stellen
      </a>
    </div>
  );
}
