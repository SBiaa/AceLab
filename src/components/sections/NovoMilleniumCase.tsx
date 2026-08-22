import { Fredoka, Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "./NovoMilleniumCase.module.css";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

const palette = [
  { name: "Ink 900", hex: "#0b1620" },
  { name: "Navy 700", hex: "#0f3245" },
  { name: "Teal 600", hex: "#136f83" },
  { name: "Teal 400", hex: "#2bb5b9" },
  { name: "Sun 500", hex: "#f5a623" },
  { name: "Coral 500", hex: "#f0397a" },
  { name: "Sky 500", hex: "#2f8fe0" },
  { name: "Marquee Red", hex: "#a01f2d" },
];

const subBrands = [
  { src: "/images/work/novo-millenium/logo-hidro-full.png", label: "Viva Bem com Hidro" },
  { src: "/images/work/novo-millenium/logo-corpo-em-movimento.png", label: "Corpo em Movimento" },
  { src: "/images/work/novo-millenium/logo-cinema-no-bairro.png", label: "Cinema no Bairro" },
  { src: "/images/work/novo-millenium/logo-podcast-millenium.png", label: "Podcast do Millenium" },
];

export function NovoMilleniumCase() {
  return (
    <div className={styles.wrap}>
      <div className={styles.cover}>
        <Image
          src="/images/work/novo-millenium/logo-novo-millenium.png"
          alt="Novo Millenium"
          width={2230}
          height={652}
          className={styles.coverLogo}
        />
      </div>

      <p className={`eyebrow ${styles.eyebrow}`}>branding</p>
      <h3 className={styles.title}>Manual de identidade — Novo Millenium</h3>
      <p className={styles.subtitle}>
        Diretrizes visuais e de voz para todos os polos da marca guarda-chuva — Hidro, Corpo em Movimento,
        Cinema no Bairro e Podcast do Millenium.
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
            <span className={styles.typeSampleName}>Fredoka — títulos</span>
            <span className={`${styles.typeDisplay} ${fredoka.className}`}>Novo Millenium</span>
          </div>
          <div className={styles.typeSample}>
            <span className={styles.typeSampleName}>Nunito — corpo de texto</span>
            <span className={`${styles.typeBody} ${nunito.className}`}>
              Diretrizes visuais e de voz para todos os polos.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>Submarcas</p>
        <div className={styles.subBrands}>
          {subBrands.map((brand) => (
            <div key={brand.src} className={styles.subBrand}>
              <Image
                src={brand.src}
                alt={brand.label}
                width={160}
                height={160}
                className={styles.subBrandLogo}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <Link href="/trabalhos/novo-millenium" className={styles.ctaButton}>
          Ver manual completo →
        </Link>
      </div>
    </div>
  );
}
