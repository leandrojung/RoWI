import type { CSSProperties } from "react";

/**
 * Die vier Flächenfarben, zwischen denen Abschnitte auf der Seite wechseln.
 * "white" meint die normale Seitenfläche (kein bg-* gesetzt).
 */
export type SeamTone = "ink" | "white" | "muted" | "accent";

const toneColor: Record<SeamTone, string> = {
  ink: "var(--color-ink)",
  white: "var(--background)",
  muted: "var(--color-surface-muted)",
  accent: "var(--color-accent)",
};

/**
 * Weicher, animierter Übergang zwischen zwei Abschnittsfarben statt eines
 * harten Farbschnitts: Verlauf von "from" zu "to", eine diagonal wandernde
 * Lichtspur (derselbe Rhythmus wie .stripe-drift im CTA-Banner) und ein
 * langsam driftender Akzent-Glow als wiederkehrendes Markenelement.
 */
export default function SectionSeam({ from, to }: { from: SeamTone; to: SeamTone }) {
  if (from === to) return null;

  return (
    <div
      className="seam"
      style={{ "--seam-from": toneColor[from], "--seam-to": toneColor[to] } as CSSProperties}
      aria-hidden="true"
    >
      <span className="seam-sheen" />
      <span className="seam-glow" />
    </div>
  );
}
