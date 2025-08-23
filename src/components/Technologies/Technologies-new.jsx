import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks';
import { Container, Section, Card } from '../ui';

const Technologies = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      description: 'Interfaces modernas e responsivas'
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      description: 'Sistemas robustos e escaláveis'
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: '📱',
      description: 'Apps nativos e cross-platform'
    },
    {
      id: 'tools',
      name: 'DevOps & Tools',
      icon: '🛠️',
      description: 'Ferramentas e automação'
    }
  ];

  const technologies = {
    frontend: [
      { name: 'React', level: 95, color: 'bg-blue-500', description: 'Biblioteca principal para interfaces' },
      { name: 'Next.js', level: 90, color: 'bg-gray-800', description: 'Framework React para produção' },
      { name: 'TypeScript', level: 88, color: 'bg-blue-600', description: 'JavaScript tipado' },
      { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500', description: 'Framework CSS utilitário' },
      { name: 'Vue.js', level: 85, color: 'bg-green-500', description: 'Framework progressivo' },
      { name: 'JavaScript ES6+', level: 96, color: 'bg-yellow-500', description: 'JavaScript moderno' }
    ],
    backend: [
      { name: 'Java Spring Boot', level: 94, color: 'bg-green-600', description: 'Framework Java enterprise' },
      { name: 'Quarkus', level: 87, color: 'bg-red-600', description: 'Java nativo para cloud' },
      { name: 'Node.js', level: 90, color: 'bg-green-500', description: 'JavaScript no servidor' },
      { name: 'Python', level: 85, color: 'bg-blue-500', description: 'Linguagem versátil' },
      { name: 'PostgreSQL', level: 89, color: 'bg-blue-700', description: 'Banco relacional avançado' },
      { name: 'MongoDB', level: 82, color: 'bg-green-700', description: 'Banco NoSQL' }
    ],
    mobile: [
      { name: 'Android Native', level: 92, color: 'bg-green-500', description: 'Desenvolvimento nativo Android' },
      { name: 'Kotlin', level: 88, color: 'bg-purple-600', description: 'Linguagem oficial Android' },
      { name: 'React Native', level: 86, color: 'bg-blue-500', description: 'Apps cross-platform' },
      { name: 'Flutter', level: 80, color: 'bg-blue-400', description: 'Framework Google' },
      { name: 'Java Mobile', level: 85, color: 'bg-orange-600', description: 'Java para Android' },
      { name: 'Firebase', level: 84, color: 'bg-yellow-500', description: 'Backend as a Service' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 95, color: 'bg-gray-800', description: 'Controle de versão' },
      { name: 'Docker', level: 88, color: 'bg-blue-600', description: 'Containerização' },
      { name: 'Jenkins', level: 85, color: 'bg-red-600', description: 'CI/CD pipeline' },
      { name: 'AWS', level: 82, color: 'bg-orange-500', description: 'Serviços de nuvem' },
      { name: 'Vite', level: 90, color: 'bg-purple-600', description: 'Build tool moderno' },
      { name: 'Postman', level: 87, color: 'bg-orange-600', description: 'Teste de APIs' }
    ]
  };

  const activeTechs = technologies[activeCategory];

  return (
    <Section id="tecnologias" variant="muted">
      <Container>
        <div className="text-center mb-12" ref={elementRef}>
          <h2 className={`section-title ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            Tecnologias & Expertise
          </h2>
          <p className={`section-subtitle ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-200' : 'animate-fade-in-smooth'}`}>
            Dominamos as tecnologias mais atuais do mercado para entregar soluções de alta qualidade
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-300' : 'animate-fade-in-smooth'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className={`text-xs ${activeCategory === category.id ? 'text-primary-100' : 'text-gray-500'}`}>
                  {category.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activeTechs.map((tech, index) => (
            <Card 
              key={`${activeCategory}-${tech.name}`}
              variant="hover"
              className={`group ${hasIntersected ? 'animate-scale-in-smooth is-visible' : 'animate-scale-in-smooth'}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Proficiência</span>
                  <span className="text-sm font-bold text-primary-600">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out ${hasIntersected ? 'animate-progress-fill' : ''}`}
                    style={{ 
                      width: hasIntersected ? `${tech.level}%` : '0%',
                      animationDelay: `${600 + index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-800' : 'animate-fade-in-smooth'}`}>
          {[
            { number: '50+', label: 'Tecnologias', icon: '⚡' },
            { number: '100+', label: 'Projetos', icon: '🚀' },
            { number: '5+', label: 'Anos de Experiência', icon: '⭐' },
            { number: '24/7', label: 'Suporte', icon: '🛠️' }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-700 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-primary-600 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-1000' : 'animate-fade-in-smooth'}`}>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Tecnologia Certa para Seu Projeto
              </h3>
              <p className="text-primary-100 mb-6">
                Escolhemos as melhores tecnologias baseadas nos requisitos específicos do seu projeto.
              </p>
              <button 
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contato');
                  if (contactSection) {
                    contactSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                <span className="mr-2">📞</span>
                Vamos Conversar
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Technologies;
