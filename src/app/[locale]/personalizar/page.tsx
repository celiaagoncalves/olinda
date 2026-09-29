import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gift, Heart, PartyPopper, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProcessSteps from "@/components/sections/ProcessSteps";
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
    title: dict.custom.meta.title,
    description: dict.custom.meta.description,
  };
}

const occasionIcons = [Gift, Heart, PartyPopper, Home];

export default async function CustomPage({
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
      <section className="paper">
        <Container size="narrow" className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow mb-4">{dict.custom.eyebrow}</p>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              {dict.custom.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {dict.custom.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ocasiões */}
      <Section tone="cream">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{dict.custom.occasionsTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {dict.custom.occasions.map((occ, i) => {
            const Icon = occasionIcons[i % occasionIcons.length];
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex h-full gap-5 rounded-xl2 border border-line bg-cream p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-soft/60 text-sage-deep">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl">{occ.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {occ.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* processo (reutilizado) */}
      <div className="bg-sand">
        <ProcessSteps dict={dict} />
      </div>

      {/* FAQ */}
      <Section tone="cream" size="narrow">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl">
            {dict.custom.faqTitle}
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {dict.custom.faq.map((item, i) => (
            <Reveal as="div" key={i} delay={i * 0.04}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-ink">
                  {item.q}
                  <span className="text-2xl text-rose-deep transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-muted leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand locale={l} dict={dict} />
    </>
  );
}
