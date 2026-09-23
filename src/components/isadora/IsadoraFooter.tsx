import { isadoraEvent } from "@/lib/isadora-data";
import styles from "./IsadoraFooter.module.css";

export function IsadoraFooter() {
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>
        Com <span className={styles.heart}>♥</span> pela família da {isadoraEvent.name} — te esperamos na marcha!
      </p>
    </div>
  );
}
