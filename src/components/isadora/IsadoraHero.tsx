import { Reveal } from "../ui/Reveal";
import { BearIcon } from "./BearIcon";
import { MashaIcon } from "./MashaIcon";
import { isadoraEvent } from "@/lib/isadora-data";
import styles from "./IsadoraHero.module.css";

const buntingColors = ["#d9486b", "#f2879f", "#4d7d53", "#d9486b", "#f2879f", "#4d7d53", "#d9486b"];

export function IsadoraHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.buntingRow} aria-hidden="true">
        {buntingColors.map((color, i) => (
          <span key={i} className={styles.bunting} style={{ background: color }} />
        ))}
      </div>

      <Reveal>
        <span className={styles.badge}>🐻 Masha e o Urso</span>
      </Reveal>

      <Reveal delay={0.08}>
        <div className={styles.mascotWrap}>
          <BearIcon className={styles.bear} />
          <MashaIcon className={styles.masha} />
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <h1 className={styles.headline}>
          {isadoraEvent.name} vai fazer <span className={styles.headlineAccent}>{isadoraEvent.age} aninhos</span>!
        </h1>
      </Reveal>

      <Reveal delay={0.24}>
        <p className={styles.subhead}>
          Vem pra floresta celebrar com a Masha e o Urso! Muita alegria, brincadeira e travessura
          nesse dia tão especial. 🌲🎉
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
