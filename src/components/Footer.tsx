import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import Container from "./ui/Container";
import { hrefFor, navOrder } from "@/lib/nav";
import { site, whatsappLink } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-line bg-sand">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-muted">{site.location}</p>
          </div>

          {/* explorar */}
          <div>
            <h3 className="eyebrow mb-4">{dict.footer.explore}</h3>
            <ul className="space-y-2.5 text-sm">
              {navOrder.map((key) => (
                <li key={key}>
                  <Link
                    href={hrefFor(locale, key)}
                    className="text-ink/80 transition-colors hover:text-terracotta-deep"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contacto */}
          <div>
            <h3 className="eyebrow mb-4">{dict.footer.contact}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-terracotta-deep"
                >
                  <Mail size={15} /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-terracotta-deep"
                >
                  <Phone size={15} /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-terracotta-deep"
                >
                  <Instagram size={15} /> @{site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </Container>
    </footer>
  );
}
