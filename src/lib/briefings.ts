export type BrandColor = {
  name: string;
  hex: string;
  note: string;
};

export type SubBrand = {
  tag: string;
  name: string;
  description: string;
  logo: string;
  logoWidth: number;
  accent: string;
  gradientFrom: string;
  gradientTo: string;
  colorNote: string;
};

export type IconKey =
  | "heart"
  | "users"
  | "waves"
  | "film"
  | "mic"
  | "sun"
  | "image"
  | "shirt"
  | "flag"
  | "layers"
  | "target"
  | "trophy"
  | "cat"
  | "pen";

export type BriefingIcon = {
  icon: IconKey;
  label: string;
};

export type ApplicationItem = {
  icon: IconKey;
  label: string;
};

export type Briefing = {
  slug: string;
  clientName: string;
  category: string;
  eyebrow: string;
  title: string;
  tagline: string;
  coverLogo: string;
  coverGradient: [string, string, string];
  accentColor: string;
  location: string;
  contactEmail: string;
  contactHandle: string;
  year: string;
  about: string;
  mission: string;
  voiceWords: string[];
  palette: BrandColor[];
  typography: {
    displayFont: string;
    displaySample: string;
    displayNote: string;
    bodyFont: string;
    bodySample: string;
    bodyNote: string;
  };
  icons: BriefingIcon[];
  pattern: string;
  subBrandsTitle?: string;
  subBrands: SubBrand[];
  applications: ApplicationItem[];
  closingMessage: string;
};

