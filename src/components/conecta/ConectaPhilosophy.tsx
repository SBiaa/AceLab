import { ConectaBadge } from "./ui/ConectaBadge";
import { Reveal } from "../ui/Reveal";
import { HeartIcon } from "../ui/icons";
import styles from "./ConectaPhilosophy.module.css";

const highlights = [
  "IMC com selo cinza, não colorido — a faixa é descrita como \"abaixo/dentro/acima da referência\", sem termos como \"sobrepeso\" ou \"obesidade\".",
  "Ganhar peso é tratado como tão normal quanto perder: as duas direções são ditas do mesmo jeito, sem adjetivo em cima de nenhuma.",
  "Aviso de privacidade transparente: a associada sabe exatamente quem vê seus dados de saúde e por quê — ela, a professora da turma e a coordenação.",
];

export function ConectaPhilosophy() {
  return (
    <div className={styles.wrap}>
      <div className={styles.circle} aria-hidden="true" />
      <div className={styles.circleSmall} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <ConectaBadge tone="onBrand" star className={styles.badge}>
            O diferencial
          </ConectaBadge>
          <h2 className={styles.heading}>Acompanhar saúde sem julgar o corpo.</h2>
          <p className={styles.paragraph}>
            O público da Novo Millenium é majoritariamente idoso, e isso guiou decisões concretas
            de produto — não só de texto. Faixas de valor largas nos formulários de saúde pegam
            erro de digitação, nunca restringem o corpo de quem está registrando.
          </p>
          <div className={styles.list}>
            {highlights.map((text) => (
              <div className={styles.listItem} key={text}>
                <HeartIcon width={18} height={18} style={{ flex: "none", marginTop: 2, color: "#fff" }} />
                <p className={styles.listText}>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15} className={styles.visual}>
          <HeartIcon width={110} height={110} className={styles.heartIcon} />
          <p className={styles.visualLabel}>Prints da tela de saúde em breve ↓</p>
        </Reveal>
      </div>
    </div>
  );
}
