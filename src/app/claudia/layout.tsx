import { Baloo_2, Inter } from "next/font/google";
import "./claudia-tokens.css";

const baloo2 = Baloo_2({
  variable: "--claudia-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--claudia-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ClaudiaLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${baloo2.variable} ${inter.variable} claudiaRoot`}>{children}</div>;
}
