// Project descriptions are intentionally honest about their current development status.
export const mainProjects = [
  {
    id: "fluxo-mvp",
    title: "Fluxo MVP",
    description: "Aplicação pessoal de controle financeiro. A base da API inclui autenticação e estruturas para contas, categorias, transações e metas financeiras.",
    image: `${import.meta.env.BASE_URL}assets/projects/fluxo.svg`,
    status: "Em desenvolvimento",
    tags: ["Python", "FastAPI", "SQLAlchemy", "JWT", "API REST"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "gmail-discord-bot",
    title: "Gmail → Discord Bot",
    description: "Projeto de automação para consultar mensagens do Gmail e encaminhar notificações ao Discord. A autenticação OAuth já foi configurada; filtros de remetentes fazem parte do planejamento.",
    image: `${import.meta.env.BASE_URL}assets/projects/gmail-discord.svg`,
    status: "Em desenvolvimento",
    tags: ["Python", "Gmail API", "Discord", "OAuth 2.0", "Automação"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "minecraft-social",
    title: "Minecraft Social",
    description: "Conceito de plataforma social para a comunidade de mods de Minecraft, com foco em perfis de usuários e recursos comunitários.",
    image: `${import.meta.env.BASE_URL}assets/projects/minecraft-social.svg`,
    status: "Em desenvolvimento",
    tags: ["Desenvolvimento Web", "TypeScript", "Git", "GitHub"],
    liveUrl: "",
    githubUrl: "https://github.com/atrxh/minecraft-social"
  },
  {
    id: "conversor-imagens",
    title: "Conversor de Imagens",
    description: "Aplicativo desktop em Python para converter imagens, escolher o nome dos arquivos, abrir a pasta de saída e alternar o tema da interface.",
    image: `${import.meta.env.BASE_URL}assets/projects/conversor.svg`,
    status: "Em evolução",
    tags: ["Python", "CustomTkinter", "Desktop", "Arquivos"],
    liveUrl: "",
    githubUrl: "https://github.com/atrxh/Conversor-de-imagem"
  },
  {
    id: "diario-espiritual",
    title: "Diário Espiritual",
    description: "Aplicação de agenda e diário com planejamento de atividades, registro diário e uma API em Python como base do projeto.",
    image: `${import.meta.env.BASE_URL}assets/projects/diario.svg`,
    status: "Em desenvolvimento",
    tags: ["Python", "FastAPI", "HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "https://github.com/atrxh/Diario-Espiritual"
  }
]

