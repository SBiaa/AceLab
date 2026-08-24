"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "../ui/Lightbox";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { claudiaScreenshots } from "@/lib/claudia-data";
import styles from "./ClaudiaGallery.module.css";

export function ClaudiaGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? claudiaScreenshots[open] : null;

  return (
    <div className={styles.wrap} id="telas">
      <div className="container">
        <Reveal>
          <p className={styles.eyebrow}>telas do sistema</p>
          <h2 className={styles.heading}>Dá pra ver antes de testar.</h2>
          <p className={styles.sub}>
            Um panorama real de como é usar a Claudia no dia a dia — da grade semanal até a cobertura
            curricular.
          </p>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {claudiaScreenshots.map((shot, i) => (
            <RevealItem key={shot.label}>
              <div className={styles.item} onClick={() => setOpen(i)}>
                {shot.src ? (
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    sizes="(max-width: 860px) 50vw, 25vw"
                    className={styles.itemImage}
                  />
                ) : (
                  <div className={styles.itemPlaceholder}>captura da plataforma</div>
                )}
                <span className={styles.itemLabel}>{shot.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {active && (
        <Lightbox onClose={() => setOpen(null)}>
          {active.src ? (
            <Image
              src={active.src}
              alt={active.label}
              width={800}
              height={1420}
              className={styles.lightboxImage}
            />
          ) : (
            <div className={styles.lightboxPlaceholder}>captura da plataforma — {active.label}</div>
          )}
        </Lightbox>
      )}
    </div>
  );
}
