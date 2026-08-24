import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";
import styles from "./ConectaButton.module.css";

type ConectaButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ConectaButtonSize = "sm" | "md" | "lg";

type ConectaButtonProps = {
  variant?: ConectaButtonVariant;
  size?: ConectaButtonSize;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: MouseEventHandler;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ConectaButton({
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  icon,
  children,
  className,
}: ConectaButtonProps) {
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
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
