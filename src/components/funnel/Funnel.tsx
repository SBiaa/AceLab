"use client";

import Link from "next/link";
import { useState, useTransition, type ReactNode } from "react";
import { saveFunnelStep } from "@/app/comecar/actions";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { whatsappLink } from "@/lib/data";
import {
  brandOptions,
  budgetOptions,
  emptyAnswers,
  experienceOptions,
  goalOptions,
  graphicProductOptions,
  GRAPHIC_SERVICES,
  instagramOptions,
  serviceOptions,
  siteOptions,
  STEP_LABELS,
  timelineOptions,
  type FunnelAnswers,
  type Option,
} from "@/lib/funnel-data";
import styles from "./Funnel.module.css";

function SingleChoice({
  options,
  value,
  onChange,
  name,
}: {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <div className={styles.choices} role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          role="radio"
          aria-checked={value === o.value}
          className={`${styles.choice} ${value === o.value ? styles.choiceOn : ""}`}
          onClick={() => onChange(value === o.value ? "" : o.value)}
        >
          <span className={styles.choiceLabel}>{o.label}</span>
          {o.hint && <span className={styles.choiceHint}>{o.hint}</span>}
        </button>
      ))}
    </div>
  );
}

function MultiChoice({
  options,
  values,
  onChange,
}: {
  options: Option[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (v: string) =>
    onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  return (
    <div className={styles.choices}>
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          aria-pressed={values.includes(o.value)}
          className={`${styles.choice} ${values.includes(o.value) ? styles.choiceOn : ""}`}
          onClick={() => toggle(o.value)}
        >
          <span className={styles.choiceLabel}>{o.label}</span>
          {o.hint && <span className={styles.choiceHint}>{o.hint}</span>}
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  optional,
  htmlFor,
  children,
}: {
  label: string;
  optional?: boolean;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label} {optional && <span className={styles.optional}>(opcional)</span>}
      </label>
      {children}
    </div>
  );
}

export function Funnel() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<FunnelAnswers>(emptyAnswers);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  const set = <K extends keyof FunnelAnswers>(key: K, value: FunnelAnswers[K]) =>
    setAnswers((a) => ({ ...a, [key]: value }));

  const wantsGraphic = answers.services.some((s) => GRAPHIC_SERVICES.includes(s));
  const steps = wantsGraphic ? [1, 2, 3, 4, 5] : [1, 2, 3, 5];
  const position = steps.indexOf(step);
  const isLast = step === 5;

  function validate(): string {
    if (step === 1) {
      if (!answers.name.trim() || !answers.phone.trim() || !answers.email.trim()) {
        return "Preenche nome, WhatsApp e email pra seguir.";
      }
      if (!answers.businessName.trim()) return "Qual o nome do seu negócio?";
    }
    if (step === 3 && answers.services.length === 0) {
      return "Escolhe pelo menos uma opção — se tiver dúvida, marca “Não sei, quero orientação”.";
    }
    return "";
  }

  function advance() {
    const problem = validate();
    if (problem) return setError(problem);
    setError("");

    startTransition(async () => {
      const result = await saveFunnelStep(leadId, step, answers, isLast);
      if (!result.ok) return setError(result.message);
      setLeadId(result.leadId);
      if (isLast) {
        setDone(true);
      } else {
        setStep(steps[position + 1]);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function back() {
    setError("");
    if (position > 0) setStep(steps[position - 1]);
  }

  if (done) {
    return (
      <main className={styles.page}>
        <div className={styles.topbar}>
          <Logo height={26} />
        </div>
        <div className={styles.card}>
          <p className={styles.eyebrow}>tudo certo</p>
          <h1 className={styles.title}>Recebemos, {answers.name.split(" ")[0]}!</h1>
          <p className={styles.lead}>
            A gente vai ler tudo com carinho e te chamar no WhatsApp com uma proposta pensada pro seu negócio.
          </p>
          <div className={styles.actions}>
            <Button variant="accent" size="lg" href={whatsappLink}>
              Adiantar a conversa no WhatsApp
            </Button>
            <Button variant="ghost" size="lg" href="/">
              Voltar pro site
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.topbar}>
        <Logo height={26} />
        <Link href="/" className={styles.backLink}>
          ← Voltar ao site
        </Link>
      </div>

      <div className={styles.progress} aria-label={`Etapa ${position + 1} de ${steps.length}`}>
        {steps.map((s, i) => (
          <div key={s} className={`${styles.progressBar} ${i <= position ? styles.progressBarOn : ""}`} />
        ))}
      </div>
      <p className={styles.stepName}>
        {position + 1} de {steps.length} · {STEP_LABELS[step - 1]}
      </p>

      <form
        className={styles.card}
        onSubmit={(e) => {
          e.preventDefault();
          advance();
        }}
      >
        {step === 1 && (
          <>
            <h1 className={styles.title}>Vamos nos conhecer?</h1>
            <p className={styles.lead}>Leva uns 2 minutinhos. Quanto mais você contar, melhor a nossa proposta.</p>
            <Field label="Seu nome" htmlFor="name">
              <input
                id="name"
                className={styles.input}
                autoComplete="name"
                value={answers.name}
                onChange={(e) => set("name", e.target.value)}
              />
            </Field>
            <div className={styles.row}>
              <Field label="WhatsApp" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="(11) 9xxxx-xxxx"
                  autoComplete="tel"
                  value={answers.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  autoComplete="email"
                  value={answers.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>
            </div>
            <Field label="Nome do seu negócio" htmlFor="businessName">
              <input
                id="businessName"
                className={styles.input}
                value={answers.businessName}
                onChange={(e) => set("businessName", e.target.value)}
              />
            </Field>
            <Field label="O que ele faz?" optional htmlFor="businessSegment">
              <input
                id="businessSegment"
                className={styles.input}
                placeholder="Ex: confeitaria, clínica de estética, loja de roupas…"
                value={answers.businessSegment}
                onChange={(e) => set("businessSegment", e.target.value)}
              />
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className={styles.title}>Como está o seu negócio hoje?</h1>
            <p className={styles.lead}>Sem certo ou errado — é só pra gente saber de onde partir.</p>
            <Field label="Você tem site?">
              <SingleChoice name="Site" options={siteOptions} value={answers.hasSite} onChange={(v) => set("hasSite", v)} />
            </Field>
            {answers.hasSite === "sim" && (
              <Field label="Qual o endereço?" optional htmlFor="siteUrl">
                <input
                  id="siteUrl"
                  className={styles.input}
                  placeholder="www.meusite.com.br"
                  value={answers.siteUrl}
                  onChange={(e) => set("siteUrl", e.target.value)}
                />
              </Field>
            )}
            <Field label="E Instagram?">
              <SingleChoice
                name="Instagram"
                options={instagramOptions}
                value={answers.instagram}
                onChange={(v) => set("instagram", v)}
              />
            </Field>
            {(answers.instagram === "ativo" || answers.instagram === "parado") && (
              <Field label="Qual o @?" optional htmlFor="instagramHandle">
                <input
                  id="instagramHandle"
                  className={styles.input}
                  placeholder="@meunegocio"
                  value={answers.instagramHandle}
                  onChange={(e) => set("instagramHandle", e.target.value)}
                />
              </Field>
            )}
            <Field label="E a sua marca (logo, cores)?">
              <SingleChoice
                name="Marca"
                options={brandOptions}
                value={answers.brandStatus}
                onChange={(v) => set("brandStatus", v)}
              />
            </Field>
            <Field label="Quanto você conhece de marketing digital?">
              <SingleChoice
                name="Conhecimento"
                options={experienceOptions}
                value={answers.experience}
                onChange={(v) => set("experience", v)}
              />
            </Field>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className={styles.title}>O que você está procurando?</h1>
            <p className={styles.lead}>Pode marcar quantos quiser.</p>
            <MultiChoice options={serviceOptions} values={answers.services} onChange={(v) => set("services", v)} />
          </>
        )}

        {step === 4 && (
          <>
            <h1 className={styles.title}>Vamos falar de material gráfico</h1>
            <p className={styles.lead}>Quanto mais referência você trouxer, mais certeiro fica o resultado.</p>
            <Field label="Quais peças você precisa?" optional>
              <MultiChoice
                options={graphicProductOptions}
                values={answers.graphicProducts}
                onChange={(v) => set("graphicProducts", v)}
              />
            </Field>
            <Field label="Referências" optional htmlFor="references">
              <textarea
                id="references"
                className={styles.textarea}
                placeholder="Cole links de perfis, sites ou imagens que você curte (um por linha) — pode ser de concorrente também."
                value={answers.references}
                onChange={(e) => set("references", e.target.value)}
              />
            </Field>
            <Field label="Estilo, cores ou algo que você quer (ou não quer)" optional htmlFor="styleNotes">
              <textarea
                id="styleNotes"
                className={styles.textarea}
                placeholder="Ex: gosto de algo clean, com tons de verde. Não quero nada infantil."
                value={answers.styleNotes}
                onChange={(e) => set("styleNotes", e.target.value)}
              />
            </Field>
          </>
        )}

        {step === 5 && (
          <>
            <h1 className={styles.title}>Última etapa</h1>
            <p className={styles.lead}>Só pra gente acertar o tom da proposta.</p>
            <Field label="Qual o seu principal objetivo?">
              <SingleChoice name="Objetivo" options={goalOptions} value={answers.goal} onChange={(v) => set("goal", v)} />
            </Field>
            <Field label="Pra quando você precisa?">
              <SingleChoice
                name="Prazo"
                options={timelineOptions}
                value={answers.timeline}
                onChange={(v) => set("timeline", v)}
              />
            </Field>
            <Field label="Quanto pensa em investir?" optional>
              <SingleChoice
                name="Investimento"
                options={budgetOptions}
                value={answers.budget}
                onChange={(v) => set("budget", v)}
              />
            </Field>
            <Field label="Mais alguma coisa que a gente precisa saber?" optional htmlFor="notes">
              <textarea
                id="notes"
                className={styles.textarea}
                value={answers.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </Field>
          </>
        )}

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <div className={styles.actions}>
          {position > 0 && (
            <Button variant="ghost" size="lg" onClick={back} disabled={pending}>
              Voltar
            </Button>
          )}
          <Button variant="primary" size="lg" type="submit" disabled={pending}>
            {pending ? "Salvando..." : isLast ? "Enviar" : "Continuar"}
          </Button>
        </div>
        {step === 1 && (
          <p className={styles.privacy}>Seus dados são usados só pra Ace Lab entrar em contato com você.</p>
        )}
      </form>
    </main>
  );
}
