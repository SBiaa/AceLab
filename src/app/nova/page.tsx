import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Young_Serif, Instrument_Sans } from "next/font/google";
import { Hand, type Service } from "@/components/nova/Hand";
import { PlayingCard } from "@/components/nova/PlayingCard";
import { whatsappLink } from "@/lib/data";
import styles from "@/components/nova/nova.module.css";

const display = Young_Serif({ variable: "--nova-display", subsets: ["latin"], weight: "400" });
const body = Instrument_Sans({ variable: "--nova-body", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Ace Lab — O ás do seu negócio",
  description:
    "Design, conteúdo, tráfego, foto, site e sistema. Tudo que o seu negócio precisa pra aparecer e vender, num lugar só.",
};

const SERVICES: Service[] = [
  { rank: "A", suit: "♠", title: "Identidade visual", desc: "Logo, cores e manual pra sua marca ser lembrada.", cta: "Ver projetos", href: "#trabalhos" },
  { rank: "K", suit: "♥", title: "Social media", desc: "Conteúdo com estratégia, todo mês, sem você se preocupar.", cta: "Conhecer os planos", href: "/social-media" },
  { rank: "Q", suit: "♦", title: "Tráfego pago", desc: "Anúncios no Instagram e no Google pra trazer cliente de verdade.", cta: "Pedir um orçamento", href: "/comecar" },
  { rank: "J", suit: "♣", title: "Sites e landing pages", desc: "Páginas rápidas, bonitas e feitas pra vender.", cta: "Ver sites", href: "#trabalhos" },
  { rank: "10", suit: "♠", title: "Sistemas sob medida", desc: "Agendamento, cadastro, controle e CRM pro seu jeito de trabalhar.", cta: "Ver o Conecta", href: "/conecta" },
  { rank: "9", suit: "♥", title: "Foto e vídeo", desc: "Produtos, ambiente, eventos e reels com cara profissional.", cta: "Pedir um orçamento", href: "/comecar" },
  { rank: "8", suit: "♦", title: "Impressos", desc: "Cartão, panfleto, cardápio, cartaz e fachada.", cta: "Pedir um orçamento", href: "/comecar" },
];

const SUITS = [
  { glyph: "♠", red: false, title: "Vendas", desc: "Promoções que vendem, grupo de clientes no WhatsApp, tráfego pago." },
  { glyph: "♥", red: true, title: "Relacionamento", desc: "Redes sociais com estratégia, avaliações do Google, atendimento rápido." },
  { glyph: "♦", red: true, title: "Ponto físico", desc: "Identidade visual, cartaz, cardápio, fachada e impressos." },
  { glyph: "♣", red: false, title: "Tecnologia", desc: "Site, landing page e sistemas pra organizar o seu negócio." },
];

const WORK = [
  { title: "Novo Millenium", kind: "Identidade visual", cover: "/images/work/novo-millenium/logo-novo-millenium.png", href: "/trabalhos/novo-millenium", bg: "#0f3245" },
  { title: "Claudia", kind: "Identidade visual", cover: "/images/claudia/logo-horizontal.svg", href: "/claudia", bg: "#f3e3cc" },
  { title: "Conecta", kind: "Sistema de gestão", href: "/conecta", bg: "#37125f" },
];

const SOON = ["Sistema da ONG", "Vídeos da campanha", "Fotos das lojas", "O casamento de novembro"];

export default function NovaHomePage() {
  return (
    <div className={`${display.variable} ${body.variable} ${styles.page}`}>
      <header className={styles.top}>
        <Link href="/nova" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">A♠</span>
          Ace Lab
        </Link>
        <nav className={styles.nav} aria-label="Principal">
          <a href="#cartas">Serviços</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#bia">Sobre</a>
          <Link href="/comecar" className={styles.navCta}>
            Pedir orçamento
          </Link>
        </nav>
      </header>

      <main>
        {/* Abertura: a mesa e o ás */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>O ás do seu negócio.</h1>
            <p className={styles.heroSub}>
              Design, conteúdo, tráfego, foto, site e sistema. Tudo que o seu negócio precisa pra aparecer e vender,
              num lugar só.
            </p>
            <div className={styles.actions}>
              <a href="#cartas" className={styles.btnCard}>
                Ver o que a gente faz
              </a>
              <a href={whatsappLink} className={styles.btnGhost} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className={styles.heroDeck} aria-hidden="true">
            <PlayingCard rank="K" suit="♥" className={styles.deckBack2} />
            <PlayingCard rank="Q" suit="♦" className={styles.deckBack1} />
            <PlayingCard rank="A" suit="♠" className={styles.deckAce} />
          </div>
        </section>

        {/* Serviços: a mão */}
        <section className={styles.services} id="cartas">
          <div className={styles.inner}>
            <h2 className={styles.h2}>Escolha sua carta.</h2>
            <p className={styles.lead}>Sete serviços, um time só. Toque numa carta pra ver o que vem nela.</p>
            <Hand services={SERVICES} />
          </div>
        </section>

        {/* Naipes */}
        <section className={styles.paper}>
          <div className={styles.inner}>
            <div className={styles.split}>
              <div>
                <h2 className={styles.h2Ink}>O ás de todos os naipes.</h2>
                <p className={styles.prose}>
                  Contratar alguém só pra isso custa salário, encargos e treinamento. Com a Ace você tem estratégia,
                  design e tecnologia trabalhando junto, por uma fração disso.
                </p>
              </div>
              <dl className={styles.suits}>
                {SUITS.map((s) => (
                  <div key={s.title} className={styles.suit}>
                    <dt>
                      <span className={s.red ? styles.glyphRed : styles.glyph} aria-hidden="true">
                        {s.glyph}
                      </span>
                      {s.title}
                    </dt>
                    <dd>{s.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Trabalhos */}
        <section className={styles.paper} id="trabalhos">
          <div className={styles.inner}>
            <h2 className={styles.h2Ink}>Algumas jogadas.</h2>
            <ul className={styles.work}>
              {WORK.map((w) => (
                <li key={w.title}>
                  <Link href={w.href} className={styles.workItem}>
                    <span className={styles.workCover} style={{ background: w.bg }}>
                      {w.cover ? (
                        <Image src={w.cover} alt="" fill sizes="(max-width: 720px) 90vw, 30vw" style={{ objectFit: "contain", padding: 28 }} />
                      ) : (
                        <span className={styles.workCoverText}>{w.title}</span>
                      )}
                    </span>
                    <span className={styles.workTitle}>{w.title}</span>
                    <span className={styles.workKind}>{w.kind}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className={styles.soon}>
              Chegando na mesa: {SOON.join(", ")}.
            </p>
          </div>
        </section>

        {/* Pra quem é + Sobre */}
        <section className={styles.paper} id="bia">
          <div className={`${styles.inner} ${styles.split}`}>
            <div>
              <h2 className={styles.h2Ink}>Do balcão da esquina à empresa grande.</h2>
              <p className={styles.prose}>
                Lanchonetes, restaurantes, barbearias, academias, comércios locais e projetos que precisam de uma marca
                de gente grande. Na mesa, qualquer um pode ter o ás.
              </p>
            </div>
            <div className={styles.about}>
              <Image src="/images/star-crimson.png" alt="" width={56} height={56} className={styles.aboutStar} />
              <h3 className={styles.h3}>Prazer, eu sou a Bia.</h3>
              <p className={styles.prose}>
                Designer, desenvolvedora e estrategista, na zona leste de São Paulo. Criei a Ace pra provar que pequeno
                negócio também pode ter marca, estratégia e resultado.
              </p>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className={styles.final}>
          <div className={styles.inner}>
            <h2 className={styles.finalTitle}>Tem um projeto? Bora pra mesa.</h2>
            <p className={styles.lead}>Conta o que você precisa e eu te respondo em até 24 horas.</p>
            <div className={styles.actions}>
              <a href={whatsappLink} className={styles.btnCard} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
              <Link href="/comecar" className={styles.btnGhost}>
                Pedir um orçamento
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <span>Ace Lab, zona leste de São Paulo</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
