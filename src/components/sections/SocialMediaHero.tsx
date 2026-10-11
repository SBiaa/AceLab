import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { whatsappLink } from "@/lib/data";
import { HeroParallax } from "./HeroParallax";
import styles from "./Hero.module.css";

export function SocialMediaHero() {
  return (
    <HeroParallax className={`${styles.hero} grain`}>
      <div className={`container section ${styles.inner}`}>
        <Reveal delay={0.08}>
          <h1 className={`h-display ${styles.headline}`}>
            Presença nas redes que gera resultado de verdade.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className={`bodyCopy ${styles.subhead}`}>
            Gestão de Instagram, Facebook, Google Meu Negócio e WhatsApp Business com estratégia
            por trás — não só post bonito.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Button variant="accent" size="lg" href={whatsappLink}>
            Falar no WhatsApp
          </Button>
        </Reveal>
      </div>
    </HeroParallax>
  );
}
