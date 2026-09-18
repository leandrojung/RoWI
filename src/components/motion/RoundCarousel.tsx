"use client";

import { useEffect, useRef } from "react";

export interface CarouselImage {
  src: string;
  alt?: string;
}

interface Props {
  images: CarouselImage[];
  /** Card width in px */
  imageWidth?: number;
  /** Card height in px */
  imageHeight?: number;
  /** Gap between cards (multiplier) */
  spacing?: number;
  /** Rotation speed (degrees/sec ÷ 6) */
  speed?: number;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  /** Vertical tilt of the ring in degrees */
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  /** Dim factor of the back face (0–10) */
  innerDim?: number;
  background?: string;
  height?: string | number;
}

export default function RoundCarousel({
  images,
  imageWidth = 380,
  imageHeight = 285,
  spacing = 4,
  speed = 3,
  direction = "right",
  drag = true,
  sensitivity = 5,
  tilt = -8,
  perspective = 3000,
  cornerRadius = 16,
  innerDim = 3,
  background = "#1a1a1a",
  height = 520,
}: Props) {
  const count = images.length;
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0 });

  const angle = 360 / count;
  const factor = 1 + spacing * 0.15;
  const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
  const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    const apply = () =>
      (ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`);
    apply();

    const draw = (now: number) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      if (!dragRef.current.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, degPerSec]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!drag) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { active: true, x: e.clientX };
    velRef.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.x;
    dragRef.current.x = e.clientX;
    const k = 0.3 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    dragRef.current.active = false;
  };

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: cornerRadius,
    overflow: "hidden",
    backfaceVisibility: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? "grab" : "default",
        touchAction: "none",
        userSelect: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-label="Bildergalerie — Werkstatt und Einsätze von Rowi Maschinenservice"
    >
      <div style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt}deg)` }}>
        <div
          ref={ringRef}
          style={{
            position: "relative",
            width: imageWidth,
            height: imageHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front face */}
              <div
                role="img"
                aria-label={img.alt ?? `Werkstatt-Foto ${i + 1}`}
                style={{
                  ...faceBase,
                  backgroundImage: `url(${img.src})`,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              />
              {/* Back face (dimmed reflection) */}
              <div
                style={{
                  ...faceBase,
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${img.src})`,
                  filter: `brightness(${innerDim / 10})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
