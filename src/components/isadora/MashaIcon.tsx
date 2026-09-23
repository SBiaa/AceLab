import type { SVGProps } from "react";

export function MashaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      {/* rosto */}
      <circle cx="100" cy="112" r="50" fill="#ffe3c4" />

      {/* tufos de cabelo */}
      <ellipse cx="52" cy="116" rx="11" ry="16" fill="#f2cf7e" />
      <ellipse cx="148" cy="116" rx="11" ry="16" fill="#f2cf7e" />

      {/* lenço rosa de bolinha (cobre só a testa/topo da cabeça) */}
      <path d="M44 96 Q100 28 156 96 L150 110 Q100 84 50 110 Z" fill="#d9486b" />
      <polygon points="148 100 170 114 149 124" fill="#d9486b" />
      <circle cx="72" cy="72" r="5" fill="#fff" />
      <circle cx="100" cy="58" r="5" fill="#fff" />
      <circle cx="128" cy="72" r="5" fill="#fff" />
      <circle cx="100" cy="86" r="4" fill="#fff" />

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
