"use client";

import { motion } from "framer-motion";
import {
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";

interface ImageItem {
  src: string;
  alt?: string;
  focusY?: number;
}

interface TiltOptions {
  effect: "attract" | "repel";
  tiltLimit: number;
  scale: number;
}

interface ImageFlipProps {
  images: ImageItem[];
  fit?: "cover" | "contain";
  rounded?: number;
  transition?: object;
  tilt?: boolean;
  tiltOptions?: TiltOptions;
  className?: string;
  style?: CSSProperties;
}

const DEFAULTS = {
  fit: "cover" as const,
  focusY: 50,
  rounded: 16,
  transition: {
    type: "tween",
    duration: 0.6,
    ease: "easeInOut",
  },
  tilt: true,
  tiltOptions: {
    effect: "repel" as const,
    tiltLimit: 12,
    scale: 105,
  },
};

const HALF_TURN = 180;
const PERSPECTIVE = 900;

const focusOf = (item: ImageItem | undefined) =>
  Math.min(100, Math.max(0, typeof item?.focusY === "number" ? item.focusY : DEFAULTS.focusY));

export default function ImageFlip({
  images,
  fit = DEFAULTS.fit,
  rounded = DEFAULTS.rounded,
  transition = DEFAULTS.transition,
  tilt = DEFAULTS.tilt,
  tiltOptions = DEFAULTS.tiltOptions,
  className,
  style,
}: ImageFlipProps) {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  const effect = tiltOptions.effect;
  const tiltLimit = tiltOptions.tiltLimit;
  const scale = tiltOptions.scale / 100;

  const [angle, setAngle] = useState(0);
  const [index, setIndex] = useState(0);
  const [faces, setFaces] = useState({ a: 0, b: 0 });

  const facing = (deg: number) =>
    Math.abs(Math.round(deg / HALF_TURN)) % 2 === 0 ? "a" : "b";

  const flip = (dir: 1 | -1) => {
    const n = images.length;
    if (n < 2) return;
    const next = (index + dir + n) % n;
    const nextAngle = angle + dir * HALF_TURN;
    const incoming = facing(nextAngle) as "a" | "b";
    setFaces((f) => ({ ...f, [incoming]: next }));
    setIndex(next);
    setAngle(nextAngle);
  };

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    flip(e.clientX - rect.left < rect.width / 2 ? -1 : 1);
  };

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!tilt || !el) return;
    const { width, height, top, left } = el.getBoundingClientRect();
    const mult = effect === "repel" ? -1 : 1;
    const tiltX = ((e.clientY - top) / height - 0.5) * (tiltLimit * 2) * mult;
    const tiltY = ((e.clientX - left) / width - 0.5) * -(tiltLimit * 2) * mult;
    el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale},${scale},${scale})`;
  };

  const onLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
  };

  const faceStyle = (slot: number): CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: fit,
    objectPosition: fit === "cover" ? `center ${focusOf(images[slot % images.length])}%` : "center",
    borderRadius: rounded,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden" as CSSProperties["WebkitBackfaceVisibility"],
    userSelect: "none",
    pointerEvents: "none",
  });

  return (
    <div
      className={className}
      style={{
        ...style,
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: `${PERSPECTIVE}px`,
        cursor: images.length > 1 ? "pointer" : "default",
      }}
    >
      <div
        ref={tiltRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease-out",
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{ rotateY: angle }}
          transition={transition}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Face A */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[faces.a % images.length]?.src}
            alt={images[faces.a % images.length]?.alt ?? ""}
            draggable={false}
            style={faceStyle(faces.a)}
          />
          {/* Face B (back side) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[faces.b % images.length]?.src}
            alt={images[faces.b % images.length]?.alt ?? ""}
            draggable={false}
            style={{ ...faceStyle(faces.b), transform: "rotateY(180deg)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
