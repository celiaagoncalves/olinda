"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { hrefFor, navOrder } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between py-4">
          <Link href={hrefFor(locale, "home")} aria-label="Olinda" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* nav desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navOrder.map((key) => (
              <Link
                key={key}
                href={hrefFor(locale, key)}
                className="text-sm text-ink/80 transition-colors hover:text-terracotta-deep"
              >
                {dict.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <LanguageSwitcher current={locale} />
            <ButtonLink href={hrefFor(locale, "contact")} size="md">
              {dict.common.requestQuote}
            </ButtonLink>
          </div>

          {/* toggle mobile */}
          <button
            type="button"
            className="md:hidden -mr-1 p-2 text-ink"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* painel mobile */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-cream animate-[reveal-up_0.3s_var(--ease-soft)]">
          <Container className="flex h-full flex-col py-8">
            <nav className="flex flex-col gap-1">
              {navOrder.map((key) => (
                <Link
                  key={key}
                  href={hrefFor(locale, key)}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-4 text-2xl text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {dict.nav[key]}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex items-center justify-between">
              <LanguageSwitcher current={locale} />
              <ButtonLink
                href={hrefFor(locale, "contact")}
                size="lg"
                onClick={() => setOpen(false)}
              >
                {dict.common.requestQuote}
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
