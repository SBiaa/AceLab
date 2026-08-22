"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Star } from "../ui/Star";
import styles from "./HeroParallax.module.css";

type StarSpec = {
  size: number;
  color?: "white" | "crimson";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  duration?: number;
  delay?: number;
  driftX?: number;
  driftY?: number;
};

const FAR_LAYER: StarSpec[] = [
  { size: 200, top: "-70px", right: "-50px", opacity: 0.08, duration: 13, driftX: 10, driftY: -14 },
  { size: 160, bottom: "-60px", left: "-40px", opacity: 0.08, duration: 15, delay: 1.5, driftX: -10, driftY: 12 },
];

const NEAR_LAYER: StarSpec[] = [
  { size: 18, top: "14%", left: "8%", opacity: 0.5, duration: 8, driftX: 8, driftY: -10 },
  { size: 12, top: "62%", left: "4%", opacity: 0.35, duration: 9, delay: 1, driftX: -6, driftY: 8 },
  { size: 26, top: "8%", right: "12%", opacity: 0.4, duration: 10, delay: 0.5, driftX: -10, driftY: 8 },
  {
    size: 14,
    top: "40%",
    right: "6%",
    color: "crimson",
    opacity: 0.55,
    duration: 7,
    delay: 2,
    driftX: 8,
    driftY: 10,
  },
  { size: 10, bottom: "18%", left: "20%", opacity: 0.4, duration: 8.5, delay: 1.8, driftX: 6, driftY: -8 },
  {
    size: 16,
    bottom: "10%",
    right: "22%",
    color: "crimson",
    opacity: 0.45,
    duration: 11,
    delay: 0.8,
    driftX: -8,
    driftY: -10,
  },
];

function ParallaxLayer({
  stars,
  depth,
  mouseX,
  mouseY,
}: {
  stars: StarSpec[];
  depth: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const x = useTransform(mouseX, (v) => v * depth);
  const y = useTransform(mouseY, (v) => v * depth);

  return (
    <motion.div style={{ x, y }} className={styles.layer}>
      {stars.map((s, i) => (
        <div
          key={i}
          className={styles.driftWrap}
          style={
            {
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              animationDuration: `${s.duration ?? 10}s`,
              animationDelay: `${s.delay ?? 0}s`,
              "--drift-x": `${s.driftX ?? 10}px`,
              "--drift-y": `${s.driftY ?? -12}px`,
            } as React.CSSProperties
          }
        >
          <Star size={s.size} color={s.color ?? "white"} style={{ opacity: s.opacity ?? 0.14 }} />
        </div>
      ))}
    </motion.div>
  );
}

export function HeroParallax({ children, className }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.6 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 100]);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      className={[styles.container, className ?? ""].filter(Boolean).join(" ")}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div style={{ y: scrollY }} className={styles.backdrop} aria-hidden="true">
        <ParallaxLayer stars={FAR_LAYER} depth={6} mouseX={springX} mouseY={springY} />
        <ParallaxLayer stars={NEAR_LAYER} depth={16} mouseX={springX} mouseY={springY} />
        <div className={`${styles.glow} ${styles.glowA}`} />
        <div className={`${styles.glow} ${styles.glowB}`} />
      </motion.div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
