import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { SocialMediaHero } from "@/components/sections/SocialMediaHero";
import { Plans } from "@/components/sections/Plans";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Planos de social media — Ace Lab",
  description:
    "Gestão de redes sociais com estratégia: Instagram, Facebook, Google Meu Negócio e WhatsApp Business. Planos a partir de R$ 500/mês.",
};

export default function SocialMediaPage() {
  return (
    <>
      <Header />
      <main>
        <SocialMediaHero />
        <Plans />
        <HowItWorks />
        <Faq />
        <CtaFinal />
        <Footer />
      </main>
    </>
  );
}
