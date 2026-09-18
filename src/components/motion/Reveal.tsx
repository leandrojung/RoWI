"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Kinder einzeln gestaffelt einblenden statt des ganzen Blocks */
  stagger?: boolean;
  as?: ElementType;
  id?: string;
};

/**
 * Blendet Inhalte beim Scrollen ein.
 *
 * Sichtbarkeit darf niemals von der Animation abhängen. Deshalb:
 * - die Animationsklassen werden ausschließlich per JavaScript gesetzt,
 * - Elemente, die beim Start schon im Viewport liegen, erscheinen sofort,
 * - ein Timeout blendet alles ein, falls der Observer nie auslöst
 *   (Hintergrund-Tabs, Screenshot-Renderer, langsame Geräte),
 * - bei `prefers-reduced-motion` passiert gar nichts.
 */
export default function Reveal({ children, className = "", stagger = false, as: Tag = "div", id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.classList.add(stagger ? "reveal-stagger" : "reveal");

    const show = () => element.classList.add("is-visible");

    // Bereits sichtbarer Inhalt wird nicht künstlich ausgeblendet
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.05 }
    );
    observer.observe(element);

    // Sicherheitsnetz: nach 2,5 s ist der Inhalt in jedem Fall sichtbar
    const failsafe = window.setTimeout(show, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [stagger]);

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
