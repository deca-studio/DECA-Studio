

import React from 'react';
import type { MotionDesignVideo, ModalContent } from '../types';
import MotionCard from './MotionCard';
import { useInView } from '../hooks/useInView';

const motionVideos: MotionDesignVideo[] = [
  { id: 1, title: 'Mapeamento de Crises - Intro 2D', thumbnailUrl: 'https://img.youtube.com/vi/PbDS2uNDEio/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/PbDS2uNDEio' },
  { id: 2, title: 'Ilumine - Seja Luz', thumbnailUrl: 'https://img.youtube.com/vi/xN4PxchphFE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xN4PxchphFE' },
  { id: 3, title: 'Update Vinheta', thumbnailUrl: 'https://img.youtube.com/vi/NGMlV9gayh0/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/NGMlV9gayh0' },
];

interface MotionGalleryProps {
  onOpenModal: (content: ModalContent) => void;
}

const MotionGallery: React.FC<MotionGalleryProps> = ({ onOpenModal }) => {
  const [ref, isInView] = useInView<HTMLElement>({ once: true });

  return (
    <section id="motion" ref={ref} className={`py-20 md:py-32 bg-white dark:bg-gray-800 fade-in-up ${isInView ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">Motion Design</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Animações que dão vida a marcas e interfaces, criando movimento que informa e encanta.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motionVideos.map(video => (
            <MotionCard key={video.id} video={video} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionGallery;