import { siteConfig } from "@/lib/site-config";
import Icon from "./Icon";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp Kontakt aufnehmen"
      className="group fixed bottom-24 right-4 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1eb855] sm:right-6 lg:bottom-6"
      style={{ zIndex: "var(--z-float)" }}
    >
      <Icon name="whatsapp" size={24} />
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
