"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";

type Step = { step: string; title: string; description: string };

/**
 * Vier-Schritte-Ablauf mit sequenziellem Reveal: Kreis für Kreis poppt auf,
 * dazwischen zeichnet sich die Verbindungslinie mit einem Pfeil am Ende —
 * die Animation macht den Prozesscharakter sichtbar, statt nur einzublenden.
 * Läuft einmalig beim Scrollen in den Viewport.
 */
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const active = reduced || inView;
  const segment = 0.34;

  return (
    <div ref={ref} className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const circleDelay = reduced ? 0 : index * segment;
        const lineDelay = circleDelay + 0.16;
        const arrowDelay = lineDelay + 0.32;

        return (
          <div key={step.step} className="relative">
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                animate={active ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 380, damping: 20, delay: circleDelay }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent text-lg font-bold text-accent"
              >
                {step.step}
              </motion.span>

              {index < steps.length - 1 && (
                <div className="relative hidden h-px flex-1 lg:block" aria-hidden="true">
                  <div className="absolute inset-0 bg-white/15" />
                  <motion.div
                    className="absolute inset-y-0 left-0 w-full origin-left bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={active ? { scaleX: 1 } : {}}
                    transition={{ duration: reduced ? 0 : 0.45, ease: "easeOut", delay: lineDelay }}
                  />
                  <motion.span
                    className="absolute -right-1.5 top-1/2 flex -translate-y-1/2 text-accent"
                    initial={{ opacity: 0, x: -6 }}
                    animate={active ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: reduced ? 0 : 0.25, delay: arrowDelay }}
                  >
                    <Icon name="arrow-right" size={14} strokeWidth={2.6} />
                  </motion.span>
                </div>
              )}
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduced ? 0 : 0.4, delay: circleDelay + 0.1 }}
              className="mt-5 text-lg font-bold"
            >
              {step.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduced ? 0 : 0.4, delay: circleDelay + 0.16 }}
              className="mt-2 text-sm text-white/65"
            >
              {step.description}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
