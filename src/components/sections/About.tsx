import { Star } from "../ui/Star";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import styles from "./About.module.css";

const AMBIENT_STARS = [
  { size: 10, top: "18%", left: "6%", opacity: 0.3, duration: 9, driftX: 8, driftY: -8 },
  { size: 14, bottom: "22%", left: "14%", opacity: 0.22, duration: 11, delay: 1.2, driftX: -8, driftY: 6 },
];

export function About() {
  return (
    <div className={`section diagonalCut grain ${styles.about}`}>
      <StarField stars={AMBIENT_STARS} />
      <Star size={180} color="crimson" spin className={styles.spinStar} />
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <p className="eyebrow" style={{ color: "var(--crimson-300)" }}>
              quem somos
            </p>
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
