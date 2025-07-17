import './Technologies.css';

const Technologies = () => {
  const techStacks = [
    {
      category: 'Frontend',
      icon: '🎨',
      technologies: [
        { name: 'React', level: 'Avançado', color: '#61DAFB' },
        { name: 'TypeScript', level: 'Avançado', color: '#3178C6' },
        { name: 'JavaScript', level: 'Avançado', color: '#F7DF1E' },
        { name: 'HTML5/CSS3', level: 'Avançado', color: '#E34F26' },
        { name: 'Vite', level: 'Intermediário', color: '#646CFF' }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      technologies: [
        { name: 'Node.js', level: 'Avançado', color: '#339933' },
        { name: 'Java Spring Boot', level: 'Avançado', color: '#6DB33F' },
        { name: 'Quarkus', level: 'Intermediário', color: '#4695EB' },
        { name: 'Python', level: 'Avançado', color: '#3776AB' },
        { name: 'APIs REST', level: 'Avançado', color: '#FF6C37' }
      ]
    },
    {
      category: 'Mobile',
      icon: '📱',
      technologies: [
        { name: 'Android Native', level: 'Avançado', color: '#3DDC84' },
        { name: 'React Native', level: 'Intermediário', color: '#61DAFB' },
        { name: 'Kotlin', level: 'Avançado', color: '#7F52FF' },
        { name: 'Flutter', level: 'Intermediário', color: '#02569B' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      technologies: [
        { name: 'Docker', level: 'Avançado', color: '#2496ED' },
        { name: 'CI/CD', level: 'Avançado', color: '#326CE5' },
        { name: 'Microsserviços', level: 'Avançado', color: '#FF6B6B' },
        { name: 'Monitoramento', level: 'Avançado', color: '#4ECDC4' },
        { name: 'Automação', level: 'Avançado', color: '#45B7D1' }
      ]
    }
  ];

  return (
    <section id="tecnologias" className="section technologies">
      <div className="container">
        <h2 className="section-title">Nossa Stack Tecnológica</h2>
        
        <div className="tech-intro">
          <p>
            Dominamos uma stack tecnológica rica e versátil, sempre utilizando as melhores 
            práticas e ferramentas mais atuais do mercado para entregar soluções de alta qualidade.
          </p>
        </div>
        
        <div className="tech-stacks">
          {techStacks.map((stack, index) => (
            <div key={index} className="tech-stack">
              <div className="stack-header">
                <div className="stack-icon">{stack.icon}</div>
                <h3 className="stack-title">{stack.category}</h3>
              </div>
              
              <div className="tech-list">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-item">
                    <div className="tech-info">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-level">{tech.level}</span>
                    </div>
                    <div className="tech-bar">
                      <div 
                        className="tech-progress" 
                        style={{
                          width: tech.level === 'Avançado' ? '90%' : '70%',
                          background: `linear-gradient(90deg, ${tech.color}, ${tech.color}88)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tech-highlights">
          <h3>Especialidades em Destaque</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🏗️</div>
              <h4>Arquitetura Limpa</h4>
              <p>Código bem estruturado e sustentável</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Observabilidade</h4>
              <p>Tracing distribuído e monitoramento</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <h4>Performance</h4>
              <p>Otimização e escalabilidade</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔒</div>
              <h4>Segurança</h4>
              <p>Boas práticas de segurança</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
