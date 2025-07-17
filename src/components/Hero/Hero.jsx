import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              DevArchitects
              <span className="hero-emoji">🚀</span>
            </h1>
            <p className="hero-subtitle fade-in fade-in-delay-1">
              Startup ágil e inovadora especializada em desenvolvimento de software de ponta
            </p>
            <p className="hero-description fade-in fade-in-delay-2">
              Oferecemos soluções personalizadas que atendem às necessidades de empresas 
              de qualquer porte — desde startups até corporações estabelecidas.
            </p>
            <div className="hero-buttons fade-in fade-in-delay-3">
              <a href="#servicos" className="btn btn-primary btn-large">
                Nossos Serviços
              </a>
              <a href="#contato" className="btn btn-secondary btn-large">
                Entre em Contato
              </a>
            </div>
            
            <div className="hero-stats fade-in fade-in-delay-3">
              <div className="hero-stat">
                <div className="hero-stat-icon"></div>
                <span>2 Desenvolvedores Sênior</span>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon"></div>
                <span>10+ Tecnologias</span>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon"></div>
                <span>100% Qualidade</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual slide-in-right">
            <div className="code-block">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <pre>
                  <code>{`class DevArchitects {
  constructor() {
    this.mission = "Criar soluções escaláveis";
    this.stack = ["React", "Node.js", "Python", "Java"];
    this.team = "2 desenvolvedores apaixonados";
    this.quality = "100%";
  }
  
  buildSolution(requirements) {
    return this.createScalable(
      this.applyBestPractices(requirements)
    );
  }
  
  deployWithQuality() {
    return this.monitor(
      this.test(this.develop())
    );
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
