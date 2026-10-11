import type { CSSProperties } from "react";
import { Star } from "../ui/Star";
import styles from "./HeroOrbit.module.css";

export type OrbitItem = {
  label: string;
  angle: number;
  accent: boolean;
  /** Text glyph (e.g. a card suit) shown instead of the star. */
  glyph?: string;
};

const ORBIT_ITEMS: OrbitItem[] = [
  { label: "Marca & Design", angle: 315, accent: false },
  { label: "Marketing", angle: 45, accent: true },
  { label: "Fotografia", angle: 135, accent: false },
  { label: "Web & Tecnologia", angle: 225, accent: true },
];

export function HeroOrbit({ items = ORBIT_ITEMS }: { items?: OrbitItem[] }) {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={`${styles.ring} ${styles.ringOuter}`} />
      <div className={`${styles.ring} ${styles.ringInner}`} />

      <div className={styles.core}>
        <Star size={56} color="white" className={styles.coreStar} />
      </div>

      <div className={styles.orbit}>
        {items.map((item) => (
          <div key={item.label} className={styles.slot} style={{ "--a": `${item.angle}deg` } as CSSProperties}>
            {item.glyph ? (
              <div className={`${styles.card} ${styles.suitCard} ${item.accent ? styles.suitRed : ""}`}>
                <span className={styles.suitCorner}>{item.glyph}</span>
                <span className={styles.suitMain}>{item.glyph}</span>
                <span className={`${styles.suitCorner} ${styles.suitCornerBottom}`}>{item.glyph}</span>
                <span className={styles.suitLabel}>{item.label}</span>
              </div>
            ) : (
              <div className={`${styles.card} ${item.accent ? styles.cardAccent : ""}`}>
                <Star size={14} color={item.accent ? "crimson" : "white"} />
                <span>{item.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
