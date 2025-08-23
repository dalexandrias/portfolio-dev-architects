import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useIntersectionObserver } from '../../hooks';
import { Container, Section, Card, Button } from '../ui';
import { emailjsConfig } from '../../config/emailjs';

const Contact = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeMethod, setActiveMethod] = useState('form');

  // Function ZAP cuidado com o handle se mexer quebra a function
  const generateWhatsAppLink = () => {
    const phoneNumber = '5511984343853'; 
    const message = `Olá! Vim através do site da DevArchitects e gostaria de conversar sobre um projeto de desenvolvimento. Podem me ajudar?`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = generateWhatsAppLink();
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Preparar dados para o EmailJS
      const templateParams = {
        to_email: emailjsConfig.toEmail,
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Não informado',
        phone: formData.phone || 'Não informado',
        project_type: formData.project,
        budget: formData.budget || 'Não informado',
        timeline: formData.timeline || 'Não definido',
        message: formData.message,
        submit_date: new Date().toLocaleString('pt-BR')
      };

     
      try {
        const result = await emailjs.send(
          emailjsConfig.serviceId, 
          emailjsConfig.templateId, 
          templateParams, 
          emailjsConfig.publicKey
        );
        console.log('Email enviado com sucesso:', result);
        alert('Proposta enviada com sucesso! Entraremos em contato em breve.');
      } catch (emailjsError) {
        console.error('Erro no EmailJS:', emailjsError);
        console.log('Configuração do EmailJS não encontrada ou inválida. Usando fallback mailto...');
        
        
        const emailData = {
          to: emailjsConfig.toEmail,
          subject: `Nova Proposta de Projeto - ${formData.name}`,
          body: `
Olá Felipe e Davi,

Você recebeu uma nova solicitação de proposta através do site da DevArchitects:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INFORMAÇÕES DO CLIENTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nome: ${formData.name}
E-mail: ${formData.email}
Empresa: ${formData.company || 'Não informado'}
Telefone/WhatsApp: ${formData.phone || 'Não informado'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 DETALHES DO PROJETO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tipo de Projeto: ${formData.project}
Orçamento Previsto: ${formData.budget || 'Não informado'}
Prazo Desejado: ${formData.timeline || 'Não definido'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 DESCRIÇÃO DO PROJETO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ Data/Hora: ${new Date().toLocaleString('pt-BR')}
🌐 Origem: Site DevArchitects - Formulário de Contato

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Atenciosamente,
Sistema DevArchitects
          `.trim()
        };

        const subject = encodeURIComponent(emailData.subject);
        const body = encodeURIComponent(emailData.body);
        const mailtoUrl = `mailto:${emailData.to}?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoUrl;
        alert('Email preparado! Verifique se seu cliente de email foi aberto para enviar a mensagem.');
      }
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        project: '',
        budget: '',
        message: '',
        timeline: ''
      });
      
    } catch (error) {
      console.error('Erro ao enviar proposta:', error);
      alert('Erro ao enviar proposta. Tente novamente ou entre em contato diretamente.');
    }
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      id: 'form',
      icon: '📝',
      title: 'Formulário',
      description: 'Preencha o formulário e receba uma proposta personalizada'
    },
    {
      id: 'whatsapp',
      icon: '💬',
      title: 'WhatsApp',
      description: 'Converse conosco diretamente pelo WhatsApp'
    }
    
  ];

  const contactInfo = [
    {
      icon: '🌍',
      title: 'Localização',
      info: 'São Paulo, SP - Brasil',
      detail: 'Atendimento presencial e remoto'
    },
    {
      icon: '📧',
      title: 'E-mail',
      info: 'felipe-luvizotto@hotmail.com',
      detail: 'Resposta em até 24h'
    },
   
    {
      icon: '⏰',
      title: 'Atendimento',
      info: 'Com Agendamento',
      detail: 'Horários flexíveis'
    }
  ];

  const projectTypes = [
    'Website Institucional',
    'E-commerce',
    'Sistema Web',
    'Aplicativo Mobile',
    'API/Backend',
    'Consultoria Técnica',
    'Manutenção/Suporte',
    'Outro'
  ];

  const budgetRanges = [
    'Até R$ 5.000',
    'R$ 5.000 - R$ 15.000',
    'R$ 15.000 - R$ 30.000',
    'R$ 30.000 - R$ 50.000',
    'Acima de R$ 50.000',
    'Ainda não sei'
  ];

  const timelines = [
    'Urgente (até 2 semanas)',
    'Rápido (1 mês)',
    'Normal (2-3 meses)',
    'Flexível (3+ meses)',
    'Ainda não definido'
  ];

  return (
    <Section id="contato" variant="muted">
      <Container>
        <div className="text-center mb-16" ref={elementRef}>
          <h2 className={`section-title ${hasIntersected ? 'animate-fade-in-smooth is-visible' : 'animate-fade-in-smooth'}`}>
            Entre em Contato
          </h2>
          <p className={`section-subtitle ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-200' : 'animate-fade-in-smooth'}`}>
            Vamos conversar sobre seu próximo projeto e como podemos ajudá-lo a alcançar seus objetivos
          </p>
        </div>

        {/* Contact Methods */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${hasIntersected ? 'animate-fade-in-smooth is-visible delay-300' : 'animate-fade-in-smooth'}`}>
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeMethod === method.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
              }`}
            >
              <span className="text-xl">{method.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{method.title}</div>
                <div className={`text-xs ${activeMethod === method.id ? 'text-primary-100' : 'text-gray-500'}`}>
                  {method.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {activeMethod === 'form' && (
              <Card className={`border-2 border-gray-200 hover:border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 ${hasIntersected ? 'animate-scale-in-smooth is-visible delay-400' : 'animate-scale-in-smooth'}`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Conte-nos sobre seu projeto
                  </h3>
                  <p className="text-gray-600">
                    Quanto mais detalhes você fornecer, melhor poderemos ajudá-lo.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone/WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tipo de Projeto *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300 bg-white dark:bg-gray-800"
                      >
                        <option value="">Selecione o tipo</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Orçamento Previsto
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300 bg-white dark:bg-gray-800"
                      >
                        <option value="">Selecione a faixa</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prazo Desejado
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300 bg-white dark:bg-gray-800"
                    >
                      <option value="">Selecione o prazo</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Descreva seu projeto *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-gray-300 resize-vertical"
                      placeholder="Conte-nos sobre seu projeto, objetivos, funcionalidades desejadas e qualquer informação relevante..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🚀</span>
                        Enviar Proposta
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            )}

            {/* Other Contact Methods */}
            {activeMethod !== 'form' && (
              <Card className={`text-center p-12 border-2 border-gray-200 hover:border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 ${hasIntersected ? 'animate-scale-in-smooth is-visible delay-400' : 'animate-scale-in-smooth'}`}>
                <div className="text-6xl mb-6">
                  {contactMethods.find(m => m.id === activeMethod)?.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {contactMethods.find(m => m.id === activeMethod)?.title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {contactMethods.find(m => m.id === activeMethod)?.description}
                </p>
                
                {activeMethod === 'whatsapp' && (
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={handleWhatsAppClick}
                  >
                    <span className="mr-2">💬</span>
                    Abrir WhatsApp
                  </Button>
                )}
                
                {activeMethod === 'email' && (
                  <Button size="lg">
                    <span className="mr-2">📧</span>
                    Enviar E-mail
                  </Button>
                )}
                
                {activeMethod === 'call' && (
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <span className="mr-2">📞</span>
                    Agendar Ligação
                  </Button>
                )}
              </Card>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className={`border-2 border-gray-200 hover:border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 ${hasIntersected ? 'animate-slide-left-smooth is-visible delay-500' : 'animate-slide-left-smooth'}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      <div className="text-primary-600 font-medium">{info.info}</div>
                      <div className="text-sm text-gray-600">{info.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className={`bg-gradient-brand text-white border-2 border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300 ${hasIntersected ? 'animate-slide-left-smooth is-visible delay-600' : 'animate-slide-left-smooth'}`}>
              <h3 className="text-xl font-bold mb-6">Por que escolher a DevArchitects?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="font-semibold">Resposta Rápida</div>
                    <div className="text-primary-100 text-sm">Até 24h para primeiro contato</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-semibold">Foco em Resultados</div>
                    <div className="text-primary-100 text-sm">Projetos entregues no prazo</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛠️</span>
                  <div>
                    <div className="font-semibold">Suporte Contínuo</div>
                    <div className="text-primary-100 text-sm">Acompanhamento pós-entrega</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <div className="font-semibold">Consultoria Gratuita</div>
                    <div className="text-primary-100 text-sm">Primeira conversa sem custo</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Quick */}
            <Card className={`${hasIntersected ? 'animate-slide-left-smooth is-visible delay-700' : 'animate-slide-left-smooth'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-800">Quanto tempo leva um projeto?</div>
                  <div className="text-gray-600">De 2 semanas a 3 meses, dependendo da complexidade.</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Fazem manutenção?</div>
                  <div className="text-gray-600">Sim, oferecemos manutenção e suporte.</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Trabalham remotamente?</div>
                  <div className="text-gray-600">Sim, atendemos clientes em todo o Brasil.</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
