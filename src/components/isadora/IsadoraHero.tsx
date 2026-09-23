import { Reveal } from "../ui/Reveal";
import { BearSoldierIcon } from "./BearSoldierIcon";
import { isadoraEvent } from "@/lib/isadora-data";
import styles from "./IsadoraHero.module.css";

const buntingColors = ["#c1473a", "#e8c765", "#55703a", "#c1473a", "#e8c765", "#55703a", "#c1473a"];

export function IsadoraHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.buntingRow} aria-hidden="true">
        {buntingColors.map((color, i) => (
          <span key={i} className={styles.bunting} style={{ background: color }} />
        ))}
      </div>

      <Reveal>
        <span className={styles.badge}>🥁 Marcha Soldado</span>
      </Reveal>

      <Reveal delay={0.08}>
        <BearSoldierIcon className={styles.mascot} />
      </Reveal>

      <Reveal delay={0.16}>
        <h1 className={styles.headline}>
          {isadoraEvent.name} vai fazer <span className={styles.headlineAccent}>{isadoraEvent.age} aninhos</span>!
        </h1>
      </Reveal>

      <Reveal delay={0.24}>
        <p className={styles.subhead}>
          Alistamento aberto pra melhor festa do batalhão: bandeirinhas, tambor e muita fofura pra
          celebrar esse aniversário. Vem marchar com a gente! 🎉
        </p>
      </Reveal>

      <Reveal delay={0.32}>
        <a href="#detalhes" className={styles.cta}>
          Ver data e local ↓
        </a>
      </Reveal>
    </div>
  );
}
