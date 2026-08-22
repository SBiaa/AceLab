import { Star } from "../ui/Star";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { Reveal } from "../ui/Reveal";
import { painPoints } from "@/lib/data";
import styles from "./PainPoints.module.css";

export function PainPoints() {
  return (
    <div className="section container">
      <div className={styles.grid}>
        <Reveal>
          <div>
            <p className="eyebrow">o problema</p>
            <h2 className="h-display" style={{ fontSize: "var(--text-h1)" }}>
              Seu negócio é bom. Sua marca precisa mostrar isso.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ImagePlaceholder label="Foto ou ilustração do negócio" className={styles.image} />
        </Reveal>
        <Reveal delay={0.2}>
          <div className={styles.list}>
            {painPoints.map((p) => (
              <div className={styles.point} key={p.text}>
                <Star size={14} color="crimson" className={styles.star} />
                <p className="bodyCopy">{p.text}</p>
              </div>
            ))}
            <p className={`bodyCopy ${styles.closing}`}>
              A gente resolve. Você foca no que sabe fazer.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
