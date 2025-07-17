import './Contact.css';

const Contact = () => {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Vamos construir algo incrível juntos!</h3>
              <p>
                Pronto para transformar sua ideia em realidade? Entre em contato conosco 
                e vamos discutir como podemos ajudar sua empresa a crescer com tecnologia de qualidade.
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p>contato@devarchitects.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💼</div>
                <div className="method-content">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/company/devarchitects</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">🌐</div>
                <div className="method-content">
                  <h4>Website</h4>
                  <p>www.devarchitects.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-availability">
              <h4>Disponibilidade</h4>
              <p>
                Estamos sempre prontos para novos desafios! Entre em contato e 
                responderemos em até 24 horas.
              </p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form">
              <h3>Solicite um Orçamento</h3>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Tipo de Serviço</label>
                  <select id="service" name="service">
                    <option value="">Selecione um serviço</option>
                    <option value="web">Desenvolvimento Web</option>
                    <option value="backend">Backend/APIs</option>
                    <option value="mobile">Aplicativo Mobile</option>
                    <option value="consultoria">Consultoria Técnica</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="5"
                    placeholder="Descreva seu projeto ou necessidade..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Por que escolher a DevArchitects?</h3>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Soluções escaláveis e sustentáveis</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Código limpo e bem arquitetado</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Equipe experiente e dedicada</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Foco em qualidade e performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
