import type { ReactNode } from "react";
import Container from "./Container";
import SectionSeam, { type SeamTone } from "./SectionSeam";
import { withSoftHyphens } from "@/lib/typography";

export default function PageHero({
  title,
  lead,
  children,
  seamTo = "white",
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
  /** Farbe des direkt folgenden Abschnitts — meist die normale weiße Seitenfläche. */
  seamTo?: SeamTone;
}) {
  return (
    <>
      <div className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-texture" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/12 blur-3xl" aria-hidden="true" />
        <Container className="relative py-14 sm:py-20">
          <h1 className="hero-in max-w-[20ch] text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08]">
            {withSoftHyphens(title)}
          </h1>
          {lead && <p className="hero-in hero-in-delay-1 mt-5 max-w-[60ch] text-lg text-white/70">{lead}</p>}
          {children}
        </Container>
      </div>
      <SectionSeam from="ink" to={seamTo} />
    </>
  );
}
