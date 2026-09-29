"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";

type FieldErrors = Partial<Record<"name" | "email" | "message", true>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-sage-deep focus:outline-none focus:ring-2 focus:ring-sage-deep/20";

function Label({
  htmlFor,
  children,
  required,
  requiredLabel,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  requiredLabel: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
      {required && (
        <span className="ml-1 text-xs font-normal text-muted">({requiredLabel})</span>
      )}
    </label>
  );
}

export default function QuoteForm({ dict }: { dict: Dictionary }) {
  const f = dict.contact.form;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const pieceType = String(data.get("pieceType") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const eventDate = String(data.get("eventDate") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = true;
    if (!emailRe.test(email)) nextErrors.email = true;
    if (message.length < 3) nextErrors.message = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Monta um email pré-preenchido com o pedido.
    const lines = [
      `${f.name}: ${name}`,
      `${f.email}: ${email}`,
      phone && `${f.phone}: ${phone}`,
      pieceType && `${f.pieceType}: ${pieceType}`,
      quantity && `${f.quantity}: ${quantity}`,
      eventDate && `${f.eventDate}: ${eventDate}`,
      "",
      `${f.message}:`,
      message,
    ].filter((line) => line !== "");

    const subject = `${dict.contact.title} — ${name}`;
    const body = lines.join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.location.href = mailto;
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl2 border border-sage/40 bg-sage-soft/30 px-6 py-14 text-center">
        <CheckCircle2 size={44} className="text-sage-deep" />
        <h3 className="text-2xl">{f.emailOpenedTitle}</h3>
        <p className="max-w-sm text-muted">
          {f.emailOpenedBody.replace("{email}", site.email)}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required requiredLabel={f.required}>
            {f.name}
          </Label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={f.namePlaceholder}
            className={fieldBase}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-terracotta-deep">{f.validationName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email" required requiredLabel={f.required}>
            {f.email}
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={f.emailPlaceholder}
            className={fieldBase}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-terracotta-deep">{f.validationEmail}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone" requiredLabel={f.required}>
            {f.phone}
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={f.phonePlaceholder}
            className={fieldBase}
          />
        </div>
        <div>
          <Label htmlFor="pieceType" requiredLabel={f.required}>
            {f.pieceType}
          </Label>
          <select
            id="pieceType"
            name="pieceType"
            aria-label={f.pieceType}
            className={fieldBase}
            defaultValue=""
          >
            <option value="" disabled>
              —
            </option>
            {Object.entries(f.pieceTypeOptions).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="quantity" requiredLabel={f.required}>
            {f.quantity}
          </Label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            placeholder={f.quantityPlaceholder}
            className={fieldBase}
          />
        </div>
        <div>
          <Label htmlFor="eventDate" requiredLabel={f.required}>
            {f.eventDate}
          </Label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            aria-label={f.eventDate}
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message" required requiredLabel={f.required}>
          {f.message}
        </Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={f.messagePlaceholder}
          className={`${fieldBase} resize-y`}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-terracotta-deep">{f.validationMessage}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {f.submit}
      </Button>
    </form>
  );
}
