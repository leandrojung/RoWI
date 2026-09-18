import { siteConfig } from "@/lib/site-config";

export default function StarRating({ showLink = true }: { showLink?: boolean }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="var(--color-accent)">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
          </svg>
        ))}
      </span>
      <span className="text-sm font-semibold text-ink">
        {siteConfig.rating.value.toFixed(1).replace(".", ",")} / 5,0 bei Google
      </span>
      {showLink && (
        <a
          href={siteConfig.links.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent underline hover:text-accent-dark"
        >
          Bewertungen ansehen
        </a>
      )}
    </div>
  );
}
