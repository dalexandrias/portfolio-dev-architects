import { useIntersectionObserver } from '../../hooks';
import { Container, Section, Button } from '../ui';

const Hero = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const stats = [
    { icon: '👥', value: '2', label: 'Desenvolvedores Sênior' },
    { icon: '⚡', value: '10+', label: 'Tecnologias' },
    { icon: '🎯', value: '100%', label: 'Foco em Qualidade' }
  ];

  const codeSnippet = `class DevArchitects {
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
}`;

  return (
    <Section id="inicio" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-off-white via-light-gray to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-vista-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-brand-soft/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10" ref={elementRef}>
          {/* Content */}
          <div className={`space-y-8 ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            <div className="space-y-6">
              <div className={`inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium ${hasIntersected ? 'animate-scale-in-smooth is-visible delay-200' : 'animate-scale-in-smooth'}`}>
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Disponível para novos projetos
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${hasIntersected ? 'animate-slide-up-smooth is-visible delay-300' : 'animate-slide-up-smooth'}`}>
                Construímos{' '}
                <span className="text-gradient">
                  Software
                </span>{' '}
                que Escala
              </h1>
              
              <p className={`text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl ${hasIntersected ? 'animate-slide-up-smooth is-visible delay-400' : 'animate-slide-up-smooth'}`}>
                Somos a <strong>DevArchitects</strong>, uma startup ágil especializada em desenvolvimento de software de ponta. 
                Criamos soluções personalizadas que atendem às necessidades de empresas de qualquer porte.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${hasIntersected ? 'animate-slide-up-smooth is-visible delay-500' : 'animate-slide-up-smooth'}`}>
              <Button size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="mr-2">🚀</span>
                Iniciar Projeto
              </Button>
              <Button variant="secondary" size="lg" className="shadow-md">
                <span className="mr-2">💼</span>
                Nosso Portfólio
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-600' : 'animate-fade-in-smooth'}`}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center group ${hasIntersected ? 'animate-bounce-in-smooth is-visible' : 'animate-bounce-in-smooth'}`}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="text-2xl mb-2 group-hover:animate-bounce-gentle">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Block */}
          <div className={`relative ${hasIntersected ? 'animate-slide-in-right is-visible delay-400' : 'animate-slide-in-right'}`}>
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">DevArchitects.js</span>
                </div>
                <div className="text-gray-400 text-xs">
                  <span className="px-2 py-1 bg-gray-700 rounded">JS</span>
                </div>
              </div>
              
              {/* Code content */}
              <div className="p-6 overflow-x-auto custom-scrollbar">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-gray-300">
                    {codeSnippet.split('\n').map((line, index) => (
                      <div 
                        key={index}
                        className={`${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}
                        style={{ animationDelay: `${600 + index * 50}ms` }}
                      >
                        <span className="text-gray-500 select-none mr-4 inline-block w-6 text-right">
                          {index + 1}
                        </span>
                        <span dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/class|constructor|return|this\./g, '<span style="color: #F97316">$&</span>')
                            .replace(/\/\/.*$/g, '<span style="color: #6B7280">$&</span>')
                            .replace(/"[^"]*"/g, '<span style="color: #10B981">$&</span>')
                        }} />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-vista-blue/10 pointer-events-none"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-float">
              ⚡
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-vista-blue rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              🎯
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
