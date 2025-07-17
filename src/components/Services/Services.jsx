import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Desenvolvimento Web Moderno',
      description: 'Aplicações web escaláveis e responsivas usando as tecnologias mais atuais do mercado.',
      technologies: ['React', 'Node.js', 'TypeScript', 'API REST'],
      features: ['Responsivo', 'Alta Performance', 'SEO Otimizado', 'PWA']
    },
    {
      icon: '⚙️',
      title: 'Back-end Robusto',
      description: 'Sistemas backend escaláveis e seguros com as melhores práticas de arquitetura.',
      technologies: ['Java Spring Boot', 'Quarkus', 'Python', 'Microsserviços'],
      features: ['APIs RESTful', 'Segurança', 'Escalabilidade', 'Monitoramento']
    },
    {
      icon: '📱',
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos Android nativos e soluções cross-platform.',
      technologies: ['Android Native', 'React Native', 'Flutter', 'Kotlin'],
      features: ['Nativo', 'Cross-platform', 'UX/UI', 'Performance']
    },
    {
      icon: '💼',
      title: 'Consultoria Técnica',
      description: 'Orientação especializada em arquitetura de software e automação de processos.',
      technologies: ['Arquitetura', 'DevOps', 'CI/CD', 'Cloud'],
      features: ['Análise Técnica', 'Automação', 'Otimização', 'Treinamento']
    }
  ];

  return (
    <section id="servicos" className="section services">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <div className="service-technologies">
                <h4>Tecnologias:</h4>
                <div className="tech-tags">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="service-features">
                <h4>Características:</h4>
                <ul className="features-list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>Pronto para começar seu projeto?</h3>
            <p>Entre em contato conosco e vamos discutir como podemos ajudar sua empresa a crescer com tecnologia de qualidade.</p>
            <a href="#contato" className="btn btn-primary">Solicitar Orçamento</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
