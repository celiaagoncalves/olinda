"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

/** Troca o prefixo de idioma no caminho atual, mantendo a mesma página. */
function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  // segments[0] é "" (antes da primeira barra), segments[1] é o locale
  if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  }
  return `/${target}`;
}

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale, i) => {
        const active = locale === current;
        return (
          <span key={locale} className="flex items-center">
            {i > 0 && <span className="mx-1 text-line">/</span>}
            <Link
              href={swapLocale(pathname, locale)}
              aria-current={active ? "true" : undefined}
              className={`uppercase tracking-wide transition-colors ${
                active
                  ? "text-ink font-medium"
                  : "text-muted hover:text-ink"
              }`}
            >
              {locale}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
