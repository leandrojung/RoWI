"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Stopps der Fahrt. Jeder Stopp bezieht sich auf eine Sektion per `id` —
 * die Parkbucht liegt am Ende dieser Sektion. Weitere Stopps einfach
 * ergänzen; die Fahrt zwischen den Stopps ergibt sich automatisch aus den
 * gemessenen Sektionspositionen.
 */
const STOPS: { sectionId: string; label: string }[] = [
  { sectionId: "leistungen", label: "P" },
];

const ORIGIN_SELECTOR = '[data-car-anchor="van-origin"]';

const DESKTOP_QUERY = "(min-width: 1024px)";

// Geometrie der Spur
const ROAD_LEFT = 20; // px vom linken Viewport-Rand
const ROAD_WIDTH = 64; // px
const ROAD_CENTER_X = ROAD_LEFT + ROAD_WIDTH / 2;
const ROAD_TARGET_WIDTH = 84; // gerenderte Wagenbreite auf der Spur, in px
const PARK_APPROACH = 110; // px Bremsweg vor der Parkbucht
const BAY_HEIGHT = 96; // px Höhe der Parkbucht-Markierung
const CURVE_MIN = 130;
const CURVE_MAX = 420;
const CURVE_FRACTION = 0.32;
const DEPART_DISTANCE = 70;
const SPEED_PX_PER_SEC = 480; // grobe „Geschwindigkeit“ für Segmentdauern
const DWELL = 0.55; // abstrakte Pausendauer beim Parken

type PathState = {
  x: number;
  y: number;
  rot: number;
  tiltY: number;
  scale: number;
  brake: number;
};

