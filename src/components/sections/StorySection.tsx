import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import PieceArt from "@/components/PieceArt";
import { hrefFor } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function StorySection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(64,55,47,0.4)]">
              <PieceArt kind="vase" tint="rose" rounded={false} />
            </div>
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rotate-6 overflow-hidden rounded-[1.4rem] border-4 border-sand shadow-lg">
              <PieceArt kind="plate" tint="sage" rounded={false} />
            </div>
          </div>
        </Reveal>

        <div className="order-1 max-w-xl lg:order-2">
          <Reveal>
            <p className="eyebrow mb-3">{dict.story.eyebrow}</p>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              {dict.story.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {dict.story.body}
            </p>
            <div className="mt-8">
              <ButtonLink href={hrefFor(locale, "about")} variant="outline">
                {dict.story.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
