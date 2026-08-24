import { Reveal } from "../ui/Reveal";
import styles from "./ClaudiaAbout.module.css";

const mechanism = [
  {
    text: (
      <>
        Em vez de gerar conteúdo com IA paga em tempo real, a Claudia{" "}
        <span className={styles.mechTextStrong}>gera a partir de um banco de temas local</span>, curado à
        mão e gratuito — Matemática, Português, História, Geografia e Ciências.
      </>
    ),
  },
  {
    text: (
      <>
        Cada tema já vem com <span className={styles.mechTextStrong}>código da habilidade</span> do
        Currículo da Cidade, descrição pro relatório, materiais e passo a passo da aula.
      </>
    ),
  },
  {
    text: (
      <>
        Tem também um banco separado de <span className={styles.mechTextStrong}>Leitura Diária</span>,
        com textos completos prontos pra ler em voz alta — fábulas, poemas, notícias, receitas, cordel,
        HQ e outros gêneros.
      </>
    ),
  },
  {
    text: (
      <>
        A geração <span className={styles.mechTextStrong}>evita repetir temas recentes</span> e aceita
        busca por palavra-chave, então você nunca fica sem opção.
      </>
    ),
  },
];

export function ClaudiaAbout() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>o que é</p>
          <h2 className={styles.heading}>Uma ferramenta feita pra resolver um problema bem específico.</h2>
          <p className={styles.paragraph}>
            A Claudia nasceu do dia a dia de uma professora do Ensino Fundamental 1 na rede municipal de
            São Paulo (SME-SP). Ela resolve algo bem concreto: montar o plano de aula da semana rápido,
            sem gastar hora com IA paga, e já no formato que precisa ser colado no sistema oficial da
            prefeitura (SGP).
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphLast}`}>
            Nada de jargão técnico ou telas complicadas. A Claudia fala com quem dá aula, não com quem
            programa.
          </p>
        </Reveal>
        <Reveal delay={0.15} className={styles.mechCard}>
          <p className={styles.mechTitle}>Como funciona</p>
          <p className={styles.mechIntro}>O mecanismo central por trás da Claudia:</p>
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
