import Image from "next/image";
import PieceArt from "./PieceArt";
import type { Piece } from "@/data/pieces";
import type { Locale } from "@/i18n/config";

export default function PieceCard({
  piece,
  locale,
}: {
  piece: Piece;
  locale: Locale;
}) {
  return (
    <figure className="group h-full overflow-hidden rounded-xl2 border border-line bg-cream">
      <div className="relative aspect-4/5 overflow-hidden">
        {piece.image ? (
          <Image
            src={piece.image}
            alt={piece.name[locale]}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
            <PieceArt kind={piece.art} tint={piece.tint} rounded={false} />
          </div>
        )}
      </div>
      <figcaption className="p-5">
        <h3 className="text-lg">{piece.name[locale]}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {piece.description[locale]}
        </p>
      </figcaption>
    </figure>
  );
}
