import type { MouseEventHandler, ReactNode } from "react";
import { Star } from "./Star";
import styles from "./Badge.module.css";

type BadgeTone =
  | "plum"
  | "crimson"
  | "neutral"
  | "solid"
  | "black"
  | "outline"
  | "outlineLight"
  | "success"
  | "warning";

type BadgeProps = {
  tone?: BadgeTone;
  size?: "sm" | "md";
  star?: boolean;
  dot?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
  children: ReactNode;
};

export function Badge({
  tone = "plum",
  size = "md",
  star = false,
  dot = false,
  onClick,
  className,
  children,
}: BadgeProps) {
  const classes = [styles.badge, styles[tone], styles[size], className ?? ""]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {dot && <span className={styles.dot} />}
      {star && <Star size={10} color={tone === "solid" || tone === "black" ? "white" : "crimson"} />}
      {children}
    </>
  );

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  return <span className={classes}>{content}</span>;
}
