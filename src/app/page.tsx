"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

/**
 * A raiz do site redireciona para o idioma por defeito (português).
 * Como o site é estático (GitHub Pages), o redirecionamento é feito no
 * navegador. O useRouter e o Link respeitam automaticamente o basePath.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <Link
        href={`/${defaultLocale}`}
        className="text-muted underline underline-offset-4"
      >
        Olinda
      </Link>
    </div>
  );
}
