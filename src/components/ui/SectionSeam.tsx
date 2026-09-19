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
 * Feste, aber unregelmäßig wirkende Konfiguration je Funke — deterministisch,
 * damit Server- und Client-Render exakt übereinstimmen (kein Math.random).
 */
const sparks: { left: string; delay: string; duration: string; drift: string; color: "accent" | "gold" }[] = [
  { left: "5%", delay: "0s", duration: "4.2s", drift: "9px", color: "accent" },
  { left: "17%", delay: "1.4s", duration: "3.6s", drift: "-7px", color: "gold" },
  { left: "30%", delay: "0.5s", duration: "4.8s", drift: "13px", color: "accent" },
  { left: "45%", delay: "2.3s", duration: "3.9s", drift: "-11px", color: "accent" },
  { left: "59%", delay: "1s", duration: "4.5s", drift: "8px", color: "gold" },
  { left: "73%", delay: "1.9s", duration: "3.7s", drift: "-6px", color: "accent" },
  { left: "87%", delay: "0.8s", duration: "4.6s", drift: "10px", color: "gold" },
];

/**
 * Weicher, animierter Übergang zwischen zwei Abschnittsfarben statt eines
 * harten Farbschnitts: senkrechter Verlauf von "from" zu "to", darüber
 * einzeln aufsteigende Funken in Rot/Gold — wie Schleiffunken in der
 * Werkstatt, jeder mit eigenem Timing statt eines Streifenmusters.
 */
export default function SectionSeam({ from, to }: { from: SeamTone; to: SeamTone }) {
  if (from === to) return null;

  return (
    <div
      className="seam"
      style={{ "--seam-from": toneColor[from], "--seam-to": toneColor[to] } as CSSProperties}
      aria-hidden="true"
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className={`seam-spark seam-spark-${s.color}`}
          style={
            {
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
              "--spark-drift": s.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
