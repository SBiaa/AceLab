import { ConectaButton } from "./ui/ConectaButton";
import { Reveal } from "../ui/Reveal";
import { SparkleIcon } from "../ui/icons";
import { whatsappLink } from "@/lib/data";
import styles from "./ConectaCta.module.css";

export function ConectaCta() {
  return (
    <div className={styles.wrap} id="quero-um-sistema">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.eyebrow}>quero um sistema assim</p>
          <h2 className={styles.heading}>Seu negócio ou ONG também pode ter um Conecta.</h2>
          <p className={styles.sub}>
            O Conecta foi construído do zero pra realidade da Novo Millenium. A Ace Lab desenvolve
            sistemas sob medida do mesmo jeito — sem fórmula pronta, pensado pra quem vai usar de
            verdade no dia a dia.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ConectaButton
            variant="primary"
            size="lg"
            href={whatsappLink}
            icon={<SparkleIcon width={18} height={18} />}
          >
            Falar com a Ace Lab no WhatsApp
          </ConectaButton>
        </Reveal>
      </div>
    </div>
  );
}
