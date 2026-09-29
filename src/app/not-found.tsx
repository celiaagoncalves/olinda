import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);
  return (
    <div className="paper flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <LogoMark size={52} />
      <p
        className="mt-8 text-7xl text-rose-soft"
        style={{ fontFamily: "var(--font-display)" }}
      >
        404
      </p>
      <h1 className="mt-2 text-2xl sm:text-3xl">{dict.notFound.title}</h1>
      <p className="mt-3 max-w-sm text-muted">{dict.notFound.body}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta-deep"
      >
        {dict.notFound.cta}
      </Link>
    </div>
  );
}
