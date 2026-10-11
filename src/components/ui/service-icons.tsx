import type { SVGProps } from "react";

// Duotone line icons: plum stroke + a single crimson accent detail.
const PLUM = "var(--plum-900)";
const ACCENT = "var(--crimson-600)";

function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={PLUM}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function PenNibIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M12 2.5 6.5 10l1.8 8h7.4l1.8-8L12 2.5Z" />
      <path d="M12 13.5V18" />
      <path d="M9 21h6" />
      <circle cx="12" cy="10.5" r="1.4" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.2" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function TargetDotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.9" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function MonitorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path d="M12 16.5V20" />
      <path d="M8 20h8" />
      <path d="M7 8.5h5" stroke={ACCENT} />
    </Base>
  );
}

export function CodeSlashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <polyline points="8 7 3 12 8 17" />
      <polyline points="16 7 21 12 16 17" />
      <path d="M14 5 10 19" stroke={ACCENT} />
    </Base>
  );
}

export function CameraDotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 8a2 2 0 0 1 2-2h1.5l1.3-2h6.4l1.3 2H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="13" r="3.6" />
      <circle cx="12" cy="13" r="1.3" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function PrinterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M7 9V4h10v5" />
      <rect x="3" y="9" width="18" height="8" rx="2" />
      <path d="M7 14h10v6H7z" />
      <circle cx="17.5" cy="12" r="1" fill={ACCENT} stroke="none" />
    </Base>
  );
}
