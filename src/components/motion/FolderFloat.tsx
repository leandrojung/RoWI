"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface FolderFloatProps {
  items?: string[];
  label?: string;
  sublabel?: string;
  trigger?: "hover" | "click";
  closeOnSelect?: boolean;
  /** Öffnet den Ordner einmalig automatisch, sobald er in den Viewport scrollt,
   * hält ihn `autoPlayHoldMs` lang offen und schließt ihn dann wieder. Danach
   * verhält sich der Ordner ganz normal über `trigger`. */
  autoPlayOnView?: boolean;
  autoPlayHoldMs?: number;
  physics?: boolean;
  drift?: number;
  onSelect?: (value: string, index: number) => void;
  folderColor?: string;
  frontColor?: string;
  paperColor?: string;
  itemColor?: string;
  itemTextColor?: string;
  labelColor?: string;
  width?: number;
  height?: number;
  radius?: number;
  spread?: number;
  lift?: number;
  tilt?: number;
  flapAngle?: number;
  restAngle?: number;
  openDuration?: number;
  stagger?: number;
  bounce?: number;
  className?: string;
}

export default function FolderFloat({
  items = [],
  label,
  sublabel,
  trigger = "hover",
  closeOnSelect = false,
  autoPlayOnView = false,
  autoPlayHoldMs = 2500,
  onSelect,
  folderColor = "#3f3f46",
  frontColor = "#52525b",
  paperColor = "#f5f5f5",
  itemColor = "#f5f5f5",
  itemTextColor = "#18181b",
  labelColor = "#f5f5f5",
  width = 200,
  height = 148,
  radius = 14,
  spread = 180,
  lift = 26,
  flapAngle = 34,
  restAngle = 16,
  openDuration = 520,
  stagger = 45,
  bounce = 0.3,
  className,
}: FolderFloatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  // Einmaliger Auto-Play beim Reinscrollen: öffnen, kurz halten, wieder
  // schließen — danach greift wieder ganz normal `trigger`.
  useEffect(() => {
    if (!autoPlayOnView) return;
    const el = rootRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let holdTimeout: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            setIsOpen(true);
            holdTimeout = window.setTimeout(() => setIsOpen(false), autoPlayHoldMs);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(holdTimeout);
    };
  }, [autoPlayOnView, autoPlayHoldMs]);

  const handleSelect = useCallback(
    (value: string, index: number) => {
      onSelect?.(value, index);
      if (closeOnSelect) setIsOpen(false);
    },
    [onSelect, closeOnSelect]
  );

  const eventProps =
    trigger === "hover"
      ? { onMouseEnter: open, onMouseLeave: close }
      : { onClick: toggle };

  // Item spread positions — fan upward
  const getItemPos = (index: number, total: number) => {
    const halfSpread = spread / 2;
    const step = total > 1 ? spread / (total - 1) : 0;
    const angle = -halfSpread + step * index;
    const rad = (angle * Math.PI) / 180;
    const spreadR = lift * 2.4;
    const x = Math.sin(rad) * spreadR;
    const y = -lift - (1 - Math.abs(Math.cos(rad))) * lift * 0.5;
    return { x, y, rotate: angle * 0.22 };
  };

  const tabH = 18;
  const folderTop = tabH - 4;
  const floatAreaH = lift * 3.2;

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        position: "relative",
        width,
        cursor: trigger === "click" ? "pointer" : "default",
        userSelect: "none",
        paddingTop: floatAreaH,
      }}
      {...eventProps}
    >
      {/* Floating item cards */}
      {items.map((item, index) => {
        const pos = getItemPos(index, items.length);
        const delay = isOpen
          ? index * stagger
          : (items.length - 1 - index) * stagger * 0.25;

        return (
          <div
            key={index}
            role="button"
            tabIndex={isOpen ? 0 : -1}
            aria-label={item}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(item, index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleSelect(item, index);
            }}
            style={{
              position: "absolute",
              left: "50%",
              bottom: height + folderTop,
              transform: isOpen
                ? `translateX(calc(-50% + ${pos.x}px)) translateY(${pos.y}px) rotate(${pos.rotate}deg) scale(1)`
                : `translateX(-50%) translateY(0px) rotate(0deg) scale(0.55)`,
              opacity: isOpen ? 1 : 0,
              transition: `transform ${openDuration}ms cubic-bezier(0.34,${1 + bounce * 0.5},0.64,1) ${delay}ms, opacity ${Math.round(openDuration * 0.55)}ms ease ${delay}ms`,
              zIndex: 20 + index,
              width: Math.round(width * 0.7),
              backgroundColor: itemColor,
              borderRadius: Math.round(radius * 0.55),
              padding: "9px 12px",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: 1.4,
              color: itemTextColor,
              boxShadow: "0 6px 20px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08)",
              pointerEvents: isOpen ? "auto" : "none",
              whiteSpace: "normal",
            }}
          >
            {item}
          </div>
        );
      })}

      {/* Folder shell */}
      <div style={{ position: "relative", width, height: height + folderTop }}>
        {/* Tab */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: radius,
            width: Math.round(width * 0.42),
            height: tabH,
            backgroundColor: folderColor,
            borderRadius: `${Math.round(radius * 0.7)}px ${Math.round(radius * 0.7)}px 0 0`,
          }}
        />

        {/* Back panel */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: folderTop,
            left: 0,
            width,
            height,
            backgroundColor: folderColor,
            borderRadius: `0 ${radius}px ${radius}px ${radius}px`,
            zIndex: 1,
          }}
        >
          <div style={{ padding: "12px 14px 0" }}>
            {label && (
              <p
                style={{
                  color: labelColor,
                  fontSize: 13,
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {label}
              </p>
            )}
            {sublabel && (
              <p
                style={{
                  color: labelColor,
                  fontSize: 11,
                  opacity: 0.6,
                  margin: "3px 0 0",
                  lineHeight: 1.25,
                }}
              >
                {sublabel}
              </p>
            )}
          </div>
        </div>

        {/* Flap */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: folderTop,
            left: 0,
            width,
            height: Math.round(height * 0.52),
            backgroundColor: folderColor,
            borderRadius: `0 ${radius}px 0 0`,
            zIndex: 3,
            transformOrigin: "bottom center",
            transform: isOpen
              ? `perspective(500px) rotateX(-${flapAngle}deg)`
              : `perspective(500px) rotateX(-${restAngle}deg)`,
            transition: `transform ${openDuration}ms cubic-bezier(0.34,${1 + bounce * 0.25},0.64,1)`,
          }}
        />

        {/* Paper peek */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: folderTop + 2,
            left: 10,
            right: 10,
            height: 13,
            backgroundColor: paperColor,
            borderRadius: "4px 4px 0 0",
            opacity: 0.8,
            zIndex: 2,
          }}
        />

        {/* Front panel */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: folderTop + 7,
            left: 0,
            width,
            height: height - 7,
            backgroundColor: frontColor,
            borderRadius: radius,
            zIndex: 4,
          }}
        />
      </div>

      {/* Hint */}
      {trigger === "hover" && (
        <p
          aria-hidden
          style={{
            textAlign: "center",
            fontSize: 10,
            opacity: isOpen ? 0 : 0.45,
            color: labelColor,
            marginTop: 6,
            transition: `opacity 200ms ease`,
            pointerEvents: "none",
          }}
        >
          hover
        </p>
      )}
    </div>
  );
}
