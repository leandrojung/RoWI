import { manufacturerBrands } from "@/lib/site-config";

const chipClass =
  "whitespace-nowrap rounded-lg border border-border bg-white px-6 py-3.5 text-base font-semibold text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-[0_8px_20px_rgba(200,16,46,0.12)]";

/**
 * Endlos laufende Herstellerleiste. Die Liste wird zweimal gerendert, damit der
 * Übergang nahtlos ist. Bei reduzierter Bewegung steht das Band still (CSS).
 * Marken mit hinterlegter URL sind direkt anklickbar und führen zur
 * Herstellerseite — ohne separates Link-Icon, der ganze Chip ist der Link.
 */
export default function ManufacturerMarquee() {
  return (
    <div className="marquee" role="list" aria-label="Hersteller, für die Service angeboten wird">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1}>
            {manufacturerBrands.map((brand, i) => (
              <li key={`${brand.name}-${i}`} role={copy === 0 ? "listitem" : undefined}>
                {brand.url ? (
                  <a href={brand.url} target="_blank" rel="noopener noreferrer" className={`${chipClass} block`}>
                    {brand.name}
                  </a>
                ) : (
                  <span className={`${chipClass} block`}>{brand.name}</span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
