import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";
import styles from "./ClaudiaButton.module.css";

type ClaudiaButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ClaudiaButtonSize = "sm" | "md" | "lg";

type ClaudiaButtonProps = {
  variant?: ClaudiaButtonVariant;
  size?: ClaudiaButtonSize;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: MouseEventHandler;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ClaudiaButton({
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
}: ClaudiaButtonProps) {
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
