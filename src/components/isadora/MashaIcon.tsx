import type { SVGProps } from "react";

export function MashaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      {/* rosto */}
      <circle cx="100" cy="112" r="50" fill="#ffe3c4" />

      {/* tufos de cabelo */}
      <ellipse cx="52" cy="116" rx="11" ry="16" fill="#f2cf7e" />
      <ellipse cx="148" cy="116" rx="11" ry="16" fill="#f2cf7e" />

      {/* lenço magenta de bolinha (cobre a testa/topo da cabeça) */}
      <path d="M44 96 Q100 28 156 96 L150 110 Q100 84 50 110 Z" fill="#c2185b" />
      <polygon points="148 100 172 116 149 126" fill="#c2185b" />
      <circle cx="70" cy="70" r="6" fill="#fff" />
      <circle cx="100" cy="55" r="6" fill="#fff" />
      <circle cx="130" cy="70" r="6" fill="#fff" />
      <circle cx="100" cy="84" r="5" fill="#fff" />

      {/* franjinha loira, espiando por baixo do lenço */}
      <path d="M76 94 Q100 84 124 94 L122 106 Q100 98 78 106 Z" fill="#f2cf7e" />

      {/* olhos */}
      <circle cx="82" cy="116" r="7" fill="#2b241a" />
      <circle cx="118" cy="116" r="7" fill="#2b241a" />

      {/* bochechas */}
      <circle cx="70" cy="134" r="8" fill="#f2879f" opacity="0.55" />
      <circle cx="130" cy="134" r="8" fill="#f2879f" opacity="0.55" />

      {/* boca */}
      <path d="M88 138 q12 10 24 0" stroke="#2b241a" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
