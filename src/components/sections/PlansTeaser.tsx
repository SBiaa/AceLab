import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { plans } from "@/lib/data";
import styles from "./PlansTeaser.module.css";

export function PlansTeaser() {
  return (
    <div className={`section ${styles.wrap}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <p className="eyebrow">planos de social media</p>
            <h2 className={`h-display ${styles.heading}`}>
              Gestão de redes sob medida pro momento do seu negócio.
            </h2>
            <p className={`bodyCopy ${styles.paragraph}`}>
              De R$ 500 a R$ 1.500/mês — Google Meu Negócio, Instagram, Facebook, WhatsApp
              Business e tráfego pago, com relatório todo mês. Veja o plano certo pra você.
            </p>
            <Button variant="accent" size="lg" href="/social-media">
              Ver planos de social media
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Card tone="paper" padding="lg" star>
            <p className={styles.cardTitle}>3 planos, do primeiro passo à presença completa</p>
            {plans.map((plan) => (
              <div className={styles.planRow} key={plan.name}>
                <span className={styles.planName}>{plan.name}</span>
                <span className={styles.planPrice}>{plan.price}</span>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
