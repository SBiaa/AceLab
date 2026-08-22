import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import styles from "./Products.module.css";

const AMBIENT_STARS = [
  { size: 12, top: "12%", right: "8%", opacity: 0.24, duration: 10, driftX: -8, driftY: 8 },
  { size: 16, bottom: "16%", right: "30%", opacity: 0.2, duration: 12, delay: 2, driftX: 8, driftY: -6 },
  { size: 9, top: "60%", left: "5%", opacity: 0.26, duration: 8.5, delay: 0.6, driftX: 6, driftY: 8 },
];

export function Products() {
  return (
    <div className={`section grain ${styles.products}`}>
      <StarField stars={AMBIENT_STARS} />
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <p className="eyebrow" style={{ color: "var(--crimson-300)" }}>
              produtos
            </p>
            <h2 className={`h-display ${styles.heading}`}>
              Além do serviço, a gente também constrói.
            </h2>
            <p className={`bodyCopy ${styles.paragraph}`}>
              A Ace Lab desenvolve sistemas próprios pensados pra realidade do pequeno negócio
              brasileiro. Ferramentas simples, acessíveis e feitas por quem entende a dor de quem
              tá do outro lado.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Card tone="paper" padding="lg">
            <Badge tone="crimson" star className={styles.badge}>
              Em desenvolvimento
            </Badge>
            <p className={styles.name}>Endy</p>
            <p className={styles.desc}>
              Agenda escolar para creches e escolas infantis. Rotina do dia, atividades, fotos e
              avisos em um painel só — a família acompanha tudo em tempo real.
            </p>
            <Button variant="secondary">Quero ser avisado no lançamento</Button>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
