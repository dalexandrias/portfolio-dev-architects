import React from 'react';

const ProjectFilters = ({ activeFilter, onFilterChange, projects }) => {
  const filters = [
    { key: 'all', label: 'Todos', count: projects.length },
    { key: 'web', label: 'Web', count: projects.filter(p => p.type === 'web').length },
    { key: 'mobile', label: 'Mobile', count: projects.filter(p => p.type === 'mobile').length },
    { key: 'desktop', label: 'Desktop', count: projects.filter(p => p.type === 'desktop').length },
    { key: 'api', label: 'API', count: projects.filter(p => p.type === 'api').length },
    { key: 'iot', label: 'IoT', count: projects.filter(p => p.type === 'iot').length },
  ].filter(filter => filter.count > 0 || filter.key === 'all');

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`
            px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105
            ${activeFilter === filter.key
              ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
            }
          `}
        >
          {filter.label}
          <span className={`ml-2 text-xs ${activeFilter === filter.key ? 'text-primary-100' : 'text-gray-500'}`}>
            ({filter.count})
          </span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
