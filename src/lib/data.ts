export const whatsappLink = "https://wa.me/5511934070411";

export const painPoints = [
  { text: "Você posta e ninguém vê." },
  { text: "Não sabe o que publicar." },
  { text: "Não tem tempo pra cuidar disso." },
  { text: "Já tentou sozinho e não deu certo." },
];

export const services = [
  {
    eyebrow: "marca & design",
    title: "Marca & Design",
    desc: "Sua identidade construída do zero — ou repaginada pra fazer sentido de novo.",
    items: [
      "Criação de logo",
      "Identidade visual completa",
      "Manual de marca",
      "Design gráfico",
      "Materiais impressos",
    ],
  },
  {
    eyebrow: "marketing & conteúdo",
    title: "Marketing & Conteúdo",
    desc: "Presença digital com estratégia. Não só post bonito.",
    items: [
      "Gestão de redes sociais",
      "Estratégia de conteúdo",
      "Tráfego pago",
      "Google Meu Negócio",
      "WhatsApp Business",
    ],
  },
  {
    eyebrow: "fotografia",
    title: "Fotografia",
    desc: "Imagem profissional que valoriza o que você faz.",
    items: [
      "Fotografia corporativa",
      "Fotografia de produto",
      "Ensaio de serviço",
      "Cobertura de eventos",
    ],
  },
  {
    eyebrow: "web & tecnologia",
    title: "Web & Tecnologia",
    desc: "Do site institucional ao sistema sob medida.",
    items: ["Sites institucionais", "Landing pages", "Sistemas personalizados"],
  },
];

export type PlanTone = "paper" | "brand" | "ink";
export type StarColor = "plum" | "white" | "crimson";

export const plans: {
  name: string;
  price: string;
  tagline: string;
  tone: PlanTone;
  gradient: boolean;
  textColor: string;
  mutedColor: string;
  starColor: StarColor;
  buttonVariant: "secondary" | "accent" | "primary";
  features: string[];
}[] = [
  {
    name: "No Mapa",
    price: "R$ 500/mês",
    tagline: "Pra quem ainda não existe. A gente coloca você no radar.",
    tone: "paper",
    gradient: false,
    textColor: "var(--text-strong)",
    mutedColor: "var(--text-muted)",
    starColor: "plum",
    buttonVariant: "secondary",
    features: [
      "Google Meu Negócio configurado",
      "WhatsApp Business completo",
      "Instagram e Facebook organizados",
      "Identidade visual básica",
      "12 posts/mês (feed + stories)",
      "Relatório mensal",
    ],
  },
  {
    name: "Em Alta",
    price: "R$ 900/mês",
    tagline: "Pra quem já existe mas quer crescer de verdade.",
    tone: "brand",
    gradient: true,
    textColor: "var(--white)",
    mutedColor: "var(--plum-100)",
    starColor: "white",
    buttonVariant: "accent",
    features: [
      "Tudo do No Mapa +",
      "20 posts/mês (feed, stories e reels)",
      "Até 4 vídeos curtos editados/mês",
      "1 peça gráfica extra/mês",
      "Tráfego pago gerenciado",
      "Atendimento direto via WhatsApp",
    ],
  },
  {
    name: "No Topo",
    price: "R$ 1.500/mês",
    tagline: "Pra quem quer marca completa e presença que impressiona.",
    tone: "ink",
    gradient: true,
    textColor: "var(--white)",
    mutedColor: "var(--ink-300)",
    starColor: "crimson",
    buttonVariant: "primary",
    features: [
      "Tudo do Em Alta +",
      "Até 8 vídeos curtos editados/mês",
      "Site ou landing page no 1º mês",
      "Identidade visual completa + manual",
      "Materiais impressos",
      "Reunião mensal de estratégia",
    ],
  },
];

export const steps = [
  { n: "1", title: "Conversa", desc: "A gente entende seu negócio, seu momento e onde você quer chegar." },
  { n: "2", title: "Estratégia", desc: "Montamos o plano certo pra sua realidade — sem fórmula pronta." },
  { n: "3", title: "Produção", desc: "Colocamos a mão na massa. Você acompanha tudo de perto." },
  { n: "4", title: "Resultado", desc: "Relatórios, ajustes e melhoria contínua. Crescimento é processo." },
];

export const clients = ["Sanagás", "Construindo o Amanhã", "Novo Millenium"];

export const filterNames = ["Todos", "Branding", "Social Media", "Fotografia", "Web"] as const;

export const work = [
  { title: "Identidade Sanagás", category: "Branding", slotId: "work-1" },
  { title: "Feed Construindo o Amanhã", category: "Social Media", slotId: "work-2" },
  { title: "Ensaio Novo Millenium", category: "Fotografia", slotId: "work-3" },
  { title: "Site institucional", category: "Web", slotId: "work-4" },
  {
    title: "Manual de marca — Novo Millenium",
    category: "Branding",
    slotId: "work-5",
    coverImage: "/images/work/novo-millenium/logo-novo-millenium.png",
    caseStudy: "novo-millenium",
  },
  { title: "Cobertura de evento", category: "Fotografia", slotId: "work-6" },
];

export const testimonials = [
  {
    quote:
      "A Ace Lab entendeu nosso negócio antes de propor qualquer coisa. O resultado apareceu no primeiro mês.",
    name: "Cliente Sanagás",
    role: "Setor de energia",
  },
  {
    quote: "Finalmente uma marca que parece profissional de verdade. Sem enrolação, sem jargão.",
    name: "Cliente Construindo o Amanhã",
    role: "Construção civil",
  },
  {
    quote: "O acompanhamento é o diferencial. A gente sente que tem parceria, não fornecedor.",
    name: "Cliente Novo Millenium",
    role: "Varejo",
  },
];

export const faqs = [
  {
    question: "Tem fidelidade nos planos?",
    answer:
      "Não. Trabalhamos com contrato mensal renovável. Se não fizer sentido, você pode encerrar quando quiser.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "Presença e organização aparecem no primeiro mês. Resultado consistente costuma vir entre 3 e 6 meses — marketing é construção, não milagre.",
  },
  {
    question: "Preciso ter Instagram pronto pra começar?",
    answer: "Não. A gente cria ou organiza do zero. É exatamente pra isso que existe o plano No Mapa.",
  },
  {
    question: "Vocês atendem fora de São Paulo?",
    answer:
      "Sim. Todo o trabalho pode ser feito remotamente. Fotografia e reuniões presenciais são combinadas à parte.",
  },
  {
    question: "Posso contratar só um serviço, sem plano mensal?",
    answer: "Pode. Logo, site, fotos e materiais podem ser contratados de forma avulsa.",
  },
];
