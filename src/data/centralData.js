// Personal information for the portfolio. Update this file when your details change.
export const profileData = {
  name: "Arthur Guilherme Gomes da Silva",
  displayName: ["Arthur", "Gomes da Silva"],
  title: "Software & Operações",
  description: "TECNOLOGIA • ORGANIZAÇÃO • PROCESSOS",
  location: "Brasil",
  email: "a.guilhermegds@gmail.com",
  github: "https://github.com/atrxh",
  cvUrl: `${import.meta.env.BASE_URL}assets/Arthur_Guilherme_Gomes_da_Silva_CV.pdf`,
  tagline: "Experiência operacional e tecnologia para resolver problemas reais."
}

export const socialLinks = [
  { name: "GitHub", url: profileData.github, icon: "github" },
  { name: "E-mail", url: `mailto:${profileData.email}`, icon: "mail" }
]

export const navItems = [
  { name: "Perfil", path: "/profile" },
  { name: "Projetos", path: "/projects" },
  { name: "Competências", path: "/skills" },
  { name: "Experiência", path: "/experience" },
  { name: "Formação", path: "/achievements" }
]

export const aboutText = [
  "Tenho experiência em rotinas administrativas, backoffice, controle de estoque, lançamento de notas fiscais e operação de sistemas ERP.",
  "Em paralelo, desenvolvo projetos próprios com Python, APIs e tecnologias web, usando programação para aprender e construir ferramentas práticas.",
  "Busco oportunidades em desenvolvimento de software, áreas administrativas, almoxarifado, logística e funções fiscais."
]
