import type { SVGProps } from "react";

export function BearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      {/* orelhas */}
      <circle cx="62" cy="52" r="20" fill="#6b4a2f" />
      <circle cx="138" cy="52" r="20" fill="#6b4a2f" />
      <circle cx="62" cy="52" r="10" fill="#e8c9a6" />
      <circle cx="138" cy="52" r="10" fill="#e8c9a6" />

      {/* cabeça */}
      <circle cx="100" cy="102" r="58" fill="#a9744f" />

      {/* focinho */}
      <ellipse cx="100" cy="116" rx="30" ry="22" fill="#e8c9a6" />
      <ellipse cx="100" cy="108" rx="9" ry="7" fill="#5a3d28" />

      {/* olhos */}
      <circle cx="80" cy="94" r="5" fill="#2b241a" />
      <circle cx="120" cy="94" r="5" fill="#2b241a" />

      {/* bochechas */}
      <circle cx="68" cy="118" r="7" fill="#f2879f" opacity="0.45" />
      <circle cx="132" cy="118" r="7" fill="#f2879f" opacity="0.45" />

      {/* boca */}
      <path d="M92 128 q8 8 16 0" stroke="#2b241a" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
