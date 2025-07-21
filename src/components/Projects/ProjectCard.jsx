import React from 'react';
import { Button } from '../ui';

const ProjectCard = ({ project, index }) => {
  const typeColors = {
    web: 'bg-blue-500',
    mobile: 'bg-green-500',
    desktop: 'bg-purple-500',
    api: 'bg-orange-500',
    iot: 'bg-red-500'
  };

  const statusColors = {
    completed: 'bg-emerald-500',
    'in-progress': 'bg-amber-500'
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover-lift-rotate"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-primary-600 to-primary-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Destaque
          </span>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`${statusColors[project.status]} text-white text-xs font-medium px-2 py-1 rounded-full`}>
          {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Type Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`${typeColors[project.type]} text-white text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wide`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span 
              key={idx}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-lg">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex-1 flex items-center justify-center gap-2 text-xs"
          >
            <span>📂</span>
            Código
          </Button>
          
          {project.demoUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="flex-1 flex items-center justify-center gap-2 text-xs"
            >
              <span>🚀</span>
              Demo
            </Button>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
    </div>
  );
};

export default ProjectCard;
