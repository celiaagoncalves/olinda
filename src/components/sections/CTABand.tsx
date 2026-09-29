import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/Logo";
import { hrefFor } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function CTABand({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <Container size="narrow" className="text-center">
        <Reveal>
          <div className="mx-auto mb-6 flex justify-center opacity-90">
            <LogoMark size={44} />
          </div>
          <h2 className="text-3xl text-cream sm:text-4xl md:text-5xl">
            {dict.ctaBand.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-cream/75">
            {dict.ctaBand.subtitle}
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonLink
              href={hrefFor(locale, "contact")}
              size="lg"
              className="bg-cream text-ink hover:bg-rose-soft hover:text-ink"
            >
              {dict.ctaBand.button}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
