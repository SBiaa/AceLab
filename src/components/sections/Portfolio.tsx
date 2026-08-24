"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { Lightbox } from "../ui/Lightbox";
import { Reveal } from "../ui/Reveal";
import { StarField } from "../ui/StarField";
import { getBriefing } from "@/lib/briefings";
import { filterNames, work } from "@/lib/data";
import { ClaudiaCase } from "./ClaudiaCase";
import { NovoMilleniumCase } from "./NovoMilleniumCase";
import styles from "./Portfolio.module.css";

const DEFAULT_COVER_GRADIENT = "linear-gradient(135deg, #0b1620 0%, #0f3245 45%, #136f83 100%)";

const AMBIENT_STARS = [
  { size: 12, top: "8%", left: "10%", opacity: 0.22, duration: 10, driftX: 8, driftY: -8 },
  { size: 16, bottom: "12%", right: "10%", opacity: 0.2, duration: 12.5, delay: 1.6, driftX: -8, driftY: 8 },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterNames)[number]>("Todos");
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

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
            {filteredWork.map((w) => {
              const briefing = w.caseStudy ? getBriefing(w.caseStudy) : undefined;
              const coverBackground = briefing
                ? `linear-gradient(135deg, ${briefing.coverGradient[0]} 0%, ${briefing.coverGradient[1]} 45%, ${briefing.coverGradient[2]} 100%)`
                : DEFAULT_COVER_GRADIENT;

              return (
                <motion.div
                  key={w.slotId}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.6, 0.2, 1] }}
                  className={styles.item}
                  onClick={w.caseStudy ? () => setOpenCaseStudy(w.caseStudy!) : undefined}
                  style={w.caseStudy ? { cursor: "pointer" } : undefined}
                >
                  {w.coverImage ? (
                    <Image
                      src={w.coverImage}
                      alt={w.title}
                      fill
                      sizes="(max-width: 860px) 100vw, 33vw"
                      className={styles.itemImage}
                      style={{ objectFit: "contain", background: coverBackground }}
                    />
                  ) : (
                    <ImagePlaceholder label="Peça do portfólio" className={styles.itemImage} />
                  )}
                  <div className={styles.overlay}>
                    <p className={styles.itemTitle}>{w.title}</p>
                    <p className={styles.itemCategory}>{w.category}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {openCaseStudy === "novo-millenium" && (
        <Lightbox onClose={() => setOpenCaseStudy(null)}>
          <NovoMilleniumCase />
        </Lightbox>
      )}
      {openCaseStudy === "claudia" && (
        <Lightbox onClose={() => setOpenCaseStudy(null)}>
          <ClaudiaCase />
        </Lightbox>
      )}
    </div>
  );
}
