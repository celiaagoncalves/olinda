import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { site, whatsappLink } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="paper">
      <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        {/* coluna esquerda: intro + contactos diretos */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-4">{dict.contact.eyebrow}</p>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl">
              {dict.contact.title}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {dict.contact.intro}
            </p>

            <div className="mt-10">
              <h2 className="eyebrow mb-4">{dict.contact.directTitle}</h2>
              <ul className="space-y-3.5 text-ink">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-3 transition-colors hover:text-terracotta-deep"
                  >
                    <Mail size={18} className="text-sage-deep" /> {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-colors hover:text-terracotta-deep"
                  >
                    <Phone size={18} className="text-sage-deep" /> {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-colors hover:text-terracotta-deep"
                  >
                    <Instagram size={18} className="text-sage-deep" /> @{site.instagram}
                  </a>
                </li>
                <li className="inline-flex items-center gap-3 text-muted">
                  <MapPin size={18} className="text-sage-deep" /> {site.location}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* coluna direita: formulário */}
        <Reveal delay={0.1}>
          <div className="rounded-xl2 border border-line bg-cream p-6 shadow-[0_28px_55px_-35px_rgba(64,55,47,0.4)] sm:p-9">
            <QuoteForm dict={dict} />
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
