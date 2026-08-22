import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import styles from "./Products.module.css";

export function Products() {
  return (
    <div className={`section ${styles.products}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <p className="eyebrow">produtos</p>
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
            <p className={styles.name}>[Nome do sistema]</p>
            <p className={styles.desc}>
              Sistema de gestão para prestadores de serviço. Ordens de serviço, agenda, clientes e
              histórico em um lugar só.
            </p>
            <Button variant="secondary">Quero ser avisado no lançamento</Button>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
