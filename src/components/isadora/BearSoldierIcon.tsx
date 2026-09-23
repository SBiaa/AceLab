import type { SVGProps } from "react";

export function BearSoldierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      {/* orelhas */}
      <circle cx="62" cy="52" r="18" fill="#a9744f" />
      <circle cx="138" cy="52" r="18" fill="#a9744f" />
      <circle cx="62" cy="52" r="9" fill="#7a4f33" />
      <circle cx="138" cy="52" r="9" fill="#7a4f33" />

      {/* cabeça */}
      <circle cx="100" cy="92" r="52" fill="#c68a5b" />

      {/* quepe (boina militar) */}
      <path d="M50 76 a50 34 0 0 1 100 0 v6 a50 34 0 0 0 -100 0 Z" fill="#55703a" />
      <rect x="48" y="78" width="104" height="12" rx="6" fill="#46592f" />
      <circle cx="100" cy="68" r="6" fill="#d4a017" />

      {/* focinho */}
      <ellipse cx="100" cy="104" rx="26" ry="20" fill="#e8c9a6" />
      <ellipse cx="100" cy="98" rx="8" ry="6" fill="#5a3d28" />

      {/* olhos */}
      <circle cx="82" cy="88" r="5" fill="#2b241a" />
      <circle cx="118" cy="88" r="5" fill="#2b241a" />

      {/* bochechas */}
      <circle cx="70" cy="108" r="7" fill="#e79a83" opacity="0.6" />
      <circle cx="130" cy="108" r="7" fill="#e79a83" opacity="0.6" />

      {/* boca */}
      <path d="M92 112 q8 8 16 0" stroke="#2b241a" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* lenço vermelho */}
      <path d="M70 138 h60 l-10 20 h-40 Z" fill="#c1473a" />
    </svg>
  );
}
