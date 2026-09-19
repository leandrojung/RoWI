"use client";

import { useEffect, useLayoutEffect, useRef, useState, useId, type ReactNode } from "react";
import { useAnimate, useReducedMotion, type Transition } from "framer-motion";

// Physics constants — faithful to Originkit
const GOO = 8;
const FOLLOW_TAU_MIN = 0.02;
const FOLLOW_TAU_MAX = 0.4;
const SQUASH_TAU = 0.09;
const SQUASH_PER_PX_S = 0.0011;
const SQUASH_MAX = 1.6;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RGBA = { r: number; g: number; b: number };

function hex(c: string): RGBA {
  const h = c.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((x) => x + x).join("") : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

const rgb = (c: RGBA) => `rgb(${c.r},${c.g},${c.b})`;

const DEFAULT_BLOB_TRANSITION: Transition = {
  type: "tween",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.72,
};

type Props = {
  children: ReactNode;
  href: string;
  fill?: string;
  blobColor?: string;
  textColor?: string;
  /** Border radius in px — pass 9999 for full pill */
  rounded?: number;
  /** CSS padding string, e.g. "14px 28px" */
  padding?: string;
  blobSize?: number;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  className?: string;
  smoothness?: number;
};

export default function LiquidButton({
  children,
  href,
  fill = "#c8102e",
  blobColor = "#8b0b1c",
  textColor = "#ffffff",
  rounded = 9999,
  padding = "14px 28px",
  blobSize = 72,
  target,
  rel,
  ariaLabel,
  className,
  smoothness = 55,
}: Props) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();

  const [box, setBox] = useState({ w: 0, h: 0 });
  useIsoLayoutEffect(() => {
    const el = scope.current as HTMLElement | null;
    if (!el) return;
    const read = () =>
      setBox((prev) =>
        prev.w === el.offsetWidth && prev.h === el.offsetHeight
          ? prev
          : { w: el.offsetWidth, h: el.offsetHeight }
      );
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [scope]);

  // Clamp radius to half the shortest dimension (pill = 9999 collapses correctly)
  const rad = Math.min(rounded, Math.min(box.w, box.h) / 2);

  const followRef = useRef<SVGGElement>(null);
  const squashRef = useRef<SVGGElement>(null);
  const biteRef = useRef<SVGGElement>(null);
  const hovered = useRef(false);
  const chase = useRef({ x: 0, y: 0, tx: 0, ty: 0, squash: 1, angle: 0 });

  const rawId = useId();
  const uid = rawId.replace(/[^a-z0-9]/gi, "");
  const filterId = `goo-${uid}`;
  const maskId = `bite-${uid}`;
  const blob = Math.max(1, blobSize);

  const fillRGB = hex(fill);
  const blobRGB = hex(blobColor);

  const opts = () => (reduced ? ({ duration: 0 } as Transition) : DEFAULT_BLOB_TRANSITION);

  const live = useRef({ smoothness, reduced });
  useIsoLayoutEffect(() => {
    live.current = { smoothness, reduced };
  }, [smoothness, reduced]);

  const center = () => {
    const el = scope.current as HTMLElement | null;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
  };

  // Continuous animation loop for blob physics
  useEffect(() => {
    let last = 0;
    const ctrl = animate(0, 1, {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
      onUpdate: () => {
        const now = performance.now();
        const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
        last = now;
        const st = chase.current;
        const { smoothness: sm, reduced: rm } = live.current;
        const t = Math.max(0, Math.min(100, sm)) / 100;
        const tau = FOLLOW_TAU_MIN + t * (FOLLOW_TAU_MAX - FOLLOW_TAU_MIN);
        const k = rm ? 1 : 1 - Math.exp(-dt / tau);
        const dx = (st.tx - st.x) * k;
        const dy = (st.ty - st.y) * k;
        st.x += dx;
        st.y += dy;
        const speed = Math.hypot(dx, dy) / dt;
        const want = rm ? 1 : Math.min(SQUASH_MAX, 1 + speed * SQUASH_PER_PX_S);
        st.squash += (want - st.squash) * (1 - Math.exp(-dt / SQUASH_TAU));
        if (speed > 8) st.angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        if (followRef.current) followRef.current.style.transform = `translate(${st.x}px,${st.y}px)`;
        if (squashRef.current) squashRef.current.style.transform = `rotate(${st.angle}deg) scale(${st.squash},${1 / st.squash})`;
      },
    });
    return () => ctrl.stop();
  }, [animate]);

  // Reset bite visibility when blob size / radius changes
  useEffect(() => {
    if (!biteRef.current) return;
    animate(biteRef.current, { scale: hovered.current ? 1 : 0 }, { duration: 0 });
  }, [animate, blob, rad]);

  const onEnter = (e: React.PointerEvent) => {
    if (reduced || !biteRef.current) return;
    hovered.current = true;
    const c = center();
    if (c) {
      const dx = e.clientX - c.cx;
      const dy = e.clientY - c.cy;
      const st = chase.current;
      st.tx = dx; st.ty = dy; st.x = dx; st.y = dy;
      if (followRef.current) followRef.current.style.transform = `translate(${dx}px,${dy}px)`;
    }
    animate(biteRef.current, { scale: 1 }, opts() as never);
  };

  const onMove = (e: React.PointerEvent) => {
    if (reduced || !hovered.current) return;
    const c = center();
    if (!c) return;
    chase.current.tx = e.clientX - c.cx;
    chase.current.ty = e.clientY - c.cy;
  };

  const onLeave = () => {
    hovered.current = false;
    if (biteRef.current) animate(biteRef.current, { scale: 0 }, opts() as never);
  };

  return (
    <a
      ref={scope}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        cursor: "pointer",
        textDecoration: "none",
        userSelect: "none",
        boxSizing: "border-box",
        overflow: "visible",
      }}
    >
      {/* SVG layer — button background + liquid blob effect */}
      <svg
        aria-hidden
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, overflow: "visible", zIndex: 1 }}
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={GOO} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" />
          </filter>
          <mask id={maskId}>
            <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
            <g ref={followRef} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
              <g ref={squashRef} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
                <g ref={biteRef} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
                  <circle cx="50%" cy="50%" r={blob / 2} fill="#000" />
                </g>
              </g>
            </g>
          </mask>
        </defs>

        {/* Blob layer (colored fill that follows cursor) */}
        <g filter={`url(#${filterId})`}>
          <rect x="0" y="0" width="100%" height="100%" rx={rad} ry={rad} fill={rgb(blobRGB)} />
        </g>

        {/* Main button fill with carved-out bite */}
        <g filter={`url(#${filterId})`}>
          <rect x="0" y="0" width="100%" height="100%" rx={rad} ry={rad} fill={rgb(fillRGB)} mask={`url(#${maskId})`} />
        </g>
      </svg>

      {/* Content above SVG */}
      <span
        style={{
          position: "relative",
          zIndex: 2,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          whiteSpace: "nowrap",
          fontWeight: 700,
          lineHeight: 1,
          color: textColor,
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </a>
  );
}
