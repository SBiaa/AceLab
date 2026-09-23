"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import confetti from "canvas-confetti";
import { Reveal } from "../ui/Reveal";
import { isadoraEvent } from "@/lib/isadora-data";
import { submitRsvp, getRsvpSummary, type RsvpFormState, type RsvpSummary } from "@/app/isadora/actions";
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

const initialState: RsvpFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      {pending ? "Enviando..." : "🎉 Confirmar presença"}
    </button>
  );
}

export function IsadoraRSVP() {
  const [state, formAction] = useActionState(submitRsvp, initialState);
  const [summary, setSummary] = useState<RsvpSummary | null>(null);

  useEffect(() => {
    getRsvpSummary(isadoraEvent.slug).then(setSummary);
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      burstConfetti();
      getRsvpSummary(isadoraEvent.slug).then(setSummary);
    }
  }, [state.status]);

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

        {summary && summary.families > 0 && (
          <p className={styles.counter}>
            🎉 {summary.families} {summary.families === 1 ? "família confirmada" : "famílias confirmadas"} •{" "}
            {summary.people} {summary.people === 1 ? "pessoa" : "pessoas"}
          </p>
        )}

        <Reveal delay={0.08}>
          {state.status === "success" ? (
            <p className={styles.success}>{state.message}</p>
          ) : (
            <form action={formAction} className={styles.form}>
              <input type="hidden" name="slug" value={isadoraEvent.slug} />

              <div className={styles.field}>
                <label className={styles.label} htmlFor="guestName">
                  Seu nome
                </label>
                <input className={styles.input} id="guestName" name="guestName" type="text" required />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="guestCount">
                  Quantas pessoas vêm (contando você)?
                </label>
                <input
                  className={styles.input}
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={1}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Recado pra Isadora <span className={styles.optional}>(opcional)</span>
                </label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder="Deixe um recadinho de aniversário..."
                />
              </div>

              {state.status === "error" && state.message && (
                <p className={styles.error} role="status">
                  {state.message}
                </p>
              )}

              <SubmitButton />
            </form>
          )}
        </Reveal>

        {whatsappHref && (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
            Prefere confirmar pelo WhatsApp? Clica aqui
          </a>
        )}
      </div>
    </div>
  );
}
