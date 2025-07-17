import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks';
import { Container, Section, Card, Button } from '../ui';

const Team = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Desenvolvedor',
      role: 'Tech Lead & Desenvolvedor Full-Stack',
      expertise: ['React', 'Node.js', 'Java Spring Boot', 'AWS'],
      image: '/api/placeholder/300/300',
      description: 'Especialista em arquitetura de software e desenvolvimento full-stack com mais de 5 anos de experiência.',
      achievements: ['15+ projetos entregues', 'Certificação AWS', 'Mentor técnico'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'alex@devarchitects.com'
      },
      quote: 'Código limpo não é escrito seguindo regras. É escrito por alguém que se importa.',
      favoriteStack: 'React + Spring Boot + PostgreSQL'
    },
    {
      id: 2,
      name: 'Maria Silva',
      role: 'UI/UX Designer & Frontend Developer',
      expertise: ['UI/UX Design', 'React', 'Figma', 'TypeScript'],
      image: '/api/placeholder/300/300',
      description: 'Designer apaixonada por criar experiências digitais intuitivas e interfaces que encantam usuários.',
      achievements: ['20+ designs de sucesso', 'Especialista UX', 'Frontend avançado'],
      social: {
        linkedin: '#',
        behance: '#',
        email: 'maria@devarchitects.com'
      },
      quote: 'Design não é apenas como algo parece. Design é como funciona.',
      favoriteStack: 'Figma + React + TailwindCSS'
    },
    {
      id: 3,
      name: 'João Santos',
      role: 'Backend Developer & DevOps Engineer',
      expertise: ['Java', 'Python', 'Docker', 'Kubernetes'],
      image: '/api/placeholder/300/300',
      description: 'Especialista em sistemas backend robustos e infraestrutura cloud escalável.',
      achievements: ['10+ APIs em produção', 'Expert DevOps', 'Automação avançada'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'joao@devarchitects.com'
      },
      quote: 'A melhor arquitetura é aquela que você não precisa pensar sobre.',
      favoriteStack: 'Java + Docker + AWS'
    }
  ];

  const companyValues = [
    {
      icon: '🎯',
      title: 'Foco na Qualidade',
      description: 'Cada linha de código é escrita pensando na melhor experiência do usuário final.'
    },
    {
      icon: '🚀',
      title: 'Inovação Constante',
      description: 'Sempre atualizados com as últimas tecnologias e melhores práticas do mercado.'
    },
    {
      icon: '🤝',
      title: 'Trabalho em Equipe',
      description: 'Acreditamos que os melhores resultados vêm da colaboração e comunicação eficaz.'
    },
    {
      icon: '📈',
      title: 'Crescimento Contínuo',
      description: 'Investimos constantemente no desenvolvimento pessoal e profissional da equipe.'
    }
  ];

  return (
    <Section id="equipe" variant="default">
      <Container>
        <div className="text-center mb-16" ref={elementRef}>
          <h2 className={`section-title ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            Nossa Equipe
          </h2>
          <p className={`section-subtitle ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-200' : 'animate-fade-in-smooth'}`}>
            Conheça os profissionais apaixonados por tecnologia que tornam nossos projetos realidade
          </p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              variant="hover"
              className={`group overflow-hidden relative ${hasIntersected ? 'animate-scale-in-smooth is-visible' : 'animate-scale-in-smooth'}`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-brand p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-600 overflow-hidden">
                    👨‍💻
                  </div>
                </div>
                {hoveredMember === member.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full animate-fade-in-smooth is-visible">
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200">
                        📧
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200">
                        💼
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200">
                        🔗
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Especialidades
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Conquistas
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-2xl text-primary-300 mb-2">"</div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-2">
                  {member.quote}
                </p>
                <div className="text-xs text-primary-600 font-medium">
                  Stack favorito: {member.favoriteStack}
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-6">
                <Button variant="ghost" size="sm" className="w-full justify-center group-hover:bg-primary-50">
                  Entrar em Contato
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className={`mb-16 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-700' : 'animate-fade-in-smooth'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e definem nossa cultura organizacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card 
                key={index}
                className={`text-center group hover:bg-primary-50 transition-colors duration-300 ${hasIntersected ? 'animate-scale-in-smooth is-visible' : 'animate-scale-in-smooth'}`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className={`text-center ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-1000' : 'animate-fade-in-smooth'}`}>
          <Card className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl mb-6">🌟</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Quer Fazer Parte da Nossa Equipe?
              </h3>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                Estamos sempre em busca de talentos apaixonados por tecnologia para se juntar ao nosso time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 shadow-lg">
                  <span className="mr-2">💼</span>
                  Ver Vagas Abertas
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  <span className="mr-2">📄</span>
                  Enviar Currículo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Team;
