"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import styles from "./Lightbox.module.css";

type LightboxProps = {
  onClose: () => void;
  children: ReactNode;
};

export function Lightbox({ onClose, children }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.panel} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
