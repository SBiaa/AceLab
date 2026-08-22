import { Card } from "../ui/Card";
import { Star } from "../ui/Star";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import { CameraIcon, CodeIcon, PenIcon, TrendUpIcon } from "../ui/icons";
import { services } from "@/lib/data";
import styles from "./Services.module.css";

const ICONS = [PenIcon, TrendUpIcon, CameraIcon, CodeIcon];

const AMBIENT_STARS = [
  { size: 12, top: "10%", right: "8%", opacity: 0.22, duration: 10, driftX: -8, driftY: 8 },
  { size: 9, bottom: "14%", left: "6%", opacity: 0.24, duration: 8.5, delay: 1, driftX: 6, driftY: -6 },
];

export function Services() {
  return (
    <div className={`section grain ${styles.wrap}`}>
      <StarField stars={AMBIENT_STARS} />
      <div className={`container ${styles.content}`}>
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center", color: "var(--crimson-300)" }}>
            serviços
          </p>
          <h2 className={`h-display ${styles.heading}`}>Tudo que sua marca precisa, em um só lugar.</h2>
        </Reveal>
        <RevealGroup className={styles.grid}>
          {services.map((svc, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <RevealItem key={svc.title} className={styles.item}>
                <Card tone="paper" padding="lg" className={styles.card}>
                  <div className={styles.header}>
                    <div className={styles.iconBadge}>
                      <Icon width={22} height={22} />
                    </div>
                    <div>
                      <p className={styles.eyebrow}>{svc.eyebrow}</p>
                      <h3 className={styles.title}>{svc.title}</h3>
                    </div>
                  </div>
                  <p className={styles.desc}>{svc.desc}</p>
                  <div className={styles.items}>
                    {svc.items.map((it) => (
                      <div className={styles.itemRow} key={it}>
                        <Star size={9} color="plum" className={styles.itemStar} />
                        <p className={styles.itemText}>{it}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
