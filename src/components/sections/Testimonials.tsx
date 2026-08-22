import { Card } from "../ui/Card";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { testimonials } from "@/lib/data";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <div className="section container">
      <Reveal>
        <p className="eyebrow" style={{ textAlign: "center" }}>
          depoimentos
        </p>
        <h2 className={`h-display ${styles.heading}`} style={{ fontSize: "var(--text-h1)" }}>
          O que dizem sobre a gente
        </h2>
      </Reveal>
      <RevealGroup className={styles.grid}>
        {testimonials.map((t) => (
          <RevealItem key={t.name}>
            <Card tone="soft" padding="lg">
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <p className={styles.name}>{t.name}</p>
              <p className={styles.role}>{t.role}</p>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
