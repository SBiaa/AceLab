import type { Metadata } from "next";
import { IsadoraHero } from "@/components/isadora/IsadoraHero";
import { IsadoraDetails } from "@/components/isadora/IsadoraDetails";
import { IsadoraGallery } from "@/components/isadora/IsadoraGallery";
import { IsadoraGifts } from "@/components/isadora/IsadoraGifts";
import { IsadoraRSVP } from "@/components/isadora/IsadoraRSVP";
import { IsadoraFooter } from "@/components/isadora/IsadoraFooter";

export const metadata: Metadata = {
  title: "Isadora vai fazer 3 aninhos! 🐻👧",
  description: "Convite de aniversário da Isadora — tema Masha e o Urso. 26 de dezembro de 2026, às 16h30, em Ferraz de Vasconcelos.",
};

export default function IsadoraPage() {
  return (
    <main>
      <IsadoraHero />
      <IsadoraDetails />
      <IsadoraGallery />
      <IsadoraGifts />
      <IsadoraRSVP />
      <IsadoraFooter />
    </main>
  );
}
