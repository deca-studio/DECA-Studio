import React, { useEffect } from 'react';
import type { ModalContent } from '../types';

interface ModalProps {
  content: ModalContent | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-800 p-2 rounded-lg shadow-2xl w-full max-w-4xl max-h-full animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] dark:shadow-[0_0_15px_rgba(196,181,253,0.5)] dark:hover:shadow-[0_0_20px_rgba(196,181,253,0.7)]"
          aria-label="Close modal"
        >
          &times;
        </button>
        {content.type === 'image' ? (
          <img src={content.src} alt={content.alt} className="w-full h-auto max-h-[90vh] object-contain rounded" />
        ) : (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={content.src}
              title={content.title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.3s ease-out; }
        .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
        .aspect-h-9 > * { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
      `}</style>
    </div>
  );
};

export default Modal;