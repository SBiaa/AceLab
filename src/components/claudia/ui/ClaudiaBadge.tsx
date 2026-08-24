import type { ReactNode } from "react";
import { SparkleIcon } from "../../ui/icons";
import styles from "./ClaudiaBadge.module.css";

type ClaudiaBadgeProps = {
  tone?: "primary" | "secondary" | "success" | "warning" | "neutral" | "onBrand";
  star?: boolean;
  children: ReactNode;
  className?: string;
};

export function ClaudiaBadge({ tone = "primary", star = false, children, className }: ClaudiaBadgeProps) {
  return (
    <span className={[styles.badge, styles[tone], className ?? ""].filter(Boolean).join(" ")}>
      {star && <SparkleIcon width={12} height={12} className={styles.star} />}
      {children}
    </span>
  );
}
