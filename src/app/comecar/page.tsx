import type { Metadata } from "next";
import { Funnel } from "@/components/funnel/Funnel";

export const metadata: Metadata = {
  title: "Vamos começar? — Ace Lab",
  description:
    "Conta pra gente sobre o seu negócio em poucos passos e a Ace Lab monta a melhor proposta pra você.",
};

export default function ComecarPage() {
  return <Funnel />;
}
