"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VanReveal() {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0, scale: 0.97 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 55, damping: 18, mass: 1 }}
      className="relative flex items-center justify-end"
    >
      {/* data-car-anchor: Startpunkt/Größenreferenz für CarScrollJourney (Hero-Ausfahrt) */}
      <Image
        data-car-anchor="van-origin"
        src="/fotos/firmenwagen-hq.webp"
        alt="Rowi Maschinenservice Firmenwagen"
        width={1521}
        height={586}
        className="h-auto w-full max-w-[680px] object-contain"
      />
    </motion.div>
  );
}
