import type { Metadata } from "next";
import { NovaHome } from "@/components/sections/NovaHome";

export const metadata: Metadata = {
  title: "Ace Lab — O ás do seu negócio",
  description:
    "Design, conteúdo, tráfego, foto, site e sistema. Tudo que o seu negócio precisa pra aparecer e vender, num lugar só.",
};

export default function Home() {
  return <NovaHome />;
}
