// Dados do convite da Isadora — edite aqui quando tiver endereço e contato confirmados.
export const isadoraEvent = {
  name: "Isadora",
  age: 3,
  // Data/hora do evento em horário de São Paulo. Usada na contagem regressiva.
  dateISO: "2026-12-26T16:30:00-03:00",
  dateLabel: "26 de dezembro de 2026",
  timeLabel: "16h30",
  city: "Ferraz de Vasconcelos",
  // TODO: preencher quando o endereço do salão/local for confirmado.
  addressLabel: null as string | null,
  // TODO: preencher com número de WhatsApp (formato 55DDDNUMERO) quando confirmado.
  rsvpWhatsapp: null as string | null,
};

// Fotos da Isadora — troque `src` por "/images/isadora/nome-do-arquivo.jpg"
// (coloque o arquivo em public/images/isadora/) pra substituir o mockup pela foto real.
export const isadoraPhotos: { id: string; caption: string; rotate: number; src?: string }[] = [
  { id: "foto-1", caption: "Isadora explorando a floresta", rotate: -6 },
  { id: "foto-2", caption: "Sorriso mais doce do bosque", rotate: 4 },
  { id: "foto-3", caption: "Nossa pequena aventureira", rotate: -3 },
  { id: "foto-4", caption: "Cheia de travessura como a Masha", rotate: 5 },
  { id: "foto-5", caption: "Preparando tudo com carinho", rotate: -4 },
  { id: "foto-6", caption: "3 aninhos de muita alegria!", rotate: 3 },
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
