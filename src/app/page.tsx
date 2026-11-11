import type { Metadata } from "next";
import { OficialHome } from "@/components/home/OficialHome";

export const metadata: Metadata = {
  title: "Ace — O ás do seu negócio",
  description:
    "Design, conteúdo, tráfego, foto, site e sistema. Tudo que o seu negócio precisa pra aparecer e vender, num lugar só.",
};

export default function Home() {
  return <OficialHome />;
}
