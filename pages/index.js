export const metadata = {
  title: "Quantum Vita – Medicina Quântica",
  description: "Landing Page MOFU com Tailwind",
};

const CTA_LINK =
  "https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-brand text-white px-6 py-3 flex justify-between items-center">
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
          alt="Logo Quantum Vita"
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
        <h2 className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Terapia Quântica não invasiva, reconhecida na Europa e aplicada com
          precisão por profissional experiente.
        </h2>

        <a
          href={CTA_LINK}
          className="inline-block mt-8 bg-white text-brand font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition"
        >
          Entenda os Benefícios
        </a>

        <div className="mt-10 flex justify-center">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
            alt="Angelo Coviello"
            className="w-64 rounded-full shadow-2xl"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <Section title="Terapia Quântica: Como Funciona">
        <Bullet>
          🧠 A terapia identifica padrões sutis — emocionais, mentais, físicos ou
          energéticos — que influenciam a vida da pessoa.
        </Bullet>
        <Bullet>
          ⚖️ Conflitos, bloqueios ou desconfortos podem ser trabalhados para
          mudanças reais no cotidiano.
        </Bullet>
        <Bullet>
          🔄 Resultados variam de acordo com a experiência de cada pessoa.
        </Bullet>
        <Bullet>
          🌱 Funciona melhor quando há abertura para pequenas mudanças
          conscientes no dia a dia.
        </Bullet>
      </Section>

      {/* BENEFÍCIOS */}
      <Section gray title="Os Benefícios da Energia Quântica no dia a dia">
        <Benefit emoji="🧘‍♀️" title="Alívio Progressivo do Estresse" />
        <Benefit emoji="⚡" title="Energia Renovada para o Dia a Dia" />
        <Benefit emoji="🛡️" title="Fortalecimento do Sistema Imunológico" />
        <Benefit emoji="🌙" title="Melhora na Qualidade do Sono" />
        <Benefit emoji="🧠" title="Aumento da Clareza Mental" />
        <Benefit emoji="💖" title="Harmonia Emocional Duradoura" />
      </Section>

      {/* TECNOLOGIA */}
      <Section title="Entenda o Quantec">
        <Bullet>🧠 Tecnologia Alemã Avançada</Bullet>
        <Bullet>🔍 Leitura do Campo Energético por fotografia digital</Bullet>
        <Bullet>🌐 Ajustes Frequenciais automáticos, dia e noite</Bullet>
        <Bullet>🏆 Premiado na Europa como Inovação em Saúde</Bullet>
      </Section>

      {/* ETAPAS */}
      <Section id="steps" gray title="Etapas do Tratamento">
        <Step num="1" text="Receba o material de orientação" />
        <Step num="2" text="Defina seus objetivos no formulário" />
        <Step num="3" text="Envie sua foto digital" />
        <Step num="4" text="Início do tratamento e acompanhamento" />
        <a
          href={CTA_LINK}
          className="inline-block mt-8 bg-brand text-white font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition"
        >
          Entenda os Benefícios
        </a>
      </Section>

      {/* QUEM SOMOS */}
      <Section id="about" title="Quem é Angelo Coviello">
        <div className="md:flex md:items-center md:gap-8">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/02/terapeuta-quantec-300x231.jpg"
            alt="Angelo"
            className="w-56 rounded shadow mb-6 md:mb-0"
          />
          <p>
            Angelo Coviello é terapeuta especializado em terapias quânticas,
            vibracionais e holísticas. Com mais de 8 anos de experiência,
            integra o uso do aparelho Quantec em protocolos voltados ao
            bem-estar.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section gray title="Perguntas Frequentes">
        <Faq q="Precisa de consulta presencial?">
          Não. Todo o processo é online, via formulário e foto.
        </Faq>
        <Faq q="Como o Quantec analisa minha energia?">
          Escaneia seu campo vibracional e compara com frequências saudáveis.
        </Faq>
        <Faq q="É seguro?">
          Completamente seguro e não invasivo; sem efeitos colaterais.
        </Faq>
        <Faq q="O Quantec realmente funciona?">
          Muitos relatam melhorias nas primeiras semanas; sugerimos 3 meses para
          resultados mais profundos.
        </Faq>
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
        <a
          href={CTA_LINK}
          className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition"
        >
          Saiba como é feito na prática
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
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
  <p className="mb-4 flex items-start gap-2">
    <span>{children}</span>
  </p>
);

const Benefit = ({ emoji, title }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-1">
      {emoji} {title}
    </h3>
    <p className="text-sm text-gray-700">
      Descrição resumida conforme o template.
    </p>
  </div>
);

const Step = ({ num, text }) => (
  <div className="mb-4 font-medium">
    <span className="mr-2 text-brand">{num}.</span>
    {text}
  </div>
);

function Faq({ q, children }) {
  return (
    <details className="mb-3 cursor-pointer">
      <summary className="font-medium">{q}</summary>
      <p className="ml-4 mt-1 text-sm text-gray-700">{children}</p>
    </details>
  );
}

