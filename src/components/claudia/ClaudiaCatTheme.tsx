import { ClaudiaBadge } from "./ui/ClaudiaBadge";
import { Reveal } from "../ui/Reveal";
import { CatIcon } from "../ui/icons";
import styles from "./ClaudiaCatTheme.module.css";

const highlights = [
  "Mascote pixel-art (estilo oneko) andando pela tela — some quando você não tá usando o mouse.",
  "Paleta e ícones mais lúdicos, sem perder a organização do app original.",
  "Ativa e desativa no perfil a qualquer momento, sem afetar nenhum dado da grade.",
];

export function ClaudiaCatTheme() {
  return (
    <div className={styles.wrap}>
      <div className={styles.circle} aria-hidden="true" />
      <div className={styles.circleSmall} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <ClaudiaBadge tone="onBrand" star className={styles.badge}>
            O diferencial
          </ClaudiaBadge>
          <h2 className={styles.heading}>Tem até tema de gatinho.</h2>
          <p className={styles.paragraph}>
            Além do visual padrão &ldquo;Ace&rdquo;, a Claudia tem um modo alternativo mais lúdico —
            pensado pra deixar o dia a dia de planejar aula um pouco mais leve. Muda a paleta, os ícones
            e ganha um mascote de gato que anda pela tela.
          </p>
          <div className={styles.list}>
            {highlights.map((text) => (
              <div className={styles.listItem} key={text}>
                <CatIcon width={18} height={18} style={{ flex: "none", marginTop: 2, color: "#fff" }} />
                <p className={styles.listText}>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15} className={styles.visual}>
          <CatIcon width={110} height={110} className={styles.catIcon} />
          <p className={styles.visualLabel}>Prints do tema Gatinho em breve ↓</p>
        </Reveal>
      </div>
    </div>
  );
}
