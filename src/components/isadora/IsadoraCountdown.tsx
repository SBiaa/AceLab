"use client";

import { useEffect, useState } from "react";
import styles from "./IsadoraCountdown.module.css";

function getTimeLeft(targetISO: string) {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now());
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

export function IsadoraCountdown({
  targetISO,
  variant = "card",
}: {
  targetISO: string;
  variant?: "card" | "hero";
}) {
  // Starts null so the server-rendered (build-time) markup and the first
  // client render match; the real value arrives on the first tick below.
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  if (!timeLeft) return null;

  const units: { label: string; value: number }[] = [
    { label: "dias", value: timeLeft.dias },
    { label: "horas", value: timeLeft.horas },
    { label: "min", value: timeLeft.minutos },
    { label: "seg", value: timeLeft.segundos },
  ];

  const unitClass = variant === "hero" ? `${styles.unit} ${styles.unitHero}` : styles.unit;
  const labelClass = variant === "hero" ? `${styles.label} ${styles.labelHero}` : styles.label;

  return (
    <div className={styles.grid}>
      {units.map((unit) => (
        <div key={unit.label} className={unitClass}>
          <span className={styles.value}>{String(unit.value).padStart(2, "0")}</span>
          <span className={labelClass}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
