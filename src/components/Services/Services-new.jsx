import { useIntersectionObserver, useVideoScrollEffect } from '../../hooks';
import { Container, Section, Card, Button } from '../ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  });
  const { videoRef, scrollProgress, isVisible } = useVideoScrollEffect();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const navigate = useNavigate();

  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: '🌐',
      iconBg: 'from-blue-500 to-cyan-500',
      title: 'Desenvolvimento Web Moderno',
      subtitle: 'Frontend & Full-Stack',
      description: 'Aplicações web escaláveis e responsivas usando as tecnologias mais atuais do mercado com foco em performance e experiência do usuário.',
      technologies: ['React 18', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'],
      features: [
        { icon: '⚡', text: 'Performance Otimizada' },
        { icon: '📱', text: 'Mobile-First Design' },
        { icon: '🔍', text: 'SEO Avançado' },
        { icon: '🔒', text: 'Segurança Integrada' }
      ],
      highlight: 'Frontend',
      codeExample: '<App />'
    },
    {
      icon: '⚙️',
      iconBg: 'from-emerald-500 to-teal-500',
      title: 'Back-end & APIs',
      subtitle: 'Sistemas Escaláveis',
      description: 'Arquiteturas robustas e APIs RESTful que suportam crescimento exponencial com monitoramento em tempo real.',
      technologies: ['Java Spring', 'Quarkus', 'Python', 'PostgreSQL', 'Docker'],
      features: [
        { icon: '🚀', text: 'Microsserviços' },
        { icon: '📊', text: 'Monitoramento 24/7' },
        { icon: '🔄', text: 'CI/CD Pipeline' },
        { icon: '☁️', text: 'Cloud Native' }
      ],
      highlight: 'Backend',
      codeExample: '@RestController'
    },
    {
      icon: '📱',
      iconBg: 'from-purple-500 to-pink-500',
      title: 'Aplicativos Mobile',
      subtitle: 'iOS & Android',
      description: 'Apps nativos e cross-platform com interfaces intuitivas e performance superior para todas as plataformas.',
      technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase'],
      features: [
        { icon: '📲', text: 'Cross-Platform' },
        { icon: '🎨', text: 'UI/UX Nativo' },
        { icon: '🔔', text: 'Push Notifications' },
        { icon: '📈', text: 'Analytics Integrado' }
      ],
      highlight: 'Mobile',
      codeExample: 'expo start'
    },
    {
      icon: '💼',
      iconBg: 'from-orange-500 to-red-500',
      title: 'Consultoria & DevOps',
      subtitle: 'Transformação Digital',
      description: 'Orientação especializada em arquitetura, automação de processos e implementação de cultura DevOps.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      features: [
        { icon: '🏗️', text: 'Arquitetura Moderna' },
        { icon: '🤖', text: 'Automação Total' },
        { icon: '📊', text: 'Métricas & KPIs' },
        { icon: '🎓', text: 'Treinamento Equipe' }
      ],
      highlight: 'DevOps',
      codeExample: 'kubectl apply'
    }
  ];

  return (
    <Section id="servicos" variant="default">
      <Container>
        <div className="text-center mb-8" ref={elementRef}>
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Soluções Tecnológicas
          </div>
          <h2 className={`section-title ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            Nossos Serviços
          </h2>
          <p className={`section-subtitle max-w-3xl mx-auto ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-200' : 'animate-fade-in-smooth'}`}>
            Transformamos ideias em soluções digitais de alto impacto usando as tecnologias mais avançadas do mercado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${hasIntersected ? 'animate-scale-in-smooth is-visible' : 'animate-scale-in-smooth'}`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-200/50 dark:border-gray-700/50 group-hover:border-primary-300 dark:group-hover:border-primary-600 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-500/10">
                
                {/* Header with Icon and Code */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {/* Animated Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold mb-2 border border-primary-200 dark:border-primary-700">
                        {service.highlight}
                      </div>
                    </div>
                  </div>
                  
                  {/* Code Snippet */}
                  <div className="bg-gray-900 dark:bg-gray-800 text-green-400 px-3 py-1 rounded-md font-mono text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {service.codeExample}
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technologies Grid */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Stack Tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features with Icons */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Principais Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        <span className="text-lg mr-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                          {feature.icon}
                        </span>
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-700 dark:group-hover:text-primary-300 font-medium"
                  >
                    Explorar Solução
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </div>

                {/* Hover Effect Particles */}
                {hoveredService === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-8 w-1 h-1 bg-primary-300 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Tech Enhanced */}
        <div ref={videoRef} className={`relative video-zoom-in ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-800' : 'animate-fade-in-smooth'}`}>
          {/* Background Pattern */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Video Background */}
            <video 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out video-blur-effect"
              autoPlay 
              muted 
              loop 
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              style={{
                transform: `scale(${1 + scrollProgress * 0.1})`,
                filter: `brightness(${0.3 + scrollProgress * 0.2}) contrast(${1.2 - scrollProgress * 0.1})`,
                opacity: isVisible && videoLoaded ? 1 : 0.8
              }}
            >
              <source src="/videos/text-to-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
            
            {/* Video Loading Indicator */}
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center rounded-3xl">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <p className="text-white/80 text-sm">Carregando vídeo...</p>
                </div>
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary-600/80 via-primary-700/70 to-primary-800/80 video-overlay-interactive"
              style={{
                opacity: 0.8 + scrollProgress * 0.2
              }}
            ></div>
            
            {/* Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-10 parallax-slow" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                transform: `translateY(${scrollProgress * 20}px)`
              }}
            ></div>
            
            {/* Content */}
            <div 
              className="relative p-8 lg:p-16 text-center z-10 video-content-float"
              style={{
                transform: `translateY(${scrollProgress * -30}px)`,
                opacity: 1 - scrollProgress * 0.3
              }}
            >
            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute top-12 right-12 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-white/10 rounded-full animate-ping"></div>
            
            <div className="max-w-4xl mx-auto">
              {/* Tech Icon Animation */}
              <div className="flex justify-center space-x-4 mb-8 opacity-80">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>⚡</div>
                <div className="text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>🚀</div>
                <div className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>💡</div>
                <div className="text-3xl animate-bounce" style={{ animationDelay: '0.3s' }}>🔥</div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Transforme sua{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  visão
                </span>{' '}
                em realidade digital
              </h3>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Junte-se a empresas que já revolucionaram seus negócios com nossas soluções tecnológicas. 
                <span className="font-semibold">Seu próximo projeto está a um clique de distância.</span>
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-white/80">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-sm text-white/80">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-white/80">Primeira Resposta</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold px-8"
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
                  <span className="mr-2">💬</span>
                  Começar Projeto
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 font-bold"
                  onClick={() => navigate('/projects')}
                >
                  <span className="mr-2">📋</span>
                  Ver Portfolio
                </Button>
              </div>
              
              {/* Tech Badge */}
              <div className="mt-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Disponível para novos projetos
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
