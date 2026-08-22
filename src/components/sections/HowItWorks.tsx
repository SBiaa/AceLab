import { Reveal } from "../ui/Reveal";
import { StepsTimeline } from "./StepsTimeline";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <div className="section container">
      <Reveal>
        <p className="eyebrow" style={{ textAlign: "center" }}>
          como funciona
        </p>
        <h2 className={`h-display ${styles.heading}`}>Simples assim.</h2>
      </Reveal>
      <StepsTimeline />
    </div>
  );
}
