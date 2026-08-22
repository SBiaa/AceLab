"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { faqs } from "@/lib/data";
import styles from "./Faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`section ${styles.wrap}`}>
      <div className="container narrow" style={{ margin: "0 auto" }}>
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center" }}>
            faq
          </p>
          <h2 className={`h-display ${styles.heading}`} style={{ fontSize: "var(--text-h1)" }}>
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={styles.list}>
            {faqs.map((q, i) => {
              const open = openIndex === i;
              return (
                <div className={styles.item} key={q.question}>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <p className={styles.questionText}>{q.question}</p>
                    <span className={styles.icon}>{open ? "×" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        className={styles.answerWrap}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: [0.2, 0.6, 0.2, 1] }}
                      >
                        <p className={`bodyCopy ${styles.answer}`}>{q.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
