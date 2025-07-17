import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <div className="nav-brand">
          <h2>DevArchitects</h2>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        
        <div className="nav-toggle" id="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
