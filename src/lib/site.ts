/**
 * Dados da marca e contactos. Edita aqui os valores reais quando os tiveres.
 */
export const site = {
  name: "Olinda",
  email: "ola@olinda.pt",
  phone: "+351 912 345 678",
  // Só os dígitos (com indicativo do país) para o link do WhatsApp:
  whatsapp: "351912345678",
  instagram: "olinda.ceramica",
  instagramUrl: "https://instagram.com/olinda.ceramica",
  location: "Coimbra, Portugal",
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
