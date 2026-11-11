"use client";

import Link from "next/link";
import { useState } from "react";
import { PlayingCard } from "./PlayingCard";
import styles from "./nova.module.css";

export type Service = {
  rank: string;
  suit: "♠" | "♥" | "♦" | "♣";
  title: string;
  desc: string;
  cta: string;
  href: string;
};

export function Hand({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const mid = (services.length - 1) / 2;
  const current = services[active];

  return (
    <div className={styles.handWrap}>
      <div className={styles.hand} role="group" aria-label="Serviços">
        {services.map((s, i) => (
          <button
            key={s.title}
            type="button"
            className={styles.handCard}
            style={{ "--i": i - mid } as React.CSSProperties}
            aria-pressed={i === active}
            aria-controls="carta-detalhe"
            onClick={() => setActive(i)}
          >
            <PlayingCard rank={s.rank} suit={s.suit} label={s.title} />
          </button>
        ))}
      </div>

      <div id="carta-detalhe" className={styles.detail} aria-live="polite">
        <h3 className={styles.detailTitle}>{current.title}</h3>
        <p className={styles.detailDesc}>{current.desc}</p>
        <Link href={current.href} className={styles.linkBtn}>
          {current.cta}
        </Link>
      </div>
    </div>
  );
}
