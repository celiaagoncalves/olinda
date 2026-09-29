import type { CSSProperties } from "react";

export type PieceKind = "mug" | "plate" | "bowl" | "set" | "vase";
export type Tint = "sage" | "rose" | "sand" | "terracotta";

const tints: Record<Tint, { bg: string; from: string; to: string }> = {
  sage: { bg: "#e4eeea", from: "#cfe0da", to: "#eef4f1" },
  rose: { bg: "#f2e0dc", from: "#e8cfc9", to: "#f8ece9" },
  sand: { bg: "#efe6db", from: "#e6d8c8", to: "#f6efe6" },
  terracotta: { bg: "#eddbd0", from: "#e2c6b6", to: "#f4e7de" },
};

const stroke = "#8a7c6e";
const accent = "#c0805f";

function Motif({ x, y }: { x: number; y: number }) {
  // pequeno motivo floral pintado à mão
  return (
    <g transform={`translate(${x} ${y})`} stroke={accent} strokeWidth="1.4" strokeLinecap="round">
      <path d="M0 -6c-2 1.7-2 4.3 0 6 2-1.7 2-4.3 0-6Z" fill="#e8cfc9" />
      <path d="M0 6c-2-1.7-2-4.3 0-6 2 1.7 2 4.3 0 6Z" fill="#e8cfc9" />
      <path d="M-6 0c1.7-2 4.3-2 6 0-1.7 2-4.3 2-6 0Z" fill="#cfdfd9" />
      <path d="M6 0c-1.7-2-4.3-2-6 0 1.7 2 4.3 2 6 0Z" fill="#cfdfd9" />
      <circle cx="0" cy="0" r="1.4" fill={accent} stroke="none" />
    </g>
  );
}

function Shape({ kind }: { kind: PieceKind }) {
  switch (kind) {
    case "mug":
      return (
        <g fill="none" stroke={stroke} strokeWidth="2">
          <path d="M70 62h60v58a18 18 0 0 1-18 18H88a18 18 0 0 1-18-18V62Z" fill="#fff" />
          <path d="M130 74h14a14 14 0 0 1 0 28h-14" />
          <path d="M70 62h60" strokeWidth="2.4" />
          <Motif x={100} y={98} />
        </g>
      );
    case "plate":
      return (
        <g fill="none" stroke={stroke} strokeWidth="2">
          <circle cx="100" cy="100" r="62" fill="#fff" />
          <circle cx="100" cy="100" r="46" strokeDasharray="2 5" stroke={accent} strokeWidth="1.4" />
          <Motif x={100} y={100} />
        </g>
      );
    case "bowl":
      return (
        <g fill="none" stroke={stroke} strokeWidth="2">
          <path d="M52 92h96a48 48 0 0 1-96 0Z" fill="#fff" />
          <path d="M52 92c8-6 88-6 96 0" strokeWidth="1.4" stroke={accent} />
          <Motif x={100} y={118} />
        </g>
      );
    case "vase":
      return (
        <g fill="none" stroke={stroke} strokeWidth="2">
          <path d="M84 54h32l-6 20c14 10 18 44 0 62-10 10-30 10-40 0-18-18-8-52 6-62l8-20Z" fill="#fff" />
          <Motif x={100} y={108} />
        </g>
      );
    case "set":
      return (
        <g fill="none" stroke={stroke} strokeWidth="2">
          <circle cx="78" cy="96" r="42" fill="#fff" />
          <circle cx="78" cy="96" r="31" strokeDasharray="2 5" stroke={accent} strokeWidth="1.2" />
          <circle cx="132" cy="110" r="30" fill="#fff" />
          <circle cx="132" cy="110" r="21" strokeDasharray="2 5" stroke={accent} strokeWidth="1.1" />
          <Motif x={78} y={96} />
        </g>
      );
  }
}

type PieceArtProps = {
  kind: PieceKind;
  tint?: Tint;
  className?: string;
  style?: CSSProperties;
  rounded?: boolean;
};

/**
 * Ilustração decorativa de uma peça de cerâmica. Serve de placeholder elegante
 * enquanto não há fotografias reais — basta substituir por <Image> quando as tiverem.
 */
export default function PieceArt({
  kind,
  tint = "sage",
  className,
  style,
  rounded = true,
}: PieceArtProps) {
  const t = tints[tint];
  const gid = `g-${kind}-${tint}`;
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${rounded ? "rounded-[inherit]" : ""} ${className ?? ""}`}
      style={{ backgroundColor: t.bg, ...style }}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={gid} cx="50%" cy="38%" r="72%">
            <stop offset="0%" stopColor={t.to} />
            <stop offset="100%" stopColor={t.from} />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#${gid})`} />
        <Shape kind={kind} />
      </svg>
    </div>
  );
}
