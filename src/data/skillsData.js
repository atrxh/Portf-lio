import {
  Code2, Braces, Globe, Server, Database, GitBranch, Github,
  FileSpreadsheet, Cloud, Boxes, ClipboardList, FileText, CheckCircle,
  Users, Search, MessageCircle, Workflow
} from 'lucide-react'

export const skillsData = {
  heading: 'Competências e ferramentas',
  description: [
    'Minha experiência profissional combina rotinas administrativas, controle de estoque, dados operacionais e sistemas ERP.',
    'Na área de tecnologia, desenvolvo projetos próprios para praticar programação, APIs, automação e desenvolvimento web. As tecnologias refletem meu contato prático e meu aprendizado contínuo.'
  ],
  techGroups: [
    {
      label: 'Programação e Web',
      skills: [
        { name: 'Python', icon: Code2 },
        { name: 'HTML', icon: Globe },
        { name: 'CSS', icon: Braces },
        { name: 'JavaScript', icon: Code2 },
        { name: 'React', icon: Globe },
        { name: 'TypeScript', icon: Braces }
      ]
    },
    {
      label: 'Backend e Ferramentas',
      skills: [
        { name: 'FastAPI', icon: Server },
        { name: 'SQLAlchemy', icon: Database },
        { name: 'API REST', icon: Globe },
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: Github },
        { name: 'Linux', icon: Code2 }
      ]
    },
    {
      label: 'Administrativo e Operações',
      skills: [
        { name: 'Pacote Office', icon: FileSpreadsheet },
        { name: 'Google Workspace', icon: Cloud },
        { name: 'LibreOffice', icon: FileSpreadsheet },
        { name: 'Sistemas ERP', icon: Boxes },
        { name: 'Controle de estoque', icon: ClipboardList },
        { name: 'Notas fiscais', icon: FileText },
        { name: 'Metodologia 5S', icon: CheckCircle }
      ]
    }
  ],
  softSkills: [
    {
      title: 'Organização',
      description: 'Organização de materiais, registros, planilhas e relatórios para apoiar a rotina operacional.'
    },
    {
      title: 'Atenção aos detalhes',
      description: 'Conferência de informações, notas fiscais e movimentações de entrada e saída.'
    },
    {
      title: 'Análise e melhoria',
      description: 'Interesse em padronização de processos, acurácia dos dados e aplicação da metodologia 5S.'
    },
    {
      title: 'Atendimento e colaboração',
      description: 'Experiência com atendimento ao público e suporte à equipe em rotinas do setor.'
    }
  ]
}
