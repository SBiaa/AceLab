import type { CSSProperties } from "react";
import { Star } from "./Star";
import styles from "./StarField.module.css";

export type AmbientStar = {
  size: number;
  color?: "white" | "crimson" | "plum";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  duration?: number;
  delay?: number;
  driftX?: number;
  driftY?: number;
  spin?: boolean;
};

type StarFieldProps = {
  stars: AmbientStar[];
  className?: string;
};

export function StarField({ stars, className }: StarFieldProps) {
  return (
    <div className={[styles.field, className ?? ""].filter(Boolean).join(" ")} aria-hidden="true">
      {stars.map((s, i) => {
        const style = {
          top: s.top,
          left: s.left,
          right: s.right,
          bottom: s.bottom,
          opacity: s.opacity ?? 0.14,
          animationDuration: `${s.duration ?? 10}s`,
          animationDelay: `${s.delay ?? 0}s`,
          "--drift-x": `${s.driftX ?? 14}px`,
          "--drift-y": `${s.driftY ?? -16}px`,
        } as CSSProperties;
        return (
          <div className={styles.star} style={style} key={i}>
            <Star size={s.size} color={s.color ?? "white"} spin={s.spin} />
          </div>
        );
      })}
    </div>
  );
}
