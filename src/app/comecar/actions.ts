"use server";

import { getDb } from "@/lib/db";
import {
  brandOptions,
  budgetOptions,
  experienceOptions,
  goalOptions,
  graphicProductOptions,
  instagramOptions,
  serviceOptions,
  siteOptions,
  timelineOptions,
  GRAPHIC_SERVICES,
  type FunnelAnswers,
  type Option,
} from "@/lib/funnel-data";

export type SaveStepResult =
  | { ok: true; leadId: string }
  | { ok: false; message: string };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);
const choice = (v: unknown, options: Option[]) => {
  const value = String(v ?? "");
  return options.some((o) => o.value === value) ? value : null;
};
const choices = (v: unknown, options: Option[]) => {
  const allowed = new Set(options.map((o) => o.value));
  return Array.isArray(v) ? [...new Set(v.map(String))].filter((x) => allowed.has(x)) : [];
};

export async function saveFunnelStep(
  leadId: string | null,
  step: number,
  answers: FunnelAnswers,
  finish = false
): Promise<SaveStepResult> {
  const name = text(answers.name, 120);
  const phone = text(answers.phone, 40);
  const email = text(answers.email, 160);

  if (!name || !phone || !email) {
    return { ok: false, message: "Preenche nome, WhatsApp e email pra gente conseguir te chamar." };
  }
  if (!EMAIL.test(email)) {
    return { ok: false, message: "Esse email não parece válido — confere de novo?" };
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return { ok: false, message: "Esse telefone parece incompleto. Põe com DDD, tá?" };
  }
  if (leadId !== null && !UUID.test(leadId)) {
    return { ok: false, message: "Não consegui retomar seu cadastro. Recarrega a página e tenta de novo." };
  }

  const services = choices(answers.services, serviceOptions);
  const wantsGraphic = services.some((s) => GRAPHIC_SERVICES.includes(s));

  const row = {
    business_name: text(answers.businessName, 160) || null,
    business_segment: text(answers.businessSegment, 160) || null,
    has_site: choice(answers.hasSite, siteOptions),
    site_url: text(answers.siteUrl, 300) || null,
    instagram: choice(answers.instagram, instagramOptions),
    instagram_handle: text(answers.instagramHandle, 80) || null,
    brand_status: choice(answers.brandStatus, brandOptions),
    experience: choice(answers.experience, experienceOptions),
    graphic_products: wantsGraphic ? choices(answers.graphicProducts, graphicProductOptions) : [],
    references_text: wantsGraphic ? text(answers.references, 2000) || null : null,
    style_notes: wantsGraphic ? text(answers.styleNotes, 1000) || null : null,
    goal: choice(answers.goal, goalOptions),
    timeline: choice(answers.timeline, timelineOptions),
    budget: choice(answers.budget, budgetOptions),
    notes: text(answers.notes, 2000) || null,
  };
  const lastStep = Math.max(1, Math.min(5, Math.floor(step) || 1));
  const status = finish ? "concluido" : "em_andamento";

  try {
    const sql = getDb();

    if (leadId === null) {
      const rows = await sql`
        INSERT INTO funnel_leads (name, phone, email, last_step, status)
        VALUES (${name}, ${phone}, ${email}, ${lastStep}, ${status})
        RETURNING id
      `;
      leadId = rows[0].id as string;
    }

    const updated = await sql`
      UPDATE funnel_leads SET
        updated_at = now(),
        status = CASE WHEN status = 'concluido' THEN status ELSE ${status} END,
        last_step = GREATEST(last_step, ${lastStep}),
        name = ${name}, phone = ${phone}, email = ${email},
        business_name = ${row.business_name}, business_segment = ${row.business_segment},
        has_site = ${row.has_site}, site_url = ${row.site_url},
        instagram = ${row.instagram}, instagram_handle = ${row.instagram_handle},
        brand_status = ${row.brand_status}, experience = ${row.experience},
        services = ${services}, graphic_products = ${row.graphic_products},
        references_text = ${row.references_text}, style_notes = ${row.style_notes},
        goal = ${row.goal}, timeline = ${row.timeline}, budget = ${row.budget},
        notes = ${row.notes}
      WHERE id = ${leadId}
      RETURNING id
    `;
    if (updated.length === 0) {
      return { ok: false, message: "Não encontrei seu cadastro. Recarrega a página e tenta de novo." };
    }
  } catch (err) {
    console.error("Erro ao salvar etapa do funil", err);
    return { ok: false, message: "Deu um erro aqui do nosso lado. Tenta de novo em instantes?" };
  }

  return { ok: true, leadId };
}
