import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

/** Slug estável de cada página (igual em todos os idiomas). */
export const routes = {
  home: "",
  about: "sobre",
  gallery: "pecas",
  custom: "personalizar",
  contact: "contacto",
} as const;

export type RouteKey = keyof typeof routes;

/** Constrói o href com prefixo de idioma, ex: hrefFor("pt", "gallery") -> "/pt/pecas". */
export function hrefFor(locale: Locale, key: RouteKey): string {
  const slug = routes[key];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/** Ordem dos itens no menu principal. */
export const navOrder: RouteKey[] = ["about", "gallery", "custom", "contact"];

export function navLabel(dict: Dictionary, key: RouteKey): string {
  return dict.nav[key];
}