export const briefings: Briefing[] = [
  {
    slug: "novo-millenium",
    clientName: "Novo Millenium",
    category: "Branding",
    eyebrow: "Manual de identidade da marca",
    title: "Novo Millenium",
    tagline:
      "Diretrizes visuais e de voz para todos os polos — Hidro, Corpo em Movimento, Cinema no Bairro e Podcast.",
    coverLogo: "/images/work/novo-millenium/logo-novo-millenium.png",
    coverGradient: ["#0b1620", "#0f3245", "#136f83"],
    accentColor: "#136f83",
    location: "Vila Santo Antônio, Ferraz de Vasconcelos — SP",
    contactEmail: "contato@novomillenium.org.br",
    contactHandle: "@novomillenium",
    year: "2026",
    about:
      "A Novo Millenium nasceu do trabalho informal do pai da Deka, que ajudava vizinhos da Vila Santo Antônio. Ela formalizou esse cuidado — hoje são mais de 10 anos de história e mais de 3.000 mulheres impactadas.",
    mission:
      "Promover inclusão social, saúde e cultura para comunidades de baixa renda. Acreditamos que todo mundo merece ser ajudado.",
    voiceWords: ["Acolhedora", "Comunitária", "Inspiradora", "Acessível", "Genuína"],
    palette: [
      { name: "Navy 700", hex: "#0f3245", note: "base institucional" },
      { name: "Teal 600", hex: "#136f83", note: "marca, botões e links" },
      { name: "Sol 500", hex: "#f5a623", note: "ação e destaques" },
      { name: "Creme 50", hex: "#fffdf8", note: "fundo padrão" },
    ],
    typography: {
      displayFont: "Fredoka",
      displaySample: "AaBbCc 123",
      displayNote: "Títulos, nomes de polo e o logotipo-companion.",
      bodyFont: "Nunito",
      bodySample: "AaBbCc 123",
      bodyNote: "Textos, legendas e interface — muito legível para o público da melhor idade.",
    },
    icons: [
      { icon: "heart", label: "Cuidado" },
      { icon: "users", label: "Comunidade" },
      { icon: "waves", label: "Hidro" },
      { icon: "film", label: "Cinema" },
      { icon: "mic", label: "Podcast" },
      { icon: "sun", label: "Bem-estar" },
    ],
    pattern:
      "Uma textura sutil de pontos e ondas suaves, usada como fundo decorativo em capas, materiais impressos e stories — sempre em baixa opacidade, nunca competindo com o conteúdo.",
    subBrands: [
      {
        tag: "Polo 01",
        name: "Viva Bem com Hidro",
        description:
          "Hidroginástica duas vezes por semana, em turma mista, à noite. Cuidado com o corpo e a mente para a melhor idade.",
        logo: "/images/work/novo-millenium/logo-hidro-full.png",
        logoWidth: 220,
        accent: "#2bb5b9",
        gradientFrom: "#4fd3c9",
        gradientTo: "#136f83",
        colorNote: "Cor de identidade — Teal 400",
      },
      {
        tag: "Polo 02",
        name: "Corpo em Movimento",
        description:
          "Ginástica para a melhor idade, ao ar livre, direto na rua da Vila Santo Antônio. Bem-estar físico e mental em comunidade.",
        logo: "/images/work/novo-millenium/logo-corpo-em-movimento.png",
        logoWidth: 140,
        accent: "#f0397a",
        gradientFrom: "#f56b9c",
        gradientTo: "#2f8fe0",
        colorNote: "Selo ilustrado original — não redesenhado",
      },
      {
        tag: "Polo 03",
        name: "Cinema no Bairro",
        description: "Sessões de cinema gratuitas, com pipoca e suco por nossa conta. Cultura e lazer para toda a família.",
        logo: "/images/work/novo-millenium/logo-cinema-no-bairro.png",
        logoWidth: 200,
        accent: "#a01f2d",
        gradientFrom: "#a01f2d",
        gradientTo: "#e0b13a",
        colorNote: "Estilo marquise — vermelho e dourado",
      },
      {
        tag: "Polo 04",
        name: "Podcast do Millenium",
        description: "Conversas em áudio que carregam a voz da Novo Millenium. Segue a identidade navy/teal da marca guarda-chuva.",
        logo: "/images/work/novo-millenium/logo-podcast-millenium.png",
        logoWidth: 220,
        accent: "#0f3245",
        gradientFrom: "#12475f",
        gradientTo: "#0b1620",
        colorNote: "Cor de identidade — paleta principal",
      },
    ],
    applications: [
      { icon: "image", label: "Cartão de visita" },
      { icon: "shirt", label: "Camiseta institucional" },
      { icon: "flag", label: "Banner de evento" },
    ],
    closingMessage: "Toda dúvida sobre o uso da marca, fale com o time da Novo Millenium.",
  },
  {
    slug: "claudia",
    clientName: "Claudia",
    category: "Branding",
    eyebrow: "Manual de identidade da marca",
    title: "Claudia",
    tagline: "Sistema visual completo pra uma plataforma que devolve tempo pra quem dá aula.",
    coverLogo: "/images/claudia/logo-horizontal.svg",
    coverGradient: ["#221b12", "#b85f00", "#f7941d"],
    accentColor: "#f7941d",
    location: "São Paulo — SP",
    contactEmail: "contato@acelab.com.br",
    contactHandle: "@acelab",
    year: "2026",
    about:
      "A Claudia nasceu do dia a dia de uma professora do Ensino Fundamental 1 na rede municipal de São Paulo (SME-SP). Ela resolve algo bem concreto: montar o plano de aula da semana rápido, sem gastar hora com IA paga, e já no formato que precisa ser colado no sistema oficial da prefeitura (SGP).",
    mission:
      "Devolver tempo pra quem ensina. Planos de aula prontos em minutos, não horas — sem jargão técnico, sem tela complicada.",
    voiceWords: ["Prática", "Direta", "Acolhedora", "Sem jargão", "Da sala de aula"],
    palette: [
      { name: "Laranja 500", hex: "#F7941D", note: "marca, CTAs e destaques" },
      { name: "Índigo 500", hex: "#5B4FC7", note: "seções alternativas e navegação" },
      { name: "Amarelo 500", hex: "#FFD23F", note: "acento — badges e ilustrações" },
      { name: "Teal 500", hex: "#2FB6A6", note: "acento — categorias e sucesso" },
    ],
    typography: {
      displayFont: "Baloo 2",
      displaySample: "AaBbCc 123",
      displayNote: "Títulos e o logotipo — ecoa a rotundidade da marca original.",
      bodyFont: "Inter",
      bodySample: "AaBbCc 123",
      bodyNote: "Textos e interface — alta legibilidade pro dia a dia de quem dá aula.",
    },
    icons: [
      { icon: "layers", label: "Banco curado" },
      { icon: "target", label: "Grade semanal" },
      { icon: "trophy", label: "Cobertura curricular" },
      { icon: "cat", label: "Tema Gatinho" },
      { icon: "pen", label: "Edição manual" },
      { icon: "flag", label: "Histórico de temas" },
    ],
    pattern:
      "Fundos em cor sólida, sem gradientes agressivos. O único elemento decorativo é um círculo translúcido grande no canto, usado em posts, capas e no tema Gatinho — nunca em telas de produto, pra manter a interface limpa e objetiva.",
    subBrandsTitle: "Temas visuais",
    subBrands: [
      {
        tag: "Tema padrão",
        name: "Ace",
        description:
          "O visual usado em todo o produto — paleta laranja e índigo, cantos bem arredondados, sombra suave. Direto ao ponto, sem distração.",
        logo: "/images/claudia/logo-mark.svg",
        logoWidth: 120,
        accent: "#F7941D",
        gradientFrom: "#FFAD52",
        gradientTo: "#B85F00",
        colorNote: "Cor de identidade — Laranja 500",
      },
      {
        tag: "Tema alternativo",
        name: "Gatinho",
        description:
          "Modo lúdico e opcional — muda a paleta e os ícones, e ganha um mascote de gato pixel-art (estilo oneko) andando pela tela. Ativa e desativa no perfil, sem afetar nenhum dado da grade.",
        logo: "/images/claudia/logo-mark.svg",
        logoWidth: 120,
        accent: "#5B4FC7",
        gradientFrom: "#8C82DB",
        gradientTo: "#332C77",
        colorNote: "Cor de identidade — Índigo 500",
      },
    ],
    applications: [
      { icon: "image", label: "Post pra Instagram" },
      { icon: "image", label: "Capa de e-book" },
      { icon: "flag", label: "Banner de lançamento" },
    ],
    closingMessage: "Toda dúvida sobre o uso da marca da Claudia, fale com o time da Ace Lab.",
  },
];

export function getBriefing(slug: string) {
  return briefings.find((b) => b.slug === slug);
}
