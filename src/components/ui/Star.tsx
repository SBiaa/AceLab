import Image from "next/image";
import type { CSSProperties } from "react";

const FILES = {
  crimson: "/images/star-crimson.png",
  plum: "/images/star-plum.png",
  white: "/images/star-white.png",
} as const;

type StarProps = {
  size?: number;
  color?: keyof typeof FILES;
  spin?: boolean;
  style?: CSSProperties;
  className?: string;
};

export function Star({ size = 24, color = "crimson", spin = false, style, className }: StarProps) {
  return (
    <Image
      src={FILES[color]}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{
        display: "inline-block",
        flex: "none",
        animation: spin ? "star-spin 9s linear infinite" : undefined,
        ...style,
      }}
    />
  );
}
