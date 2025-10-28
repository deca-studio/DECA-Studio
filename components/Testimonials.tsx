import React, { useState } from 'react';
import type { Testimonial } from '../types';
import { useInView } from '../hooks/useInView';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from './icons/CarouselIcons';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "A DECA Studio transformou nossa visão em uma identidade visual incrível. O profissionalismo e a criatividade superaram todas as nossas expectativas. Recomendo fortemente!",
    name: "Ana Silva",
    role: "CEO, POD Estética"
  },
  {
    id: 2,
    quote: "O trabalho de UI/UX no nosso aplicativo foi impecável. A equipe entendeu nossas necessidades e entregou uma interface que nossos usuários amam. A comunicação foi excelente do início ao fim.",
    name: "Carlos Mendes",
    role: "Gerente de Produto, FitTrack"
  },
  {
    id: 3,
    quote: "O motion design criado para nossa campanha de lançamento foi o diferencial. Engajador, moderno e perfeitamente alinhado com nossa marca. O resultado foi um sucesso absoluto.",
    name: "Juliana Costa",
    role: "Fundadora, Dali Moda"
  }
];

const Testimonials: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { quote, name, role } = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={ref} className={`py-20 md:py-32 bg-gray-100 dark:bg-gray-900 fade-in-up ${isInView ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">Depoimentos</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Veja o que nossos clientes dizem sobre nosso trabalho e parceria.</p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl text-center">
            <div className="mb-4 text-violet-500 dark:text-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]">
              <QuoteIcon />
            </div>
            <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 mb-6">"{quote}"</p>
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-100 text-lg">{name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            </div>
          </div>
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg shadow-gray-300/30 dark:shadow-black/30 hover:shadow-xl hover:shadow-gray-400/40 dark:hover:shadow-black/50 transition-all"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg shadow-gray-300/30 dark:shadow-black/30 hover:shadow-xl hover:shadow-gray-400/40 dark:hover:shadow-black/50 transition-all"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;