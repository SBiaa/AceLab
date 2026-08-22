import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Star } from "./Star";
import styles from "./Card.module.css";

type CardTone = "paper" | "subtle" | "brand" | "soft" | "ink";
type CardPadding = "sm" | "md" | "lg";

const PAD_CLASS: Record<CardPadding, string> = {
  sm: styles.padSm,
  md: styles.padMd,
  lg: styles.padLg,
};

type CardProps = {
  tone?: CardTone;
  padding?: CardPadding;
  star?: boolean;
  gradient?: boolean;
  eyebrow?: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export function Card({
  tone = "paper",
  padding = "md",
  star = false,
  gradient = false,
  eyebrow,
  title,
  footer,
  onClick,
  style,
  className,
  children,
}: CardProps) {
  const inverse = tone === "brand" || tone === "ink";
  const classes = [
    styles.card,
    styles[tone],
    gradient ? styles.gradient : "",
    onClick ? styles.clickable : "",
    gradient ? "" : styles.shadowSm,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style} onClick={onClick}>
      {star && (
        <Star
          size={18}
          color={inverse ? "white" : "crimson"}
          className={styles.star}
        />
      )}
      <div className={[styles.body, PAD_CLASS[padding]].join(" ")}>
        {eyebrow && (
          <span
            className={[
              styles.eyebrow,
              inverse ? (tone === "ink" ? styles.eyebrowInk : styles.eyebrowInverse) : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {eyebrow}
          </span>
        )}
        {title && (
          <h3 className={[styles.title, inverse ? styles.titleInverse : ""].filter(Boolean).join(" ")}>
            {title}
          </h3>
        )}
        {children}
        {footer && <div style={{ marginTop: "var(--space-2)" }}>{footer}</div>}
      </div>
    </div>
  );
}
