import { Logo } from "../ui/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={`section ${styles.footer}`}>
      <div className={`container ${styles.row}`}>
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
      <p className={styles.copyright}>© 2026 Ace Lab. Todos os direitos reservados.</p>
    </div>
  );
}
