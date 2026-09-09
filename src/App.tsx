import { useState, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  year: string;
  github: string;
  highlights: string[];
  status: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: "01",
    title: "Página de Receitas",
    slug: "paginareceitas",
    description: "Interface web responsiva para visualização e navegação de receitas culinárias, com layout semântico e estilização CSS avançada.",
    longDescription:
      "Projeto desenvolvido como exercício de estruturação semântica em HTML5 e estilização responsiva com CSS. A página apresenta receitas com cards visuais, sistema de categorias, e tipografia cuidadosamente escolhida para leitura confortável. O projeto consolidou boas práticas de marcação e organização de folhas de estilo.",
    tech: ["HTML5", "CSS3"],
    category: "Frontend",
    year: "2025",
    github: "https://github.com/weslleycga/paginareceitas",
    highlights: [
      "Layout semântico com HTML5",
      "Design responsivo sem frameworks",
      "Cards com hover interactions",
      "Tipografia e hierarquia visual",
    ],
    status: "Concluído",
  },
  {
    id: "02",
    title: "Formulário de Cadastro",
    slug: "formulario_cadastro",
    description: "Formulário completo com validação de campos, feedback visual e acessibilidade, demonstrando domínio de elementos de entrada HTML.",
    longDescription:
      "Formulário de cadastro robusto construído em HTML e CSS puro, com foco em acessibilidade e experiência do usuário. Inclui validação nativa de campos, estados de foco bem definidos, feedback visual de erros e estrutura de grid para alinhamento preciso dos inputs. Projeto que consolidou o entendimento de formulários e UX para captura de dados.",
    tech: ["HTML5", "CSS3"],
    category: "Frontend",
    year: "2025",
    github: "https://github.com/weslleycga/formulario_cadastro",
    highlights: [
      "Validação nativa de campos",
      "Estados visuais (focus, error, success)",
      "Layout em grid para inputs",
      "Acessibilidade com labels e aria",
    ],
    status: "Concluído",
  },
  {
    id: "03",
    title: "Curso EBAC Frontend",
    slug: "curso-ebac-frontend",
    description: "Coleção de projetos e exercícios desenvolvidos durante o curso de Frontend da EBAC, cobrindo HTML, CSS e JavaScript.",
    longDescription:
      "Repositório consolidado com todos os módulos e projetos práticos do curso de Desenvolvimento Frontend na EBAC. Cobre desde fundamentos de HTML semântico e CSS moderno até introdução ao JavaScript, criação de layouts responsivos e introdução a frameworks. Funciona como um diário de aprendizado técnico progressivo.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Educacional",
    year: "2024",
    github: "https://github.com/weslleycga/curso_ebac_frontend",
    highlights: [
      "Múltiplos módulos e projetos",
      "Progressão de fundamentos a JS",
      "Layouts responsivos variados",
      "Boas práticas de código",
    ],
    status: "Em andamento",
  },
  {
    id: "04",
    title: "Detecção por Visão Computacional",
    slug: "computer-vision-detection",
    description: "Scripts Python para detecção de padrões e rastreamento em vídeos em tempo real utilizando OpenCV e técnicas de processamento de imagem.",
    longDescription:
      "Projeto de visão computacional desenvolvido com Python e OpenCV para detecção e rastreamento de objetos em tempo real. Utiliza algoritmos clássicos de processamento de imagem como detecção de bordas (Canny), transformações morfológicas, segmentação por cor (HSV) e rastreamento por bounding boxes. O projeto explora o pipeline completo: captura de frame → pré-processamento → detecção → anotação → exibição.",
    tech: ["Python", "OpenCV", "NumPy", "Matlab"],
    category: "Visão Computacional",
    year: "2026",
    github: "https://github.com/weslleycga",
    highlights: [
      "Detecção de bordas e contornos",
      "Rastreamento de objetos em vídeo",
      "Segmentação por espaço de cor HSV",
      "Pipeline completo de CV em tempo real",
    ],
    status: "Ativo",
  },
  {
    id: "05",
    title: "Módulo Git & Versionamento",
    slug: "modulo-git",
    description: "Repositório demonstrando fluxo profissional de trabalho com Git: branches, merges, commits semânticos e colaboração.",
    longDescription:
      "Projeto focado em demonstrar boas práticas de versionamento com Git e GitHub. Inclui uso de branches por feature, commits semânticos seguindo Conventional Commits, resolução de conflitos, pull requests documentados e uso de .gitignore. Serve como referência para fluxo de trabalho colaborativo em equipes de desenvolvimento.",
    tech: ["Git", "GitHub", "Bash"],
    category: "DevOps",
    year: "2025",
    github: "https://github.com/weslleycga/modulo_git",
    highlights: [
      "Commits semânticos (Conventional Commits)",
      "Branching strategy (feature branches)",
      "Resolução de conflitos de merge",
      "Documentação de PRs",
    ],
    status: "Concluído",
  },
];

