"use server";

import { getDb } from "@/lib/db";

export type RsvpFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitRsvp(_prevState: RsvpFormState, formData: FormData): Promise<RsvpFormState> {
  const slug = String(formData.get("slug") ?? "").trim();
  const guestName = String(formData.get("guestName") ?? "").trim();
  const guestCount = Number.parseInt(String(formData.get("guestCount") ?? ""), 10);
  const message = String(formData.get("message") ?? "").trim();

  if (!slug || !guestName) {
    return { status: "error", message: "Preenche seu nome pra confirmar." };
  }
  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 20) {
    return { status: "error", message: "Quantidade de pessoas inválida." };
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO convite_moderno_rsvps (convite_slug, guest_name, guest_count, message)
      VALUES (${slug}, ${guestName}, ${guestCount}, ${message || null})
    `;
  } catch (err) {
    console.error("Erro ao salvar RSVP", err);
    return { status: "error", message: "Deu um erro aqui do nosso lado. Tenta de novo em instantes?" };
  }

  return { status: "success", message: "Presença confirmada! Já anotamos aqui 🎉" };
}

export type RsvpSummary = { families: number; people: number };

export async function getRsvpSummary(slug: string): Promise<RsvpSummary> {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT COUNT(*)::int AS families, COALESCE(SUM(guest_count), 0)::int AS people
      FROM convite_moderno_rsvps
      WHERE convite_slug = ${slug}
    `;
    const row = rows[0] as { families: number; people: number } | undefined;
    return { families: row?.families ?? 0, people: row?.people ?? 0 };
  } catch (err) {
    console.error("Erro ao buscar resumo de RSVP", err);
    return { families: 0, people: 0 };
  }
}
