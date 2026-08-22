import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "accent" | "black" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: MouseEventHandler;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  iconLeft,
  iconRight,
  children,
  className,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
