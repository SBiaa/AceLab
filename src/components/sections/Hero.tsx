import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { whatsappLink } from "@/lib/data";
import { HeroOrbit } from "./HeroOrbit";
import { HeroParallax } from "./HeroParallax";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <HeroParallax className={`${styles.hero} grain`}>
      <div className={`container section ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal delay={0.08}>
            <h1 className={`h-display ${styles.headline}`}>
              Sua marca não mostra o quanto seu negócio é bom.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={`bodyCopy ${styles.subhead}`}>
              Somos o laboratório criativo que transforma pequenos negócios em marcas de verdade —
              design, marketing e tecnologia, tudo em um lugar só.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Button variant="accent" size="lg" href={whatsappLink}>
              Falar no WhatsApp
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.2} className={styles.orbitWrap}>
          <HeroOrbit />
        </Reveal>
      </div>
    </HeroParallax>
  );
}
