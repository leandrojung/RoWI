import { siteConfig } from "@/lib/site-config";
import Icon from "./Icon";

export default function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 grid grid-cols-2 border-t border-border bg-white shadow-[0_-2px_16px_rgba(0,0,0,0.14)] lg:hidden"
      style={{ zIndex: "var(--z-sticky)" }}
    >
      <a
        href={siteConfig.contact.phoneHref}
        className="flex items-center justify-center gap-2 border-r border-border py-4 text-sm font-bold text-ink"
      >
        <Icon name="phone" size={18} />
        Anrufen
      </a>
      <a
        href="/kontakt#kontaktformular"
        className="flex items-center justify-center gap-2 bg-accent py-4 text-sm font-bold text-white"
      >
        <Icon name="mail" size={18} />
        Anfrage stellen
      </a>
    </div>
  );
}
