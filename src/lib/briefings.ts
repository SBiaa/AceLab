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

export type BriefingIcon = {
  icon: "heart" | "users" | "waves" | "film" | "mic" | "sun";
  label: string;
};

export type ApplicationItem = {
  icon: "image" | "shirt" | "flag";
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
];

export function getBriefing(slug: string) {
  return briefings.find((b) => b.slug === slug);
}
