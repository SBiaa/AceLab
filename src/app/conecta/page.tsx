import type { Metadata } from "next";
import { ConectaHero } from "@/components/conecta/ConectaHero";
import { ConectaAbout } from "@/components/conecta/ConectaAbout";
import { ConectaRoles } from "@/components/conecta/ConectaRoles";
import { ConectaFeatures } from "@/components/conecta/ConectaFeatures";
import { ConectaGallery } from "@/components/conecta/ConectaGallery";
import { ConectaPhilosophy } from "@/components/conecta/ConectaPhilosophy";
import { ConectaCta } from "@/components/conecta/ConectaCta";
import { ConectaFooter } from "@/components/conecta/ConectaFooter";

export const metadata: Metadata = {
  title: "Conecta — Sistema de gestão para a Novo Millenium | Ace Lab",
  description:
    "Sistema feito sob medida pra Novo Millenium: matrículas, frequência, financeiro e saúde das associadas em um painel só, pensado pro público da melhor idade.",
};

export default function ConectaPage() {
  return (
    <main>
      <ConectaHero />
      <ConectaAbout />
      <ConectaRoles />
      <ConectaFeatures />
      <ConectaGallery />
      <ConectaPhilosophy />
      <ConectaCta />
      <ConectaFooter />
    </main>
  );
}
