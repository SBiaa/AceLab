import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { Button } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Star } from "../ui/Star";
import { StarField } from "../ui/StarField";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import {
  CameraDotIcon,
  CodeSlashIcon,
  InstagramIcon,
  MonitorIcon,
  PenNibIcon,
  PrinterIcon,
  TargetDotIcon,
} from "../ui/service-icons";
import { whatsappLink } from "@/lib/data";
import { Header } from "./Header";
import { HeroOrbit, type OrbitItem } from "./HeroOrbit";
import { Footer } from "./Footer";
import styles from "./NovaHome.module.css";

type Suit = "♠" | "♥" | "♦" | "♣";
type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const SERVICES: {
  rank: string;
  suit: Suit;
  title: string;
  desc: string;
  cta: string;
  href: string;
  Icon: Icon;
}[] = [
  { rank: "A", suit: "♠", title: "Identidade visual", desc: "Logo, cores e manual pra sua marca ser lembrada.", cta: "Ver projetos", href: "#jogadas", Icon: PenNibIcon },
  { rank: "K", suit: "♥", title: "Social media", desc: "Conteúdo com estratégia, todo mês, sem você se preocupar.", cta: "Conhecer os planos", href: "/social-media", Icon: InstagramIcon },
  { rank: "Q", suit: "♦", title: "Tráfego pago", desc: "Anúncios no Instagram e no Google pra trazer cliente de verdade.", cta: "Saiba mais", href: whatsappLink, Icon: TargetDotIcon },
  { rank: "J", suit: "♣", title: "Sites e landing pages", desc: "Páginas rápidas, bonitas e feitas pra vender.", cta: "Ver sites", href: "#jogadas", Icon: MonitorIcon },
  { rank: "10", suit: "♠", title: "Sistemas sob medida", desc: "Agendamento, cadastro, controle e CRM pro seu jeito de trabalhar.", cta: "Ver sistemas", href: "/conecta", Icon: CodeSlashIcon },
  { rank: "9", suit: "♥", title: "Foto e vídeo", desc: "Produtos, ambiente, eventos e reels com cara profissional.", cta: "Ver portfólio", href: "#jogadas", Icon: CameraDotIcon },
  { rank: "8", suit: "♦", title: "Impressos", desc: "Cartão, panfleto, cardápio, cartaz e fachada.", cta: "Ver kits", href: whatsappLink, Icon: PrinterIcon },
];

const WORK: {
  title: string;
  tag: string;
  cover?: string;
  href?: string;
  bg?: string;
}[] = [
  { title: "Novo Millenium", tag: "Identidade", cover: "/images/work/novo-millenium/logo-novo-millenium.png", href: "/trabalhos/novo-millenium", bg: "linear-gradient(135deg, #0b1620 0%, #0f3245 45%, #136f83 100%)" },
  { title: "Claudia", tag: "Identidade", cover: "/images/claudia/logo-horizontal.svg", href: "/claudia", bg: "linear-gradient(135deg, #fbf3e6 0%, #f3e3cc 100%)" },
  { title: "Conecta — sistema de gestão", tag: "Sistema", href: "/conecta" },
  { title: "Sistema da ONG", tag: "Sistema" },
  { title: "Vídeos da campanha", tag: "Vídeo" },
  { title: "As lojas", tag: "Foto" },
  { title: "O casamento de novembro", tag: "Foto e vídeo" },
  { title: "Clientes fundadores", tag: "Identidade" },
];

const SUITS = [
  { glyph: "♠", red: false, title: "Vendas", desc: "Promoções que vendem, grupo de clientes no WhatsApp, tráfego pago." },
  { glyph: "♥", red: true, title: "Relacionamento", desc: "Redes sociais com estratégia, avaliações do Google, atendimento rápido." },
  { glyph: "♦", red: true, title: "Ponto físico", desc: "Identidade visual, cartaz, cardápio, fachada e impressos." },
  { glyph: "♣", red: false, title: "Tecnologia", desc: "Site, landing page e sistemas pra organizar o seu negócio." },
];

const AUDIENCE = ["Lanchonetes", "Restaurantes", "Barbearias", "Academias", "Comércios locais", "Marcas de gente grande"];

const SUIT_ORBIT: OrbitItem[] = [
  { label: "Marca & Design", glyph: "♠", angle: 315, accent: false },
  { label: "Conteúdo & Foto", glyph: "♥", angle: 45, accent: true },
  { label: "Tráfego & Sites", glyph: "♦", angle: 135, accent: true },
  { label: "Sistemas", glyph: "♣", angle: 225, accent: false },
];

const STARS = [
  { size: 14, top: "12%", left: "6%", opacity: 0.2, duration: 10, driftX: 8, driftY: -8 },
  { size: 10, bottom: "18%", right: "46%", opacity: 0.18, duration: 9, delay: 1, driftX: -6, driftY: 8 },
];

