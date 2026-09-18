"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Zielwert, der auch ohne JavaScript im HTML steht */
  value: number;
  /** Nachkommastellen, z. B. 1 für "5,0" */
  decimals?: number;
  durationMs?: number;
  className?: string;
};

function format(value: number, decimals: number) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Zählt eine Zahl beim Sichtbarwerden von 0 auf den Zielwert hoch.
 *
 * Der Zielwert steht bereits im gerenderten HTML — die Animation wird per
 * direkter DOM-Manipulation aufgesetzt und entfällt bei reduzierter Bewegung.
 */
export default function CountUp({ value, decimals = 0, durationMs = 1400, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let startTime = 0;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / durationMs, 1);
      // ease-out-expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      element.textContent = format(value * eased, decimals);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        element.textContent = format(value, decimals);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            element.textContent = format(0, decimals);
            frame = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, decimals, durationMs]);

  return (
    <span ref={ref} className={className}>
      {format(value, decimals)}
    </span>
  );
}
