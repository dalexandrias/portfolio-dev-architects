import { Container } from '../ui';

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'DevArchitects',
      items: [
        { text: 'Sobre Nós', href: '#sobre' },
        { text: 'Nossa Equipe', href: '#equipe' },
        { text: 'Nossos Valores', href: '#equipe' },
        { text: 'Carreira', href: '#contato' }
      ]
    },
    {
      title: 'Serviços',
      items: [
        { text: 'Desenvolvimento Web', href: '#servicos' },
        { text: 'Aplicativos Mobile', href: '#servicos' },
        { text: 'Backend & APIs', href: '#servicos' },
        { text: 'Consultoria Técnica', href: '#servicos' }
      ]
    },
    {
      title: 'Tecnologias',
      items: [
        { text: 'React & Next.js', href: '#tecnologias' },
        { text: 'Java Spring Boot', href: '#tecnologias' },
        { text: 'Android & Mobile', href: '#tecnologias' },
        { text: 'DevOps & Cloud', href: '#tecnologias' }
      ]
    },
    {
      title: 'Contato',
      items: [
        { text: 'contato@devarchitects.com', href: 'mailto:contato@devarchitects.com', icon: '📧' },
        { text: '+55 (11) 99999-9999', href: 'tel:+5511999999999', icon: '📱' },
        { text: 'São Paulo, SP - Brasil', href: '#contato', icon: '📍' },
        { text: 'Segunda a Sexta: 9h-18h', href: '#contato', icon: '⏰' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:bg-blue-600' },
    { name: 'GitHub', icon: '🔗', href: '#', color: 'hover:bg-gray-800' },
    { name: 'WhatsApp', icon: '💬', href: '#', color: 'hover:bg-green-600' },
    { name: 'Instagram', icon: '📸', href: '#', color: 'hover:bg-pink-600' }
  ];

  const quickActions = [
    { text: 'Solicitar Orçamento', href: '#contato', primary: true },
    { text: 'Ver Portfolio', href: '#servicos', primary: false },
    { text: 'Fale Conosco', href: '#contato', primary: false }
  ];

  const technologies = [
    'React', 'Node.js', 'Java', 'Spring Boot', 'Android', 'Python', 
    'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
      </div>

      <Container className="relative">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Logo and Description */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold">
                    DA
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">DevArchitects</h3>
                    <p className="text-primary-300 text-sm">Código que Arquiteta o Futuro</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Transformamos ideias em soluções digitais inovadoras. Especializados em desenvolvimento web, 
                  mobile e consultoria técnica com foco na qualidade e resultado.
                </p>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                  Siga-nos
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`block w-full text-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      action.primary
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                        : 'border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    {action.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.href}
                            className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                          >
                            {item.icon && <span>{item.icon}</span>}
                            <span>{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-white font-semibold mb-4 text-center uppercase tracking-wide text-sm">
              Tecnologias que Dominamos
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700 hover:bg-gray-700 hover:text-primary-400 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800/50 rounded-xl p-6 lg:p-8 mb-8 border border-gray-700">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-white mb-2">
                📧 Fique por Dentro das Novidades
              </h4>
              <p className="text-gray-400">
                Receba dicas de desenvolvimento, novidades do mercado e updates dos nossos projetos.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                />
                <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 whitespace-nowrap">
                  Inscrever
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Sem spam. Apenas conteúdo de qualidade. Cancele quando quiser.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} DevArchitects. Todos os direitos reservados.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Feito com</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>e muito</span>
              <span className="text-yellow-500">☕</span>
              <span>em São Paulo</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-6 right-6 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
          title="Voltar ao topo"
        >
          ↑
        </button>
      </Container>
    </footer>
  );
};

export default FooterNew;
