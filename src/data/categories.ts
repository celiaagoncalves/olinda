import type { PieceKind, Tint } from "@/components/PieceArt";

/** Chave de categoria — corresponde às traduções em dict.categories.items. */
export type CategoryKey = "mugs" | "plates" | "kitchen" | "events";

export type Category = {
  key: CategoryKey;
  art: PieceKind;
  tint: Tint;
};

export const categories: Category[] = [
  { key: "mugs", art: "mug", tint: "rose" },
  { key: "plates", art: "plate", tint: "sage" },
  { key: "kitchen", art: "bowl", tint: "sand" },
  { key: "events", art: "set", tint: "terracotta" },
];
