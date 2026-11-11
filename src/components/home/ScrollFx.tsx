"use client";

import { MotionConfig, motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

type Base = { children?: ReactNode; className?: string; style?: CSSProperties };

/** Envolve a página: quem pediu menos movimento no sistema vê só o fade, sem deslocamento. */
export function MotionRoot({ children, className }: Base) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={className}>{children}</div>
    </MotionConfig>
  );
}

/** Bloco que sobe e aparece quando entra na tela. */
export function FadeUp({ children, className, style, delay = 0, y = 32 }: Base & { delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const ITEM: Record<"up" | "left" | "pop", Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  },
  left: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.6, rotate: -12 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 18 } },
  },
};

/** Container que revela os filhos (Item) um depois do outro. */
export function Stagger({
  children,
  className,
  style,
  stagger = 0.1,
  delay = 0,
  as = "div",
}: Base & { stagger?: number; delay?: number; as?: "div" | "ul" }) {
  const Tag = as === "ul" ? motion.ul : motion.div;
  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  );
}

export function Item({
  children,
  className,
  style,
  kind = "up",
  as = "div",
}: Base & { kind?: keyof typeof ITEM; as?: "div" | "li" | "span" }) {
  const Tag = as === "li" ? motion.li : as === "span" ? motion.span : motion.div;
  return (
    <Tag className={className} style={style} variants={ITEM[kind]}>
      {children}
    </Tag>
  );
}

/** A linha tracejada que liga os naipes: se desenha da esquerda pra direita. */
export function DrawLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      aria-hidden="true"
      style={{ transformOrigin: "left center" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
    />
  );
}

/** Bloco que cresce de leve ao entrar (usado no cartão da Bia). */
export function GrowIn({ children, className, style }: Base) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Desloca o conteúdo pros lados conforme a página rola (as faixas cruzadas). */
export function ScrollSlide({ children, distance = 200 }: { children: ReactNode; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, distance]);
  return (
    <motion.div ref={ref} style={{ x, marginLeft: -Math.abs(distance) - 140 }}>
      {children}
    </motion.div>
  );
}
