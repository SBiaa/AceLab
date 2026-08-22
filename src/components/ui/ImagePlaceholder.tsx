import type { CSSProperties } from "react";
import { Star } from "./Star";
import styles from "./ImagePlaceholder.module.css";

type ImagePlaceholderProps = {
  label?: string;
  tone?: "plum" | "paper";
  style?: CSSProperties;
  className?: string;
};

export function ImagePlaceholder({ label = "Foto em breve", tone = "plum", style, className }: ImagePlaceholderProps) {
  return (
    <div className={[styles.placeholder, styles[tone], className ?? ""].filter(Boolean).join(" ")} style={style}>
      <Star size={64} color="white" className={styles.watermark} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
