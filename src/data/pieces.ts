import type { PieceKind, Tint } from "@/components/PieceArt";
import type { CategoryKey } from "./categories";

export type Piece = {
  id: string;
  category: CategoryKey;
  art: PieceKind;
  tint: Tint;
  /** Nome da peça em cada idioma. */
  name: { pt: string; en: string };
  /** Descrição curta em cada idioma. */
  description: { pt: string; en: string };
  /** Caminho opcional para foto real em /public (ex: "/pieces/caneca-flor.jpg"). */
  image?: string;
};

/**
 * Peças de exemplo para a galeria. Substituir/alargar com peças reais.
 * Para usar fotos, coloca a imagem em /public e preenche o campo `image`.
 */
export const pieces: Piece[] = [
  {
    id: "caneca-flor",
    category: "mugs",
    art: "mug",
    tint: "rose",
    name: { pt: "Caneca Flor", en: "Flower Mug" },
    description: {
      pt: "Caneca com motivo floral e o nome à escolha.",
      en: "Mug with a floral motif and the name of your choice.",
    },
  },
  {
    id: "caneca-tradicional",
    category: "mugs",
    art: "mug",
    tint: "sage",
    name: { pt: "Caneca Tradicional", en: "Traditional Mug" },
    description: {
      pt: "O traço de Conímbriga numa peça do dia a dia.",
      en: "The Conímbriga stroke on an everyday piece.",
    },
  },
  {
    id: "prato-conimbriga",
    category: "plates",
    art: "plate",
    tint: "sage",
    name: { pt: "Prato Conímbriga", en: "Conímbriga Plate" },
    description: {
      pt: "Prato decorativo pintado à mão, inspirado na tradição.",
      en: "Hand-painted decorative plate, inspired by tradition.",
    },
  },
  {
    id: "prato-moderno",
    category: "plates",
    art: "plate",
    tint: "rose",
    name: { pt: "Prato Sereno", en: "Serene Plate" },
    description: {
      pt: "Design contemporâneo com paleta suave.",
      en: "Contemporary design with a soft palette.",
    },
  },
  {
    id: "taca-mesa",
    category: "kitchen",
    art: "bowl",
    tint: "sand",
    name: { pt: "Taça de Mesa", en: "Table Bowl" },
    description: {
      pt: "Taça para servir, pintada à mão por dentro e por fora.",
      en: "Serving bowl, hand-painted inside and out.",
    },
  },
  {
    id: "jarro-agua",
    category: "kitchen",
    art: "vase",
    tint: "terracotta",
    name: { pt: "Jarro de Água", en: "Water Jug" },
    description: {
      pt: "Jarro elegante para a mesa ou para flores.",
      en: "An elegant jug for the table or for flowers.",
    },
  },
  {
    id: "conjunto-casamento",
    category: "events",
    art: "set",
    tint: "terracotta",
    name: { pt: "Conjunto Casamento", en: "Wedding Set" },
    description: {
      pt: "Conjunto de pratos coordenado para o grande dia.",
      en: "A coordinated plate set for the big day.",
    },
  },
  {
    id: "lembrancas-evento",
    category: "events",
    art: "plate",
    tint: "rose",
    name: { pt: "Lembranças de Evento", en: "Event Keepsakes" },
    description: {
      pt: "Pequenas peças personalizadas para oferecer aos convidados.",
      en: "Small personalised pieces to gift your guests.",
    },
  },
  {
    id: "taca-conimbriga",
    category: "kitchen",
    art: "bowl",
    tint: "sage",
    name: { pt: "Taça Conímbriga", en: "Conímbriga Bowl" },
    description: {
      pt: "Motivos tradicionais numa taça de uso diário.",
      en: "Traditional motifs on an everyday bowl.",
    },
  },
];
