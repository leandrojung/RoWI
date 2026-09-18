import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

type Props = {
  photo: PhotoKey;
  /** Seitenverhältnis-Utility, z. B. "aspect-[4/5]" */
  aspect?: string;
  className?: string;
  /** Dunkler Platzhalter für dunkle Abschnitte */
  tone?: "light" | "dark";
  priority?: boolean;
};

export default function PhotoFrame({
  photo,
  aspect = "aspect-[4/5]",
  className = "",
  tone = "light",
  priority = false,
}: Props) {
  const data = photos[photo];

  if (data.src) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${aspect} ${className}`}>
        <Image src={data.src} alt={data.alt} fill priority={priority} className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
      </div>
    );
  }

  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 text-center ${aspect} ${className} ${
        isDark ? "border-white/20 bg-white/[0.03]" : "border-border bg-surface-muted"
      }`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        aria-hidden="true"
        className={isDark ? "text-white/30" : "text-ink-soft/40"}
      >
        <rect x="3" y="4.5" width="18" height="15" rx="2" />
        <circle cx="8.5" cy="10" r="1.8" />
        <path d="M3 16.5l5-4 4 3.2 3.5-2.7 5.5 4.5" />
      </svg>
      <p className={`max-w-[22ch] text-sm ${isDark ? "text-white/45" : "text-ink-soft/70"}`}>{data.hint}</p>
      <span
        className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
          isDark ? "bg-white/10 text-white/50" : "bg-ink/5 text-ink-soft/70"
        }`}
      >
        Foto folgt
      </span>
    </div>
  );
}
