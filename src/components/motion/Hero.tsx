"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import LiquidButton from "@/components/ui/LiquidButton";
import PopcornText from "@/components/motion/PopcornText";
import { siteConfig } from "@/lib/site-config";

function HeroContent() {
  return (
    <>
      {/* Badges */}
      <div className="hero-in flex flex-wrap items-center justify-center gap-2.5">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Seit 2012 selbstständig · seit 2001 in der Branche
        </p>
        <p className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
          <span className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" size={11} />
            ))}
          </span>
          5,0 bei Google
        </p>
      </div>

      {/* Headline */}
      <h1 className="hero-in hero-in-delay-1 mt-6 max-w-[18ch] text-[clamp(2.75rem,6vw,4.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-balance">
        <PopcornText
          text="Maschinenservice & Wartung direkt vom Fachmann"
          tag="span"
          appearTrigger="default"
          stagger={0.018}
          rotationRange={18}
          startY={28}
          transition={{ type: "spring", stiffness: 420, damping: 16, mass: 0.9 }}
        />
      </h1>

      {/* Lead text */}
      <p className="hero-in hero-in-delay-2 mt-6 max-w-[48ch] text-lg leading-relaxed text-white/70">
        Fachbetrieb in Heiden — im Einsatz in ganz Deutschland. Für Steinmetze, Bildhauer,
        Natursteinbetriebe und Baumärkte.
      </p>

      {/* CTAs */}
      <div className="hero-in hero-in-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
        <LiquidButton
          href={siteConfig.contact.phoneHref}
          fill="#c8102e"
          blobColor="#8b0b1c"
          textColor="#ffffff"
          rounded={9999}
          padding="16px 32px"
          blobSize={80}
        >
          <Icon name="phone" size={20} />
          {siteConfig.contact.phoneDisplay}
        </LiquidButton>
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
        >
          <Icon name="whatsapp" size={20} />
          WhatsApp
        </a>
      </div>
    </>
  );
}

/**
 * Hero mit scroll-gekoppelter Ausstiegssequenz: statt eines simplen Fades
 * taucht die Kamera beim Herunterscrollen in das Werkstattfoto ein (Zoom,
 * Verdunkelung), bis ein harter Farbschnitt auf Akzentrot die Sektion
 * abschließt und in die Vertrauensleiste freigibt. Bei reduzierter Bewegung
 * entfällt die Pin-Mechanik komplett zugunsten einer ruhigen, statischen Hero.
 */
export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.3 });

  const imgScale = useTransform(progress, [0, 1], [1, 2.15]);
  const imgY = useTransform(progress, [0, 1], ["0%", "-7%"]);
  const overlayOpacity = useTransform(progress, [0, 0.7], [0.78, 0.95]);
  const contentOpacity = useTransform(progress, [0, 0.22], [1, 0]);
  const contentY = useTransform(progress, [0, 0.25], [0, -56]);
  const contentScale = useTransform(progress, [0, 0.25], [1, 0.94]);
  const flashOpacity = useTransform(progress, [0.6, 0.88], [0, 1]);
  const wordmarkOpacity = useTransform(progress, [0.68, 0.8], [0, 1], { clamp: true });
  const wordmarkScale = useTransform(progress, [0.68, 0.79, 0.88], [0.72, 1.1, 1], { clamp: true });

  if (reduced) {
    return (
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-white">
        <Image
          src="/fotos/werkstatt-03.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/78" aria-hidden="true" />
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ink/55" aria-hidden="true" />
        <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-28 text-center">
          <HeroContent />
        </div>
      </section>
    );
  }

  return (
    <div ref={wrapRef} className="relative" style={{ height: "185vh" }}>
      <section className="sticky top-0 flex h-[100svh] flex-col overflow-hidden text-white">
        {/* Full-bleed background photo — taucht beim Scrollen in die Werkstatt ein */}
        <motion.div className="absolute inset-0" style={{ scale: imgScale, y: imgY }}>
          <Image
            src="/fotos/werkstatt-03.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
        </motion.div>
        {/* Cinematic dark overlay — vertieft sich beim Scrollen */}
        <motion.div className="absolute inset-0 bg-ink" style={{ opacity: overlayOpacity }} aria-hidden="true" />
        {/* Technische Raster-Textur — Werkstatt-Charakter ohne Bildasset */}
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden="true" />

        {/* Content stack — blendet früh aus, bevor der Zoom Fahrt aufnimmt */}
        <motion.div
          className="relative flex flex-1 flex-col items-center justify-center px-6 py-28 text-center"
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        >
          <HeroContent />
        </motion.div>

        {/* Harter Farbschnitt auf Akzentrot — schließt den Tauchgang ab */}
        <motion.div className="absolute inset-0 bg-accent" style={{ opacity: flashOpacity }} aria-hidden="true" />

        {/* Schriftzug poppt auf dem Rot auf — Markenmoment statt leerer Fläche */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-10"
          style={{ opacity: wordmarkOpacity, scale: wordmarkScale }}
          aria-hidden="true"
        >
          <Image
            src="/brand/wordmark-flash.png"
            alt=""
            width={1687}
            height={258}
            className="h-auto w-full max-w-[560px]"
          />
        </motion.div>
      </section>
    </div>
  );
}
