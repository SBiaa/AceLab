import { Reveal } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import { StepsTimeline } from "./StepsTimeline";
import styles from "./HowItWorks.module.css";

const AMBIENT_STARS = [
  { size: 14, top: "10%", right: "8%", opacity: 0.22, duration: 11, driftX: -8, driftY: 8 },
  { size: 10, bottom: "14%", left: "6%", opacity: 0.2, duration: 13, delay: 1.2, driftX: 8, driftY: -8 },
];

export function HowItWorks() {
  return (
    <div className={`section grain ${styles.wrap}`} id="como-funciona">
      <StarField stars={AMBIENT_STARS} />
      <div className={`container ${styles.content}`}>
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center", color: "var(--crimson-300)" }}>
            como funciona
          </p>
          <h2 className={`h-display ${styles.heading}`}>Simples assim.</h2>
        </Reveal>
        <StepsTimeline />
      </div>
    </div>
  );
}