const stacks = [
  { name: "Python", level: 85, category: "Linguagem" },
  { name: "OpenCV", level: 78, category: "CV/IA" },
  { name: "Matlab", level: 65, category: "CV/IA" },
  { name: "Blender", level: 60, category: "3D" },
  { name: "JavaScript", level: 72, category: "Frontend" },
  { name: "HTML5", level: 88, category: "Frontend" },
  { name: "CSS3", level: 82, category: "Frontend" },
  { name: "Git", level: 75, category: "DevOps" },
  { name: "React", level: 55, category: "Frontend" },
  { name: "NumPy", level: 70, category: "CV/IA" },
];

// ── Components ─────────────────────────────────────────────────────────────────

function Navbar({ page, setPage }: { page: string; setPage: (p: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,12,8,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #1e2d1e" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="font-mono text-sm font-semibold tracking-widest"
          style={{ color: "#22c55e" }}
        >
          weslleycga<span className="cursor-blink">_</span>
        </button>
        <div className="flex items-center gap-6">
          {["sobre", "habilidades", "projetos"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setPage("home")}
              className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "#7a9e7a" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#22c55e")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#7a9e7a")}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:weslleycga@gmail.com"
            className="font-mono text-xs px-4 py-2 border transition-all duration-200"
            style={{ borderColor: "#22c55e", color: "#22c55e" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#22c55e";
              el.style.color = "#080c08";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#22c55e";
            }}
          >
            contato
          </a>
        </div>
      </div>
    </nav>
  );
}

function TerminalLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <p className="font-mono text-sm" style={{ color: "#22c55e" }}>
      <span style={{ color: "#4a5e4a" }}>$ </span>
      {displayed}
      {displayed.length < text.length && <span className="cursor-blink">█</span>}
    </p>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden grid-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Green radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 gap-16" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Left: terminal block */}
          <div className="flex flex-col justify-center">
            <div
              className="rounded-sm mb-8 p-6 border"
              style={{
                borderColor: "#1e2d1e",
                background: "#0f140f",
              }}
            >
              <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid #1e2d1e" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                <span className="font-mono text-xs ml-2" style={{ color: "#4a5e4a" }}>
                  portfolio.py
                </span>
              </div>
              <div className="space-y-2">
                <TerminalLine text='print("Weslley Cutrim Gois Amaral")' delay={300} />
                <TerminalLine text="# ADS • Computer Vision • AI • 3D" delay={1400} />
                <TerminalLine text='cv2.imshow("future", innovation)' delay={2600} />
              </div>
            </div>

            <div className="space-y-1 mb-10">
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#4a5e4a" }}>
                {"<estudante />"}
              </p>
              <h1
                className="font-sans font-bold leading-none glitch"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#d1e8d1" }}
              >
                Weslley
                <br />
                <span style={{ color: "#22c55e" }}>Cutrim</span>
                <br />
                Amaral
              </h1>
            </div>

            <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "#7a9e7a", maxWidth: "420px" }}>
              Transformando pixels em dados, ideias em 3D e códigos em soluções inteligentes. Estudante de{" "}
              <span style={{ color: "#d1e8d1" }}>Análise e Desenvolvimento de Sistemas</span> com foco em Visão
              Computacional e IA.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#projetos"
                className="font-mono text-sm px-6 py-3 transition-all duration-200"
                style={{ background: "#22c55e", color: "#080c08", fontWeight: 600 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#16a34a")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#22c55e")}
              >
                ver projetos →
              </a>
              <a
                href="#sobre"
                className="font-mono text-sm px-6 py-3 border transition-all duration-200"
                style={{ borderColor: "#1e2d1e", color: "#7a9e7a" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#22c55e";
                  el.style.color = "#22c55e";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#1e2d1e";
                  el.style.color = "#7a9e7a";
                }}
              >
                sobre mim
              </a>
            </div>
          </div>

          {/* Right: stat blocks */}
          <div className="flex flex-col justify-center gap-4">
            {[
              { label: "foco principal", value: "Computer Vision", sub: "OpenCV + Python" },
              { label: "em exploração", value: "Modelagem 3D", sub: "Blender + renders" },
              { label: "repositórios", value: "27+", sub: "github.com/weslleycga" },
              { label: "contribuições", value: "107", sub: "no último ano" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 border transition-all duration-300 group cursor-default"
                style={{ borderColor: "#1e2d1e", background: "#0f140f" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#22c55e33";
                  el.style.background = "#131a13";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#1e2d1e";
                  el.style.background = "#0f140f";
                }}
              >
                <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "#4a5e4a" }}>
                  {stat.label}
                </p>
                <p className="font-sans font-semibold text-lg" style={{ color: "#d1e8d1" }}>
                  {stat.value}
                </p>
                <p className="font-mono text-xs" style={{ color: "#22c55e" }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs" style={{ color: "#4a5e4a" }}>
          scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, #22c55e, transparent)",
          }}
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-32" style={{ background: "#080c08" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-20" style={{ gridTemplateColumns: "1fr 1.5fr" }}>
          {/* Left label */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "#22c55e" }}>
              01 / apresentação
            </p>
            <h2 className="font-sans font-bold text-4xl leading-tight mb-6" style={{ color: "#d1e8d1" }}>
              Quem
              <br />
              sou eu
            </h2>
            <div
              className="w-12 h-px"
              style={{ background: "#22c55e" }}
            />

            {/* Photo placeholder */}
            <div
              className="mt-10 w-full aspect-square max-w-52 border flex items-center justify-center relative overflow-hidden"
              style={{ borderColor: "#1e2d1e", background: "#0f140f" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 60%)",
                }}
              />
              <div className="text-center">
                <div
                  className="font-mono text-4xl font-bold mb-2"
                  style={{ color: "#22c55e33" }}
                >
                  WC
                </div>
                <p className="font-mono text-xs" style={{ color: "#4a5e4a" }}>
                  weslleycga
                </p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: "#7a9e7a" }}>
              Sou estudante de{" "}
              <span style={{ color: "#d1e8d1", fontWeight: 500 }}>Análise e Desenvolvimento de Sistemas</span> com
              um foco profundo em{" "}
              <span style={{ color: "#22c55e", fontWeight: 500 }}>Visão Computacional</span>,{" "}
              <span style={{ color: "#22c55e", fontWeight: 500 }}>Inteligência Artificial</span> e, mais
              recentemente, <span style={{ color: "#22c55e", fontWeight: 500 }}>Modelagem 3D</span>.
            </p>

            <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "#7a9e7a" }}>
              Meu objetivo é unir a análise técnica com a criação visual para desenvolver projetos inovadores e
              disruptivos. Acredito que a interseção entre código e design visual é onde as soluções mais
              interessantes emergem.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "👁",
                  title: "Processamento de Imagens",
                  desc: "Detecção de padrões, rastreamento e análise avançada com OpenCV e Matlab",
                },
                {
                  icon: "🧊",
                  title: "Modelagem 3D",
                  desc: "Criação de assets, cenários e renderizações tridimensionais no Blender",
                },
                {
                  icon: "🧠",
                  title: "Lógica e Automação",
                  desc: "Scripts Python para automação, manipulação de dados e arquitetura de código",
                },
                {
                  icon: "🌐",
                  title: "Desenvolvimento Frontend",
                  desc: "Interfaces web limpas e responsivas com JavaScript, CSS e HTML",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 border transition-all duration-300"
                  style={{ borderColor: "#1e2d1e", background: "#0f140f" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#22c55e22";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1e2d1e";
                  }}
                >
                  <span className="text-xl block mb-3">{item.icon}</span>
                  <h3 className="font-sans font-semibold text-sm mb-2" style={{ color: "#d1e8d1" }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#4a5e4a" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 p-4 border-l-2 font-mono text-sm italic"
              style={{ borderColor: "#22c55e", color: "#7a9e7a", background: "#0f140f" }}
            >
              {`print("A consistência é a chave para a evolução contínua.")`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const categories = [...new Set(stacks.map((s) => s.category))];

  return (
    <section id="habilidades" className="py-32" style={{ background: "#0a0f0a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "#22c55e" }}>
            02 / stacks & habilidades
          </p>
          <h2 className="font-sans font-bold text-4xl" style={{ color: "#d1e8d1" }}>
            Tech Stack
          </h2>
        </div>

        {/* Category groups */}
        <div className="space-y-12 mb-16">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: "#4a5e4a" }}>
                {cat}
              </p>
              <div className="grid grid-cols-2 gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
                {stacks
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 border group transition-all duration-300"
                      style={{ borderColor: "#1e2d1e", background: "#0f140f" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#22c55e33";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#1e2d1e";
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm font-medium" style={{ color: "#d1e8d1" }}>
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs" style={{ color: "#22c55e" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-px w-full"
                        style={{ background: "#1e2d1e" }}
                      >
                        <div
                          className="h-px transition-all duration-700"
                          style={{
                            width: `${skill.level}%`,
                            background: "linear-gradient(to right, #22c55e, #16a34a)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icons row */}
        <div
          className="p-6 border flex flex-wrap items-center gap-3"
          style={{ borderColor: "#1e2d1e", background: "#0f140f" }}
        >
          <span className="font-mono text-xs uppercase tracking-widest mr-4" style={{ color: "#4a5e4a" }}>
            ferramentas
          </span>
          {["Python", "OpenCV", "Matlab", "Blender", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "React", "NumPy"].map(
            (tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-32" style={{ background: "#080c08" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "#22c55e" }}>
              03 / projetos
            </p>
            <h2 className="font-sans font-bold text-4xl" style={{ color: "#d1e8d1" }}>
              Trabalhos
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono text-xs px-4 py-2 border transition-all duration-200"
                style={{
                  borderColor: filter === cat ? "#22c55e" : "#1e2d1e",
                  color: filter === cat ? "#22c55e" : "#4a5e4a",
                  background: filter === cat ? "rgba(34,197,94,0.08)" : "transparent",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-px" style={{ background: "#1e2d1e" }}>
          {filtered.map((project) => (
            <button
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group w-full text-left p-8 flex items-center justify-between transition-all duration-300"
              style={{ background: "#080c08" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0f140f";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#080c08";
              }}
            >
              <div className="flex items-start gap-8">
                <span className="font-mono text-xs mt-1 tabular-nums" style={{ color: "#22c55e", minWidth: "24px" }}>
                  {project.id}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-sans font-semibold text-lg transition-colors duration-200 group-hover:text-green-400" style={{ color: "#d1e8d1" }}>
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5 border"
                      style={{
                        borderColor: project.status === "Ativo" ? "#22c55e44" : "#1e2d1e",
                        color: project.status === "Ativo" ? "#22c55e" : "#4a5e4a",
                        background: project.status === "Ativo" ? "rgba(34,197,94,0.06)" : "transparent",
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#7a9e7a", maxWidth: "520px" }}>
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 ml-8">
                <span className="font-mono text-xs" style={{ color: "#4a5e4a" }}>
                  {project.year}
                </span>
                <span
                  className="font-mono text-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                  style={{ color: "#22c55e" }}
                >
                  ver →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="py-32 grid-bg" style={{ background: "#080c08" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "#22c55e" }}>
          04 / contato
        </p>
        <h2 className="font-sans font-bold mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#d1e8d1" }}>
          Vamos conversar?
        </h2>
        <p className="font-sans text-lg mb-12" style={{ color: "#7a9e7a", maxWidth: "480px", margin: "0 auto 3rem" }}>
          Aberto a colaborações, projetos e oportunidades na área de tecnologia.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:weslleycga@gmail.com"
            className="font-mono text-sm px-8 py-4 transition-all duration-200 inline-block"
            style={{ background: "#22c55e", color: "#080c08", fontWeight: 600 }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#16a34a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#22c55e")}
          >
            weslleycga@gmail.com
          </a>
          <a
            href="https://github.com/weslleycga"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-8 py-4 border transition-all duration-200 inline-block"
            style={{ borderColor: "#1e2d1e", color: "#7a9e7a" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#22c55e";
              el.style.color = "#22c55e";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#1e2d1e";
              el.style.color = "#7a9e7a";
            }}
          >
            github →
          </a>
        </div>

        <div className="mt-20 pt-8" style={{ borderTop: "1px solid #1e2d1e" }}>
          <p className="font-mono text-xs" style={{ color: "#4a5e4a" }}>
            © 2026 Weslley Cutrim Gois Amaral · weslleycga
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectDetailPage({ project, onBack }: { project: Project; onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#080c08" }}>
      {/* Header bar */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,12,8,0.95)", borderBottom: "1px solid #1e2d1e", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="font-mono text-sm flex items-center gap-2 transition-colors duration-200"
            style={{ color: "#7a9e7a" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22c55e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a9e7a")}
          >
            ← voltar
          </button>
          <span className="font-mono text-xs" style={{ color: "#4a5e4a" }}>
            projetos / {project.slug}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        {/* Project header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs" style={{ color: "#22c55e" }}>
              #{project.id}
            </span>
            <span className="tag">{project.category}</span>
            <span
              className="font-mono text-xs px-2 py-0.5 border"
              style={{
                borderColor: project.status === "Ativo" ? "#22c55e44" : "#1e2d1e",
                color: project.status === "Ativo" ? "#22c55e" : "#4a5e4a",
              }}
            >
              {project.status}
            </span>
          </div>
          <h1 className="font-sans font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#d1e8d1", lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "#22c55e" }} />
          <p className="font-sans text-lg leading-relaxed" style={{ color: "#7a9e7a", maxWidth: "600px" }}>
            {project.description}
          </p>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-3 gap-px mb-16" style={{ background: "#1e2d1e" }}>
          {[
            { label: "ano", value: project.year },
            { label: "categoria", value: project.category },
            { label: "status", value: project.status },
          ].map((m) => (
            <div key={m.label} className="p-6" style={{ background: "#080c08" }}>
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "#4a5e4a" }}>
                {m.label}
              </p>
              <p className="font-sans font-medium" style={{ color: "#d1e8d1" }}>
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Long description */}
        <div className="mb-16">
          <h2 className="font-sans font-semibold text-xl mb-6" style={{ color: "#d1e8d1" }}>
            Sobre o projeto
          </h2>
          <p className="font-sans text-base leading-relaxed" style={{ color: "#7a9e7a" }}>
            {project.longDescription}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="font-sans font-semibold text-xl mb-6" style={{ color: "#d1e8d1" }}>
            Destaques
          </h2>
          <div className="space-y-3">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border" style={{ borderColor: "#1e2d1e", background: "#0f140f" }}>
                <span className="font-mono text-xs mt-0.5" style={{ color: "#22c55e" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-sm" style={{ color: "#d1e8d1" }}>
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-16">
          <h2 className="font-sans font-semibold text-xl mb-6" style={{ color: "#d1e8d1" }}>
            Tecnologias
          </h2>
          <div className="flex gap-3 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-sm px-4 py-2 border"
                style={{ borderColor: "#22c55e33", color: "#22c55e", background: "rgba(34,197,94,0.06)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-6 py-3 transition-all duration-200 inline-block"
            style={{ background: "#22c55e", color: "#080c08", fontWeight: 600 }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#16a34a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#22c55e")}
          >
            ver no GitHub →
          </a>
          <button
            onClick={onBack}
            className="font-mono text-sm px-6 py-3 border transition-all duration-200"
            style={{ borderColor: "#1e2d1e", color: "#7a9e7a" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#22c55e";
              el.style.color = "#22c55e";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#1e2d1e";
              el.style.color = "#7a9e7a";
            }}
          >
            ← todos os projetos
          </button>
        </div>
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectDetailPage
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div style={{ background: "#080c08", minHeight: "100%" }}>
      <Navbar page="home" setPage={() => {}} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <ContactSection />
    </div>
  );
}
