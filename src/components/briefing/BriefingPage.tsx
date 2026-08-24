import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Briefing } from "@/lib/briefings";
import { webFonts } from "@/lib/webFonts";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { Logo } from "../ui/Logo";
import { Reveal } from "../ui/Reveal";
import {
  CatIcon,
  FilmIcon,
  FlagIcon,
  HeartIcon,
  ImageIcon,
  LayersIcon,
  MicIcon,
  PenIcon,
  ShirtIcon,
  SunIcon,
  TargetIcon,
  TrophyIcon,
  UsersIcon,
  WavesIcon,
} from "../ui/icons";
import styles from "./BriefingPage.module.css";

const ICONS = {
  heart: HeartIcon,
  users: UsersIcon,
  waves: WavesIcon,
  film: FilmIcon,
  mic: MicIcon,
  sun: SunIcon,
  image: ImageIcon,
  shirt: ShirtIcon,
  flag: FlagIcon,
  layers: LayersIcon,
  target: TargetIcon,
  trophy: TrophyIcon,
  cat: CatIcon,
  pen: PenIcon,
};

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

export function BriefingPage({ briefing }: { briefing: Briefing }) {
  const [c1, c2, c3] = briefing.coverGradient;
  const coverGradient = `linear-gradient(135deg, ${c1} 0%, ${c2} 45%, ${c3} 100%)`;
  const displayFont = webFonts[briefing.typography.displayFont];
  const bodyFont = webFonts[briefing.typography.bodyFont];

  return (
    <main>
      <div className={styles.topbar}>
        <Logo height={26} />
        <Link href="/#portfolio" className={styles.backLink}>
          ← Voltar ao site
        </Link>
      </div>

      <Reveal>
        <div className={styles.hero} style={{ background: coverGradient }}>
          <p className={styles.heroEyebrow}>{briefing.eyebrow}</p>
          <h1 className={styles.heroTitle}>{briefing.title}</h1>
          <p className={styles.heroTagline}>{briefing.tagline}</p>
          <div className={styles.heroMeta}>
            <div>
              <div className={styles.heroMetaLabel}>Ano</div>
              <div className={styles.heroMetaValue}>{briefing.year}</div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Introdução</SectionTitle>
            <div className={styles.aboutGrid}>
              <div>
                <div className={styles.aboutBlock}>
                  <div className={styles.aboutLabel}>Sobre</div>
                  <p className={styles.aboutText}>{briefing.about}</p>
                </div>
                <div className={styles.aboutBlock}>
                  <div className={styles.aboutLabel}>Missão</div>
                  <p className={styles.aboutText}>{briefing.mission}</p>
                </div>
              </div>
              <div>
                <div className={styles.aboutLabel}>Como falamos</div>
                <div className={styles.voicePills}>
                  {briefing.voiceWords.map((word) => (
                    <span key={word} className={styles.voicePill}>
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Logotipo</SectionTitle>
            <div className={styles.logoGrid}>
              <div className={`${styles.logoCard} ${styles.logoCardLight}`}>
                <Image
                  src={briefing.coverLogo}
                  alt={`Logotipo ${briefing.clientName}`}
                  width={260}
                  height={80}
                  className={styles.logoCardImg}
                />
                <div className={`${styles.logoCardTitle} ${styles.logoCardTitleLight}`}>Versão principal</div>
                <p className={styles.logoCardNote}>Sobre fundo claro. Uso padrão em todos os materiais.</p>
              </div>
              <div className={`${styles.logoCard} ${styles.logoCardDark}`}>
                <Image
                  src={briefing.coverLogo}
                  alt={`Logotipo ${briefing.clientName} sobre fundo escuro`}
                  width={260}
                  height={80}
                  className={styles.logoCardImg}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <div className={`${styles.logoCardTitle} ${styles.logoCardTitleDark}`}>Sobre fundo escuro</div>
                <p className={`${styles.logoCardNote} ${styles.logoCardNoteDark}`}>Versão em branco sobre fundos escuros ou fotografias.</p>
              </div>
              <div className={`${styles.logoCard} ${styles.logoCardLight}`}>
                <div className={styles.protectionBox}>
                  <Image
                    src={briefing.coverLogo}
                    alt={`Área de proteção do logotipo ${briefing.clientName}`}
                    width={180}
                    height={56}
                    className={styles.logoCardImg}
                  />
                </div>
                <div className={`${styles.logoCardTitle} ${styles.logoCardTitleLight}`}>Área de proteção</div>
                <p className={styles.logoCardNote}>Respiro mínimo ao redor do logotipo.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Cores da marca</SectionTitle>
            <div className={styles.paletteGrid}>
              {briefing.palette.map((color) => (
                <div key={color.hex} className={styles.swatch}>
                  <div className={styles.swatchColor} style={{ background: color.hex }} />
                  <div className={styles.swatchBody}>
                    <p className={styles.swatchName}>{color.name}</p>
                    <p className={styles.swatchNote}>
                      {color.hex} — {color.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Tipografia</SectionTitle>
            <div className={styles.typeGrid}>
              <div>
                <div className={styles.typeLabel}>Display · {briefing.typography.displayFont}</div>
                <div className={`${styles.typeSample} ${displayFont?.className ?? ""}`}>
                  {briefing.typography.displaySample}
                </div>
                <p className={styles.typeNote}>{briefing.typography.displayNote}</p>
              </div>
              <div>
                <div className={styles.typeLabel}>Corpo · {briefing.typography.bodyFont}</div>
                <div className={`${styles.typeSample} ${bodyFont?.className ?? ""}`} style={{ fontWeight: 700 }}>
                  {briefing.typography.bodySample}
                </div>
                <p className={styles.typeNote}>{briefing.typography.bodyNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Ícones</SectionTitle>
            <div className={styles.iconGrid}>
              {briefing.icons.map((item) => {
                const IconComp = ICONS[item.icon];
                return (
                  <div key={item.label} className={styles.iconCard}>
                    <IconComp width={40} height={40} style={{ color: briefing.accentColor }} />
                    <span className={styles.iconCardLabel}>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Padrão gráfico</SectionTitle>
            <p className={styles.sectionLead}>{briefing.pattern}</p>
            <div className={styles.patternGrid}>
              <div
                className={styles.patternBlock}
                style={{
                  backgroundColor: "var(--surface-subtle)",
                  backgroundImage: `radial-gradient(${briefing.palette[1]?.hex ?? "#136f83"} 3px, transparent 3px)`,
                  backgroundSize: "28px 28px",
                }}
              />
              <div
                className={styles.patternBlock}
                style={{
                  background: `repeating-linear-gradient(115deg, ${briefing.coverGradient[1]} 0 22px, ${briefing.coverGradient[2]} 22px 44px)`,
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>{briefing.subBrandsTitle ?? "Os polos"}</SectionTitle>
          </Reveal>
          <div className={styles.subBrandGrid}>
            {briefing.subBrands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.08}>
                <div className={styles.subBrandCard}>
                  <div
                    className={styles.subBrandLogoWrap}
                    style={{ background: `linear-gradient(160deg, ${brand.gradientFrom}, ${brand.gradientTo})` }}
                  >
                    <div className={styles.subBrandLogoInner}>
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={brand.logoWidth}
                        height={brand.logoWidth}
                        className={styles.subBrandLogoImg}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={styles.subBrandTag} style={{ color: brand.accent }}>
                      {brand.tag}
                    </div>
                    <h3 className={styles.subBrandName}>{brand.name}</h3>
                    <p className={styles.subBrandDesc}>{brand.description}</p>
                    <div className={styles.subBrandColorRow}>
                      <span className={styles.subBrandDot} style={{ background: brand.accent }} />
                      <span className={styles.subBrandColorNote}>{brand.colorNote}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <Reveal>
            <SectionTitle>Aplicações</SectionTitle>
            <div className={styles.appGrid}>
              {briefing.applications.map((app) => {
                const IconComp = ICONS[app.icon];
                return (
                  <div key={app.label}>
                    <ImagePlaceholder
                      tone="paper"
                      label=""
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <p className={styles.appLabel}>
                      <IconComp width={16} height={16} style={{ verticalAlign: "-3px", marginRight: 6 }} />
                      {app.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className={styles.closing} style={{ background: coverGradient }}>
          <h2 className={styles.closingTitle}>Obrigado</h2>
          <p className={styles.closingMessage}>{briefing.closingMessage}</p>
          <p className={styles.closingContact}>
            {briefing.contactEmail} · {briefing.contactHandle}
          </p>
        </div>
      </Reveal>
    </main>
  );
}
