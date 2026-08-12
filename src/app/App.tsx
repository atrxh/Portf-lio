import { useState, useEffect, useRef } from "react";
import { Github, Mail, Menu, X, ExternalLink, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const GITHUB = "https://github.com/atrxh";
const EMAIL = "a.guilhermegds@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const navItems = [
  { id: "sobre", label: "Sobre", mark: "[~]" },
  { id: "experiencia", label: "Experiência", mark: "[/]" },
  { id: "habilidades", label: "Habilidades", mark: "[+]" },
  { id: "projetos", label: "Projetos", mark: "[#]" },
  { id: "contato", label: "Contato", mark: "[@]" },
];

const projects = [
  {
    title: "Automação de Planilhas",
    label: "python // automation",
    desc: "Scripts Python para automatizar tarefas repetitivas em planilhas, gerar relatórios e organizar dados de forma eficiente.",
    tags: ["Python", "Pandas", "openpyxl"],
    repo: `${GITHUB}/automacao-planilhas`,
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=640&h=360&fit=crop&auto=format",
  },
  {
    title: "Controle de Estoque",
    label: "python // management",
    desc: "Sistema de gestão de estoque baseado na experiência prática como almoxarife, com registro de entradas e saídas.",
    tags: ["Python", "SQLite", "tkinter"],
    repo: `${GITHUB}/controle-estoque`,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=360&fit=crop&auto=format",
  },
  {
    title: "Portfólio Web",
    label: "html // css // js",
    desc: "Portfólio pessoal responsivo com design limpo, focado em usabilidade e acessibilidade.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    repo: `${GITHUB}/Portf-lio`,
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=640&h=360&fit=crop&auto=format",
  },
  {
    title: "Dashboard de Dados",
    label: "python // data",
    desc: "Visualização de dados de almoxarifado em um dashboard interativo, facilitando análise e tomada de decisões.",
    tags: ["Python", "Matplotlib", "Pandas"],
    repo: `${GITHUB}/dashboard-dados`,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop&auto=format",
  },
];

const skillGroups = [
  {
    mark: "[/]",
    title: "Logística & Almoxarifado",
    items: [
      "Gestão e controle de estoque",
      "Recebimento e expedição de materiais",
      "Inventário físico e patrimônio",
      "Organização de depósito e layout",
      "Emissão de notas e requisições",
      "Conferência e rastreamento de itens",
    ],
  },
  {
    mark: "[+]",
    title: "Ferramentas de Escritório",
    items: [
      "Google Workspace (Docs, Sheets, Slides, Drive)",
      "Microsoft Office (Excel, Word, PowerPoint)",
      "Excel Avançado (fórmulas, tabela dinâmica)",
      "Google Sheets (automação, Apps Script)",
    ],
  },
  {
    mark: "[#]",
    title: "Programação & Dev",
    items: [
      "Python (scripts, automação, pandas)",
      "HTML5 (estrutura e semântica)",
      "CSS3 (layout, responsividade)",
      "JavaScript (interatividade, DOM)",
      "Automação de relatórios e planilhas",
      "Otimização e organização de processos",
    ],
  },
];

function useScrollSpy() {
  const [active, setActive] = useState("sobre");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0% -60% 0%", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function useFadeIn(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(18px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ mark, label }: { mark: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="font-mono text-xs text-muted-foreground select-none">{mark}</span>
      <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2 py-0.5 bg-secondary text-muted-foreground rounded border border-border">
      {label}
    </span>
  );
}

