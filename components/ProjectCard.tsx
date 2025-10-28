import React from 'react';
import type { Project, ModalContent } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (content: ModalContent) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal({ type: 'image', src: project.imageUrl, alt: project.title });
  };
  
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-violet-800/40"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;