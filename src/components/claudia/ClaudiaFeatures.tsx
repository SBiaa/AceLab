import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import {
  LayersIcon,
  TargetIcon,
  CodeIcon,
  ImageIcon,
  TrophyIcon,
  FlagIcon,
  UsersIcon,
  PenIcon,
} from "../ui/icons";
import { claudiaFeatures } from "@/lib/claudia-data";
import styles from "./ClaudiaFeatures.module.css";

const ICONS = {
  LayersIcon,
  TargetIcon,
  CodeIcon,
  ImageIcon,
  TrophyIcon,
  FlagIcon,
  UsersIcon,
  PenIcon,
};

const ACCENTS = ["var(--cd-orange-500)", "var(--cd-indigo-500)", "var(--cd-teal-600)", "var(--cd-yellow-600)"];

export function ClaudiaFeatures() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <Reveal>
          <p className={styles.eyebrow}>funcionalidades</p>
          <h2 className={styles.heading}>O que a Claudia faz por você.</h2>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {claudiaFeatures.map((f, i) => {
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
