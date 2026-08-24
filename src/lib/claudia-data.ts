export const gradeOptions = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"];

export const claudiaFeatures = [
  {
    icon: "LayersIcon" as const,
    title: "Geração a partir de um banco curado",
    desc: "Nada de IA gerando na hora. Os temas de Matemática, Português, História, Geografia e Ciências já vêm prontos, com código da habilidade, materiais e passo a passo — e a geração evita repetir o que já foi dado.",
  },
  {
    icon: "TargetIcon" as const,
    title: "Grade fixa semanal",
    desc: "Você configura uma vez qual matéria cai em cada horário, de segunda a sexta, e usa como molde pra gerar novas semanas em segundos.",
  },
  {
    icon: "CodeIcon" as const,
    title: "Cópia direto pro SGP",
    desc: "Um clique copia o código do currículo e a descrição no formato exato que vai no relatório oficial da prefeitura. Sem retrabalho.",
  },
  {
    icon: "ImageIcon" as const,
    title: "Atividade e lição de casa prontas",
    desc: "Cada tema já vem com folha de atividade impressa e lição de casa, com preview e botão de impressão ou PDF.",
  },
  {
    icon: "TrophyIcon" as const,
    title: "Cobertura curricular",
    desc: "Um painel cruza os códigos do Currículo da Cidade com o que já foi dado em aula — funciona como checklist de prestação de contas.",
  },
  {
    icon: "FlagIcon" as const,
    title: "Histórico de temas",
    desc: "Veja o que já foi trabalhado e quando, com um clique direto pra semana correspondente.",
  },
  {
    icon: "UsersIcon" as const,
    title: "Compartilhamento sem login",
    desc: "Gere um link público, somente leitura, que expira em 30 dias — pra coordenação ou outra professora acompanhar sem precisar de cadastro.",
  },
  {
    icon: "PenIcon" as const,
    title: "Edição manual quando quiser",
    desc: "Qualquer plano gerado pode ser ajustado à mão, e fica marcado como editado — você sempre no controle do que vai pra sala.",
  },
];

export const claudiaScreenshots: { label: string; src?: string }[] = [
  { label: "Grade semanal" },
  { label: "Geração de tema" },
  { label: "Cobertura curricular" },
  { label: "Tema Gatinho" },
];
