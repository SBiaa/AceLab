import Link from "next/link";
import Image from "next/image";
import { ClaudiaBadge } from "./ui/ClaudiaBadge";
import { ClaudiaButton } from "./ui/ClaudiaButton";
import { Reveal } from "../ui/Reveal";
import { SparkleIcon } from "../ui/icons";
import styles from "./ClaudiaHero.module.css";

export function ClaudiaHero() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.brand}>
          <Image src="/images/claudia/logo-mark.svg" alt="" width={36} height={36} />
          <span className={styles.brandName}>Claudia</span>
        </div>
        <div className={styles.navRight}>
          <Link href="/" className={styles.backLink}>
            ← site da Ace Lab
          </Link>
          <ClaudiaButton variant="primary" size="sm" href="#quero-testar">
            Quero testar
          </ClaudiaButton>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.copy}>
            <Reveal>
              <ClaudiaBadge tone="primary" star className={styles.badge}>
                Feito para professoras da rede municipal
              </ClaudiaBadge>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className={styles.headline}>Planos de aula prontos em minutos, não horas.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className={styles.subhead}>
                A Claudia gera temas de um banco curado à mão, já no formato certo pra colar no
                SGP — sem gastar hora com IA paga. E tem até um tema de gatinho andando pela tela.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className={styles.actions}>
                <ClaudiaButton
                  variant="primary"
                  size="lg"
                  href="#quero-testar"
                  icon={<SparkleIcon width={18} height={18} />}
                >
                  Quero testar a Claudia
                </ClaudiaButton>
                <ClaudiaButton variant="ghost" size="lg" href="#telas">
                  Ver telas do sistema
                </ClaudiaButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className={styles.visual}>
            captura da plataforma
          </Reveal>
        </div>
      </div>
    </>
  );
}