export function NovaHome() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Abertura */}
        <section className={`grain ${styles.hero}`}>
          <StarField stars={STARS} />
          <div className={`container section ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <Reveal>
                <h1 className={`h-display ${styles.heroTitle}`}>
                  O ás do seu <em>negócio.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className={`bodyCopy ${styles.heroSub}`}>
                  Design, conteúdo, tráfego, foto, site e sistema. Tudo que o seu negócio precisa pra aparecer e vender,
                  num lugar só.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className={styles.actions}>
                  <Button variant="accent" size="lg" href="#cartas">
                    Ver o que a gente faz
                  </Button>
                  <Button variant="inverse" size="lg" href={whatsappLink}>
                    Chamar no WhatsApp
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className={styles.heroVisual}>
              <HeroOrbit items={SUIT_ORBIT} />
            </Reveal>
          </div>
        </section>

        {/* 2. Serviços */}
        <section className={`section ${styles.services}`} id="cartas">
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ textAlign: "center" }}>
                serviços
              </p>
              <h2 className={`h-display ${styles.heading}`}>Escolha sua carta.</h2>
            </Reveal>
            <RevealGroup className={styles.cards} stagger={0.06}>
              {SERVICES.map(({ rank, suit, title, desc, cta, href, Icon }) => {
                const red = suit === "♥" || suit === "♦";
                const external = href.startsWith("http");
                return (
                  <RevealItem key={title} className={styles.cardItem}>
                    <Link
                      href={href}
                      className={`${styles.card} ${red ? styles.red : ""}`}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <span className={styles.cardIndex}>{suit}</span>
                      <span className={styles.cardIcon}>
                        <Icon width={36} height={36} />
                      </span>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <p className={styles.cardDesc}>{desc}</p>
                      <span className={styles.cardCta}>{cta} →</span>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>

        {/* 3. Diferencial */}
        <section className={`grain ${styles.diff}`}>
          <div className={`container section ${styles.diffInner}`}>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--crimson-300)" }}>
                o que a gente faz
              </p>
              <h2 className={`h-display ${styles.diffTitle}`}>O ás de todos os naipes.</h2>
              <p className={`bodyCopy ${styles.diffText}`}>
                Contratar alguém só pra isso custa salário, encargos e treinamento. Com a Ace você tem estratégia, design
                e tecnologia trabalhando junto, por uma fração disso.
              </p>
            </Reveal>
            <RevealGroup className={styles.suitGrid} stagger={0.08}>
              {SUITS.map((suit) => (
                <RevealItem key={suit.title} className={styles.suitCard}>
                  <span className={`${styles.suitGlyph} ${suit.red ? styles.suitGlyphRed : ""}`} aria-hidden="true">
                    {suit.glyph}
                  </span>
                  <h3 className={styles.suitTitle}>{suit.title}</h3>
                  <p className={styles.suitDesc}>{suit.desc}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* 4. Portfólio */}
        <section className={`section ${styles.work}`} id="jogadas">
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ textAlign: "center", color: "var(--crimson-300)" }}>
                portfólio
              </p>
              <h2 className={`h-display ${styles.heading} ${styles.headingLight}`}>Algumas jogadas.</h2>
            </Reveal>
          </div>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {[0, 1].map((copy) => (
                <div key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
                  {WORK.map((w) => {
                    const inner = (
                      <>
                        {w.cover ? (
                          <Image
                            src={w.cover}
                            alt={copy === 1 ? "" : w.title}
                            fill
                            sizes="(max-width: 860px) 70vw, 22vw"
                            style={{ objectFit: "contain", padding: 24, background: w.bg }}
                          />
                        ) : (
                          <ImagePlaceholder label="" style={{ position: "absolute", inset: 0 }} />
                        )}
                        <span className={styles.tag}>{w.tag}</span>
                        <div className={styles.overlay}>
                          <p className={styles.workTitle}>{w.title}</p>
                          <p className={styles.workSub}>{w.href ? "Ver projeto →" : "Em breve"}</p>
                        </div>
                      </>
                    );
                    return w.href ? (
                      <Link
                        key={w.title}
                        href={w.href}
                        className={styles.slide}
                        tabIndex={copy === 1 ? -1 : undefined}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div key={w.title} className={`${styles.slide} ${styles.soon}`}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Pra quem é */}
        <section className={`section ${styles.who}`}>
          <div className={`container ${styles.whoInner}`}>
            <Reveal>
              <p className="eyebrow">pra quem é</p>
              <h2 className={`h-display ${styles.heading} ${styles.left}`}>Do balcão da esquina à empresa grande.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="bodyCopy">
                Lanchonetes, restaurantes, barbearias, academias, comércios locais e projetos que precisam de uma marca
                de gente grande. Na mesa, qualquer um pode ter o ás.
              </p>
              <ul className={styles.chips}>
                {AUDIENCE.map((a) => (
                  <li key={a} className={styles.chip}>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 6. Sobre */}
        <section className={`section ${styles.about}`}>
          <div className={`container ${styles.aboutInner}`}>
            <Reveal>
              <div className={styles.aboutCard} aria-hidden="true">
                <Star size={96} color="white" />
                <span>Bia</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">sobre</p>
              <h2 className={`h-display ${styles.heading} ${styles.left}`}>Prazer, eu sou a Bia.</h2>
              <p className="bodyCopy" style={{ marginTop: "var(--space-4)" }}>
                Designer, desenvolvedora e estrategista, na zona leste de São Paulo. Criei a Ace pra provar que pequeno
                negócio também pode ter marca, estratégia e resultado.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 7. Chamada final */}
        <section className={`grain ${styles.final}`}>
          <Star size={280} color="white" className={styles.finalStar} />
          <div className={`container section ${styles.finalInner}`}>
            <Reveal>
              <h2 className={`h-display ${styles.finalTitle}`}>Tem um projeto? Bora pra mesa.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className={`bodyCopy ${styles.finalSub}`}>Conta o que você precisa e eu te respondo em até 24 horas.</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className={`${styles.actions} ${styles.center}`}>
                <Button variant="accent" size="lg" href={whatsappLink}>
                  Chamar no WhatsApp
                </Button>
                <Button variant="inverse" size="lg" href={whatsappLink}>
                  Pedir um orçamento
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
