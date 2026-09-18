export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border">
      {items.map((item, index) => (
        <details key={index} className="group p-4 open:bg-surface-muted sm:p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink marker:content-none">
            <span>{item.question}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              aria-hidden="true"
              className="shrink-0 transition-transform group-open:rotate-45"
            >
              <path d="M9 2v14M2 9h14" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
