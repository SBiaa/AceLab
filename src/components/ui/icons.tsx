import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}

export function PenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
    </IconBase>
  );
}

export function TrendUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <polyline points="3 17 9.5 10.5 13.5 14.5 21 7" />
      <polyline points="15 7 21 7 21 13" />
    </IconBase>
  );
}

export function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 8a2 2 0 0 1 2-2h1.5l1.3-2h6.4l1.3 2H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="13" r="3.3" />
    </IconBase>
  );
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <polyline points="8.5 8.5 4 13 8.5 17.5" />
      <polyline points="15.5 8.5 20 13 15.5 17.5" />
    </IconBase>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-8l-4 3.3v-3.3H6a2 2 0 0 1-2-2Z" />
    </IconBase>
  );
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="12" cy="12" r="0.4" fill="currentColor" />
    </IconBase>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <polygon points="12 3.5 21 8 12 12.5 3 8 12 3.5" />
      <polyline points="3 13.5 12 18 21 13.5" />
    </IconBase>
  );
}

export function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 4h10v3.2a5 5 0 0 1-10 0V4Z" />
      <path d="M5 5.2H3.3v1.3a3.2 3.2 0 0 0 3.2 3.2" />
      <path d="M19 5.2h1.7v1.3a3.2 3.2 0 0 1-3.2 3.2" />
      <line x1="12" y1="11.5" x2="12" y2="15.5" />
      <line x1="8.3" y1="19" x2="15.7" y2="19" />
      <path d="M9 19v-1a3 3 0 0 1 6 0v1" />
    </IconBase>
  );
}
