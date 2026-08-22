import { Star } from "../ui/Star";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import styles from "./About.module.css";

export function About() {
  return (
    <div className={`section diagonalCut ${styles.about}`}>
      <Star size={180} color="crimson" spin className={styles.spinStar} />
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <p className="eyebrow">quem somos</p>
            <h2 className={`h-display ${styles.heading}`}>
              Somos a parceria que senta do lado pra resolver junto.
            </h2>
            <p className={`bodyCopy ${styles.paragraph}`}>
              A Ace Lab nasceu de uma ideia simples: pequeno negócio também merece marca boa,
              estratégia de verdade e resultado que aparece.
            </p>
            <p className={`bodyCopy ${styles.paragraphLast}`}>
              São 3 anos trabalhando lado a lado com quem tá construindo algo — sem jargão, sem
              enrolação e sem tratar cliente como número.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Card tone="paper" star padding="lg">
            <p className={styles.quote}>Criatividade. Parceria. Personalização. Resultado.</p>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
