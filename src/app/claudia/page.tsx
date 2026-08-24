import type { Metadata } from "next";
import { ClaudiaHero } from "@/components/claudia/ClaudiaHero";
import { ClaudiaAbout } from "@/components/claudia/ClaudiaAbout";
import { ClaudiaFeatures } from "@/components/claudia/ClaudiaFeatures";
import { ClaudiaGallery } from "@/components/claudia/ClaudiaGallery";
import { ClaudiaCatTheme } from "@/components/claudia/ClaudiaCatTheme";
import { ClaudiaForm } from "@/components/claudia/ClaudiaForm";
import { ClaudiaFooter } from "@/components/claudia/ClaudiaFooter";

export const metadata: Metadata = {
  title: "Claudia — Plano de aula da semana pronto em minutos | Ace Lab",
  description:
    "Sistema feito sob medida pra professoras da rede municipal de São Paulo: gera o plano da semana a partir de um banco de temas curado e copia direto pro SGP. Sem IA paga.",
};

export default function ClaudiaPage() {
  return (
    <main>
      <ClaudiaHero />
      <ClaudiaAbout />
      <ClaudiaFeatures />
      <ClaudiaGallery />
      <ClaudiaCatTheme />
      <ClaudiaForm />
      <ClaudiaFooter />
    </main>
  );
}
