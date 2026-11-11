import Image from "next/image";
import Link from "next/link";
import { Fraunces, Poppins } from "next/font/google";
import { whatsappLink } from "@/lib/data";
import { DrawLine, FadeUp, GrowIn, Item, MotionRoot, ScrollSlide, Stagger } from "./ScrollFx";
import s from "./OficialHome.module.css";

const fraunces = Fraunces({ variable: "--oc-serif", subsets: ["latin"], weight: "600", style: ["normal", "italic"] });
const poppins = Poppins({ variable: "--oc-sans", subsets: ["latin"], weight: ["400", "500"] });

/** A estrela de quatro pontas da marca. */
function Star({ fill, size, className }: { fill?: string; size?: number | string; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" width={size} height={size} className={className}>
      <path
        d="M50 0C54 28 72 46 100 50C72 54 54 72 50 100C46 72 28 54 0 50C28 46 46 28 50 0Z"
        fill={fill ?? "none"}
      />
    </svg>
  );
}

/** Onda que faz a transição entre uma seção e outra. */
function Wave({ from, to, d }: { from: string; to: string; d: string }) {
  return (
    <div className={s.wave} style={{ background: from }} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d={d} fill={to} />
      </svg>
    </div>
  );
}

const NOITE = "#32045B";
const NEVOA = "#F6F0F9";

type Suit = "♠" | "♥" | "♦" | "♣";
const isRed = (g: Suit) => g === "♥" || g === "♦";

const AREAS: { glyph: Suit; label: string }[] = [
  { glyph: "♠", label: "Marca & Design" },
  { glyph: "♥", label: "Conteúdo & Foto" },
  { glyph: "♦", label: "Tráfego & Sites" },
  { glyph: "♣", label: "Sistemas" },
];

const SERVICES: { glyph: Suit; title: string; desc: string; cta: string; href: string }[] = [
  { glyph: "♠", title: "Identidade visual", desc: "Logo, cores e manual pra sua marca ser lembrada.", cta: "Ver projetos", href: "#jogadas" },
  { glyph: "♥", title: "Social media", desc: "Conteúdo com estratégia, todo mês, sem você se preocupar.", cta: "Conhecer os planos", href: "/social-media" },
  { glyph: "♦", title: "Tráfego pago", desc: "Anúncios no Instagram e no Google pra trazer cliente de verdade.", cta: "Saiba mais", href: "/comecar" },
  { glyph: "♣", title: "Sites e landing pages", desc: "Páginas rápidas, bonitas e feitas pra vender.", cta: "Ver sites", href: "#jogadas" },
  { glyph: "♠", title: "Sistemas sob medida", desc: "Agendamento, cadastro, controle e CRM pro seu jeito de trabalhar.", cta: "Ver sistemas", href: "/conecta" },
  { glyph: "♥", title: "Foto e vídeo", desc: "Produtos, ambiente, eventos e reels com cara profissional.", cta: "Ver portfólio", href: "#jogadas" },
  { glyph: "♦", title: "Impressos", desc: "Cartão, panfleto, cardápio, cartaz e fachada.", cta: "Ver kits", href: "/comecar" },
];

const SUITS: { glyph: Suit; title: string; desc: string }[] = [
  { glyph: "♠", title: "Vendas", desc: "Promoções que vendem, grupo de clientes no WhatsApp, tráfego pago." },
  { glyph: "♥", title: "Relacionamento", desc: "Redes sociais com estratégia, avaliações do Google, atendimento rápido." },
  { glyph: "♦", title: "Ponto físico", desc: "Identidade visual, cartaz, cardápio, fachada e impressos." },
  { glyph: "♣", title: "Tecnologia", desc: "Site, landing page e sistemas pra organizar o seu negócio." },
];

const WORK = [
  { title: "Novo Millenium", tag: "Identidade", href: "/trabalhos/novo-millenium", bg: NOITE, star: "#F66F8A" },
  { title: "Claudia", tag: "Identidade", href: "/claudia", bg: "#6115AC", star: "#fff" },
  { title: "Conecta, sistema de gestão", tag: "Sistema", href: "/conecta", bg: "#CEB0E8", star: NOITE },
];

const SOON = ["Sistema da ONG", "Vídeos da campanha", "As lojas", "O casamento de novembro", "Clientes fundadores"];

const AUDIENCE = ["Lanchonetes", "Restaurantes", "Barbearias", "Academias", "Comércios locais"];

