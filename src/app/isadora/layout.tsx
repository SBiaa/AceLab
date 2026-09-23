import { Baloo_2, Quicksand } from "next/font/google";
import "./isadora-tokens.css";

const baloo2 = Baloo_2({
  variable: "--isadora-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--isadora-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function IsadoraLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${baloo2.variable} ${quicksand.variable} isadoraRoot`}>{children}</div>;
}
