import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PieceCard from "@/components/PieceCard";
import { ButtonLink } from "@/components/ui/Button";
import { pieces } from "@/data/pieces";
import { hrefFor } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function GalleryPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const preview = pieces.slice(0, 3);
  return (
    <Section tone="sage">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="eyebrow mb-3">{dict.galleryPreview.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem]">
            {dict.galleryPreview.title}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <ButtonLink href={hrefFor(locale, "gallery")} variant="ghost">
            {dict.galleryPreview.cta} <ArrowRight size={18} />
          </ButtonLink>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((piece, i) => (
          <Reveal key={piece.id} delay={i * 0.07}>
            <PieceCard piece={piece} locale={locale} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
