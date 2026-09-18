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
      <Image
        src="/fotos/firmenwagen-hq.webp"
        alt="Rowi Maschinenservice Firmenwagen"
        width={720}
        height={400}
        className="w-full max-w-[680px] object-contain"
        style={{ filter: "drop-shadow(0 24px 60px rgba(200,16,46,0.22)) drop-shadow(0 4px 16px rgba(0,0,0,0.6))" }}
      />
    </motion.div>
  );
}
