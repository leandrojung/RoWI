export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-bold text-ink transition-colors marker:content-none hover:bg-surface-muted sm:p-6">
            <span>{item.question}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-accent transition-all duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-white">
              <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M9 2.5v13M2.5 9h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6 sm:pb-6">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
