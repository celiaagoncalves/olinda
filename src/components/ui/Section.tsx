import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "default" | "narrow" | "wide";
  tone?: "cream" | "sand" | "sage" | "none";
  id?: string;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream",
  sand: "bg-sand",
  sage: "bg-sage-soft/40",
  none: "",
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  size = "default",
  tone = "none",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
