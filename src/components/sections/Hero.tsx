import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import PieceArt from "@/components/PieceArt";
import { hrefFor } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="paper relative overflow-hidden">
      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow mb-5">{dict.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="whitespace-pre-line text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
              {dict.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {dict.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href={hrefFor(locale, "contact")} size="lg">
                {dict.hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href={hrefFor(locale, "gallery")}
                variant="outline"
                size="lg"
              >
                {dict.hero.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* composição de peças */}
        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto aspect-4/5 w-full max-w-md">
            <div className="absolute inset-0 rotate-2 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(64,55,47,0.35)]">
              <PieceArt kind="plate" tint="sage" rounded={false} />
            </div>
            <div className="absolute -bottom-6 -left-6 h-40 w-40 -rotate-6 overflow-hidden rounded-[1.5rem] border-4 border-cream shadow-lg sm:h-48 sm:w-48">
              <PieceArt kind="mug" tint="rose" rounded={false} />
            </div>
            <div className="absolute -right-4 -top-4 h-28 w-28 rotate-6 overflow-hidden rounded-[1.25rem] border-4 border-cream shadow-lg sm:h-32 sm:w-32">
              <PieceArt kind="bowl" tint="terracotta" rounded={false} />
            </div>
          </div>
          <p className="mt-8 text-center text-sm italic text-muted lg:mt-10">
            {dict.hero.imageCaption}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
