import { Logo } from "../ui/Logo";
import { StarField } from "../ui/StarField";
import styles from "./Footer.module.css";

const AMBIENT_STARS = [
  { size: 10, top: "20%", right: "16%", opacity: 0.16, duration: 11, driftX: -8, driftY: 6 },
  { size: 8, bottom: "24%", left: "42%", opacity: 0.14, duration: 9, delay: 1, driftX: 6, driftY: -6 },
];

export function Footer() {
  return (
    <div className={`section grain ${styles.footer}`}>
      <StarField stars={AMBIENT_STARS} />
      <div className={`container ${styles.row} ${styles.content}`}>
        <div>
          <Logo height={28} invert />
          <p className={styles.tagline}>Laboratório Criativo — sua marca do jeito que ela merece ser.</p>
        </div>
        <div className={styles.contact}>
          <span>tel — 11 9 3407 0411</span>
          <span>instagram — @acelab</span>
          <span>email — contato@acelab.com.br</span>
        </div>
      </div>
      <p className={`${styles.copyright} ${styles.content}`}>© 2026 Ace Lab. Todos os direitos reservados.</p>
    </div>
  );
}
