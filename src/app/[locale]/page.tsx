import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import StorySection from "@/components/sections/StorySection";
import ProcessSteps from "@/components/sections/ProcessSteps";
import GalleryPreview from "@/components/sections/GalleryPreview";
import CTABand from "@/components/sections/CTABand";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <CategoryGrid locale={locale} dict={dict} />
      <StorySection locale={locale} dict={dict} />
      <ProcessSteps dict={dict} />
      <GalleryPreview locale={locale} dict={dict} />
      <CTABand locale={locale} dict={dict} />
    </>
  );
}
