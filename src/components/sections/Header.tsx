import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { whatsappLink } from "@/lib/data";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Trabalhos", href: "/#jogadas" },
  { label: "Serviços", href: "/#cartas" },
  { label: "Planos de social media", href: "/social-media" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" aria-label="Ace Lab — início" className={styles.logoLink}>
          <Logo height={24} invert />
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="accent" size="sm" href={whatsappLink} className={styles.cta}>
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
}
