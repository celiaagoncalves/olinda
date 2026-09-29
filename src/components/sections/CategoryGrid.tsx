import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PieceArt from "@/components/PieceArt";
import { categories } from "@/data/categories";
import { hrefFor } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function CategoryGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow={dict.categories.eyebrow}
        title={dict.categories.title}
        subtitle={dict.categories.subtitle}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const item = dict.categories.items[cat.key];
          return (
            <Reveal key={cat.key} delay={i * 0.06}>
              <Link
                href={`${hrefFor(locale, "gallery")}?c=${cat.key}`}
                className="group block h-full rounded-xl2 border border-line bg-cream p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(64,55,47,0.4)]"
              >
                <div className="aspect-square overflow-hidden rounded-[1.4rem]">
                  <PieceArt kind={cat.art} tint={cat.tint} rounded={false} />
                </div>
                <div className="flex items-start justify-between gap-2 px-2 pb-2 pt-5">
                  <div>
                    <h3 className="text-xl">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta-deep"
                  />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
