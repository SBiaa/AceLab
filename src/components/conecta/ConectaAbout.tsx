import { Reveal } from "../ui/Reveal";
import styles from "./ConectaAbout.module.css";

const mechanism = [
  {
    text: (
      <>
        Cada associada tem uma <span className={styles.mechTextStrong}>matrícula</span> com a
        frequência contratada — 2, 3 ou 4 aulas por semana — combinando turmas até fechar
        exatamente esse número de dias.
      </>
    ),
  },
  {
    text: (
      <>
        A chamada vira <span className={styles.mechTextStrong}>frequência calculada na hora</span>{" "}
        — ótima, boa, atenção ou baixa — visível pra professora, coordenação e pra própria
        associada.
      </>
    ),
  },
  {
    text: (
      <>
        O financeiro nunca mistura as coisas: mostra{" "}
        <span className={styles.mechTextStrong}>o que entrou/saiu num dia</span> e{" "}
        <span className={styles.mechTextStrong}>o que foi cobrado/pago num mês</span> lado a lado,
        sempre.
      </>
    ),
  },
  {
    text: (
      <>
        Não existe bloqueio automático por inadimplência — o sistema só{" "}
        <span className={styles.mechTextStrong}>lista quem está pendente</span> pra cobrança
        manual da coordenação.
      </>
    ),
  },
];

export function ConectaAbout() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>o que é</p>
          <h2 className={styles.heading}>Feito pra rotina de uma ONG, não pra academia comercial.</h2>
          <p className={styles.paragraph}>
            A Novo Millenium nasceu do trabalho informal do pai da fundadora, que ajudava vizinhos
            da Vila Santo Antônio. Hoje são mais de 10 anos de história e mais de 3.000 mulheres
            impactadas — e até pouco tempo, tudo isso era controlado fora de um sistema único.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphLast}`}>
            O Conecta organiza turmas, matrículas, presença, pagamentos e saúde das associadas num
            só painel — com uma decisão de produto clara em cada tela: linguagem que não julga o
            corpo e senha fácil de lembrar pro público da melhor idade.
          </p>
        </Reveal>
        <Reveal delay={0.15} className={styles.mechCard}>
          <p className={styles.mechTitle}>Como o sistema é organizado</p>
          <p className={styles.mechIntro}>O mecanismo central por trás do Conecta:</p>
          <div className={styles.mechList}>
            {mechanism.map((item, i) => (
              <div className={styles.mechItem} key={i}>
                <span className={styles.mechDot}>{i + 1}</span>
                <p className={styles.mechText}>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
