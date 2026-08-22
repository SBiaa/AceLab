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

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M19.5 12.6 12 20l-7.5-7.4a4.8 4.8 0 0 1 6.8-6.8L12 6.4l0.7-0.6a4.8 4.8 0 0 1 6.8 6.8Z" />
    </IconBase>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20v-1.4a4.5 4.5 0 0 1 4.5-4.5H10a4.5 4.5 0 0 1 4.5 4.5V20" />
      <path d="M16 8.2a3 3 0 1 1 0 6" />
      <path d="M15 14.6h1.5A4 4 0 0 1 20.5 18.6V20" />
    </IconBase>
  );
}

export function WavesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M2 8c1.5-1.6 3.2-1.6 4.7 0s3.2 1.6 4.7 0 3.2-1.6 4.7 0 3.2 1.6 4.7 0" />
      <path d="M2 14c1.5-1.6 3.2-1.6 4.7 0s3.2 1.6 4.7 0 3.2-1.6 4.7 0 3.2 1.6 4.7 0" />
      <path d="M2 20c1.5-1.6 3.2-1.6 4.7 0s3.2 1.6 4.7 0 3.2-1.6 4.7 0 3.2 1.6 4.7 0" />
    </IconBase>
  );
}

export function FilmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="7.5" y1="4" x2="7.5" y2="9" />
      <line x1="16.5" y1="4" x2="16.5" y2="9" />
      <line x1="7.5" y1="15" x2="7.5" y2="20" />
      <line x1="16.5" y1="15" x2="16.5" y2="20" />
    </IconBase>
  );
}

export function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="21.5" />
      <line x1="8.5" y1="21.5" x2="15.5" y2="21.5" />
    </IconBase>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="4.2" y1="4.2" x2="6" y2="6" />
      <line x1="18" y1="18" x2="19.8" y2="19.8" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.2" y1="19.8" x2="6" y2="18" />
      <line x1="18" y1="6" x2="19.8" y2="4.2" />
    </IconBase>
  );
}

export function ImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="M21 16.5 15.5 11 5.5 21" />
    </IconBase>
  );
}

export function ShirtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M8 3 4 6.5 6.2 9.3 8 8v11.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8l1.8 1.3L20 6.5 16 3l-2 1.6a3 3 0 0 1-4 0Z" />
    </IconBase>
  );
}

export function FlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <line x1="5" y1="3" x2="5" y2="21" />
      <path d="M5 4.5h11l-2.6 3.8L16 12H5" />
    </IconBase>
  );
}
