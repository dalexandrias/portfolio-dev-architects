import React from 'react';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      number: projects.length,
      label: 'Projetos Total',
      icon: '📁',
      color: 'text-blue-600'
    },
    {
      number: projects.filter(p => p.status === 'completed').length,
      label: 'Concluídos',
      icon: '✅',
      color: 'text-green-600'
    },
    {
      number: projects.filter(p => p.featured).length,
      label: 'Em Destaque',
      icon: '⭐',
      color: 'text-yellow-600'
    },
    {
      number: [...new Set(projects.flatMap(p => p.technologies))].length,
      label: 'Tecnologias',
      icon: '🛠️',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-2xl mb-2">{stat.icon}</div>
          <div className={`text-3xl font-bold ${stat.color} mb-1`}>
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;
