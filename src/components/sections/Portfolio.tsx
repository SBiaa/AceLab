"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { Reveal } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import { filterNames, work } from "@/lib/data";
import styles from "./Portfolio.module.css";

const AMBIENT_STARS = [
  { size: 12, top: "8%", left: "10%", opacity: 0.22, duration: 10, driftX: 8, driftY: -8 },
  { size: 16, bottom: "12%", right: "10%", opacity: 0.2, duration: 12.5, delay: 1.6, driftX: -8, driftY: 8 },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterNames)[number]>("Todos");

  const filteredWork = activeFilter === "Todos" ? work : work.filter((w) => w.category === activeFilter);

  return (
    <div className={`section grain ${styles.wrap}`}>
      <StarField stars={AMBIENT_STARS} />
      <div className={`container ${styles.content}`}>
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center", color: "var(--crimson-300)" }}>
            portfólio
          </p>
          <h2 className={`h-display ${styles.heading}`} style={{ fontSize: "var(--text-h1)" }}>
            Alguns trabalhos que a gente ama
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.filters}>
            {filterNames.map((name) => (
              <div key={name} onClick={() => setActiveFilter(name)}>
                <Badge tone={name === activeFilter ? "solid" : "outlineLight"} size="md">
                  {name}
                </Badge>
              </div>
            ))}
          </div>
        </Reveal>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredWork.map((w) => (
              <motion.div
                key={w.slotId}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.2, 0.6, 0.2, 1] }}
                className={styles.item}
              >
                <ImagePlaceholder label="Peça do portfólio" className={styles.itemImage} />
                <div className={styles.overlay}>
                  <p className={styles.itemTitle}>{w.title}</p>
                  <p className={styles.itemCategory}>{w.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
