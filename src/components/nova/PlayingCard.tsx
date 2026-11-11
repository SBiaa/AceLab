import styles from "./nova.module.css";

type Props = {
  rank: string;
  suit: "♠" | "♥" | "♦" | "♣";
  label?: string;
  className?: string;
};

/** A playing card face: corner indices plus a centre pip or label. */
export function PlayingCard({ rank, suit, label, className = "" }: Props) {
  const red = suit === "♥" || suit === "♦";
  return (
    <span className={`${styles.card} ${red ? styles.cardRed : ""} ${className}`}>
      <span className={styles.index} aria-hidden="true">
        <span>{rank}</span>
        <span>{suit}</span>
      </span>
      <span className={styles.face}>
        <span className={styles.pip} aria-hidden="true">
          {suit}
        </span>
        {label && <span className={styles.cardLabel}>{label}</span>}
      </span>
      <span className={`${styles.index} ${styles.indexFlip}`} aria-hidden="true">
        <span>{rank}</span>
        <span>{suit}</span>
      </span>
    </span>
  );
}
