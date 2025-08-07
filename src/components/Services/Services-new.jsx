import { useIntersectionObserver } from '../../hooks';
import { Container, Section, Card, Button } from '../ui';

const Services = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  });

  const services = [
    {
      icon: '🌐',
      title: 'Desenvolvimento Web Moderno',
      description: 'Aplicações web escaláveis e responsivas usando as tecnologias mais atuais do mercado.',
      technologies: ['React', 'Node.js', 'TypeScript', 'API REST'],
      features: ['Responsivo', 'Alta Performance', 'SEO Otimizado', 'PWA'],
      highlight: 'Frontend'
    },
    {
      icon: '⚙️',
      title: 'Back-end Robusto',
      description: 'Sistemas backend escaláveis e seguros com as melhores práticas de arquitetura.',
      technologies: ['Java Spring Boot', 'Quarkus', 'Python', 'Microsserviços'],
      features: ['APIs RESTful', 'Segurança', 'Escalabilidade', 'Monitoramento'],
      highlight: 'Backend'
    },
    {
      icon: '📱',
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos Android nativos e soluções cross-platform.',
      technologies: ['Android Native', 'React Native', 'Flutter', 'Kotlin'],
      features: ['Nativo', 'Cross-platform', 'UX/UI', 'Performance'],
      highlight: 'Mobile'
    },
    {
      icon: '💼',
      title: 'Consultoria Técnica',
      description: 'Orientação especializada em arquitetura de software e automação de processos.',
      technologies: ['Arquitetura', 'DevOps', 'CI/CD', 'Cloud'],
      features: ['Análise Técnica', 'Automação', 'Otimização', 'Treinamento'],
      highlight: 'Consultoria'
    }
  ];

  return (
    <Section id="servicos" variant="default">
      <Container>
        <div className="text-center mb-16" ref={elementRef}>
          <h2 className={`section-title ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            Nossos Serviços
          </h2>
          <p className={`section-subtitle ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-200' : 'animate-fade-in-smooth'}`}>
            Soluções completas de software, desde o conceito até a implementação e manutenção
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              variant="hover"
              className={`group overflow-hidden ${hasIntersected ? 'animate-scale-in-smooth is-visible' : 'animate-scale-in-smooth'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-2">
                    {service.highlight}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Características
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-center group-hover:bg-primary-50 group-hover:text-primary-700"
                >
                  Saiba Mais
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-700' : 'animate-fade-in-smooth'}`}>
          <Card className="bg-gradient-brand text-white p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Entre em contato conosco e vamos discutir como podemos ajudar sua empresa a crescer com tecnologia de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 shadow-lg">
                  <span className="mr-2">💬</span>
                  Fale Conosco
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  <span className="mr-2">📋</span>
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
