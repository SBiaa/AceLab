"use server";

import { getDb } from "@/lib/db";

export type ClaudiaFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitClaudiaLead(
  _prevState: ClaudiaFormState,
  formData: FormData
): Promise<ClaudiaFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const grades = formData.getAll("grades").map(String);
  const wantsCustomTheme = formData.get("wantsCustomTheme") === "yes";
  const customThemeIdea = String(formData.get("customThemeIdea") ?? "").trim();

  if (!name || !phone || !email) {
    return { status: "error", message: "Preenche nome, telefone e email pra gente conseguir te chamar." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Esse email não parece válido — confere de novo?" };
  }
  if (grades.length === 0) {
    return { status: "error", message: "Escolhe pelo menos um ano em que você dá aula." };
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO claudia_leads (name, phone, email, grades, wants_custom_theme, custom_theme_idea)
      VALUES (${name}, ${phone}, ${email}, ${grades}, ${wantsCustomTheme}, ${
      wantsCustomTheme && customThemeIdea ? customThemeIdea : null
    })
    `;
  } catch (err) {
    console.error("Erro ao salvar lead da Claudia", err);
    return { status: "error", message: "Deu um erro aqui do nosso lado. Tenta de novo em instantes?" };
  }

  return {
    status: "success",
    message: "Recebemos seu cadastro! Em breve a gente te chama pra você testar a Claudia.",
  };
}
