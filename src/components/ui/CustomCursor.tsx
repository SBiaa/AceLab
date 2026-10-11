"use client";

import { useEffect, useRef } from "react";
import "./cursor-global.css";
import styles from "./CustomCursor.module.css";

const INTERACTIVE = "a, button, [role='button'], summary, label, [data-cursor]";
const TEXT_FIELDS = "input, textarea, select";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const labelTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const labelText = labelTextRef.current;
    if (!root || !dot || !ring || !label || !labelText) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ease = reduceMotion ? 1 : 0.18;

    document.documentElement.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const place = (el: HTMLElement, px: number, py: number) => {
      el.style.transform = `translate3d(${px}px, ${py}px, 0)`;
    };

    const tick = () => {
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      place(ring, rx, ry);
      place(label, rx, ry);
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (root.dataset.visible !== "true") {
        rx = e.clientX;
        ry = e.clientY;
        root.dataset.visible = "true";
      }
      x = e.clientX;
      y = e.clientY;
      place(dot, x, y);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target || !target.closest) return;
      root.dataset.hidden = target.closest(TEXT_FIELDS) ? "true" : "false";
      const labelled = target.closest("[data-cursor]");
      const text = labelled?.getAttribute("data-cursor") ?? "";
      labelText.textContent = text;
      root.dataset.label = text ? "true" : "false";
      root.dataset.hover = target.closest(INTERACTIVE) ? "true" : "false";
    };

    const onDown = () => {
      root.dataset.down = "true";
    };
    const onUp = () => {
      root.dataset.down = "false";
    };
    const onLeave = () => {
      root.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef} className={styles.dot} />
      <div ref={labelRef} className={styles.label}>
        <span ref={labelTextRef} className={styles.labelText} />
      </div>
    </div>
  );
}
