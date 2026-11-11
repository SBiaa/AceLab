import Image from "next/image";
import s from "./google.module.css";

const WHATSAPP =
  "https://wa.me/5511934070411?text=" +
  encodeURIComponent("Oi! Vi a página do Ás no Google e quero colocar meu negócio no mapa.");

const STAR = "M12 1l3.1 7.3 7.9.7-6 5.2 1.8 7.8L12 17.9 5.2 22l1.8-7.8-6-5.2 7.9-.7z";

function Star({ size = 14, color = "#B81435", className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d={STAR} fill={color} />
    </svg>
  );
}

function Check({ color = "#6115AC", size = 18, width = 2.4 }: { color?: string; size?: number; width?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function WhatsIcon({ size = 16, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.3A8.5 8.5 0 1 1 21 12z" />
    </svg>
  );
}

const iconProps = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "#6115AC",
  strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
};

const pains = [
  { t: "“Não te achei no mapa”", d: "Perfil sem foto, horário errado ou nem cadastrado. O cliente passa direto." },
  { t: "“Só tem 3 avaliações”", d: "Seu cliente gosta, mas ninguém pediu pra ele avaliar. Quem escolhe compara as estrelas." },
  { t: "“Perdi o acesso do perfil”", d: "Quem fez sumiu e levou a senha. Aqui, tudo fica no seu nome." },
];

const features = [
  {
    t: "Ser encontrado",
    icon: <svg {...iconProps}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>,
    items: ["Perfil do Google completo, com categorias, serviços e fotos de verdade", "Site rápido no celular, preparado pro Google", "Mesmo cadastro no Apple Maps, Waze e Bing"],
  },
  {
    t: "Ser escolhido",
    icon: <svg {...iconProps}><path d="M12 2.5l2.9 6.2 6.6.6-5 4.5 1.5 6.6L12 17l-6 3.4 1.5-6.6-5-4.5 6.6-.6z" /></svg>,
    items: ["QR code e arte de balcão pro cliente avaliar", "Mensagem pronta pra pedir avaliação no WhatsApp", "Modelos pra responder avaliação boa e ruim", "WhatsApp Business arrumado, com catálogo e respostas rápidas"],
  },
  {
    t: "Estar protegido",
    icon: <svg {...iconProps}><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
    items: ["Domínio e perfil no seu nome, a Ace só gerencia", "Verificação em duas etapas e e-mail profissional", "Alerta de alteração suspeita no perfil", "Ajuda pra denunciar avaliação falsa"],
  },
  {
    t: "Ver o resultado",
    icon: <svg {...iconProps}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>,
    items: ["Anúncio no Google configurado pro seu bairro", "Contagem de quem clicou pra te chamar no WhatsApp", "Relatório de antes e depois", "Meia hora de treinamento pra você cuidar do perfil"],
  },
];

const essencial = ["Perfil do Google completo, com fotos", "Kit de avaliações: QR code, arte de balcão e mensagem pronta", "WhatsApp Business configurado", "Segurança básica, tudo no seu nome"];
const completo = ["Tudo do Essencial", "Site de uma página com seu endereço .com.br", "Cadastro no Apple Maps, Waze e Bing", "Anúncio no Google configurado + contagem de cliques no WhatsApp", "Relatório de antes e depois + treinamento"];

const systems = ["Controle financeiro", "Cadastro de clientes (CRM)", "Agendamento online", "Cardápio digital", "Programa de fidelidade", "Pedidos sem taxa de aplicativo", "Estoque"];

const works = [
  { href: "https://dia-deles.vercel.app", img: "/google/hera.jpg", alt: "Página inicial do site Hera", t: "Hera", d: "Site e plataforma para casamentos", pos: "left top" },
  { href: "https://alternative-space.vercel.app", img: "/google/alternative-space.jpg", alt: "Página inicial do site Alternative Space", t: "Alternative Space", d: "Comunidade e loja geek · Área de membros", pos: "left top" },
  { href: "https://endy-front-git-main-biaa.vercel.app", img: "/google/endy.jpg", alt: "Tela de entrada do sistema Endy", t: "Endy", d: "Agenda digital para creches · Sistema", pos: "center" },
];

const steps = [
  { t: "A gente conversa", d: "Pelo WhatsApp mesmo. A gente olha como seu negócio aparece hoje." },
  { t: "Você manda o básico", d: "Endereço, horário, serviços e preços. As fotos a gente pode fazer." },
  { t: "A gente monta tudo", d: "Perfil, avaliações, site e anúncio. Você vê e aprova antes." },
  { t: "No mapa e no balcão", d: "Você recebe a arte com QR code impressa e o relatório de antes e depois." },
];

const faqs = [
  { q: "Vocês garantem primeiro lugar no Google?", a: "Ninguém pode garantir isso, e desconfie de quem promete. O que a gente garante é deixar seu negócio com tudo que o Google valoriza: perfil completo, avaliações, site e informações certinhas. E te mostra o antes e depois." },
  { q: "Já tenho perfil no Google. Serve pra mim?", a: "Serve. A gente revisa, completa o que falta e arruma o que está errado. Se você perdeu o acesso, ajuda a recuperar." },
  { q: "O perfil e o site ficam no meu nome?", a: "Sempre. Você é o dono de tudo. A Ace entra só como gerente, e você pode tirar o acesso quando quiser." },
  { q: "Tem mensalidade?", a: "Não é obrigatória. Se quiser que a gente mantenha tudo em dia, são R$ 39 por mês com relatório. No Completo, o domínio .com.br tem custo anual de renovação." },
  { q: "Em quanto tempo fica pronto?", a: "Em até 7 dias depois que você manda as informações." },
];

export default function GooglePage() {
  return (
    <div className={s.root}>
      <div className={s.banner}>
        Preço de fundador: os 5 primeiros negócios levam o Essencial por <strong>R$ 197</strong>.{" "}
        <a href="#pacotes">Quero a minha vaga</a>
      </div>

      <header className={s.header}>
        <div className={`${s.wrap} ${s.headerInner}`}>
          <a href="#topo" className={`${s.logo} ${s.display}`}>Ace<Star /></a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnPlum}`}>Falar no WhatsApp</a>
        </div>
      </header>

      <section id="topo" className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroText}>
            <span className={s.pill}><Star size={12} />Ás no Google</span>
            <h1 className={`${s.h1} ${s.display}`}>Seu negócio no Google, <span className={s.accent}>do jeito certo.</span></h1>
            <p className={s.lead}>A gente coloca seu negócio no mapa, faz o cliente deixar avaliação e te ajuda a ser escolhido. Tudo no seu nome, sem você precisar entender de internet.</p>
            <div className={s.row}>
              <a href="#pacotes" className={`${s.btn} ${s.btnCrimson} ${s.btnLg}`}>Quero aparecer no Google</a>
              <a href="#o-que-faz" className={`${s.btn} ${s.btnGhost} ${s.btnLg}`}>Ver o que está incluso</a>
            </div>
            <div className={s.checks}>
              {["A partir de 3x de R$ 99", "Tudo fica no seu nome", "Resposta em até 24h"].map((t) => (
                <span key={t}><Check width={2.2} />{t}</span>
              ))}
            </div>
          </div>

          <div className={s.phoneCol}>
            <div className={s.phone}>
              <div className={s.screen}>
                <div className={s.search}>
                  <div className={s.searchBar}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B4A66" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                    barbearia perto de mim
                  </div>
                </div>
                <div className={s.map}>
                  <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 15.8 12 22 12 22z" fill="#B81435" /><circle cx="12" cy="10.5" r="2.6" fill="#fff" /></svg>
                </div>
                <div className={s.place}>
                  <div className={`${s.placeName} ${s.display}`}>Barbearia do Bairro</div>
                  <div className={s.stars} role="img" aria-label="Cinco estrelas">
                    {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
                  </div>
                  <div className={s.small}>Barbearia · Aberto agora · Itaquera</div>
                  <div className={s.actions}>
                    <div className={s.action}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6115AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11l18-8-8 18-2-8z" /></svg>Rotas
                    </div>
                    <div className={s.action}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6115AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /></svg>Site
                    </div>
                    <div className={`${s.action} ${s.actionHot}`}><WhatsIcon />WhatsApp</div>
                  </div>
                </div>
              </div>
              <div className={s.qr}>
                <svg width="72" height="72" viewBox="0 0 21 21" aria-hidden="true" shapeRendering="crispEdges"><rect width="21" height="21" fill="#fff" /><path fill="#32045B" d="M0 0h7v7H0zM14 0h7v7h-7zM0 14h7v7H0z" /><path fill="#fff" d="M1 1h5v5H1zM15 1h5v5h-5zM1 15h5v5H1z" /><path fill="#32045B" d="M2 2h3v3H2zM16 2h3v3h-3zM2 16h3v3H2zM8 1h1v1H8zM10 2h2v1h-2zM9 4h1v2H9zM11 5h2v1h-2zM8 8h2v1H8zM11 8h1v2h-1zM13 8h3v1h-3zM17 9h2v1h-2zM8 10h1v2H8zM10 11h2v1h-2zM14 10h1v3h-1zM16 11h3v1h-3zM1 9h2v1H1zM4 8h2v2H4zM2 11h3v1H2zM9 13h2v2H9zM12 13h1v1h-1zM8 16h1v3H8zM10 17h3v1h-3zM12 15h2v1h-2zM15 14h2v1h-2zM18 13h2v2h-2zM14 16h1v2h-1zM16 17h2v1h-2zM19 16h1v4h-1zM10 19h2v1h-2zM15 19h3v1h-3z" /></svg>
                Gostou? Avalia a gente no Google
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.stack}`}>
          <div className={s.intro}>
            <h2 className={`${s.h2} ${s.display}`}>Seu cliente pesquisou. Achou o concorrente.</h2>
            <p className={s.pLight}>Quando alguém busca &ldquo;barbearia perto de mim&rdquo; ou &ldquo;lanchonete em Itaquera&rdquo;, o Google mostra primeiro quem tem perfil completo, avaliações e site. Só Instagram não basta.</p>
          </div>
          <div className={s.grid3}>
            {pains.map((p) => (
              <div key={p.t} className={s.painCard}>
                <div className={s.display}>{p.t}</div>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="o-que-faz" className={s.section}>
        <div className={`${s.wrap} ${s.stack}`}>
          <div className={s.intro}>
            <span className={s.eyebrow}>O que a gente faz</span>
            <h2 className={`${s.h2} ${s.display}`}>Não é só um site. É seu negócio pronto pra ser achado e escolhido.</h2>
          </div>
          <div className={s.grid4}>
            {features.map((f) => (
              <div key={f.t} className={s.featCard}>
                <div className={s.iconBox}>{f.icon}</div>
                <h3 className={s.display}>{f.t}</h3>
                <ul>{f.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pacotes" className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.stack}`}>
          <div className={`${s.intro} ${s.center}`}>
            <span className={s.eyebrow}>Pacotes</span>
            <h2 className={`${s.h2} ${s.display}`}>Escolha por onde começar.</h2>
            <p className={s.p}>Pagamento único. Sem mensalidade obrigatória.</p>
          </div>
          <div className={s.plans}>
            <div className={s.plan}>
              <div>
                <div className={`${s.planName} ${s.display}`}>Essencial</div>
                <div className={s.planSub}>Pra aparecer no mapa e começar a juntar avaliação.</div>
              </div>
              <div>
                <div className={`${s.price} ${s.display}`}>3x R$ 99</div>
                <div className={s.planNote}>ou R$ 297 à vista</div>
              </div>
              <ul className={s.planList}>{essencial.map((i) => <li key={i}><Check />{i}</li>)}</ul>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnOutline} ${s.planBtn}`}>Quero o Essencial</a>
            </div>
            <div className={`${s.plan} ${s.planDark}`}>
              <span className={s.badge}>Mais completo</span>
              <div>
                <div className={`${s.planName} ${s.display}`}>Completo</div>
                <div className={s.planSub}>Pra ser achado, escolhido e saber de onde vem o cliente.</div>
              </div>
              <div>
                <div className={`${s.price} ${s.display}`}>R$ 597</div>
                <div className={s.planNote}>ou R$ 69/mês sem entrada (12 meses)</div>
              </div>
              <ul className={s.planList}>{completo.map((i) => <li key={i}><Check color="#F66F8A" />{i}</li>)}</ul>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnCrimson} ${s.planBtn}`}>Quero o Completo</a>
            </div>
          </div>
          <p className={s.footnote}>Quer que a gente cuide de tudo depois? Por <strong style={{ color: "#32045B" }}>R$ 39/mês</strong> mantemos site, perfil e segurança em dia, com relatório todo mês. Opcional.</p>
        </div>
      </section>

      <section className={s.section}>
        <div className={`${s.wrap} ${s.stack}`}>
          <div className={s.between}>
            <div className={s.intro}>
              <span className={s.eyebrow}>Seu negócio cresceu?</span>
              <h2 className={`${s.h2} ${s.display}`}>A gente pluga o sistema que você precisa.</h2>
              <p className={s.p}>Feito sob medida e ligado ao seu site, sem pagar por um sistema cheio de coisa que você não usa.</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnGhost}`}>Pedir orçamento</a>
          </div>
          <div className={s.chips}>
            {systems.map((c) => <span key={c} className={s.chip}>{c}</span>)}
            <span className={`${s.chip} ${s.chipDark}`}>O que mais você precisar</span>
          </div>
          <div id="exemplos" className={s.works}>
            {works.map((w) => (
              <a key={w.t} href={w.href} target="_blank" rel="noopener noreferrer" className={s.work}>
                <Image src={w.img} alt={w.alt} width={800} height={600} className={s.workImg} style={{ objectPosition: w.pos }} />
                <div>
                  <div className={s.workTitle}>{w.t}</div>
                  <div className={s.workSub}>{w.d}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.white}`}>
        <div className={`${s.wrap} ${s.stack}`}>
          <h2 className={`${s.h2} ${s.display}`} style={{ maxWidth: 720 }}>Simples assim. Você não precisa entender de internet.</h2>
          <div className={s.steps}>
            {steps.map((st, i) => (
              <div key={st.t} className={s.step}>
                <div className={`${s.stepNum} ${s.display}`}>{i + 1}</div>
                <div className={s.stepTitle}>{st.t}</div>
                <div className={s.stepText}>{st.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.faqWrap}>
          <h2 className={`${s.h2} ${s.display}`}>Perguntas que todo mundo faz</h2>
          <div>
            {faqs.map((f) => (
              <details key={f.q} className={s.faq}>
                <summary>{f.q}<span className={s.plus} aria-hidden="true">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className={`${s.cta} ${s.dark}`}>
        <div className={s.ctaInner}>
          <Star size={32} color="#F66F8A" />
          <h2 className={`${s.ctaTitle} ${s.display}`}>Bora colocar seu negócio no mapa?</h2>
          <p className={s.pLight}>Manda uma mensagem. A gente olha como você aparece hoje no Google e responde em até 24 horas, sem compromisso.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnCrimson} ${s.btnXl}`}>
            <WhatsIcon size={22} />Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerInner}`}>
          <span><strong className={s.display}>Ace</strong> · o ás do seu negócio</span>
          <span>@ace_4a · São Paulo, zona leste</span>
        </div>
      </footer>
    </div>
  );
}
