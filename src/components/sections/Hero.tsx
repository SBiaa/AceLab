import { Logo } from "../ui/Logo";
import { Star } from "../ui/Star";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { whatsappLink } from "@/lib/data";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <Star size={220} color="white" className={styles.starTopRight} />
      <Star size={220} color="white" className={styles.starBottomLeft} />
      <div className={`container section ${styles.inner}`}>
        <Reveal>
          <Logo height={32} invert />
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className={`h-display ${styles.headline}`}>
            Design, marketing e tecnologia pra sua marca crescer.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className={`bodyCopy ${styles.subhead}`}>
            Somos um laboratório criativo que transforma pequenos negócios em marcas de verdade. Do
            logo ao sistema, tudo em um lugar só.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Button variant="accent" size="lg" href={whatsappLink}>
            Falar no WhatsApp
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
