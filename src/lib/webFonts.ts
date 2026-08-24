import { Baloo_2, Fredoka, Inter, Nunito } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
const baloo2 = Baloo_2({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

/**
 * Client brand fonts available to briefing pages. next/font/google requires
 * static imports, so add new fonts here (and reference the name in briefings.ts)
 * when a future briefing uses a font not yet listed.
 */
export const webFonts: Record<string, { className: string }> = {
  Fredoka: fredoka,
  Nunito: nunito,
  "Baloo 2": baloo2,
  Inter: inter,
};
