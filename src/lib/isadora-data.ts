// Dados do convite da Isadora — edite aqui quando tiver endereço e contato confirmados.
export const isadoraEvent = {
  // Identifica esse convite nas confirmações salvas no banco (produto "Convite Moderno").
  slug: "isadora",
  name: "Isadora",
  age: 3,
  // Data/hora do evento em horário de São Paulo. Usada na contagem regressiva.
  dateISO: "2026-12-26T16:30:00-03:00",
  dateLabel: "26 de dezembro de 2026",
  timeLabel: "16h30",
  city: "Ferraz de Vasconcelos",
  // TODO: preencher quando o endereço do salão/local for confirmado.
  addressLabel: null as string | null,
  rsvpWhatsapp: "5511985113658" as string | null,
};

// Fotos da Isadora — pra trocar por outras, coloque o arquivo em
// public/images/isadora/ e aponte `src` pra "/images/isadora/nome-do-arquivo.jpg".
export const isadoraPhotos: { id: string; caption: string; rotate: number; src?: string }[] = [
  { id: "foto-1", caption: "Beliscando um docinho", rotate: -6, src: "/images/isadora/isadora-1.jpg" },
  { id: "foto-2", caption: "Pulando de alegria", rotate: 4, src: "/images/isadora/isadora-2.jpg" },
  { id: "foto-3", caption: "Rindo com os amigos", rotate: -3, src: "/images/isadora/isadora-3.jpg" },
  { id: "foto-4", caption: "No colo da mamãe", rotate: 5, src: "/images/isadora/isadora-4.jpg" },
  { id: "foto-5", caption: "Curiosa e cheia de vida", rotate: -4, src: "/images/isadora/isadora-5.jpg" },
];

// Tamanhos da aniversariante — preencha quando confirmar com a família.
export const isadoraSizes = {
  shoeSize: null as string | null, // ex: "25"
  clothingSize: null as string | null, // ex: "3 anos" ou "98cm"
};

// Ideias de presente por categoria — edite/adicione livremente.
export const isadoraGiftIdeas: { icon: string; title: string; examples: string }[] = [
  { icon: "👟", title: "Calçados", examples: "Tênis, sandália ou chinelo confortável" },
  { icon: "👗", title: "Roupinhas", examples: "Conjuntos, vestidos, pijamas" },
  { icon: "🧴", title: "Cremes e cosméticos infantis", examples: "Hidratante, shampoo, kit de banho" },
  { icon: "🧸", title: "Brinquedos", examples: "Bonecas, blocos de montar, quebra-cabeça" },
  { icon: "🎨", title: "Arte e criatividade", examples: "Massinha, lápis de cor, giz de cera, livros infantis" },
  { icon: "🐻", title: "Temáticos Masha e o Urso", examples: "Pelúcias, mochila, itens da turma da Masha" },
];
