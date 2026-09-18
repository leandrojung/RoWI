import type { SVGProps } from "react";

export type IconName =
  | "wrench"
  | "gear"
  | "bolt"
  | "install"
  | "search"
  | "parts"
  | "training"
  | "trade"
  | "clock"
  | "target"
  | "layers"
  | "star"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "check"
  | "arrow-right"
  | "saw"
  | "polish"
  | "crane"
  | "water"
  | "truck"
  | "shield";

const paths: Record<IconName, React.ReactNode> = {
  wrench: (
    <path d="M15.6 3.6a5 5 0 0 0-5.9 6.3L3 16.6V21h4.4l6.7-6.7a5 5 0 0 0 6.3-5.9l-3.1 3.1-2.9-.6-.6-2.9 3.1-3.4z" />
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
    </>
  ),
  bolt: <path d="M13 2.5 4.8 13.8H11l-1 7.7 8.2-11.3H12l1-7.7z" />,
  install: (
    <>
      <path d="M12 3v8.5m0 0-3.2-3.2M12 11.5l3.2-3.2" />
      <path d="M3.5 15.5h17v5h-17z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.8" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  parts: (
    <>
      <path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6z" />
      <path d="M4 7.6l8 4.4 8-4.4M12 12v8.8" />
    </>
  ),
  training: (
    <>
      <path d="M12 4 2.8 8.6 12 13.2l9.2-4.6z" />
      <path d="M6.4 10.8v4.4c0 1.7 2.5 3 5.6 3s5.6-1.3 5.6-3v-4.4" />
    </>
  ),
  trade: <path d="M3.5 8.5h14l-3.4-3.4M20.5 15.5h-14l3.4 3.4" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.8V12l3.6 2.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="0.9" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 2.8 7.8 12 12.6l9.2-4.8z" />
      <path d="M2.8 12.6 12 17.4l9.2-4.8M2.8 16.6 12 21.4l9.2-4.8" />
    </>
  ),
  star: <path d="M12 2.6l2.9 6 6.6 1-4.8 4.6 1.2 6.6L12 17.7 6.1 20.8l1.2-6.6L2.5 9.6l6.6-1z" />,
  phone: (
    <path d="M7 3.5h3l1.5 4-2 1.4a12.5 12.5 0 0 0 5.6 5.6l1.4-2 4 1.5v3c0 1-.8 1.9-1.9 1.9A16.6 16.6 0 0 1 5.4 5.4c0-1 .8-1.9 1.9-1.9z" />
  ),
  whatsapp: (
    <path
      fillRule="evenodd"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.55 4.122 1.516 5.856L0 24l6.293-1.5A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
    />
  ),
  mail: (
    <>
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  "arrow-right": <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
  saw: (
    <>
      <circle cx="12" cy="12" r="6.4" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
    </>
  ),
  polish: (
    <>
      <circle cx="12" cy="9.5" r="4.2" />
      <path d="M4.5 17.5c2.2 1.4 4.8 2.1 7.5 2.1s5.3-.7 7.5-2.1M6.5 20.8c1.7.8 3.6 1.2 5.5 1.2s3.8-.4 5.5-1.2" />
    </>
  ),
  crane: (
    <>
      <path d="M4 20.5h16M6.5 20.5V4.5h11M17.5 4.5v4M12 8.5v4m0 0h-2.5v3.5h5V12.5H12z" />
    </>
  ),
  water: <path d="M12 3s6 6.4 6 10.4a6 6 0 0 1-12 0C6 9.4 12 3 12 3z" />,
  truck: (
    <>
      <path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.5 5.9v5.4c0 4.6 3.1 8.5 7.5 9.9 4.4-1.4 7.5-5.3 7.5-9.9V5.9z" />
      <path d="M8.8 12l2.3 2.3 4.1-4.6" />
    </>
  ),
};

/** Icons, die als Fläche statt als Linie gezeichnet werden */
const filledIcons: IconName[] = ["star", "bolt", "water", "whatsapp", "phone"];

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 24, strokeWidth = 1.6, ...rest }: Props) {
  const isFilled = filledIcons.includes(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={isFilled ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
