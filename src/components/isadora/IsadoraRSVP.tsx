"use client";

import confetti from "canvas-confetti";
import { Reveal } from "../ui/Reveal";
import { isadoraEvent } from "@/lib/isadora-data";
import styles from "./IsadoraRSVP.module.css";

const CONFETTI_COLORS = ["#d9486b", "#f2879f", "#4d7d53", "#fffdf6"];

function burstConfetti() {
  confetti({
    particleCount: 90,
    spread: 80,
    startVelocity: 40,
    origin: { y: 0.7 },
    colors: CONFETTI_COLORS,
    disableForReducedMotion: true,
  });
}

export function IsadoraRSVP() {
  const whatsappHref = isadoraEvent.rsvpWhatsapp
    ? `https://wa.me/${isadoraEvent.rsvpWhatsapp}?text=${encodeURIComponent(
        `Oi! Confirmando presença na festa da ${isadoraEvent.name} 🎉🐻👧`
      )}`
    : undefined;

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>Confirma presença nessa aventura! 🐾</h2>
          <p className={styles.text}>
            Sua confirmação ajuda a gente a preparar tudo — a Masha e o Urso já tão te esperando!
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              onClick={burstConfetti}
            >
              🎉 Confirmar presença
            </a>
          ) : (
            <>
              <button type="button" className={styles.button} onClick={burstConfetti}>
                🎉 Confirmar presença
              </button>
              <p className={styles.note}>O link/contato de confirmação vem em breve por aqui.</p>
            </>
          )}
        </Reveal>
      </div>
    </div>
  );
}
