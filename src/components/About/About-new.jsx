import { useIntersectionObserver } from '../../hooks';
import { Container, Section, Card } from '../ui';

const About = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const values = [
    {
      icon: '🏗️',
      title: 'Arquitetura Limpa',
      description: 'Código bem estruturado, sustentável e fácil de manter. Seguimos as melhores práticas de desenvolvimento.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Soluções otimizadas para alta performance, garantindo a melhor experiência do usuário.'
    },
    {
      icon: '🔒',
      title: 'Segurança',
      description: 'Implementamos as melhores práticas de segurança em todas as camadas da aplicação.'
    },
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Sempre atualizados com as tecnologias mais modernas e tendências do mercado.'
    }
  ];

  const stats = [
    { number: '2', label: 'Desenvolvedores', suffix: '' },
    { number: '100', label: 'Foco em Qualidade', suffix: '%' },
    { number: '∞', label: 'Escalabilidade', suffix: '' }
  ];

  return (
    <Section id="sobre" variant="light">
      <Container>
        <div className="text-center mb-16" ref={elementRef}>
          <h2 className={`section-title ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            Quem Somos
          </h2>
          <p className={`section-subtitle ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-200' : 'animate-fade-in-smooth'}`}>
            Uma startup ágil e inovadora focada em criar soluções de software que fazem a diferença
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className={`space-y-8 ${hasIntersected ? 'animate-slide-in-left is-visible delay-300' : 'animate-slide-in-left'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Nossa Missão
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Transformamos ideias em{' '}
                <span className="text-gradient">soluções digitais</span>{' '}
                de alta qualidade
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                A DevArchitects é uma startup ágil especializada em desenvolvimento de software de ponta. 
                Oferecemos soluções personalizadas que atendem às necessidades de empresas de qualquer porte — 
                desde startups até corporações estabelecidas.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa abordagem combina tecnologias modernas, arquitetura limpa e metodologias ágeis 
                para entregar produtos que não apenas funcionam, mas escalam e evoluem com seu negócio.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 bg-white rounded-xl shadow-soft border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Nossa Visão</h4>
                  <p className="text-gray-600">
                    Ser referência em desenvolvimento de software, criando soluções escaláveis e 
                    sustentáveis que impulsionam o crescimento dos nossos clientes através de 
                    tecnologia de qualidade e arquitetura limpa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`${hasIntersected ? 'animate-slide-in-right is-visible delay-400' : 'animate-slide-in-right'}`}>
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  variant="hover"
                  className={`text-center group ${hasIntersected ? 'animate-scale-in-smooth is-visible' : 'animate-scale-in-smooth'}`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-lg font-medium text-gray-700">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-4 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-600' : 'animate-fade-in-smooth'}`}>
              Nossos Valores
            </h3>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-700' : 'animate-fade-in-smooth'}`}>
              Os princípios que guiam nosso trabalho e definem como entregamos excelência em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                variant="hover"
                className={`text-center group ${hasIntersected ? 'animate-slide-up-smooth is-visible' : 'animate-slide-up-smooth'}`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
