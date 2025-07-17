import './About.css';

const About = () => {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <h2 className="section-title">Quem Somos</h2>
        <p className="section-subtitle">
          Uma startup ágil e inovadora focada em criar soluções de software que fazem a diferença
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card fade-in">
              <h3>Nossa Missão</h3>
              <p>
                A DevArchitects é uma startup ágil e inovadora especializada em desenvolvimento 
                de software de ponta. Oferecemos soluções personalizadas que atendem às 
                necessidades de empresas de qualquer porte — desde startups até corporações estabelecidas.
              </p>
            </div>
            
            <div className="about-card fade-in fade-in-delay-1">
              <h3>Nossa Visão</h3>
              <p>
                Ser referência em desenvolvimento de software, criando soluções escaláveis e 
                sustentáveis que impulsionam o crescimento dos nossos clientes através de 
                tecnologia de qualidade e arquitetura limpa.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card fade-in fade-in-delay-1">
              <div className="stat-number">2</div>
              <div className="stat-label">Desenvolvedores</div>
            </div>
            
            <div className="stat-card fade-in fade-in-delay-2">
              <div className="stat-number">100%</div>
              <div className="stat-label">Foco em Qualidade</div>
            </div>
            
            <div className="stat-card fade-in fade-in-delay-3">
              <div className="stat-number">∞</div>
              <div className="stat-label">Escalabilidade</div>
            </div>
          </div>
        </div>
        
        <div className="values-section">
          <h3 className="values-title">Nossos Valores</h3>
          <p className="values-subtitle">
            Os princípios que guiam nosso trabalho e definem nossa identidade como empresa
          </p>
          <div className="values-grid">
            <div className="value-item fade-in">
              <div className="value-icon">🤝</div>
              <h4>Colaboração</h4>
              <p>Trabalhamos em estreita parceria com nossos clientes, entendendo suas necessidades e objetivos para criar soluções verdadeiramente eficazes.</p>
            </div>
            
            <div className="value-item fade-in fade-in-delay-1">
              <div className="value-icon">⚡</div>
              <h4>Qualidade</h4>
              <p>Priorizamos código limpo, testes abrangentes, monitoramento constante e manutenção proativa como premissas fundamentais.</p>
            </div>
            
            <div className="value-item fade-in fade-in-delay-2">
              <div className="value-icon">🏗️</div>
              <h4>Arquitetura</h4>
              <p>Paixão por software bem arquitetado, com foco em performance, sustentabilidade e padrões de desenvolvimento modernos.</p>
            </div>
            
            <div className="value-item fade-in fade-in-delay-3">
              <div className="value-icon">🔍</div>
              <h4>Observabilidade</h4>
              <p>Garantimos observabilidade ponta a ponta, com tracing distribuído, monitoramento avançado e alertas inteligentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
