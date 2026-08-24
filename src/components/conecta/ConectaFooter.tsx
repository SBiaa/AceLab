import Link from "next/link";
import styles from "./ConectaFooter.module.css";

export function ConectaFooter() {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>
          <div className={styles.brand}>
            <span className={styles.brandMark}>C</span>
            <span className={styles.brandName}>Conecta</span>
          </div>
          <p className={styles.tagline}>Uma ONG inteira, organizada em um sistema só.</p>
        </div>
        <p className={styles.credit}>
          Feito pela{" "}
          <Link href="/" target="_blank" rel="noopener noreferrer">
            Ace Lab
          </Link>{" "}
          para a Novo Millenium
        </p>
      </div>
      <p className={`container ${styles.copyright}`}>© 2026 Conecta. Todos os direitos reservados.</p>
    </div>
  );
}
