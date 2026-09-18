"use client";

import * as React from "react";
import { animate } from "framer-motion";

interface TransitionControl {
  type?: string;
  ease?: number[];
  bounce?: number;
  damping?: number;
  duration?: number;
  mass?: number;
  stiffness?: number;
}

interface FrostGlassCardProps {
  src: string;
  alt?: string;
  /** Height in px — width is always 100% of container */
  height?: number;
  title?: string;
  description?: string;
  blur?: number;
  reach?: number;
  tint?: string;
  rounded?: number;
  transition?: TransitionControl;
  className?: string;
}

const DEFAULT_TRANSITION: TransitionControl = {
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
  duration: 0.8,
};

export default function FrostGlassCard({
  src,
  alt = "",
  height = 420,
  title,
  description,
  blur = 14,
  reach = 260,
  tint = "rgba(255,255,255,0.08)",
  rounded = 16,
  transition = DEFAULT_TRANSITION,
  className,
}: FrostGlassCardProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const frostRef = React.useRef<HTMLDivElement>(null);
  const sheenRef = React.useRef<HTMLDivElement>(null);
  const hovered = React.useRef(false);
  const pointer = React.useRef({ x: 0, y: 0, tx: 0, ty: 0, ts: 0, s: 0 });
  const rafRef = React.useRef(0);

  const glassAt = (px: number) => `blur(${px}px) saturate(180%)`;

  const maskFor = (x: number, y: number, r: number) =>
    `radial-gradient(circle ${Math.round(r)}px at ${Math.round(x)}px ${Math.round(y)}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 45%, #000 100%)`;

  React.useEffect(() => {
    const tick = () => {
      const p = pointer.current;
      p.x += (p.tx - p.x) * 0.22;
      p.y += (p.ty - p.y) * 0.22;
      p.s += (p.ts - p.s) * 0.1;
      const el = frostRef.current;
      if (el) {
        if (p.s < 0.01) {
          el.style.maskImage = "none";
          (el.style as any).webkitMaskImage = "none";
        } else {
          const m = maskFor(p.x, p.y, reach * p.s);
          el.style.maskImage = m;
          (el.style as any).webkitMaskImage = m;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reach]);

  const apply = React.useCallback(
    (on: boolean) => {
      if (containerRef.current) animate(containerRef.current, { scale: on ? 1.015 : 1 }, transition as any);
      if (overlayRef.current) animate(overlayRef.current, { y: on ? -6 : 0 }, transition as any);
      if (sheenRef.current) animate(sheenRef.current, { opacity: on ? 1 : 0.55 }, transition as any);
    },
    [transition]
  );

  const track = (e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = pointer.current;
    p.tx = ((e.clientX - r.left) / r.width) * el.offsetWidth;
    p.ty = ((e.clientY - r.top) / r.height) * el.offsetHeight;
  };

  const onEnter = (e: React.PointerEvent) => {
    hovered.current = true;
    track(e);
    pointer.current.x = pointer.current.tx;
    pointer.current.y = pointer.current.ty;
    pointer.current.ts = 1;
    apply(true);
  };

  const onMove = (e: React.PointerEvent) => {
    if (hovered.current) track(e);
  };

  const onLeave = () => {
    hovered.current = false;
    pointer.current.ts = 0;
    apply(false);
  };

  React.useEffect(() => {
    const up = () => { hovered.current = false; pointer.current.ts = 0; apply(false); };
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => { window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", up); };
  }, [apply]);

  return (
    <div
      ref={containerRef}
      className={className}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ position: "relative", width: "100%", height, overflow: "hidden", borderRadius: rounded, cursor: "default" }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

      {/* Frost layer — revealed by cursor */}
      <div
        ref={frostRef}
        style={{ position: "absolute", inset: 0, borderRadius: rounded, background: tint, backdropFilter: glassAt(blur), WebkitBackdropFilter: glassAt(blur), pointerEvents: "none" }}
      />

      {/* Sheen */}
      <div
        ref={sheenRef}
        style={{ position: "absolute", inset: 0, borderRadius: rounded, opacity: 0.55, boxShadow: "inset 0 -20px 40px -20px rgba(0,0,0,0.4)", background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 38%, rgba(255,255,255,0) 60%)", pointerEvents: "none" }}
      />

      {/* Text overlay */}
      {(title || description) && (
        <div ref={overlayRef} style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 28px", display: "flex", flexDirection: "column", gap: 6 }}>
          {title && <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.3, margin: 0 }}>{title}</p>}
          {description && <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem", margin: 0 }}>{description}</p>}
        </div>
      )}
    </div>
  );
}
