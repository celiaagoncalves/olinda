"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PieceCard from "./PieceCard";
import { pieces } from "@/data/pieces";
import { categories, type CategoryKey } from "@/data/categories";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Filter = CategoryKey | "all";

export default function GalleryClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const searchParams = useSearchParams();
  const initial = searchParams.get("c");
  const validInitial: Filter =
    initial && categories.some((c) => c.key === initial)
      ? (initial as CategoryKey)
      : "all";

  const [filter, setFilter] = useState<Filter>(validInitial);

  const filtered = useMemo(
    () => (filter === "all" ? pieces : pieces.filter((p) => p.category === filter)),
    [filter]
  );

  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: dict.gallery.filterAll },
    ...categories.map((c) => ({
      key: c.key as Filter,
      label: dict.categories.items[c.key].name,
    })),
  ];

  return (
    <div>
      {/* filtros */}
      <div className="flex flex-wrap gap-2.5">
        {chips.map((chip) => {
          const active = chip.key === filter;
          return (
            <button
              key={chip.key}
              type="button"
              onClick={() => setFilter(chip.key)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                active
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-cream text-ink/80 hover:border-ink/40"
              }`}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      {/* grelha */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((piece) => (
            <motion.div
              key={piece.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PieceCard piece={piece} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
