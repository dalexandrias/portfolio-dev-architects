import { useScrollSpy, useMobileMenu } from '../../hooks';
import { Container } from '../ui';

const Header = () => {
  const sectionIds = ['inicio', 'sobre', 'servicos', 'tecnologias', 'equipe', 'contato'];
  const activeSection = useScrollSpy(sectionIds);
  const { isOpen, isMobile, toggle, close } = useMobileMenu();

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#tecnologias', label: 'Tecnologias' },
    { href: '#equipe', label: 'Equipe' },
    { href: '#contato', label: 'Contato' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    close();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="glass backdrop-blur-lg border-b border-white/10">
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-800">DevArchitects</span>
                <span className="text-xs text-primary-600 -mt-1">Software Solutions</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary-600 relative py-2 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full transform origin-left animate-scale-in-smooth"></span>
                  )}
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="btn btn-primary ml-4"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </Container>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={close}></div>
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
            <Container>
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block text-lg font-medium py-3 transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary-600 border-l-4 border-primary-600 pl-4'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <a
                    href="#contato"
                    onClick={(e) => handleNavClick(e, '#contato')}
                    className="btn btn-primary w-full justify-center"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
