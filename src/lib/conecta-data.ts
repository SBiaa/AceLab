export const conectaRoles = [
  {
    icon: "LayersIcon" as const,
    tag: "Coordenação",
    title: "Quem enxerga a ONG inteira",
    desc: "Dashboard com recebido, pendente e atrasado do mês, cadastro de associadas e professoras, grade de turmas, financeiro completo e edição da chamada de qualquer turma, em qualquer dia.",
  },
  {
    icon: "PenIcon" as const,
    tag: "Professora",
    title: "Quem dá aula e acompanha de perto",
    desc: "Turmas do dia com chamada pendente ou feita, frequência de cada aluna e um painel de saúde da turma — pra saber quem sentiu dor na semana antes de montar a aula.",
  },
  {
    icon: "WavesIcon" as const,
    tag: "Associada",
    title: "Quem faz a hidroginástica",
    desc: "Situação financeira, frequência própria e check-in diário de saúde — peso, disposição, dor e composição corporal — com relatório mensal de evolução.",
  },
];

export const conectaFeatures = [
  {
    icon: "TargetIcon" as const,
    title: "Matrícula guiada por plano",
    desc: "Só existem 3 frequências contratáveis — 2, 3 ou 4 aulas por semana. A coordenação combina turmas na grade semanal até fechar exatamente o plano escolhido.",
  },
  {
    icon: "CalendarIcon" as const,
    title: "Chamada e frequência",
    desc: "Calendário mensal navegável pra lançar ou editar a chamada de qualquer turma. Faixas padronizadas — ótima, boa, atenção, baixa — aparecem em toda tela que mostra presença.",
  },
  {
    icon: "WalletIcon" as const,
    title: "Caixa e competência lado a lado",
    desc: "Geração de mensalidades em lote, registro manual de pagamento, vendas de produtos, controle de gastos e fechamento do mês nas duas leituras: o que entrou/saiu e o que foi cobrado/pago.",
  },
  {
    icon: "HeartIcon" as const,
    title: "Saúde sem julgar o corpo",
    desc: "Check-in diário preenchido pela própria associada e avaliação física feita pela professora — com IMC em selo cinza, sem rótulos como 'sobrepeso' ou 'obesidade'.",
  },
  {
    icon: "ChatIcon" as const,
    title: "Feed social interno",
    desc: "Posts com alcance geral, por projeto ou por turma, reações fixas e comentários — o mesmo espaço pra coordenação, professoras e associadas trocarem recado.",
  },
  {
    icon: "UsersIcon" as const,
    title: "Um papel, um jeito de ver o sistema",
    desc: "Admin, professora e associada usam o mesmo painel, mas cada uma só enxerga e edita o que é dela — inclusive nos dados de saúde.",
  },
  {
    icon: "SparkleIcon" as const,
    title: "Senha fácil de lembrar e ditar",
    desc: "Cada associada recebe uma senha no formato 'flor+2 dígitos', gerada automaticamente e enviada por WhatsApp — nunca o CPF, pensada pra ser dita por telefone sem soletrar.",
  },
  {
    icon: "ShieldIcon" as const,
    title: "Nada se perde",
    desc: "Matrícula, turma, produto ou categoria de despesa com movimento vinculado não pode ser excluído — só desativado. O histórico da ONG fica sempre íntegro.",
  },
];

export const conectaScreenshots: { label: string; src?: string }[] = [
  { label: "Dashboard da coordenação" },
  { label: "Matrícula guiada" },
  { label: "Fechamento do mês" },
  { label: "Meu progresso" },
];
