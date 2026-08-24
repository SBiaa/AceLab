import { Baloo_2, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "./ClaudiaCase.module.css";

const baloo2 = Baloo_2({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const palette = [
  { name: "Laranja 500", hex: "#F7941D" },
  { name: "Índigo 500", hex: "#5B4FC7" },
  { name: "Amarelo 500", hex: "#FFD23F" },
  { name: "Teal 500", hex: "#2FB6A6" },
  { name: "Ink 900", hex: "#221B12" },
  { name: "Paper 50", hex: "#FFFBF3" },
];

const themes = [
  { src: "/images/claudia/logo-mark.svg", label: "Tema Ace" },
  { src: "/images/claudia/logo-mark.svg", label: "Tema Gatinho" },
];

export function ClaudiaCase() {
  return (
    <div className={styles.wrap}>
      <div className={styles.cover}>
        <Image
          src="/images/claudia/logo-horizontal.svg"
          alt="Claudia"
          width={720}
          height={200}
          className={styles.coverLogo}
        />
      </div>

      <p className={`eyebrow ${styles.eyebrow}`}>branding</p>
      <h3 className={styles.title}>Manual de identidade — Claudia</h3>
      <p className={styles.subtitle}>
        Sistema visual completo pra uma plataforma que ajuda professoras a montar o plano de aula
        da semana em minutos — sem gastar hora com IA paga.
      </p>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>Cores da marca</p>
        <div className={styles.palette}>
          {palette.map((color) => (
            <div key={color.hex} className={styles.swatch}>
              <div className={styles.swatchColor} style={{ background: color.hex }} />
              <span className={styles.swatchLabel}>
                {color.name}
                <br />
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>Tipografia</p>
        <div className={styles.type}>
          <div className={styles.typeSample}>
            <span className={styles.typeSampleName}>Baloo 2 — títulos</span>
            <span className={`${styles.typeDisplay} ${baloo2.className}`}>Claudia</span>
          </div>
          <div className={styles.typeSample}>
            <span className={styles.typeSampleName}>Inter — corpo de texto</span>
            <span className={`${styles.typeBody} ${inter.className}`}>
              Planos de aula prontos em minutos, não horas.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>Temas visuais</p>
        <div className={styles.subBrands}>
          {themes.map((theme) => (
            <div key={theme.label} className={styles.subBrand}>
              <Image
                src={theme.src}
                alt={theme.label}
                width={120}
                height={120}
                className={styles.subBrandLogo}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <Link href="/trabalhos/claudia" className={styles.ctaButton}>
          Ver manual completo →
        </Link>
      </div>
    </div>
  );
}
