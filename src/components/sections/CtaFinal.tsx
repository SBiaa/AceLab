import { Star } from "../ui/Star";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { whatsappLink } from "@/lib/data";
import styles from "./CtaFinal.module.css";

export function CtaFinal() {
  return (
    <div className={`section ${styles.cta}`}>
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
