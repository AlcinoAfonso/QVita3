// pages/index.js
export default function Home() {
  return (
    <>
      {/* ---------- HEADER ---------- */}
      <header style={styles.header}>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
          alt="Quantum Vita"
          height={40}
        />
        <nav style={styles.nav}>
          <a href="#steps">Etapas</a>
          <a href="#about">Quem é Angelo Coviello</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section style={{ ...styles.section, ...styles.hero }}>
        <h1>Inicie seu tratamento quântico com condições especiais</h1>
        <p>
          Alguns planos da terapia vibracional estão com preço promocional por tempo limitado — escolha o ideal para
          você.
        </p>
        <a
          href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
          style={styles.button}
        >
          Entenda os Benefícios
        </a>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
          alt="Angelo Coviello"
          style={styles.heroImg}
        />
      </section>

      {/* ---------- SERVICES ---------- */}
      <Section title="Terapia Quântica: Como Funciona">
        <Ul>
          <li>
            🧠 Identifica padrões sutis — emocionais, mentais, físicos ou energéticos — que influenciam a vida da pessoa.
          </li>
          <li>⚖️ Trata bloqueios e conflitos de forma personalizada.</li>
          <li>🔄 Resultados variam conforme a experiência de cada um.</li>
          <li>
            🌱 Funciona melhor quando há abertura para se observar e aplicar pequenas mudanças conscientes no dia a dia.
          </li>
        </Ul>
      </Section>

      {/* ---------- BENEFITS ---------- */}
      <Section title="Benefícios da Energia Quântica no dia a dia" gray>
        <Ul>
          <li>🧘‍♀️ Alívio progressivo do estresse.</li>
          <li>⚡ Energia renovada para o cotidiano.</li>
          <li>🛡️ Fortalecimento do sistema imunológico.</li>
          <li>🌙 Melhora na qualidade do sono.</li>
          <li>🧠 Aumento da clareza mental.</li>
          <li>💖 Harmonia emocional duradoura.</li>
        </Ul>
      </Section>

      {/* ---------- TECHNOLOGY ---------- */}
      <Section title="Entenda o Quantec">
        <Ul>
          <li>🧠 Tecnologia alemã de biocomunicação instrumental, usada à distância.</li>
          <li>🔍 Leitura do campo energético via fotografia digital.</li>
          <li>🌐 Ajustes frequenciais programados manualmente pelo terapeuta.</li>
          <li>🏆 Premiado na Europa como Inovação em Saúde.</li>
        </Ul>
      </Section>

      {/* ---------- STEPS ---------- */}
      <Section id="steps" title="Etapas do Tratamento" gray>
        <Ol>
          <li>🗂️ Receba o material de orientação por e-mail.</li>
          <li>📝 Defina seus objetivos no formulário.</li>
          <li>📸 Envie sua foto digital.</li>
          <li>
            🚀 Tratamento inicia em até 4 dias úteis; relatórios e suporte via WhatsApp.
          </li>
        </Ol>
      </Section>

      {/* ---------- ABOUT ---------- */}
      <Section id="about" title="Quem é Angelo Coviello">
        <p>
          Terapeuta especializado em terapias quânticas, vibracionais e holísticas há mais de 8 anos — integra o aparelho
          Quantec para promover equilíbrio energético, mente e emoções.
        </p>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section title="Perguntas Frequentes" gray>
        <Faq q="Precisa de consulta presencial?">
          Não. O processo é iniciado com formulário online e foto.
        </Faq>
        <Faq q="Como o Quantec analisa minha energia?">
          Escaneia seu campo vibracional e compara com frequências saudáveis.
        </Faq>
        <Faq q="É seguro? Tem efeitos colaterais?">
          Totalmente seguro e não invasivo; sem efeitos colaterais conhecidos.
        </Faq>
        <Faq q="O Quantec realmente funciona?">
          Muitos relatam melhoria nas primeiras semanas; recomendamos 3 meses.
        </Faq>
      </Section>

      {/* ---------- CTA ---------- */}
      <section style={{ ...styles.section, ...styles.cta }}>
        <h2>Veja como funciona antes de decidir</h2>
        <p>Dados objetivos, etapas claras e respeito ao seu ritmo pessoal.</p>
        <a
          href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
          style={styles.button}
        >
          Saiba como é feito na prática
        </a>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer style={styles.footer}>© {new Date().getFullYear()} Quantum Vita • Todos os direitos reservados</footer>
    </>
  );
}

/* ---------- COMPONENTES AUXILIARES ---------- */
function Section({ id, title, gray, children }) {
  return (
    <section id={id} style={{ ...styles.section, ...(gray && styles.gray) }}>
      <h2 style={styles.h2}>{title}</h2>
      {children}
    </section>
  );
}

function Ul({ children }) {
  return <ul style={styles.ul}>{children}</ul>;
}
function Ol({ children }) {
  return <ol style={styles.ol}>{children}</ol>;
}
function Faq({ q, children }) {
  return (
    <details style={styles.faq}>
      <summary>{q}</summary>
      <p>{children}</p>
    </details>
  );
}

/* ---------- ESTILOS SIMPLES ---------- */
const styles = {
  brand: '#7A8AD6',
  section: { padding: '48px 24px', maxWidth: 900, margin: '0 auto' },
  gray: { background: '#f5f5f5' },
  header: {
    background: '#7A8AD6',
    color: '#fff',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: { display: 'flex', gap: 16, fontSize: '0.8rem' },
  hero: { background: '#7A8AD6', color: '#fff', textAlign: 'center' },
  heroImg: { marginTop: 32, width: 260, borderRadius: '50%' },
  button: {
    display: 'inline-block',
    marginTop: 24,
    padding: '12px 24px',
    background: '#fff',
    color: '#7A8AD6',
    borderRadius: 9999,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  h2: { textAlign: 'center', marginBottom: 24 },
  ul: { listStyle: 'disc', paddingLeft: 20, lineHeight: 1.6 },
  ol: { listStyle: 'decimal', paddingLeft: 20, lineHeight: 1.6 },
  faq: { marginBottom: 12, cursor: 'pointer' },
  cta: { background: '#7A8AD6', color: '#fff', textAlign: 'center' },
  footer: { background: '#333', color: '#ddd', textAlign: 'center', padding: 24 },
};
