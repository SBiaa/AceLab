import { Reveal } from "../ui/Reveal";
import { IsadoraCountdown } from "./IsadoraCountdown";
import { isadoraEvent } from "@/lib/isadora-data";
import styles from "./IsadoraDetails.module.css";

export function IsadoraDetails() {
  return (
    <div className={styles.wrap} id="detalhes">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>Ordem do dia 🪖</h2>
          <p className={styles.intro}>Anota aí no calendário do batalhão:</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className={styles.card}>
            <div className={styles.rows}>
              <div className={styles.row}>
                <span className={styles.icon}>📅</span>
                <div>
                  <p className={styles.rowTitle}>Data</p>
                  <p className={styles.rowValue}>{isadoraEvent.dateLabel}</p>
                </div>
              </div>
              <div className={styles.row}>
                <span className={styles.icon}>⏰</span>
                <div>
                  <p className={styles.rowTitle}>Horário</p>
                  <p className={styles.rowValue}>{isadoraEvent.timeLabel}</p>
                </div>
              </div>
              <div className={styles.row}>
                <span className={styles.icon}>📍</span>
                <div>
                  <p className={styles.rowTitle}>Local</p>
                  <p className={styles.rowValue}>{isadoraEvent.addressLabel ?? isadoraEvent.city}</p>
                  {!isadoraEvent.addressLabel && (
                    <p className={styles.rowNote}>Endereço completo em breve — fica de olho!</p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <p className={styles.countdownLabel}>Contagem regressiva</p>
            <IsadoraCountdown targetISO={isadoraEvent.dateISO} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
