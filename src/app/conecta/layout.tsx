import { Fredoka, Nunito } from "next/font/google";
import "./conecta-tokens.css";

const fredoka = Fredoka({
  variable: "--conecta-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--conecta-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ConectaLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${fredoka.variable} ${nunito.variable} conectaRoot`}>{children}</div>;
}
