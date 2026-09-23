import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { isadoraPhotos } from "@/lib/isadora-data";
import styles from "./IsadoraGallery.module.css";

export function IsadoraGallery() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>Nossos momentos 📸</h2>
          <p className={styles.intro}>Alguns momentos fofos da nossa aniversariante!</p>
        </Reveal>

        <RevealGroup className={styles.grid}>
          {isadoraPhotos.map((photo) => (
            <RevealItem key={photo.id}>
              <div className={styles.polaroid} style={{ transform: `rotate(${photo.rotate}deg)` }}>
                <div className={styles.photoArea}>
                  {photo.src ? (
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 720px) 50vw, 33vw"
                      className={styles.photoImage}
                    />
                  ) : (
                    <span className={styles.watermark} aria-hidden="true">
                      📷
                    </span>
                  )}
                </div>
                <p className={styles.caption}>{photo.caption}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
