import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="text-4xl mb-4 text-center">{project.image}</div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <span className={`px-2 py-1 text-xs rounded-full ${
          project.status === 'Completed' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : project.status === 'In Progress'
            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        }`}>
          {project.status}
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
        <div className="grid grid-cols-2 gap-1">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-1 text-xs text-gray-400">
              <Star size={10} className="text-yellow-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-slate-700/50 text-xs rounded-md text-gray-300 border border-slate-600">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
          <ExternalLink size={14} />
          Live Demo
        </button>
        <button className="px-4 py-2 border border-gray-600 hover:border-purple-500 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
          <Github size={14} />
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;