import type { ReactNode } from "react";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-ink text-white">
      <Container className="py-14 sm:py-16">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>
        )}
        <h1 className={`max-w-3xl font-bold leading-tight ${title.length > 60 ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"} ${eyebrow ? "mt-3" : ""}`}>
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-white/80">{lead}</p>}
        {children}
      </Container>
    </div>
  );
}
