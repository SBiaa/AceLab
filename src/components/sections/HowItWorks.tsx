import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { steps } from "@/lib/data";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <div className="section container">
      <Reveal>
        <p className="eyebrow" style={{ textAlign: "center" }}>
          como funciona
        </p>
        <h2 className={`h-display ${styles.heading}`}>Simples assim.</h2>
      </Reveal>
      <RevealGroup className={styles.grid}>
        {steps.map((st) => (
          <RevealItem key={st.n} className={styles.step}>
            <p className={styles.number}>{st.n}</p>
            <p className={styles.title}>{st.title}</p>
            <p className={`bodyCopy ${styles.desc}`}>{st.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
