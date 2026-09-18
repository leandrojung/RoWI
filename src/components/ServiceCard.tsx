import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/lib/services-data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-muted text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-ink">{service.navLabel}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft">{service.intro}</p>
      {service.badge && (
        <span className="mt-4 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
          {service.badge}
        </span>
      )}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">
        Mehr erfahren
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <Icon name="arrow-right" size={16} />
        </span>
      </span>
    </Link>
  );
}
