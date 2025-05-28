/* pages/index.js – versão única e válida */
export default function Home() {
  const CTA =
    "https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia";

  return (
    <>
      {/* HEADER */}
      <header className="bg-brand text-white px-6 py-3 flex justify-between items-center">
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
          alt="Quantum Vita"
          className="h-10"
        />
        <nav className="space-x-6 text-sm">
          <a href="#steps" className="hover:underline">
            Etapas
          </a>
          <a href="#about" className="hover:underline">
            Quem é Angelo Coviello
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-brand text-white text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Medicina Quântica Segura com Tecnologia de Ponta
        </h1>
        <h2 className="text-lg md:text-xl max-w-2xl mx-auto">
          Terapia Quântica não invasiva, reconhecida na Europa e aplicada por
          profissional experiente.
        </h2>

        <a
          href={CTA}
          className="inline-block mt-8 bg-white text-brand font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition"
        >
          Entenda os Benefícios
        </a>

        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
          alt="Angelo Coviello"
          className="w-64 rounded-full shadow-2xl mx-auto mt-10"
        />
      </section>

      {/* SERVIÇOS */}
      <Section title="Terapia Quântica: Como Funciona">
        <Bullet>
          🧠 Identifica padrões sutis — emocionais, mentais, físicos ou
          energéticos — que influenciam a vida da pessoa.
        </Bullet>
        <Bullet>⚖️ Atua nos bloqueios que geram desconfortos e conflitos.</Bullet>
        <Bullet>🔄 Resultados variam conforme cada pessoa.</Bullet>
        <Bullet>
          🌱 Funciona melhor quando há abertura para mudanças conscientes.
        </Bullet>
      </Section>

      {/* BENEFÍCIOS */}
      <Section gray title="Benefícios da Energia Quântica">
        <Grid
          items={[
            "🧘‍♀️ Alívio progressivo do estresse",
            "⚡ Energia renovada",
            "🛡️ Imunidade fortalecida",
            "🌙 Sono de melhor qualidade",
            "🧠 Clareza mental",
            "💖 Harmonia emocional duradoura",
          ]}
        />
      </Section>

      {/* TECNOLOGIA */}
      <Section title="Entenda o Quantec">
        <Bullet>🧠 Tecnologia alemã avançada à distância.</Bullet>
        <Bullet>🔍 Leitura do campo energético por fotografia digital.</Bullet>
        <Bullet>🌐 Frequências atuam 24 h, programadas pelo terapeuta.</Bullet>
        <Bullet>🏆 Premiado na Europa como inovação em saúde.</Bullet>
      </Section>

      {/* ETAPAS */}
      <Section id="steps" gray title="Etapas do Tratamento">
        <Ordered
          items={[
            "🗂️ 1. Receba o material de orientação por e-mail",
            "📝 2. Defina seus objetivos no formulário",
            "📸 3. Envie sua foto digital",
            "🚀 4. Início do tratamento e acompanhamento",
          ]}
        />
        <div className="text-center mt-6">
          <WaButton href={CTA} />
        </div>
      </Section>

      {/* SOBRE */}
      <Section id="about" title="Quem é Angelo Coviello">
        <div className="md:flex md:items-center md:gap-8">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/02/terapeuta-quantec-300x231.jpg"
            alt="Angelo"
            className="w-56 rounded shadow mb-6 md:mb-0"
          />
          <p className="leading-relaxed">
            Terapeuta especializado em terapias quânticas, vibracionais e
            holísticas. Há mais de 8 anos integra o aparelho Quantec em
            protocolos voltados ao bem-estar, focando no equilíbrio energético
            entre corpo, mente e emoções.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section gray title="Perguntas Frequentes (FAQ)">
        {faqData.map(([q, a]) => (
          <details
            key={q}
            className="mb-3 border border-gray-200 rounded-md bg-white shadow-sm"
          >
            <summary className="cursor-pointer px-4 py-3 font-medium flex justify-between items-center">
              {q}
              <span className="text-brand">▸</span>
            </summary>
            <p className="px-4 pb-4 text-gray-700">{a}</p>
          </details>
        ))}
      </Section>

      {/* CTA FINAL */}
      <section className="bg-brand text-white text-center px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">
          Veja como funciona antes de decidir
        </h2>
        <p className="max-w-xl mx-auto mb-8">
          O processo é claro: dados objetivos, etapas bem definidas e respeito
          ao seu ritmo pessoal.
        </p>
        <WaButton href={CTA} />
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Quantum Vita
      </footer>
    </>
  );
}

/* ---------- COMPONENTES AUX ---------- */
function Section({ id, title, gray, children }) {
  return (
    <section
      id={id}
      className={`px-6 py-16 ${gray ? "bg-gray-100" : ""} max-w-5xl mx-auto`}
    >
      <h2 className="text-center text-3xl font-bold mb-10 text-brand">
        {title}
      </h2>
      {children}
    </section>
  );
}

const Bullet = ({ children }) => (
  <p className="mb-3 flex items-start gap-2">{children}</p>
);

const Grid = ({ items }) => (
  <div className="grid md:grid-cols-2 gap-4">
    {items.map((t) => (
      <p key={t}>{t}</p>
    ))}
  </div>
);

const Ordered = ({ items }) => (
  <ol className="list-decimal pl-5 space-y-2">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ol>
);

const WaButton = ({ href }) => (
  <a
    href={href}
    className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition"
  >
    WhatsApp: Gostaria de saber mais
  </a>
);

/* ---------- FAQ DATA ---------- */
const faqData = [
  [
    "1. Precisa de consulta para tratamento de medicina quântica?",
    "Não. O processo é iniciado com um formulário digital e envio de foto. Não há necessidade de consulta presencial.",
  ],
  [
    "2. Como o Quantec analisa minha energia?",
    "Ele escaneia seu campo vibracional, comparando com um banco de dados de frequências saudáveis para sugerir ajustes necessários.",
  ],
  [
    "3. A terapia quântica é segura? Existem efeitos colaterais?",
    "Sim, nossa terapia é completamente segura e não invasiva. Não há efeitos colaterais conhecidos.",
  ],
  [
    "4. O Quantec realmente funciona?",
    "Muitos clientes relatam melhorias já nas primeiras semanas. Recomendamos um tratamento mínimo de 3 meses para resultados mais profundos.",
  ],
  [
    "5. Posso fazer a terapia quântica junto com outros tratamentos?",
    "Sim! A terapia é complementar e pode potencializar outros tratamentos. Informe seu médico sobre todas as terapias em andamento.",
  ],
  [
    "6. Como é realizado o tratamento à distância?",
    "Utilizamos tecnologia avançada que envia frequências vibracionais específicas para você, independentemente da localização.",
  ],
  [
    "7. Qual a diferença entre Quantum Vita e outras terapias alternativas?",
    "Usamos tecnologia Quantec de ponta, oferecendo protocolos personalizados e resultados mensuráveis.",
  ],
  [
    "8. A terapia quântica pode tratar problemas emocionais?",
    "Sim. O equilíbrio energético impacta diretamente nas emoções; muitos clientes relatam melhora significativa.",
  ],
];
