import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="brand-icon">DA</div>
                <h3>DevArchitects</h3>
              </div>
              <p>
                Startup ágil e inovadora especializada em desenvolvimento 
                de software de ponta, criando soluções escaláveis e sustentáveis 
                que impulsionam o crescimento dos nossos clientes.
              </p>
              <div className="brand-social">
                <a href="#" className="social-icon">📧</a>
                <a href="#" className="social-icon">📱</a>
                <a href="#" className="social-icon">💼</a>
                <a href="#" className="social-icon">🌐</a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Navegação</h4>
                <ul>
                  <li><a href="#inicio">Início</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#servicos">Serviços</a></li>
                  <li><a href="#tecnologias">Tecnologias</a></li>
                  <li><a href="#equipe">Equipe</a></li>
                  <li><a href="#contato">Contato</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Serviços</h4>
                <ul>
                  <li><a href="#servicos">Desenvolvimento Web</a></li>
                  <li><a href="#servicos">Aplicações Mobile</a></li>
                  <li><a href="#servicos">APIs & Backend</a></li>
                  <li><a href="#servicos">Consultoria Técnica</a></li>
                  <li><a href="#servicos">Automação</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Contato</h4>
                <ul>
                  <li><a href="mailto:contato@devarchitects.com">Email</a></li>
                  <li><a href="tel:+5511999999999">Telefone</a></li>
                  <li><a href="#contato">Formulário</a></li>
                  <li><a href="#contato">Redes Sociais</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {new Date().getFullYear()} <a href="#inicio">DevArchitects</a>. 
                Todos os direitos reservados.
              </p>
            </div>
            
            <div className="footer-legal">
              <a href="#privacy">Política de Privacidade</a>
              <a href="#terms">Termos de Uso</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </>
  );
};

export default Footer;