function Sidebar({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-3 py-4 border-b border-border">
        <div className="flex items-center gap-2 px-2 py-1">
          <span className="font-mono text-[11px] text-muted-foreground">[A]</span>
          <span className="font-medium text-sm tracking-tight">Arthur Guilherme</span>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground px-2 mt-0.5 leading-relaxed">
          almoxarife // dev em formação
        </p>
      </div>

      <nav className="flex-1 p-2 space-y-px overflow-y-auto">
        <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest px-2 py-1.5 opacity-60">
          Páginas
        </p>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors duration-100 ${
              active === item.id
                ? "bg-accent text-foreground font-medium"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <span className="font-mono text-[10px] opacity-60 select-none">{item.mark}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-2 border-t border-border space-y-px">
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          <Github size={13} />
          <span className="font-mono text-xs">GitHub</span>
        </a>
        <a
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          <Mail size={13} />
          <span className="font-mono text-xs">Email</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const active = useScrollSpy();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // clipboard indisponível — botão simplesmente não dá feedback
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-[240px] border-r border-border bg-[#fbfaf8] z-30">
        <Sidebar active={active} onNavigate={scrollTo} />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-12 bg-background/95 backdrop-blur border-b border-border z-30 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-muted-foreground">[A]</span>
          <span className="font-medium text-sm">Arthur</span>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="p-1.5 rounded hover:bg-accent transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={17} />
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/20 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              className="lg:hidden fixed top-0 left-0 h-full w-[240px] bg-[#fbfaf8] border-r border-border z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-3 py-4 border-b border-border">
                <div className="flex items-center gap-2 px-2">
                  <span className="font-mono text-[11px] text-muted-foreground">[A]</span>
                  <span className="font-medium text-sm">Arthur</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 rounded hover:bg-accent transition-colors mr-1"
                  aria-label="Fechar menu"
                >
                  <X size={15} />
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <Sidebar active={active} onNavigate={scrollTo} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="lg:ml-[240px] min-h-screen pt-12 lg:pt-0">
        {/* Cover */}
        <div
          className="h-32 lg:h-44 relative overflow-hidden bg-[#f1f0ee]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55,53,47,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(55,53,47,0.055) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f7f6f3]/60 via-transparent to-[#e9e8e3]/60" />
        </div>

        {/* Profile */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="relative z-10 -mt-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-[72px] h-[72px] rounded-xl bg-[#37352f] flex items-center justify-center border-4 border-white shadow-md"
            >
              <span className="font-mono text-white text-2xl font-medium select-none">A</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-5"
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground">Arthur Guilherme</h1>
              <p
                className="text-sm text-muted-foreground mt-1.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                almoxarife{" "}
                <span className="opacity-40">//</span>{" "}
                desenvolvedor em formação
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap gap-4 mt-5"
            >
              {[
                { mark: "[/]", label: "Almoxarife" },
                { mark: "[+]", label: "Google Workspace" },
                { mark: "[#]", label: "Python / JS / HTML" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span
                    className="text-[10px] text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item.mark}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-20 pb-24">
            {/* SOBRE */}
            <section id="sobre">
              <Fade>
                <SectionLabel mark="[~]" label="sobre" />
                <h2 className="text-2xl font-semibold mt-4 mb-4 tracking-tight">
                  Oi, eu sou o Arthur.
                </h2>
                <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                  <p>
                    Profissional com experiência em logística e almoxarifado, atuando como{" "}
                    <span className="text-foreground font-medium">Almoxarife</span> e{" "}
                    <span className="text-foreground font-medium">
                      Assistente de Almoxarifado
                    </span>
                    . Durante essa trajetória, desenvolvi habilidades sólidas em gestão de
                    estoque, controle patrimonial, organização de depósito e otimização de
                    processos internos.
                  </p>
                  <p>
                    Atualmente estou expandindo minha atuação para o mundo do desenvolvimento,
                    aprendendo e praticando{" "}
                    <span className="text-foreground font-medium">
                      Python, HTML5, CSS3 e JavaScript
                    </span>
                    . A mesma lógica de organização e eficiência que apliquei no almoxarifado
                    agora orienta meu trabalho com código: automação de planilhas, otimização
                    de tarefas e soluções práticas para problemas reais.
                  </p>
                  <p>
                    Tenho domínio nas ferramentas do{" "}
                    <span className="text-foreground font-medium">Google Workspace</span> e{" "}
                    <span className="text-foreground font-medium">Pacote Office</span>, que uso
                    ativamente para organização, comunicação e produção de documentos e
                    relatórios.
                  </p>
                </div>

                {/* Callout block (Notion-style) */}
                <div className="mt-6 flex gap-3 bg-card border border-border rounded p-4">
                  <span
                    className="text-xs text-muted-foreground mt-0.5 select-none flex-shrink-0"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    [i]
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Objetivo:</span> Unir
                    experiência operacional em logística com habilidades técnicas em
                    programação para criar soluções de automação e gestão de dados que
                    resolvam problemas reais do dia a dia.
                  </p>
                </div>
              </Fade>
            </section>

            {/* EXPERIENCIA */}
            <section id="experiencia">
              <Fade>
                <SectionLabel mark="[/]" label="experiência" />
                <h2 className="text-2xl font-semibold mt-4 mb-6 tracking-tight">
                  Trajetória Profissional
                </h2>
              </Fade>

              <div className="space-y-4">
                <Fade delay={80}>
                  <div className="border border-border rounded p-5 hover:bg-card transition-colors duration-150">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-start gap-3">
                        <span
                          className="text-[11px] text-muted-foreground mt-0.5 select-none"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          [/]
                        </span>
                        <div>
                          <p className="font-medium text-sm">Almoxarife</p>
                          <p
                            className="text-[10px] text-muted-foreground mt-0.5"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            cargo principal
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        experiência
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed pl-6">
                      Responsável pelo controle, organização e gestão do estoque. Realizava
                      recebimento e expedição de materiais, inventários periódicos, controle
                      patrimonial e manutenção da ordem no depósito. Otimizou processos internos
                      com planilhas e automação de tarefas repetitivas.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 pl-6">
                      {["Gestão de Estoque", "Inventário", "Controle Patrimonial", "Excel", "Google Sheets"].map(
                        (tag) => <Tag key={tag} label={tag} />
                      )}
                    </div>
                  </div>
                </Fade>

                <Fade delay={130}>
                  <div className="border border-border rounded p-5 hover:bg-card transition-colors duration-150">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-start gap-3">
                        <span
                          className="text-[11px] text-muted-foreground mt-0.5 select-none"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          [/]
                        </span>
                        <div>
                          <p className="font-medium text-sm">Assistente de Almoxarifado</p>
                          <p
                            className="text-[10px] text-muted-foreground mt-0.5"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            cargo anterior
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        experiência
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed pl-6">
                      Apoio nas operações de almoxarifado: conferência e recebimento de
                      materiais, organização do estoque, emissão de notas e requisições,
                      rastreamento de itens e suporte administrativo nas operações do depósito.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 pl-6">
                      {["Organização", "Conferência", "Suporte Administrativo", "Office"].map(
                        (tag) => <Tag key={tag} label={tag} />
                      )}
                    </div>
                  </div>
                </Fade>

                <Fade delay={180}>
                  <div className="border border-border rounded p-5 border-dashed hover:bg-card transition-colors duration-150">
                    <div className="flex items-start gap-3">
                      <span
                        className="text-[11px] text-muted-foreground mt-0.5 select-none"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        [&gt;]
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium text-sm">Desenvolvedor em Formação</p>
                          <span
                            className="text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            em andamento
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
                          Estudando Python, HTML5, CSS3 e JavaScript com aplicação prática em
                          projetos de automação, controle de dados e desenvolvimento web.
                          Aprimorando habilidades de otimização e organização que já eram
                          praticadas no almoxarifado, agora com código.
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {["Python", "HTML5", "CSS3", "JavaScript", "Git"].map((tag) => (
                            <Tag key={tag} label={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </section>

            {/* HABILIDADES */}
            <section id="habilidades">
              <Fade>
                <SectionLabel mark="[+]" label="habilidades" />
                <h2 className="text-2xl font-semibold mt-4 mb-6 tracking-tight">
                  O que eu sei fazer
                </h2>
              </Fade>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {skillGroups.map((group, i) => (
                  <Fade key={group.title} delay={i * 70}>
                    <div className="border border-border rounded p-4 hover:bg-card transition-colors duration-150 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[11px] text-muted-foreground select-none"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {group.mark}
                        </span>
                        <span className="text-sm font-medium">{group.title}</span>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span
                              className="text-[10px] mt-0.5 opacity-40 select-none flex-shrink-0"
                              style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            >
                              --
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Fade>
                ))}
              </div>
            </section>

            {/* PROJETOS */}
            <section id="projetos">
              <Fade>
                <SectionLabel mark="[#]" label="projetos" />
                <h2 className="text-2xl font-semibold mt-4 mb-1.5 tracking-tight">
                  Repositórios
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Projetos em construção — cada card leva ao repositório no GitHub.
                </p>
              </Fade>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((project, i) => (
                  <Fade key={project.title} delay={i * 70}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="relative h-36 bg-muted overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.04] transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/90 rounded px-2 py-0.5 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalLink size={9} />
                          <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            ver repo
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-3">
                          <span
                            className="text-[9px] text-white/70"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {project.label}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium mb-1.5">{project.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                        </div>
                      </div>
                    </a>
                  </Fade>
                ))}
              </div>
            </section>

            {/* CONTATO */}
            <section id="contato">
              <Fade>
                <SectionLabel mark="[@]" label="contato" />
                <h2 className="text-2xl font-semibold mt-4 mb-2 tracking-tight">
                  Vamos conversar?
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  Estou aberto a oportunidades, colaborações e conversas. Pode entrar em
                  contato pelo e-mail ou explorar meu código no GitHub.
                </p>
              </Fade>

              <Fade delay={80}>
                <div className="border border-border rounded overflow-hidden max-w-xs">
                  <div className="flex items-stretch group">
                    <a
                      href={GMAIL_COMPOSE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3.5 hover:bg-card transition-colors duration-100 flex-1 min-w-0"
                    >
                      <div className="w-7 h-7 rounded border border-border flex items-center justify-center flex-shrink-0">
                        <Mail size={13} className="text-muted-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[10px] text-muted-foreground uppercase tracking-wide"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          email
                        </p>
                        <p className="text-sm font-medium truncate group-hover:underline underline-offset-2">
                          {EMAIL}
                        </p>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copiar e-mail"
                      title="Copiar e-mail"
                      className="flex items-center justify-center px-3.5 border-l border-border text-muted-foreground hover:bg-card hover:text-foreground transition-colors duration-100 flex-shrink-0"
                    >
                      {copiedEmail ? (
                        <Check size={14} className="text-green-600" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                  <div className="h-px bg-border" />
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-card transition-colors duration-100 group"
                  >
                    <div className="w-7 h-7 rounded border border-border flex items-center justify-center flex-shrink-0">
                      <Github size={13} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p
                        className="text-[10px] text-muted-foreground uppercase tracking-wide"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        github
                      </p>
                      <p className="text-sm font-medium group-hover:underline underline-offset-2">
                        {GITHUB.replace("https://", "")}
                      </p>
                    </div>
                  </a>
                </div>
              </Fade>
            </section>
          </div>

          {/* Footer */}
          <Fade>
            <footer className="border-t border-border py-8 text-center">
              <p
                className="text-[11px] text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                // feito por arthur &mdash; {new Date().getFullYear()} &mdash; todos os
                direitos reservados
              </p>
            </footer>
          </Fade>
        </div>
      </main>
    </div>
  );
}
