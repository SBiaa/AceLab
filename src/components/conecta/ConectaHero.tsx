import Link from "next/link";
import { ConectaBadge } from "./ui/ConectaBadge";
import { ConectaButton } from "./ui/ConectaButton";
import { Reveal } from "../ui/Reveal";
import { SparkleIcon } from "../ui/icons";
import { whatsappLink } from "@/lib/data";
import styles from "./ConectaHero.module.css";

export function ConectaHero() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>C</span>
          <span className={styles.brandName}>Conecta</span>
        </div>
        <div className={styles.navRight}>
          <Link href="/" className={styles.backLink}>
            ← site da Ace Lab
          </Link>
          <ConectaButton variant="primary" size="sm" href={whatsappLink}>
            Falar com a Ace Lab
          </ConectaButton>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.copy}>
            <Reveal>
              <ConectaBadge tone="primary" star className={styles.badge}>
                Sistema sob medida — em uso pela Novo Millenium
              </ConectaBadge>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className={styles.headline}>Uma ONG inteira, organizada em um sistema só.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className={styles.subhead}>
                O Conecta junta matrículas, frequência, financeiro, saúde e feed social num painel
                único — pensado pro público da melhor idade que a Novo Millenium atende no projeto
                Viva Bem com Hidro.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className={styles.actions}>
                <ConectaButton
                  variant="primary"
                  size="lg"
                  href="#telas"
                  icon={<SparkleIcon width={18} height={18} />}
                >
                  Ver telas do sistema
                </ConectaButton>
                <ConectaButton variant="ghost" size="lg" href="#quero-um-sistema">
                  Quero um sistema assim
                </ConectaButton>
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
