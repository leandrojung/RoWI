"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

type Props = {
  text: ReactNode;
  van: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Scroll-gekoppelte "Signalstrecke" für die Mobiler-Einsatz-Sektion: eine
 * Leuchtspur zeichnet sich zwischen Text- und Fahrzeugspalte, während der
 * Nutzer scrollt, und mündet in ein Radar-Lock auf den Firmenwagen — die
 * visuelle Fortsetzung von "Anruf kommt an" (Hero) zu "Wagen ist da".
 */
export default function DispatchSignal({ text, van, className, style }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.82", "start 0.2"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.4 });

  const beamScale = useTransform(progress, [0, 0.6], [0, 1], { clamp: true });
  const dotTop = useTransform(progress, [0, 0.6], ["0%", "100%"], { clamp: true });
  const dotOpacity = useTransform(progress, [0, 0.06, 0.55, 0.65], [0, 1, 1, 0]);
  const lockOpacity = useTransform(progress, [0.55, 0.78], [0, 1], { clamp: true });
  const bracketOpacity = useTransform(progress, [0.68, 0.92], [0, 1], { clamp: true });

  return (
    <section ref={ref} className={`relative overflow-hidden ${className ?? ""}`} style={style}>
      <Container className="grid grid-cols-1 items-stretch gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_56px_1.1fr] lg:gap-0 lg:py-0">
        {text}

        {/* Signalstrecke — verbindet Text- und Fahrzeugspalte, nur Desktop */}
        {!reduced && (
          <div aria-hidden="true" className="relative hidden lg:block">
            <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-ink/10 to-transparent" />
            <motion.div
              className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 origin-top bg-accent"
              style={{ scaleY: beamScale, boxShadow: "0 0 10px 1px rgba(200,16,46,0.55)" }}
            />
            <motion.div
              className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
              style={{
                top: dotTop,
                opacity: dotOpacity,
                boxShadow: "0 0 0 5px rgba(200,16,46,0.2), 0 0 16px 4px rgba(200,16,46,0.6)",
              }}
            />
          </div>
        )}

        <div className="relative flex items-center justify-end">
          {!reduced && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden items-center justify-end lg:flex"
              style={{ opacity: lockOpacity }}
            >
              <div className="relative h-[68%] w-[82%]">
                <span className="radar-ring absolute inset-0 rounded-[2rem] border border-accent/60" />
                <span className="radar-ring absolute inset-0 rounded-[2rem] border border-accent/60" style={{ animationDelay: "0.65s" }} />
                <span className="radar-ring absolute inset-0 rounded-[2rem] border border-accent/60" style={{ animationDelay: "1.3s" }} />
                <motion.div className="absolute inset-0" style={{ opacity: bracketOpacity }}>
                  <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-accent" />
                  <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-accent" />
                  <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-accent" />
                  <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-accent" />
                </motion.div>
              </div>
            </motion.div>
          )}
          {van}
        </div>
      </Container>
    </section>
  );
}
