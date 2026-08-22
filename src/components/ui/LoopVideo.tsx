"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type LoopVideoProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
};

export function LoopVideo({ src, className, style }: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ objectFit: "contain", ...style }}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  );
}
