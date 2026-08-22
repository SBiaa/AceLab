import { Star } from "../ui/Star";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import { whatsappLink } from "@/lib/data";
import styles from "./CtaFinal.module.css";

const AMBIENT_STARS = [
  { size: 14, top: "18%", left: "10%", opacity: 0.16, duration: 10, driftX: 8, driftY: -8 },
  { size: 10, bottom: "16%", right: "16%", opacity: 0.18, duration: 9, delay: 1.2, driftX: -6, driftY: 8 },
];

export function CtaFinal() {
  return (
    <div className={`section grain ${styles.cta}`}>
      <StarField stars={AMBIENT_STARS} />
      <Star size={280} color="white" className={styles.star} />
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={`h-display ${styles.heading}`} style={{ fontSize: "var(--text-h1)" }}>
            Pronto pra começar?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className={`bodyCopy ${styles.subhead}`}>
            O primeiro passo é uma conversa. Sem compromisso, sem enrolação.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <Button variant="accent" size="lg" href={whatsappLink}>
            Falar no WhatsApp
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
