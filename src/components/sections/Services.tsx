import { Star } from "../ui/Star";
import { Card } from "../ui/Card";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { services } from "@/lib/data";
import styles from "./Services.module.css";

export function Services() {
  return (
    <div className="section container">
      <Reveal>
        <p className="eyebrow" style={{ textAlign: "center" }}>
          serviços
        </p>
        <h2 className={`h-display ${styles.heading}`}>Tudo que sua marca precisa, em um só lugar.</h2>
      </Reveal>
      <RevealGroup className={styles.grid}>
        {services.map((svc) => (
          <RevealItem key={svc.title}>
            <Card tone="paper" star padding="lg" eyebrow={svc.eyebrow} title={svc.title}>
              <p className={styles.desc}>{svc.desc}</p>
              {svc.items.map((it) => (
                <div className={styles.itemRow} key={it}>
                  <Star size={10} color="plum" className={styles.itemStar} />
                  <p className={styles.itemText}>{it}</p>
                </div>
              ))}
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
