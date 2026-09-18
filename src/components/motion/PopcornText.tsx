"use client";

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useAnimate, type AnimationOptions } from "framer-motion";

type ScrollConfig = { position: "top" | "bottom"; distance: number };

type Props = {
  text: string;
  /** HTML tag rendered — defaults to span so it can live inside any heading */
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  startY?: number;
  startScale?: number;
  startOpacity?: number;
  rotationRange?: number;
  stagger?: number;
  transition?: AnimationOptions;
  appearTrigger?: "default" | "scroll";
  scrollConfig?: ScrollConfig;
};

const SPRING: AnimationOptions = { type: "spring", stiffness: 340, damping: 14, mass: 1 };

export default function PopcornText({
  text,
  tag = "span",
  className,
  startY = 28,
  startScale = 0,
  startOpacity = 0,
  rotationRange = 18,
  stagger = 0.038,
  transition = SPRING,
  appearTrigger = "default",
  scrollConfig = { position: "bottom", distance: 15 },
}: Props) {
  const [scope, animate] = useAnimate();
  const firedRef = useRef(false);

  // Sequential order — each char pops in left to right
  const charsConfig = useMemo(() => {
    const chars = (text ?? "").split("");
    return chars.map((char, i) => ({
      char,
      rot: (Math.random() * 2 - 1) * rotationRange,
      staggerOrder: i,
    }));
  }, [text, rotationRange]);

  const resetToHidden = useCallback(() => {
    if (!scope.current) return;
    animate(".pc", { y: startY, scale: startScale, opacity: startOpacity, rotate: "var(--start-rot)" }, { duration: 0 });
  }, [animate, startY, startScale, startOpacity, scope]);

  const runAppear = useCallback(() => {
    if (!scope.current || firedRef.current) return;
    firedRef.current = true;
    animate(
      ".pc",
      { y: 0, scale: 1, opacity: 1, rotate: 0 },
      { ...transition, delay: (i: number) => charsConfig[i].staggerOrder * stagger } as AnimationOptions
    );
  }, [animate, transition, stagger, charsConfig, scope]);

  useEffect(() => {
    // Respect prefers-reduced-motion — show text immediately, skip animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    firedRef.current = false;
    resetToHidden();

    if (appearTrigger === "default") {
      const t = setTimeout(runAppear, 50);
      return () => clearTimeout(t);
    }

    // scroll trigger
    const el = scope.current;
    if (!el) return;
    const { position, distance } = scrollConfig;
    const threshold = Math.max(0, Math.min(100, distance));

    const check = () => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      return position === "top" ? r.top <= vh * (threshold / 100) : r.bottom <= vh * (1 - threshold / 100);
    };

    if (check()) { runAppear(); return; }

    let rafId: number | null = null;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (check()) {
            runAppear();
            window.removeEventListener("scroll", onScroll, true);
            window.removeEventListener("resize", onScroll);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [appearTrigger, scrollConfig, runAppear, resetToHidden, scope]);

  // Group chars into words so each word is wrapped in white-space:nowrap,
  // preventing mid-word line breaks when chars are display:inline-block
  const wordGroups = useMemo(() => {
    const groups: { chars: typeof charsConfig; space: boolean }[] = [];
    let current: typeof charsConfig = [];
    charsConfig.forEach((item) => {
      if (item.char === " ") {
        groups.push({ chars: current, space: true });
        current = [];
      } else {
        current.push(item);
      }
    });
    if (current.length) groups.push({ chars: current, space: false });
    return groups;
  }, [charsConfig]);

  const MotionTag = motion[tag] as typeof motion.span;

  return (
    <MotionTag ref={scope} aria-label={text} className={className} style={{ display: "inline" }}>
      {wordGroups.map((group, wi) => (
        <React.Fragment key={wi}>
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {group.chars.map((item, ci) => (
              <motion.span
                key={ci}
                className="pc"
                aria-hidden="true"
                style={
                  {
                    display: "inline-block",
                    "--start-rot": `${item.rot}deg`,
                    rotate: `var(--start-rot)`,
                    y: startY,
                    scale: startScale,
                    opacity: startOpacity,
                    willChange: "transform, opacity",
                  } as React.CSSProperties
                }
              >
                {item.char}
              </motion.span>
            ))}
          </span>
          {group.space && " "}
        </React.Fragment>
      ))}
    </MotionTag>
  );
}
