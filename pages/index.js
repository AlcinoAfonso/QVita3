import React from 'react';

export default function Home() {
  const CTA =
    "https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia";

  return (
    <>
      {/* HEADER -------------------------------------------------------- */}
      <header className="bg-brand text-white px-6 py-3">
        <div className="max-w-layout mx-auto flex items-center justify-between">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
            alt="Quantum Vita"
            className="h-10"
          />
          <nav className="text-note space-x-6">
            <a href="#steps" className="hover:underline">
              Etapas
            </a>
            <a href="#about" className="hover:underline">
              Quem é Angelo Coviello
            </a>
          </nav>
        </div>
      </header>

      {/* HERO ---------------------------------------------------------- */}
      <section className="bg-brand text-white px-6 py-section">
        <div className="max-w-layout mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-h1 font-bold leading-tight tracking-tight font-head">
              Medicina Quântica Segura Com Tecnologia de Ponta
            </h1>
            <p className="text-body mt-4">
              Terapia Quântica não invasiva, reconhecida na Europa e aplicada
              por profissional experiente.
            </p>
            <WaButton href={CTA} className="mt-8" />
          </div>
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
            alt="Angelo Coviello"
            className="w-72 mx-auto rounded-full shadow-card"
          />
        </div>
      </section>

      {/* SERVIÇOS ------------------------------------------------------ */}
      <Section title="Terapia Quântica: Como Funciona" cols={2}>
        <ServiceBullets />
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
          alt=""
          className="w-72 mx-auto rounded shadow-card"
        />
      </Section>

      {/* BENEFÍCIOS ---------------------------------------------------- */}
      <Section title="Benefícios da Energia Quântica" gray cols={3}>
        {benefits.map((b) => (
          <BenefitCard key={b.title} {...b} />
        ))}
      </Section>

      {/* TECNOLOGIA ---------------------------------------------------- */}
      <Section title="Entenda o Quantec" cols={2}>
        <TechBullets />
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
          alt=""
          className="w-72 mx-auto rounded shadow-card"
        />
      </Section>

      {/* ETAPAS -------------------------------------------------------- */}
      <Section id="steps" title="Etapas do Tratamento" gray cols={2}>
        <Ordered items={steps} />
        <WaButton href={CTA} className="mt-8" />
      </Section>

      {/* QUEM SOMOS ---------------------------------------------------- */}
      <Section id="about" title="Quem é Angelo Coviello" cols={2}>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/02/terapeuta-quantec-300x231.jpg"
          alt="Angelo"
          className="w-64 mx-auto rounded shadow-card"
        />
        <p className="text-body leading-relaxed">
          Terapeuta especializado em terapias quânticas, vibracionais e
          holísticas, com mais de 8 anos de experiência usando o aparelho
          Quantec para promover equilíbrio energético entre corpo, mente e
          emoções.
        </p>
      </Section>

      {/* FAQ ----------------------------------------------------------- */}
      <Section title="Perguntas Frequentes (FAQ)" gray>
        <Accordion items={faqData} />
      </Section>

      {/* CTA FINAL ----------------------------------------------------- */}
      <section className="bg-brand text-white text-center px-6 py-section">
        <h2 className="text-h2 font-bold">Veja como funciona antes de decidir</h2>
        <p className="max-w-xl mx-auto mt-4 text-body">
          O processo é claro: dados objetivos, etapas bem definidas e respeito
          ao seu ritmo pessoal.
        </p>
        <WaButton href={CTA} className="mt-8" />
      </section>

      {/* FOOTER -------------------------------------------------------- */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-note">
        © {new Date().getFullYear()} Quantum Vita
      </footer>
    </>
  );
}

/* ---------- COMPONENTES GENERICOS ---------------------------------- */
function Section({ id, title, gray = false, cols = 1, children }) {
  return (
    <section id={id} className={gray ? "bg-bg-light" : ""}>
      <div
        className={`mx-auto max-w-layout px-6 py-section grid gap-10 ${
          cols > 1 ? `md:grid-cols-${cols}` : ""
        }`}
      >
        <h2 className="col-span-full text-h2 font-bold text-brand text-center font-head">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

const WaButton = ({ href, className = "" }) => (
  <a
    href={href}
    className={`inline-block bg-white text-brand font-semibold px-8 py-4 rounded-card shadow-card hover:bg-gray-100 transition ${className}`}
  >
    WhatsApp: Saiba mais
  </a>
);

const Ordered = ({ items }) => (
  <ol className="list-decimal pl-5 space-y-2">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ol>
);

/* ---------- BLOCOS ESPECÍFICOS ------------------------------------- */
function ServiceBullets() {
  const items = [
    "🧠 Identifica padrões sutis — emocionais, mentais, físicos ou energéticos.",
    "⚖️ Bloqueios e desconfortos são tratados para mudanças reais.",
    "🔄 Resultados variam conforme experiência de cada pessoa.",
    "🌱 Requer abertura para mudanças conscientes no dia a dia.",
  ];
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function TechBullets() {
  const items = [
    "🧠 Tecnologia alemã avançada à distância.",
    "🔍 Leitura do campo energético por fotografia digital.",
    "🌐 Frequências atuam 24 h, programadas pelo terapeuta.",
    "🏆 Premiado na Europa como inovação em saúde.",
  ];
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

const benefits = [
  ["🧘‍♀️", "Alívio do Estresse"],
  ["⚡", "Energia Renovada"],
  ["🛡️", "Imunidade Fortalecida"],
  ["🌙", "Sono de Melhor Qualidade"],
  ["🧠", "Clareza Mental"],
  ["💖", "Harmonia Emocional"],
];

function BenefitCard({ 0: emoji, 1: title }) {
  return (
    <div className="bg-white rounded-card shadow-card p-6 text-center">
      <h3 className="text-h3 font-semibold mb-2">
        {emoji} {title}
      </h3>
      <p className="text-body text-muted">
        Descrição resumida conforme o template.
      </p>
    </div>
  );
}

/* ---------- ACCORDION --------------------------------------------- */
function Accordion({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className="space-y-3">
      {items.map(([q, a], i) => (
        <div
          key={q}
          className="border border-gray-200 rounded-card bg-white shadow-sm"
        >
          <button
            className="w-full flex justify-between items-center px-4 py-3 font-medium bg-brand/10 hover:bg-brand/20 rounded-card transition"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {q}
            <span
              className={`transform transition-transform ${
                open === i ? "rotate-90 text-brand-dark" : ""
              }`}
            >
              ▸
            </span>
          </button>
          {open === i && <div className="px-4 pb-4 text-body">{a}</div>}
        </div>
      ))}
    </div>
  );
}

/* ---------- DATA --------------------------------------------------- */
const steps = [
  "Receba o material de orientação por e-mail",
  "Defina seus objetivos no formulário",
  "Envie sua foto digital",
  "Início do tratamento e acompanhamento",
];

const faqData = [
  [
    "Precisa de consulta para tratamento de medicina quântica?",
    "Não. O processo é iniciado com um formulário digital e envio de foto. Não há necessidade de consulta presencial.",
  ],
  [
    "Como o Quantec analisa minha energia?",
    "Ele escaneia seu campo vibracional, comparando com um banco de dados de frequências saudáveis.",
  ],
  [
    "A terapia quântica é segura? Existem efeitos colaterais?",
    "Sim, completamente segura e não invasiva. Sem efeitos colaterais conhecidos.",
  ],
  [
    "O Quantec realmente funciona?",
    "Muitos relatam melhorias já nas primeiras semanas. Recomendamos 3 meses para resultados profundos.",
  ],
  [
    "Posso combinar com outros tratamentos?",
    "Sim – é complementar e pode potencializar outros protocolos. Informe seu médico.",
  ],
  [
    "Como é feito à distância?",
    "Enviamos frequências vibracionais específicas; presença física não é necessária.",
  ],
  [
    "Diferença para outras terapias alternativas?",
    "Tecnologia Quantec de ponta, protocolos personalizados e resultados mensuráveis.",
  ],
  [
    "A terapia pode tratar problemas emocionais?",
    "Sim. Reequilíbrio energético impacta diretamente nas emoções; muitos relatam melhora significativa.",
  ],
];
