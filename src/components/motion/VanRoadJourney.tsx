"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

/**
 * Begleitet die Firmenwagen- und Leistungen-Sektion mit einer kleinen
 * "Straße" am linken Seitenrand, auf der eine Mini-Version des Firmenwagens
 * scroll-gekoppelt weiterfährt — nicht angepinnt, die Seite scrollt ganz
 * normal weiter, nur die Position des Wagens auf der Straße reagiert
 * zusätzlich auf den Scrollfortschritt. Hält an einer markierten Stelle in
 * der Leistungen-Sektion und fährt beim Weiterscrollen wieder los.
 * Desktop-only (xl+), da für Straße + Wagen ausreichend Rand nötig ist.
 */
export default function VanRoadJourney({ children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  // Van-Deckkraft: blendet ein, sobald die große Ankunft (VanReveal) vorbei ist,
  // und blendet am Ende der Straße wieder aus.
  const vanOpacity = useTransform(progress, [0.1, 0.16, 0.94, 1], [0, 1, 1, 0]);

  // Vertikale Position auf der Straße (in % der Wrapper-Höhe) — fährt,
  // hält an der Markierung in der Leistungen-Sektion, fährt weiter.
  const vanTop = useTransform(
    progress,
    [0.16, 0.44, 0.72, 0.94],
    ["9%", "37%", "37%", "90%"]
  );

  // Leichte 3D-Schräglage, als würde der Wagen die Kurve auf die Straße nehmen.
  const vanRotateY = useTransform(progress, [0.16, 0.3], [0, -22]);

  // Der Stopp-Marker leuchtet auf, kurz bevor der Wagen ihn erreicht, und wieder
  // ab, sobald er weiterfährt. Er sitzt seitlich neben der Straße, damit ihn der
  // parkende Wagen nicht selbst verdeckt.
  const markerOpacity = useTransform(progress, [0.38, 0.44, 0.7, 0.76], [0, 1, 1, 0]);

  return (
    <div ref={wrapRef} className="relative">
      {children}

      {!reduced && (
        <div className="pointer-events-none absolute inset-y-0 left-4 hidden w-6 xl:block" aria-hidden="true">
          {/* Straße */}
          <div
            className="absolute inset-y-10 left-1/2 w-2.5 -translate-x-1/2 rounded-full"
            style={{ background: "#3a3a3a", boxShadow: "0 0 0 1px rgba(0,0,0,0.15)" }}
          >
            <div
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.55) 0 10px, transparent 10px 20px)",
              }}
            />
          </div>

          {/* Stopp-Markierung — sitzt neben der Straße, damit der Wagen sie nicht verdeckt */}
          <motion.div
            className="absolute -translate-y-1/2"
            style={{ top: "37%", left: "calc(50% + 60px)", opacity: markerOpacity }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-accent" />
            </span>
          </motion.div>

          {/* Mini-Firmenwagen */}
          <motion.div
            className="absolute left-1/2 w-[92px] -translate-x-1/2 -translate-y-1/2"
            style={{
              top: vanTop,
              opacity: vanOpacity,
              rotateY: vanRotateY,
              transformPerspective: 500,
            }}
          >
            <Image
              src="/fotos/firmenwagen-hq.webp"
              alt=""
              width={1521}
              height={586}
              className="h-auto w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
