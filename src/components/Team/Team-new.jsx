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
        {/* <div className={`text-center ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-1000' : 'animate-fade-in-smooth'}`}>
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
        </div> */}
      </Container>
    </Section>
  );
};

export default Team;
