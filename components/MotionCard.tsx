import React from 'react';
import type { MotionDesignVideo, ModalContent } from '../types';

interface MotionCardProps {
  video: MotionDesignVideo;
  onOpenModal: (content: ModalContent) => void;
}

const PlayIcon: React.FC = () => (
  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
  </svg>
);


const MotionCard: React.FC<MotionCardProps> = ({ video, onOpenModal }) => {
  return (
    <div
      className="rounded-lg shadow-lg overflow-hidden group cursor-pointer relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-violet-800/40"
      onClick={() => onOpenModal({ type: 'video', src: video.videoUrl, title: video.title })}
    >
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
        <div className="transform transition-transform duration-300 group-hover:scale-110">
            <PlayIcon />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">{video.title}</h3>
      </div>
    </div>
  );
};

export default MotionCard;