import Image from "next/image";
import Link from "next/link";
import styles from "./ClaudiaFooter.module.css";

export function ClaudiaFooter() {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>
          <div className={styles.brand}>
            <Image src="/images/claudia/logo-mark.svg" alt="" width={28} height={28} />
            <span className={styles.brandName}>Claudia</span>
          </div>
          <p className={styles.tagline}>Planos de aula prontos em minutos, não horas.</p>
        </div>
        <p className={styles.credit}>
          Feito pela{" "}
          <Link href="/" target="_blank" rel="noopener noreferrer">
            Ace Lab
          </Link>
        </p>
      </div>
      <p className={`container ${styles.copyright}`}>© 2026 Claudia. Todos os direitos reservados.</p>
    </div>
  );
}
