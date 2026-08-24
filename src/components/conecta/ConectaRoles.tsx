import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { LayersIcon, PenIcon, WavesIcon } from "../ui/icons";
import { conectaRoles } from "@/lib/conecta-data";
import styles from "./ConectaRoles.module.css";

const ICONS = { LayersIcon, PenIcon, WavesIcon };
const ACCENTS = ["var(--cc-teal-500)", "var(--cc-navy-700)", "var(--cc-sol-600)"];

export function ConectaRoles() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <Reveal>
          <p className={styles.eyebrow}>três papéis, um painel</p>
          <h2 className={styles.heading}>O mesmo sistema, uma tela diferente pra cada pessoa.</h2>
          <p className={styles.sub}>
            Não há apps separados — coordenação, professora e associada entram no mesmo painel e
            veem só o que é delas.
          </p>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {conectaRoles.map((role, i) => {
            const Icon = ICONS[role.icon];
            return (
              <RevealItem key={role.tag} className={styles.item}>
                <div className={styles.card} style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}>
                  <Icon width={28} height={28} style={{ color: ACCENTS[i % ACCENTS.length] }} />
                  <p className={styles.tag}>{role.tag}</p>
                  <h3 className={styles.title}>{role.title}</h3>
                  <p className={styles.desc}>{role.desc}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
