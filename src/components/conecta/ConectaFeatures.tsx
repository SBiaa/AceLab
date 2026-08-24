import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import {
  TargetIcon,
  CalendarIcon,
  WalletIcon,
  HeartIcon,
  ChatIcon,
  UsersIcon,
  SparkleIcon,
  ShieldIcon,
} from "../ui/icons";
import { conectaFeatures } from "@/lib/conecta-data";
import styles from "./ConectaFeatures.module.css";

const ICONS = {
  TargetIcon,
  CalendarIcon,
  WalletIcon,
  HeartIcon,
  ChatIcon,
  UsersIcon,
  SparkleIcon,
  ShieldIcon,
};

const ACCENTS = ["var(--cc-teal-500)", "var(--cc-navy-700)", "var(--cc-sol-600)", "var(--cc-teal-700)"];

export function ConectaFeatures() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <Reveal>
          <p className={styles.eyebrow}>funcionalidades</p>
          <h2 className={styles.heading}>O que o Conecta faz pela operação.</h2>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {conectaFeatures.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <RevealItem key={f.title} className={styles.item}>
                <div className={styles.card}>
                  <Icon width={30} height={30} style={{ color: ACCENTS[i % ACCENTS.length] }} />
                  <h3 className={styles.title}>{f.title}</h3>
                  <p className={styles.desc}>{f.desc}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
