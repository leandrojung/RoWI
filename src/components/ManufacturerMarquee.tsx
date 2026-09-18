import { manufacturers } from "@/lib/site-config";

/**
 * Endlos laufende Herstellerleiste. Die Liste wird zweimal gerendert, damit der
 * Übergang nahtlos ist. Bei reduzierter Bewegung steht das Band still (CSS).
 */
export default function ManufacturerMarquee() {
  return (
    <div className="marquee" role="list" aria-label="Hersteller, für die Service angeboten wird">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1}>
            {manufacturers.map((name) => (
              <li
                key={name}
                role={copy === 0 ? "listitem" : undefined}
                className="whitespace-nowrap rounded-lg border border-border bg-white px-6 py-3.5 text-base font-semibold text-ink-soft"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
