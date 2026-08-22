import Image from "next/image";

type LogoProps = {
  height?: number;
  invert?: boolean;
  className?: string;
};

export function Logo({ height = 32, invert = false, className }: LogoProps) {
  return (
    <Image
      src="/images/logo-wordmark.png"
      alt="Ace"
      height={height}
      width={Math.round(height * (388 / 240))}
      className={className}
      style={{
        height,
        width: "auto",
        display: "block",
        filter: invert ? "brightness(0) invert(1)" : undefined,
      }}
    />
  );
}
