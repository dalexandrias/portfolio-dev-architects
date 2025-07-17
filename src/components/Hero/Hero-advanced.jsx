import { useEffect, useState } from 'react';
import { useIntersectionObserver, useTypewriter, useCountUp, useParallax } from '../../hooks';
import { Container, Section, Button } from '../ui';

const HeroAdvanced = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { displayText: typedText, startTyping } = useTypewriter('Código que Arquiteta o Futuro', 80, 1000, true, 1000);
  const { count: projectCount, startAnimation: startProjectCount } = useCountUp(50, 2000);
  const { count: clientCount, startAnimation: startClientCount } = useCountUp(100, 2500);
  const { count: yearCount, startAnimation: startYearCount } = useCountUp(5, 1500);
  const { elementRef: parallaxRef, offset } = useParallax(0.3);
  
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    if (hasIntersected) {
      startTyping();
      setTimeout(() => startProjectCount(), 1500);
      setTimeout(() => startClientCount(), 1800);
      setTimeout(() => startYearCount(), 2100);
    }
  }, [hasIntersected, startTyping, startProjectCount, startClientCount, startYearCount]);

  useEffect(() => {
    // Criar elementos flutuantes
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 4,
      size: 20 + Math.random() * 40
    }));
    setFloatingElements(elements);
  }, []);

  const codeSnippets = [
    'const future = await buildDreams()',
    'function innovate() { return magic }',
    'class DevArchitects extends Excellence',
    '// Transforming ideas into reality',
    'export const quality = "always"'
  ];

  return (
    <Section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 animate-float blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0" ref={elementRef}>
            {/* Animated Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 animate-bounce-gentle ${hasIntersected ? 'animate-zoom-in' : 'opacity-0'}`}>
              <span className="animate-pulse mr-2">🚀</span>
              Startup Inovadora em Tecnologia
            </div>

            {/* Main Title with Advanced Animations */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-6">
              <span className={`block text-gray-900 ${hasIntersected ? 'animate-slide-in-left' : 'opacity-0'}`}>
                Dev
              </span>
              <span className={`block bg-gradient-brand bg-clip-text text-transparent ${hasIntersected ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                Architects
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="text-xl lg:text-2xl text-primary-600 font-medium mb-8 h-8">
              <span className="animate-typing">{typedText}</span>
            </div>

            {/* Animated Description */}
            <p className={`text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl ${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              Transformamos ideias em soluções digitais inovadoras. Especializados em desenvolvimento web, 
              mobile e consultoria técnica com foco na qualidade e resultado.
            </p>

            {/* Stats with Count Up */}
            <div className={`grid grid-cols-3 gap-6 mb-10 ${hasIntersected ? 'animate-scale-bounce' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                  {projectCount}+
                </div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                  {clientCount}%
                </div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                  {yearCount}+
                </div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
            </div>

            {/* CTA Buttons with Micro-interactions */}
            <div className={`flex flex-col sm:flex-row gap-4 ${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
              <Button 
                size="lg" 
                className="micro-bounce hover-lift-rotate animate-pulse-glow group"
              >
                <span className="mr-2 group-hover:animate-wiggle">🚀</span>
                Iniciar Projeto
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="micro-bounce hover-glow-pulse"
              >
                <span className="mr-2">📋</span>
                Ver Portfolio
              </Button>
            </div>

            {/* Tech Stack Pills */}
            <div className={`flex flex-wrap gap-3 mt-8 ${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`} style={{ animationDelay: '2.3s' }}>
              {['React', 'Node.js', 'Java', 'Android', 'Python'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-50 transition-all duration-300 hover:scale-105 micro-lift"
                  style={{ animationDelay: `${2.5 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Code Display */}
          <div className="flex-1 max-w-2xl">
            <div className={`relative ${hasIntersected ? 'animate-fade-up-smooth' : 'opacity-0'}`}>
              {/* Terminal Window */}
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover-glow-pulse">
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm font-mono">
                    devarchitects-terminal
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="text-green-400">
                      <span className="text-gray-500">$</span> whoami
                    </div>
                    <div className="text-white ml-4">
                      DevArchitects Developer
                    </div>
                    
                    <div className="text-green-400 mt-4">
                      <span className="text-gray-500">$</span> cat mission.js
                    </div>
                    
                    {codeSnippets.map((code, index) => (
                      <div 
                        key={index}
                        className={`text-blue-300 ml-4 ${hasIntersected ? 'animate-fade-in-up-stagger' : 'opacity-0'}`}
                        style={{ animationDelay: `${2 + index * 0.3}s` }}
                      >
                        {code}
                      </div>
                    ))}
                    
                    <div className="text-green-400 mt-4">
                      <span className="text-gray-500">$</span> npm start future
                    </div>
                    <div className="text-yellow-400 ml-4 loading-dots">
                      Starting development server
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Code Elements */}
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-primary-500/10 rounded-lg backdrop-blur-sm border border-primary-200 flex items-center justify-center text-2xl animate-float hover:animate-wiggle cursor-pointer">
                ⚡
              </div>
              <div className="absolute -left-6 top-1/2 w-16 h-16 bg-primary-400/10 rounded-full backdrop-blur-sm border border-primary-200 flex items-center justify-center text-xl animate-rotate-slow hover:animate-heart-beat cursor-pointer">
                🚀
              </div>
              <div className="absolute -right-4 -bottom-6 w-18 h-18 bg-primary-300/10 rounded-lg backdrop-blur-sm border border-primary-200 flex items-center justify-center text-lg animate-bounce-gentle hover:animate-shake cursor-pointer">
                💡
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${hasIntersected ? 'animate-bounce-gentle' : 'opacity-0'}`} style={{ animationDelay: '3s' }}>
          <div className="flex flex-col items-center text-primary-600 animate-pulse">
            <span className="text-sm mb-2">Role para baixo</span>
            <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroAdvanced;