export function OficialHome() {
  // Quatro voltas: sobra texto dos dois lados quando a faixa desliza com o scroll.
  const bandLight = Array.from({ length: 4 }, () => [...AREAS].reverse()).flat();
  const bandDark = Array.from({ length: 4 }, () => AREAS).flat();

  return (
    <MotionRoot className={`${fraunces.variable} ${poppins.variable} ${s.page}`}>
      {/* Abertura */}
      <header className={s.hero}>
        <Star className={`${s.spin} ${s.heroStar}`} />
        <div className={s.wrap}>
          <nav className={s.nav} aria-label="Principal">
            <Link href="/" aria-label="Ace, página inicial">
              <Image src="/images/opcao-c/logo-ace.png" alt="Ace" width={70} height={36} className={s.navLogo} priority />
            </Link>
            <div className={s.navLinks}>
              <a href="#jogadas">Trabalhos</a>
              <a href="#cartas">Serviços</a>
              <Link href="/social-media">Planos de social media</Link>
              <a href={whatsappLink} className={`${s.btn} ${s.btnP} ${s.btnSm}`} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </nav>

          <div className={s.heroRow}>
            <Stagger className={s.heroCopy} stagger={0.12}>
              <Item>
              <h1 className={`${s.serif} ${s.heroTitle}`}>
                O ás do seu <em>negócio.</em>
                <Star fill="#B81435" className={s.titleStar} />
              </h1>
              </Item>
              <Item>
              <p className={s.heroSub}>
                Design, conteúdo, tráfego, foto, site e sistema. Tudo que o seu negócio precisa pra aparecer e vender,
                num lugar só.
              </p>
              </Item>
              <Item className={s.actions}>
                <a href="#cartas" className={`${s.btn} ${s.btnP}`}>
                  Ver o que a gente faz
                </a>
                <a href={whatsappLink} className={`${s.btn} ${s.btnO}`} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Item>
            </Stagger>

            <FadeUp className={s.slotCard} delay={0.35} y={48}>
              <span className={`${s.tag} ${s.tagPink}`}>serviços</span>
              <div className={`${s.slot} ${s.serif}`}>
                <ul>
                  {AREAS.concat(AREAS[0]).map((a, i) => (
                    <li key={i} aria-hidden={i === AREAS.length ? true : undefined}>
                      <span className={s.pink}>{a.glyph}</span> {a.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.bars} aria-hidden="true">
                {[0, 3, 6, 9].map((d) => (
                  <div key={d} className={s.bar} style={{ animationDelay: `${d}s` }} />
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        <div className={s.bands} aria-hidden="true">
          <div className={`${s.band} ${s.bandLight}`}>
            <ScrollSlide distance={260}>
            <div className={`${s.marq} ${s.rev} ${s.serif}`}>
              {bandLight.map((a, i) => (
                <span key={i}>
                  {a.glyph} {a.label} <Star fill={NOITE} size={18} />
                </span>
              ))}
            </div>
            </ScrollSlide>
          </div>
          <div className={`${s.band} ${s.bandDark}`}>
            <ScrollSlide distance={-260}>
            <div className={`${s.marq} ${s.serif}`}>
              {bandDark.map((a, i) => (
                <span key={i}>
                  <b className={s.pink}>{a.glyph}</b> {a.label} <Star fill="#F66F8A" size={22} />
                </span>
              ))}
            </div>
            </ScrollSlide>
          </div>
        </div>
      </header>

      <Wave from={NEVOA} to={NOITE} d="M0 120V70C220 10 460 10 720 50C980 90 1200 90 1440 30V120Z" />

      {/* Serviços */}
      <section id="cartas" className={s.dark}>
        <div className={s.wrap}>
          <FadeUp>
            <span className={`${s.tag} ${s.tagPink}`}>serviços</span>
            <h2 className={`${s.serif} ${s.h2}`}>Escolha sua carta.</h2>
          </FadeUp>
          <Stagger className={s.rows} stagger={0.08}>
            {SERVICES.map((svc) => (
              <Item key={svc.title} kind="left" className={s.rowItem}>
              <Link href={svc.href} className={s.row}>
                <span className={`${s.serif} ${s.gl} ${isRed(svc.glyph) ? s.glRed : s.glWhite}`} aria-hidden="true">
                  {svc.glyph}
                </span>
                <span className={`${s.serif} ${s.rowTitle}`}>{svc.title}</span>
                <span className={s.rowDesc}>{svc.desc}</span>
                <span className={s.go}>{svc.cta} →</span>
              </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Wave from={NOITE} to={NEVOA} d="M0 120V40C240 100 480 110 720 70C960 30 1200 20 1440 70V120Z" />

      {/* Os naipes */}
      <section className={s.light}>
        <div className={s.wrap}>
          <FadeUp className={s.center}>
            <span className={`${s.tag} ${s.tagDark}`}>o que a gente faz</span>
            <h2 className={`${s.serif} ${s.h2} ${s.h2Center}`}>O ás de todos os naipes.</h2>
            <p className={s.leadCenter}>
              Contratar alguém só pra isso custa salário, encargos e treinamento. Com a Ace você tem estratégia, design e
              tecnologia trabalhando junto, por uma fração disso.
            </p>
          </FadeUp>
          <Stagger className={s.suits} stagger={0.15} delay={0.2}>
            <DrawLine className={s.thread} />
            {SUITS.map((suit) => (
              <Item key={suit.title} className={s.suit}>
                <Item as="span" kind="pop" className={s.suitGlyphWrap}>
                <span className={`${s.serif} ${s.suitGlyph} ${isRed(suit.glyph) ? s.suitRed : ""}`} aria-hidden="true">
                  {suit.glyph}
                </span>
                </Item>
                <h3 className={`${s.serif} ${s.suitTitle}`}>{suit.title}</h3>
                <p className={s.suitDesc}>{suit.desc}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Wave from={NEVOA} to={NOITE} d="M0 120V80C200 20 460 30 720 60C1000 90 1220 60 1440 10V120Z" />

      {/* Portfólio */}
      <section id="jogadas" className={s.dark}>
        <div className={s.wrap}>
          <FadeUp>
            <span className={`${s.tag} ${s.tagPink}`}>portfólio</span>
            <h2 className={`${s.serif} ${s.h2} ${s.h2Work}`}>Algumas jogadas.</h2>
          </FadeUp>
          <Stagger className={s.work} stagger={0.14}>
            {WORK.map((w) => (
              <Item key={w.title} className={s.workItem}>
              <Link href={w.href} className={s.workCard}>
                <div className={s.workCover} style={{ background: w.bg }}>
                  <Star fill={w.star} size={72} />
                </div>
                <div className={s.workBody}>
                  <span className={`${s.tag} ${s.tagNevoa}`}>{w.tag}</span>
                  <h3 className={`${s.serif} ${s.workTitle}`}>{w.title}</h3>
                  <span className={s.workGo}>Ver projeto →</span>
                </div>
              </Link>
              </Item>
            ))}
          </Stagger>
          <Stagger as="ul" className={s.soon} stagger={0.06}>
            {SOON.map((t) => (
              <Item as="li" key={t}>
                {t} <span className={`${s.tag} ${s.tagPink} ${s.tagXs}`}>em breve</span>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Wave from={NOITE} to={NEVOA} d="M0 120V50C260 110 500 100 760 60C1020 20 1240 30 1440 80V120Z" />

      {/* Pra quem é + Sobre */}
      <section className={`${s.light} ${s.lightTall}`}>
        <div className={s.wrap}>
          <div className={s.who}>
            <FadeUp className={s.whoHead}>
              <span className={`${s.tag} ${s.tagDark}`}>pra quem é</span>
              <h2 className={`${s.serif} ${s.h2Sm}`}>Do balcão da esquina à empresa grande.</h2>
            </FadeUp>
            <FadeUp className={s.whoBody} delay={0.15}>
              <p className={s.lead}>
                Lanchonetes, restaurantes, barbearias, academias, comércios locais e projetos que precisam de uma marca
                de gente grande. Na mesa, qualquer um pode ter o ás.
              </p>
              <Stagger as="ul" className={s.chips} stagger={0.07} delay={0.3}>
                {AUDIENCE.map((a) => (
                  <Item as="li" kind="pop" key={a}>
                    {a}
                  </Item>
                ))}
                <Item as="li" kind="pop" className={s.chipDark}>
                  Marcas de gente grande
                </Item>
              </Stagger>
            </FadeUp>
          </div>

          <GrowIn className={s.about}>
            <div className={s.aboutPhoto}>
              <Star fill="#F66F8A" size={60} />
              <span>[FOTO DA BIA]</span>
            </div>
            <div className={s.aboutCopy}>
              <span className={`${s.tag} ${s.tagPink}`}>sobre</span>
              <h2 className={`${s.serif} ${s.h2Sm}`}>Prazer, eu sou a Bia.</h2>
              <p className={s.aboutText}>
                Designer, desenvolvedora e estrategista, na zona leste de São Paulo. Criei a Ace pra provar que pequeno
                negócio também pode ter marca, estratégia e resultado.
              </p>
            </div>
          </GrowIn>
        </div>
      </section>

      <Wave from={NEVOA} to={NOITE} d="M0 120V60C240 0 500 0 740 40C980 80 1220 70 1440 20V120Z" />

      {/* Chamada final + rodapé */}
      <section className={s.final}>
        <Star className={`${s.spin} ${s.finalStar}`} />
        <FadeUp className={`${s.wrap} ${s.center}`} y={48}>
          <h2 className={`${s.serif} ${s.finalTitle}`}>
            Tem um projeto? Bora pra <em>mesa.</em>
          </h2>
          <p className={s.finalSub}>Conta o que você precisa e eu te respondo em até 24 horas.</p>
          <div className={`${s.actions} ${s.actionsCenter}`}>
            <a href={whatsappLink} className={`${s.btn} ${s.btnP}`} target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
            </a>
            <Link href="/comecar" className={`${s.btn} ${s.btnG}`}>
              Pedir um orçamento
            </Link>
          </div>
        </FadeUp>

        <footer className={s.foot}>
          <div className={`${s.wrap} ${s.footInner}`}>
            <div className={s.footCol}>
              <Image src="/images/opcao-c/logo-ace-branco.png" alt="Ace" width={80} height={40} className={s.footLogo} />
              <p>O ás do seu negócio.</p>
            </div>
            <div className={`${s.footCol} ${s.footContact}`}>
              <div>tel — 11 9 3407 0411</div>
              <div>instagram — @ace_4a</div>
              <div>email — contato@acelab.com.br</div>
            </div>
            <div className={s.copy}>© {new Date().getFullYear()} Ace. Todos os direitos reservados.</div>
          </div>
        </footer>
      </section>
    </MotionRoot>
  );
}
