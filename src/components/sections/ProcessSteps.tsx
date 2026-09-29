import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ProcessSteps({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow={dict.process.eyebrow}
        title={dict.process.title}
        align="center"
      />
      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {dict.process.steps.map((step, i) => (
          <Reveal as="li" key={i} delay={i * 0.08} className="relative">
            <span
              className="block text-5xl text-rose-soft"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
