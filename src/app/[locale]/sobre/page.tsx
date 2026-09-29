import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PieceArt from "@/components/PieceArt";
import CTABand from "@/components/sections/CTABand";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
  };
}

const artByIndex = [
  { kind: "vase", tint: "rose" },
  { kind: "plate", tint: "sage" },
  { kind: "bowl", tint: "terracotta" },
] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      {/* intro */}
      <section className="paper">
        <Container size="narrow" className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow mb-4">{dict.about.eyebrow}</p>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              {dict.about.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {dict.about.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* secções alternadas */}
      <Section tone="cream" size="wide">
        <div className="space-y-20 sm:space-y-28">
          {dict.about.sections.map((sec, i) => {
            const art = artByIndex[i % artByIndex.length];
            const flip = i % 2 === 1;
            return (
              <div
                key={i}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="mx-auto aspect-4/3 w-full max-w-md overflow-hidden rounded-xl2 shadow-[0_28px_55px_-30px_rgba(64,55,47,0.4)]">
                    <PieceArt kind={art.kind} tint={art.tint} rounded={false} />
                  </div>
                </Reveal>
                <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
                  <div className="max-w-lg">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl">
                      {sec.title}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-muted">
                      {sec.body}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Section>

      {/* valores */}
      <Section tone="sand">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl">
            {dict.about.valuesTitle}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {dict.about.values.map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-xl2 border border-line bg-cream p-8 text-center">
                <h3 className="text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand locale={l} dict={dict} />
    </>
  );
}
