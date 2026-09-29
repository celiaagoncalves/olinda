import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GalleryClient from "@/components/GalleryClient";
import { ButtonLink } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { hrefFor } from "@/lib/nav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.gallery.meta.title,
    description: dict.gallery.meta.description,
  };
}

export default async function GalleryPage({
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
        <Container size="narrow" className="py-16 text-center sm:py-20">
          <Reveal>
            <p className="eyebrow mb-4">{dict.gallery.eyebrow}</p>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              {dict.gallery.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {dict.gallery.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="cream" className="pt-4 sm:pt-6">
        <Suspense fallback={null}>
          <GalleryClient locale={l} dict={dict} />
        </Suspense>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-xl2 border border-line bg-sand px-6 py-10 text-center">
          <p className="max-w-md text-lg text-ink">{dict.gallery.note}</p>
          <ButtonLink href={hrefFor(l, "contact")}>
            {dict.common.requestQuote} <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
