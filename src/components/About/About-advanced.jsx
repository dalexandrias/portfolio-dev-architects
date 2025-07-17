import { useEffect } from 'react';
import { useIntersectionObserver, useStaggerAnimation, useCountUp, useHover } from '../../hooks';
import { Container, Section, Card } from '../ui';

const AboutAdvanced = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { addToRefs } = useStaggerAnimation(150);
  
  // Count up animations for stats
  const { count: projectCount, startAnimation: startProjects } = useCountUp(50, 2000);
  const { count: clientCount, startAnimation: startClients } = useCountUp(30, 1800);
  const { count: satisfactionCount, startAnimation: startSatisfaction } = useCountUp(100, 2200);
  const { count: teamCount, startAnimation: startTeam } = useCountUp(8, 1500);

  // Hover effect for mission card
  const { ref: missionRef, isHovered: isMissionHovered } = useHover();
  const { ref: visionRef, isHovered: isVisionHovered } = useHover();
  const { ref: valuesRef, isHovered: isValuesHovered } = useHover();

  const startAllCounters = () => {
    setTimeout(() => startProjects(), 200);
    setTimeout(() => startClients(), 400);
    setTimeout(() => startSatisfaction(), 600);
    setTimeout(() => startTeam(), 800);
  };

  useEffect(() => {
    if (hasIntersected) {
      startAllCounters();
    }
  }, [hasIntersected]);

  const companyInfo = [
    {
      title: 'Nossa Missão',
      icon: '🎯',
      description: 'Democratizar o acesso à tecnologia de qualidade, criando soluções que transformam negócios e impactam positivamente a vida das pessoas.',
      ref: missionRef,
      isHovered: isMissionHovered,
      gradient: 'from-blue-500 to-purple-600',
      pattern: 'mission'
    },
    {
      title: 'Nossa Visão',
      icon: '🔮',
      description: 'Ser reconhecida como a startup de referência em desenvolvimento de software, conhecida pela inovação, qualidade e impacto social.',
      ref: visionRef,
      isHovered: isVisionHovered,
      gradient: 'from-purple-500 to-pink-600',
      pattern: 'vision'
    },
    {
      title: 'Nossos Valores',
      icon: '⭐',
      description: 'Excelência técnica, transparência, colaboração, inovação constante e responsabilidade social guiam cada decisão que tomamos.',
      ref: valuesRef,
      isHovered: isValuesHovered,
      gradient: 'from-pink-500 to-red-600',
      pattern: 'values'
    }
  ];

  const stats = [
    { 
      number: projectCount, 
      suffix: '+', 
      label: 'Projetos Entregues', 
      icon: '🚀',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      number: clientCount, 
      suffix: '+', 
      label: 'Clientes Ativos', 
      icon: '🤝',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      number: satisfactionCount, 
      suffix: '%', 
      label: 'Satisfação', 
      icon: '⭐',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    { 
      number: teamCount, 
      suffix: '', 
      label: 'Especialistas', 
      icon: '👥',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const achievements = [
    {
      title: 'Startup do Ano',
      year: '2024',
      description: 'Reconhecimento por inovação tecnológica',
      icon: '🏆',
      color: 'golden'
    },
    {
      title: 'Certificação AWS',
      year: '2023',
      description: 'Parceiro oficial Amazon Web Services',
      icon: '☁️',
      color: 'orange'
    },
    {
      title: '99.9% Uptime',
      year: '2024',
      description: 'Sistemas em produção com alta disponibilidade',
      icon: '⚡',
      color: 'green'
    },
    {
      title: 'Zero Bugs Críticos',
      year: '2024',
      description: 'Código de qualidade em todos os projetos',
      icon: '🐛',
      color: 'blue'
    }
  ];

  return (
    <Section id="sobre" variant="muted" className="relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16" ref={elementRef}>
          <h2 className={`section-title ${hasIntersected ? 'animate-flip-in' : 'opacity-0'}`}>
            Sobre a DevArchitects
          </h2>
          <p className={`section-subtitle ${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Conheça nossa história, valores e o que nos motiva a criar soluções excepcionais
          </p>
        </div>

        {/* Company Info Cards with Advanced Animations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {companyInfo.map((info, index) => (
            <Card 
              key={index}
              ref={(el) => {
                addToRefs(el);
                if (info.ref.current !== el) {
                  info.ref.current = el;
                }
              }}
              className={`group relative overflow-hidden transition-all duration-500 hover-lift-rotate ${
                hasIntersected ? 'animate-scale-bounce opacity-100' : 'opacity-0'
              } ${info.isHovered ? 'transform scale-105' : ''}`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Floating Icon */}
              <div className={`text-6xl mb-6 transition-all duration-500 ${info.isHovered ? 'animate-heart-beat transform scale-110' : 'animate-float'}`}>
                {info.icon}
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 ${info.isHovered ? 'text-primary-600' : ''}`}>
                {info.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {info.description}
              </p>

              {/* Hover Effect Particles */}
              {info.isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary-500 rounded-full animate-float"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 1}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Stats Section with Count Up */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`text-center group hover-glow-pulse micro-bounce ${hasIntersected ? 'animate-zoom-in' : 'opacity-0'}`}
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:animate-wiggle transition-all duration-300`}>
                {stat.icon}
              </div>
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className={`${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Conquistas Recentes
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`text-center group relative overflow-hidden hover-lift ${hasIntersected ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${1.7 + index * 0.15}s` }}
              >
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold">
                  {achievement.year}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:animate-bounce-gentle transition-all duration-300">
                  {achievement.icon}
                </div>
                
                {/* Content */}
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-x" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 ${hasIntersected ? 'animate-zoom-in' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 lg:p-12 hover-glow-pulse">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl mb-6 animate-heart-beat">💫</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Vamos Construir o Futuro Juntos?
              </h3>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                Cada projeto é uma oportunidade de criar algo extraordinário. 
                Venha fazer parte da nossa jornada de inovação.
              </p>
              <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg micro-bounce hover-lift group">
                <span className="mr-2 group-hover:animate-wiggle">🚀</span>
                Iniciar Conversa
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default AboutAdvanced;
