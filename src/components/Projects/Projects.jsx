import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Button } from '../ui';
import { useIntersectionObserver, useStaggerAnimation } from '../../hooks';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import ProjectStats from './ProjectStats';

const projects = [
  {
    id: 1,
    title: "DevShop E-commerce",
    description: "Plataforma completa de e-commerce com painel administrativo avançado, sistema de pagamentos integrado e analytics em tempo real.",
    type: "web",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com/devarchitects/devshop",
    demoUrl: "https://devshop.devarchitects.com",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    status: "completed",
    featured: true
  },
  {
    id: 2,
    title: "TaskFlow Mobile",
    description: "Aplicativo móvel para gestão de projetos e tarefas com sincronização em tempo real e interface intuitiva.",
    type: "mobile",
    technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
    githubUrl: "https://github.com/devarchitects/taskflow-mobile",
    demoUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    status: "completed",
    featured: true
  },
  {
    id: 3,
    title: "DataViz Dashboard",
    description: "Dashboard analítico avançado para visualização de dados empresariais com gráficos interativos e relatórios personalizados.",
    type: "web",
    technologies: ["React", "D3.js", "Python", "FastAPI", "MongoDB"],
    githubUrl: "https://github.com/devarchitects/dataviz-dashboard",
    demoUrl: "https://dataviz.devarchitects.com",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    status: "completed",
    featured: false
  },
  {
    id: 4,
    title: "AutomateX Desktop",
    description: "Ferramenta desktop para automação de processos empresariais com interface drag-and-drop e integração com APIs externas.",
    type: "desktop",
    technologies: ["Electron", "Vue.js", "Python", "SQLite"],
    githubUrl: "https://github.com/devarchitects/automatex",
    demoUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    status: "in-progress",
    featured: false
  },
  {
    id: 5,
    title: "CryptoTracker API",
    description: "API REST robusta para tracking de criptomoedas com cache inteligente e documentação interativa completa.",
    type: "api",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Swagger"],
    githubUrl: "https://github.com/devarchitects/crypto-tracker-api",
    demoUrl: "https://api.cryptotracker.devarchitects.com/docs",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    status: "completed",
    featured: true
  },
  {
    id: 6,
    title: "SmartHome IoT",
    description: "Sistema completo de automação residencial com sensores IoT, controle por voz e monitoramento remoto via app.",
    type: "iot",
    technologies: ["Arduino", "React", "MQTT", "InfluxDB", "Grafana"],
    githubUrl: "https://github.com/devarchitects/smarthome-iot",
    demoUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1558618644-fbd22c672cd1?w=600&h=400&fit=crop",
    status: "in-progress",
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px' // Remove a margem negativa para mostrar imediatamente
  });
  const { triggerStagger } = useStaggerAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll para o topo quando o componente montar e forçar visibilidade
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Forçar visibilidade após um pequeno delay para permitir animações
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Reduzido para 100ms para aparecer mais rápido
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    triggerStagger();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-primary-300/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary-600 transition-colors duration-200">
              Home
            </Link>
            <span>→</span>
            <span className="text-primary-600 font-medium">Projetos</span>
          </div>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Catálogo de{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Projetos
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore nossa coleção de projetos inovadores. Cada solução foi desenvolvida 
              com tecnologias modernas e foco na experiência do usuário.
            </p>
          </div>

          {/* Project Stats */}
          <ProjectStats projects={projects} />
        </Container>
      </Section>

      {/* Projects Section */}
      <Section className="py-16">
        <Container>
          {/* Filters */}
          <ProjectFilters 
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            projects={projects}
          />

          {/* Projects Grid */}
          <div 
            ref={elementRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              hasIntersected || isVisible ? 'animate-fade-in-up-stagger opacity-100' : 'opacity-0'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-500">
                Tente ajustar os filtros para encontrar o que procura.
              </p>
            </div>
          )}

          {/* Back to Portfolio */}
          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="secondary" className="group">
                <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
                Voltar ao Portfolio
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
