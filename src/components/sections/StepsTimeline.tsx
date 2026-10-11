"use client";

import { useRef } from "react";
import confetti from "canvas-confetti";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Variants,
} from "framer-motion";
import { ChatIcon, LayersIcon, TargetIcon, TrophyIcon } from "../ui/icons";
import { steps } from "@/lib/data";
import styles from "./StepsTimeline.module.css";

const BRAND_CONFETTI_COLORS = ["#AC1E2A", "#37125F", "#6B32A8", "#B396D8", "#FFFFFF"];
const CELEBRATE_AT = 0.88;

const ICONS = [ChatIcon, TargetIcon, LayersIcon, TrophyIcon];

const STAGGER = 0.14;

const nodeVariants: Variants = {
  inactive: {
    backgroundColor: "#241e2e",
    borderColor: "rgba(255, 255, 255, 0.16)",
    color: "#9c95a6",
    scale: 0.88,
    boxShadow: "0 0 0 0px rgba(196, 48, 60, 0)",
  },
  active: (i: number) => ({
    backgroundColor: "#ac1e2a",
    borderColor: "#c4303c",
    color: "#ffffff",
    scale: 1,
    boxShadow: "0 0 0 8px rgba(196, 48, 60, 0.18)",
    transition: { duration: 0.4, ease: [0.2, 0.6, 0.2, 1], delay: i * STAGGER },
  }),
};

const contentVariants: Variants = {
  inactive: { opacity: 0, y: 14 },
  active: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.6, 0.2, 1], delay: i * STAGGER + 0.1 },
  }),
};

export function StepsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLDivElement>(null);
  const hasCelebratedRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.55"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (hasCelebratedRef.current || reduceMotion || latest < CELEBRATE_AT) return;
    hasCelebratedRef.current = true;

    const rect = lastNodeRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }
      : { x: 0.5, y: 0.5 };

    const shared = { colors: BRAND_CONFETTI_COLORS, origin, disableForReducedMotion: true };
    confetti({ ...shared, particleCount: 70, spread: 65, startVelocity: 42, angle: 60, scalar: 0.9 });
    confetti({ ...shared, particleCount: 70, spread: 65, startVelocity: 42, angle: 120, scalar: 0.9 });
    confetti({ ...shared, particleCount: 40, spread: 100, startVelocity: 30, scalar: 0.7, decay: 0.92 });
  });

  return (
    <div className={styles.wrap} ref={containerRef}>
      <div className={`${styles.track} ${styles.trackH}`}>
        <motion.div
          className={styles.trackFill}
          style={reduceMotion ? undefined : { scaleX: scrollYProgress }}
        />
      </div>
      <div className={`${styles.track} ${styles.trackV}`}>
        <motion.div
          className={styles.trackFill}
          style={reduceMotion ? undefined : { scaleY: scrollYProgress }}
        />
      </div>
      <div className={styles.list}>
        {steps.map((st, i) => {
          const Icon = ICONS[i % ICONS.length];
          const isLast = i === steps.length - 1;
          return (
            <motion.div
              key={st.n}
              className={styles.step}
              initial="inactive"
              whileInView="active"
              custom={i}
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.div
                className={styles.node}
                variants={nodeVariants}
                custom={i}
                ref={isLast ? lastNodeRef : undefined}
              >
                <Icon width={22} height={22} />
              </motion.div>
              <motion.div variants={contentVariants} custom={i}>
                <p className={styles.stepLabel}>Passo {st.n}</p>
                <h3 className={styles.title}>{st.title}</h3>
                <p className={styles.desc}>{st.desc}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
