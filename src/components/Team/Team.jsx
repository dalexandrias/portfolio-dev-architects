import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Desenvolvedor 1',
      role: 'Full Stack Developer',
      specialties: ['React', 'Node.js', 'Python', 'DevOps'],
      description: 'Especialista em arquitetura frontend e backend, com foco em performance e escalabilidade.',
      avatar: '👨‍💻'
    },
    {
      name: 'Desenvolvedor 2', 
      role: 'Senior Developer',
      specialties: ['Java', 'Spring Boot', 'Android', 'Microsserviços'],
      description: 'Expert em desenvolvimento Java e soluções mobile, com vasta experiência em arquitetura de sistemas.',
      avatar: '👩‍💻'
    }
  ];

  const teamValues = [
    {
      icon: '🎯',
      title: 'Foco na Qualidade',
      description: 'Cada linha de código é escrita pensando em performance, manutenibilidade e escalabilidade.'
    },
    {
      icon: '🚀',
      title: 'Inovação Constante',
      description: 'Sempre atualizados com as últimas tecnologias e melhores práticas do mercado.'
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Trabalhamos em conjunto, compartilhando conhecimento e crescendo como equipe.'
    },
    {
      icon: '📚',
      title: 'Aprendizado Contínuo',
      description: 'Investimos constantemente em nossa formação para oferecer soluções de ponta.'
    }
  ];

  return (
    <section id="equipe" className="section team">
      <div className="container">
        <h2 className="section-title">Nossa Equipe</h2>
        
        <div className="team-intro">
          <p>
            Somos uma equipe enxuta de 2 desenvolvedores, unidos por valores como 
            colaboração, qualidade e paixão por software bem arquitetado.
          </p>
        </div>
        
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                <span className="avatar-emoji">{member.avatar}</span>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                
                <div className="member-specialties">
                  <h4>Especialidades:</h4>
                  <div className="specialty-tags">
                    {member.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-values">
          <h3 className="values-title">O que nos move</h3>
          <div className="values-grid">
            {teamValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="team-stats">
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Desenvolvedores Sênior</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Tecnologias Dominadas</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Comprometimento</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
