"use client";

import { useState } from "react";
import { Lightbox } from "../ui/Lightbox";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { conectaScreenshots } from "@/lib/conecta-data";
import styles from "./ConectaGallery.module.css";

export function ConectaGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? conectaScreenshots[open] : null;

  return (
    <div className={styles.wrap} id="telas">
      <div className="container">
        <Reveal>
          <p className={styles.eyebrow}>telas do sistema</p>
          <h2 className={styles.heading}>Um painel pra cada rotina da ONG.</h2>
          <p className={styles.sub}>
            Um panorama real de como é usar o Conecta no dia a dia — do dashboard da coordenação
            ao progresso de saúde de cada associada.
          </p>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {conectaScreenshots.map((shot, i) => (
            <RevealItem key={shot.label}>
              <div className={styles.item} onClick={() => setOpen(i)}>
                <div className={styles.itemPlaceholder}>captura da plataforma</div>
                <span className={styles.itemLabel}>{shot.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {active && (
        <Lightbox onClose={() => setOpen(null)}>
          <div className={styles.lightboxPlaceholder}>captura da plataforma — {active.label}</div>
        </Lightbox>
      )}
    </div>
  );
}
