import type { ReactNode } from "react";
import { SparkleIcon } from "../../ui/icons";
import styles from "./ConectaBadge.module.css";

type ConectaBadgeProps = {
  tone?: "primary" | "secondary" | "neutral" | "onBrand";
  star?: boolean;
  children: ReactNode;
  className?: string;
};

export function ConectaBadge({ tone = "primary", star = false, children, className }: ConectaBadgeProps) {
  return (
    <span className={[styles.badge, styles[tone], className ?? ""].filter(Boolean).join(" ")}>
      {star && <SparkleIcon width={12} height={12} className={styles.star} />}
      {children}
    </span>
  );
}
