import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";

const fraunces = Fraunces({
  variable: "--g-display",
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  variable: "--g-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ás no Google — Ace",
  description:
    "A Ace coloca seu negócio no mapa, faz o cliente deixar avaliação e te ajuda a ser escolhido. Tudo no seu nome.",
};

export default function GoogleLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${fraunces.variable} ${poppins.variable}`}>{children}</div>;
}
