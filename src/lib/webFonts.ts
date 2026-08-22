import { Fredoka, Nunito } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

/**
 * Client brand fonts available to briefing pages. next/font/google requires
 * static imports, so add new fonts here (and reference the name in briefings.ts)
 * when a future briefing uses a font not yet listed.
 */
export const webFonts: Record<string, { className: string }> = {
  Fredoka: fredoka,
  Nunito: nunito,
};