type StopMeasurement = {
  id: string;
  label: string;
  parkDocY: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function CarScrollJourney() {
  const rootRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const carImgRef = useRef<HTMLImageElement>(null);
  const brakeLightRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const bayRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined") return;

    const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;

    let cleanupJourney: (() => void) | null = null;

    function teardown() {
      cleanupJourney?.();
      cleanupJourney = null;
      if (rootRef.current) rootRef.current.style.display = "none";
    }

    function setup() {
      teardown();
      if (!isDesktop()) return;

      const originEl = document.querySelector<HTMLElement>(ORIGIN_SELECTOR);
      if (!originEl) return;

      const stopMeasurements: StopMeasurement[] = [];
      for (const stop of STOPS) {
        const sectionEl = document.getElementById(stop.sectionId);
        if (!sectionEl) continue;
        const rect = sectionEl.getBoundingClientRect();
        const bottomDocY = rect.bottom + window.scrollY;
        stopMeasurements.push({
          id: stop.sectionId,
          label: stop.label,
          parkDocY: bottomDocY - BAY_HEIGHT * 0.55,
        });
      }
      if (stopMeasurements.length === 0) return;

      const originRect = originEl.getBoundingClientRect();
      const originX = originRect.left + originRect.width / 2;
      const originDocY = originRect.top + window.scrollY + originRect.height / 2;
      const originWidth = originRect.width;
      const originHeight = originRect.height;

      if (originWidth < 1 || originHeight < 1) return;

      const roadScale = clamp(ROAD_TARGET_WIDTH / originWidth, 0.1, 1);
      const parkScale = roadScale * 0.94;

      const firstStop = stopMeasurements[0];
      const firstLegDistance = Math.max(firstStop.parkDocY - originDocY, 1);
      const curveDrop = clamp(firstLegDistance * CURVE_FRACTION, CURVE_MIN, CURVE_MAX);
      const curveEndY = originDocY + curveDrop;
      const lastStop = stopMeasurements[stopMeasurements.length - 1];
      const roadTop = curveEndY - 20;
      const roadHeight = Math.max(lastStop.parkDocY + BAY_HEIGHT / 2 - roadTop, 40);

      if (roadRef.current) {
        roadRef.current.style.display = "block";
        roadRef.current.style.top = `${roadTop}px`;
        roadRef.current.style.height = `${roadHeight}px`;
        roadRef.current.style.left = `${ROAD_LEFT}px`;
        roadRef.current.style.width = `${ROAD_WIDTH}px`;
      }

      stopMeasurements.forEach((stop) => {
        const bayEl = bayRefs.current.get(stop.id);
        if (!bayEl) return;
        bayEl.style.display = "flex";
        bayEl.style.top = `${stop.parkDocY - BAY_HEIGHT / 2}px`;
        bayEl.style.left = `${ROAD_LEFT - 14}px`;
        bayEl.style.width = `${ROAD_WIDTH + 28}px`;
        bayEl.style.height = `${BAY_HEIGHT}px`;
      });

      const pathState: PathState = { x: originX, y: originDocY, rot: 0, tiltY: 0, scale: 1, brake: 0 };

      const carTl = gsap.timeline({ paused: true });

      const curveDuration = Math.max(curveDrop / SPEED_PX_PER_SEC, 0.5);
      carTl.to(
        pathState,
        { x: ROAD_CENTER_X, y: curveEndY, rot: 90, scale: roadScale, duration: curveDuration, ease: "power2.inOut" },
        0
      );
      carTl.to(
        pathState,
        {
          keyframes: { "0%": { tiltY: 0 }, "45%": { tiltY: -9 }, "100%": { tiltY: 0 } },
          duration: curveDuration,
          ease: "sine.inOut",
        },
        0
      );

      let cursorY = curveEndY;
      stopMeasurements.forEach((stop, index) => {
        if (index > 0) {
          const departEndY = cursorY + DEPART_DISTANCE;
          carTl.to(pathState, {
            y: departEndY,
            scale: roadScale,
            duration: Math.max(DEPART_DISTANCE / SPEED_PX_PER_SEC, 0.3),
            ease: "power2.in",
          });
          cursorY = departEndY;
        }

        const driveEndY = stop.parkDocY - PARK_APPROACH;
        if (driveEndY > cursorY) {
          carTl.to(pathState, {
            y: driveEndY,
            duration: Math.max((driveEndY - cursorY) / SPEED_PX_PER_SEC, 0.25),
            ease: "none",
          });
          cursorY = driveEndY;
        }

        const brakeDuration = Math.max((stop.parkDocY - cursorY) / (SPEED_PX_PER_SEC * 0.55), 0.45);
        carTl.to(pathState, { y: stop.parkDocY, scale: parkScale, duration: brakeDuration, ease: "power3.out" });
        carTl.to(pathState, { brake: 1, duration: 0.15, ease: "none" }, "<");
        carTl.to(pathState, { duration: DWELL });
        carTl.to(pathState, { brake: 0, duration: 0.2 }, `-=0.2`);
        cursorY = stop.parkDocY;
      });

      const scrub = { progress: 0 };
      const shadowBaseWidth = originWidth * 0.29;
      const shadowBaseHeight = originWidth * 0.075;
      const shadowOffsetYAt = (h: number) => h * 0.36;

      // Hinweis: Die Wagengröße wird bewusst über die tatsächliche Bildbreite/-höhe
      // (nicht per CSS-`scale()`) animiert. Ein sehr stark herunterskaliertes,
      // transformiertes <img> kann in manchen Rendering-Pfaden unsichtbar werden;
      // eine echte Größenänderung ist hier robust und bei dieser Elementzahl günstig.
      function applyFrame() {
        carTl.progress(clamp(scrub.progress, 0, 1));
        const screenY = pathState.y - window.scrollY;
        const curW = originWidth * pathState.scale;
        const curH = originHeight * pathState.scale;

        if (carImgRef.current) {
          carImgRef.current.style.width = `${curW}px`;
          carImgRef.current.style.height = `${curH}px`;
        }
        if (carRef.current) {
          carRef.current.style.transform = `translate3d(${pathState.x - curW / 2}px, ${
            screenY - curH / 2
          }px, 0) rotate(${pathState.rot}deg) rotateY(${pathState.tiltY}deg)`;
        }
        if (shadowRef.current) {
          const shadowOpacity = clamp(0.22 + pathState.scale * 0.12, 0.14, 0.34);
          const shadowW = shadowBaseWidth * pathState.scale;
          const shadowH = shadowBaseHeight * pathState.scale;
          shadowRef.current.style.width = `${shadowW}px`;
          shadowRef.current.style.height = `${shadowH}px`;
          shadowRef.current.style.transform = `translate3d(${pathState.x - shadowW / 2}px, ${
            screenY + shadowOffsetYAt(curH) - shadowH / 2
          }px, 0)`;
          shadowRef.current.style.opacity = String(shadowOpacity);
        }
        if (brakeLightRef.current) {
          brakeLightRef.current.style.opacity = String(pathState.brake);
        }
      }

      const scrollTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: originDocY,
        end: lastStop.parkDocY,
        scrub: 0.8,
        invalidateOnRefresh: true,
        animation: gsap.to(scrub, { progress: 1, ease: "none" }),
        onUpdate: applyFrame,
        onRefreshInit: applyFrame,
      });

      if (rootRef.current) rootRef.current.style.display = "block";
      applyFrame();

      cleanupJourney = () => {
        scrollTrigger.kill();
        carTl.kill();
      };
    }

    setup();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 200);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", setup);

    // Fängt späte Layoutverschiebungen ab (z. B. Web-Font-Swap, Bild-Ladezeit).
    const settleTimer = setTimeout(setup, 400);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", setup);
      if (resizeTimer) clearTimeout(resizeTimer);
      clearTimeout(settleTimer);
      teardown();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={rootRef}
      id="car-scroll-journey-root"
      aria-hidden="true"
      style={{ position: "absolute", top: 0, left: 0, width: 0, height: 0, overflow: "visible", display: "none" }}
    >
      {/* Straße — Teil des Dokumentflusses, scrollt normal mit der Seite */}
      <div
        ref={roadRef}
        style={{
          position: "absolute",
          zIndex: 30,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.14) 6%, #2a2a2a 6%, #2a2a2a 94%, rgba(255,255,255,0.14) 94%, rgba(255,255,255,0.14) 100%)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "4px",
            marginLeft: "-2px",
            backgroundImage:
              "repeating-linear-gradient(to bottom, #c8102e 0px, #c8102e 20px, transparent 20px, transparent 38px)",
          }}
        />
      </div>

      {/* Parkbuchten — eine je Stopp */}
      {STOPS.map((stop) => (
        <div
          key={stop.sectionId}
          ref={(el) => {
            if (el) bayRefs.current.set(stop.sectionId, el);
            else bayRefs.current.delete(stop.sectionId);
          }}
          style={{
            position: "absolute",
            zIndex: 31,
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            background: "rgba(255,255,255,0.94)",
            border: "2px dashed #c8102e",
            borderRadius: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
              fontWeight: 800,
              fontSize: "26px",
              color: "#c8102e",
              lineHeight: 1,
              marginBottom: "6px",
            }}
          >
            {stop.label}
          </span>
          <div style={{ width: "70%", height: "3px", background: "#c8102e", marginBottom: "8px" }} />
        </div>
      ))}

      {/* Bodenschatten des Wagens */}
      <div
        ref={shadowRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 29,
          width: "160px",
          height: "34px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 72%)",
          filter: "blur(4px)",
        }}
      />

      {/* Wagen — fixed, folgt dem Pfad rein visuell, blockiert keine Klicks */}
      <div
        ref={carRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 32,
          pointerEvents: "none",
          perspective: "900px",
        }}
      >
        <img
          ref={carImgRef}
          src="/fotos/firmenwagen-freigestellt.png"
          alt=""
          style={{ display: "block", objectFit: "contain", width: "100%", height: "100%" }}
        />
        {/* Bremslicht — sitzt am Heck (linke Bildseite, da die Front nach rechts zeigt) */}
        <div
          ref={brakeLightRef}
          style={{
            position: "absolute",
            left: "6%",
            top: "40%",
            width: "9%",
            height: "14%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,40,40,0.95) 0%, rgba(255,40,40,0) 75%)",
            opacity: 0,
          }}
        />
      </div>
    </div>
  );
}
