"use client";

import { useState } from "react";
import Image from "next/image";
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

const MIN_ITEMS_PER_GROUP = 6;

const AMBIENT_STARS = [
  { size: 12, top: "8%", left: "10%", opacity: 0.22, duration: 10, driftX: 8, driftY: -8 },
  { size: 16, bottom: "12%", right: "10%", opacity: 0.2, duration: 12.5, delay: 1.6, driftX: -8, driftY: 8 },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterNames)[number]>("Todos");
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  const filteredWork = activeFilter === "Todos" ? work : work.filter((w) => w.category === activeFilter);
  // Repeat the set so a single group is always wider than the viewport and the loop stays seamless.
  const repeats = Math.max(1, Math.ceil(MIN_ITEMS_PER_GROUP / Math.max(filteredWork.length, 1)));
  const marqueeItems = Array.from({ length: repeats }, () => filteredWork).flat();

  return (
    <div className={`section grain ${styles.wrap}`} id="trabalhos">
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

        <div className={styles.marquee}>
          <div className={styles.track} key={activeFilter}>
            {[0, 1].map((copy) => (
              <div key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
                {marqueeItems.map((w, i) => {
                  const briefing = w.caseStudy ? getBriefing(w.caseStudy) : undefined;
                  const coverBackground = briefing
                    ? `linear-gradient(135deg, ${briefing.coverGradient[0]} 0%, ${briefing.coverGradient[1]} 45%, ${briefing.coverGradient[2]} 100%)`
                    : DEFAULT_COVER_GRADIENT;

                  return (
                    <button
                      key={`${w.slotId}-${i}`}
                      type="button"
                      className={styles.item}
                      data-cursor={w.caseStudy ? "Ver" : undefined}
                      tabIndex={copy === 1 ? -1 : undefined}
                      disabled={!w.caseStudy}
                      onClick={w.caseStudy ? () => setOpenCaseStudy(w.caseStudy!) : undefined}
                    >
                      {w.coverImage ? (
                        <Image
                          src={w.coverImage}
                          alt={copy === 1 ? "" : w.title}
                          fill
                          sizes="(max-width: 860px) 70vw, 22vw"
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
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
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
