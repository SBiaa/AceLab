import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { clients } from "@/lib/data";
import styles from "./Clients.module.css";

export function Clients() {
  return (
    <div className="section container">
      <Reveal>
        <p className="eyebrow" style={{ textAlign: "center" }}>
          clientes
        </p>
        <h2 className={`h-display ${styles.heading}`} style={{ fontSize: "var(--text-h1)" }}>
          Quem já confia na Ace Lab
        </h2>
        <p className={`bodyCopy ${styles.subhead}`}>Cada projeto é diferente. Cada cliente, também.</p>
      </Reveal>
      <RevealGroup className={styles.row}>
        {clients.map((c) => (
          <RevealItem key={c} className={styles.name}>
            {c}
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
