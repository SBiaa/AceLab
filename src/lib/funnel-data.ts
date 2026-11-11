export type Option = { value: string; label: string; hint?: string };

export const siteOptions: Option[] = [
  { value: "sim", label: "Já tenho" },
  { value: "em_construcao", label: "Está sendo feito" },
  { value: "nao", label: "Ainda não tenho" },
];

export const instagramOptions: Option[] = [
  { value: "ativo", label: "Tenho e posto sempre" },
  { value: "parado", label: "Tenho, mas está parado" },
  { value: "nao", label: "Não tenho" },
];

export const brandOptions: Option[] = [
  { value: "completa", label: "Tenho logo e identidade" },
  { value: "so_logo", label: "Só um logo simples" },
  { value: "renovar", label: "Tenho, mas quero renovar" },
  { value: "nao", label: "Não tenho nada ainda" },
];

export const experienceOptions: Option[] = [
  { value: "nenhum", label: "Nenhum", hint: "Nunca mexi com isso" },
  { value: "basico", label: "Básico", hint: "Posto de vez em quando" },
  { value: "intermediario", label: "Intermediário", hint: "Já fiz anúncio ou tive agência" },
  { value: "avancado", label: "Avançado", hint: "Sei o que quero e como funciona" },
];

export const serviceOptions: (Option & { graphic?: boolean })[] = [
  { value: "logo_identidade", label: "Logo e identidade visual", graphic: true },
  { value: "material_grafico", label: "Material gráfico", hint: "Cartão, cardápio, banner, folder…", graphic: true },
  { value: "redes_sociais", label: "Gestão de redes sociais" },
  { value: "trafego_pago", label: "Tráfego pago" },
  { value: "google_meu_negocio", label: "Google Meu Negócio" },
  { value: "fotografia", label: "Fotografia" },
  { value: "site", label: "Site ou landing page" },
  { value: "sistema", label: "Sistema sob medida" },
  { value: "nao_sei", label: "Não sei, quero orientação" },
];

export const graphicProductOptions: Option[] = [
  { value: "cartao", label: "Cartão de visita" },
  { value: "cardapio", label: "Cardápio" },
  { value: "panfleto", label: "Panfleto / folder" },
  { value: "banner", label: "Banner / faixa" },
  { value: "fachada", label: "Fachada / placa" },
  { value: "embalagem", label: "Embalagem / rótulo" },
  { value: "uniforme", label: "Uniforme / camiseta" },
  { value: "adesivo", label: "Adesivo / etiqueta" },
  { value: "outro", label: "Outro" },
];

export const goalOptions: Option[] = [
  { value: "aparecer", label: "Ser encontrado", hint: "Quero que mais gente me conheça" },
  { value: "vender", label: "Vender mais", hint: "Quero mais clientes e pedidos" },
  { value: "profissionalizar", label: "Parecer mais profissional" },
  { value: "organizar", label: "Organizar o que já tenho" },
];

export const timelineOptions: Option[] = [
  { value: "urgente", label: "O quanto antes" },
  { value: "este_mes", label: "Neste mês" },
  { value: "proximos_meses", label: "Nos próximos meses" },
  { value: "pesquisando", label: "Só pesquisando" },
];

export const budgetOptions: Option[] = [
  { value: "ate_500", label: "Até R$ 500" },
  { value: "500_1500", label: "R$ 500 a R$ 1.500" },
  { value: "1500_3000", label: "R$ 1.500 a R$ 3.000" },
  { value: "acima_3000", label: "Acima de R$ 3.000" },
  { value: "sem_ideia", label: "Ainda não sei" },
];

export const GRAPHIC_SERVICES: string[] = serviceOptions.filter((s) => s.graphic).map((s) => s.value);

export const STEP_LABELS = ["Você", "Seu negócio hoje", "O que precisa", "Referências", "Fechamento"] as const;

export type FunnelAnswers = {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  businessSegment: string;
  hasSite: string;
  siteUrl: string;
  instagram: string;
  instagramHandle: string;
  brandStatus: string;
  experience: string;
  services: string[];
  graphicProducts: string[];
  references: string;
  styleNotes: string;
  goal: string;
  timeline: string;
  budget: string;
  notes: string;
};

export const emptyAnswers: FunnelAnswers = {
  name: "",
  phone: "",
  email: "",
  businessName: "",
  businessSegment: "",
  hasSite: "",
  siteUrl: "",
  instagram: "",
  instagramHandle: "",
  brandStatus: "",
  experience: "",
  services: [],
  graphicProducts: [],
  references: "",
  styleNotes: "",
  goal: "",
  timeline: "",
  budget: "",
  notes: "",
};
