import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { isadoraGiftIdeas, isadoraSizes } from "@/lib/isadora-data";
import styles from "./IsadoraGifts.module.css";

export function IsadoraGifts() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>Quer dar um presente? 🎁</h2>
          <p className={styles.intro}>
            Sua presença já é o maior presente! Mas se quiser mimar a aniversariante, separamos os
            tamanhos dela e algumas ideias por categoria.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className={styles.sizesCard}>
            <div className={styles.sizeItem}>
              <span className={styles.sizeIcon} aria-hidden="true">
                👟
              </span>
              <span>
                <span className={styles.sizeLabel}>Calçado</span>
                <span className={styles.sizeValue}>{isadoraSizes.shoeSize ?? "em breve"}</span>
              </span>
            </div>
            <div className={styles.sizeItem}>
              <span className={styles.sizeIcon} aria-hidden="true">
                👕
              </span>
              <span>
                <span className={styles.sizeLabel}>Roupa</span>
                <span className={styles.sizeValue}>{isadoraSizes.clothingSize ?? "em breve"}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <RevealGroup className={styles.grid}>
          {isadoraGiftIdeas.map((idea) => (
            <RevealItem key={idea.title}>
              <div className={styles.card}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {idea.icon}
                </span>
                <p className={styles.cardTitle}>{idea.title}</p>
                <p className={styles.cardExamples}>{idea.examples}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className={styles.note}>São só sugestões — o que vier com carinho já vai ser perfeito!</p>
      </div>
    </div>
  );
}
