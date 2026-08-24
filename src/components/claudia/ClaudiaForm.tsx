"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Reveal } from "../ui/Reveal";
import { ClaudiaButton } from "./ui/ClaudiaButton";
import { gradeOptions } from "@/lib/claudia-data";
import { submitClaudiaLead, type ClaudiaFormState } from "@/app/claudia/actions";
import styles from "./ClaudiaForm.module.css";

const initialState: ClaudiaFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <ClaudiaButton type="submit" variant="primary" size="lg" fullWidth disabled={pending}>
      {pending ? "Enviando..." : "Quero testar a Claudia"}
    </ClaudiaButton>
  );
}

export function ClaudiaForm() {
  const [state, formAction] = useActionState(submitClaudiaLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className={styles.wrap} id="quero-testar">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>quero testar</p>
          <h2 className={styles.heading}>Cadastre-se pra testar a Claudia</h2>
          <p className={styles.sub}>Deixa seus dados que a gente te chama assim que abrir uma vaga de teste.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.card}>
            <form ref={formRef} action={formAction} className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Nome completo
                </label>
                <input className={styles.input} id="name" name="name" type="text" required />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">
                    Telefone / WhatsApp
                  </label>
                  <input
                    className={styles.input}
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 9xxxx-xxxx"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input className={styles.input} id="email" name="email" type="email" required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Em quais anos você dá aula?</label>
                <div className={styles.checkGrid}>
                  {gradeOptions.map((grade) => (
                    <label className={styles.checkOption} key={grade}>
                      <input type="checkbox" name="grades" value={grade} />
                      <span className={styles.checkBox} />
                      {grade}
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.themeSection}>
                <div className={styles.field}>
                  <label className={styles.label}>Quer tema personalizado?</label>
                  <div className={styles.radioRow}>
                    <label className={styles.radioOption}>
                      <input type="radio" name="wantsCustomTheme" value="yes" />
                      <span className={styles.radioDot} />
                      Sim
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="wantsCustomTheme" value="no" defaultChecked />
                      <span className={styles.radioDot} />
                      Não
                    </label>
                  </div>
                </div>

                <div className={`${styles.field} ${styles.customThemeField}`}>
                  <label className={styles.label} htmlFor="customThemeIdea">
                    Qual tema você imagina? <span className={styles.optional}>(opcional)</span>
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="customThemeIdea"
                    name="customThemeIdea"
                    placeholder="Ex: tema de dinossauro, tema espacial..."
                  />
                </div>
              </div>

              {state.status !== "idle" && state.message && (
                <p
                  className={`${styles.message} ${
                    state.status === "success" ? styles.messageSuccess : styles.messageError
                  }`}
                  role="status"
                >
                  {state.message}
                </p>
              )}

              <SubmitButton />
              <p className={styles.privacy}>
                Seus dados são usados só pra Ace Lab entrar em contato sobre o teste da Claudia.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
