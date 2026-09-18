import Link from "next/link";
import type { Service } from "@/lib/services-data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group flex h-full flex-col rounded-lg border border-border p-6 transition hover:border-accent hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-ink group-hover:text-accent">{service.navLabel}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft">{service.intro}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Mehr erfahren
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
