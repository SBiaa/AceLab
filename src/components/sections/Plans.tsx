import { Star } from "../ui/Star";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { plans, whatsappLink } from "@/lib/data";
import styles from "./Plans.module.css";

export function Plans() {
  return (
    <div className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center" }}>
            planos de social media
          </p>
          <h2 className={`h-display ${styles.heading}`}>Planos mensais de gestão de redes</h2>
          <p className={`bodyCopy ${styles.subhead}`}>Escolha o plano do momento do seu negócio.</p>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {plans.map((plan) => (
            <RevealItem key={plan.name} className={styles.card}>
              <Card
                tone={plan.tone}
                gradient={plan.gradient}
                padding="lg"
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                <div className={styles.cardInner}>
                  <div>
                    <p className={styles.name} style={{ color: plan.textColor }}>
                      {plan.name}
                    </p>
                    <p className={styles.price} style={{ color: plan.textColor }}>
                      {plan.price}
                    </p>
                    <p className={styles.tagline} style={{ color: plan.mutedColor }}>
                      {plan.tagline}
                    </p>
                  </div>
                  <div className={styles.features}>
                    {plan.features.map((f) => (
                      <div className={styles.featureRow} key={f}>
                        <Star size={10} color={plan.starColor} className={styles.featureStar} />
                        <p className={styles.featureText} style={{ color: plan.textColor }}>
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button variant={plan.buttonVariant} fullWidth href={whatsappLink}>
                    Quero esse plano
                  </Button>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal>
          <p className={`bodyCopy ${styles.footNote}`}>
            Precisa de algo diferente? A gente monta um plano sob medida pro seu negócio.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
