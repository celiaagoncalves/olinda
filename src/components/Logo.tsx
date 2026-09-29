import { CSSProperties } from "react";

type LogoProps = {
  /** Mostrar só a marca (sem o wordmark). */
  markOnly?: boolean;
  /** Cor do wordmark; a marca usa sempre os acentos da paleta. */
  className?: string;
  style?: CSSProperties;
  /** Altura em pixéis da marca. */
  size?: number;
};

/**
 * Marca da Olinda: um prato/taça sugerido por uma pincelada, com um pequeno
 * motivo floral — evoca a cerâmica de Condeixa/Conímbriga de forma minimalista.
 */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* prato — anel exterior desenhado como pincelada */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="var(--color-sage-deep)"
        strokeWidth="1.6"
      />
      <circle
        cx="24"
        cy="24"
        r="14.5"
        stroke="var(--color-rose)"
        strokeWidth="1.2"
        strokeDasharray="1.5 3"
      />
      {/* motivo floral central */}
      <g stroke="var(--color-terracotta)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M24 17.5c-2.4 2-2.4 5 0 6.5 2.4-1.5 2.4-4.5 0-6.5Z" fill="var(--color-rose-soft)" />
        <path d="M24 30.5c-2.4-2-2.4-5 0-6.5 2.4 1.5 2.4 4.5 0 6.5Z" fill="var(--color-rose-soft)" />
        <path d="M17.5 24c2-2.4 5-2.4 6.5 0-1.5 2.4-4.5 2.4-6.5 0Z" fill="var(--color-sage-soft)" />
        <path d="M30.5 24c-2-2.4-5-2.4-6.5 0 1.5 2.4 4.5 2.4 6.5 0Z" fill="var(--color-sage-soft)" />
      </g>
      <circle cx="24" cy="24" r="2.1" fill="var(--color-terracotta)" />
    </svg>
  );
}

export default function Logo({ markOnly = false, className, style, size = 34 }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      style={style}
    >
      <LogoMark size={size} />
      {!markOnly && (
        <span
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl leading-none tracking-tight text-ink"
        >
          olinda
        </span>
      )}
    </span>
  );
}
