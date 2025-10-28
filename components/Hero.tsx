import React from 'react';
import { useInView } from '../hooks/useInView';

const Hero: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-100 dark:bg-gray-900">
      <div ref={ref} className={`container mx-auto px-6 text-center fade-in-up ${isInView ? 'visible' : ''}`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight">
          Criando <span className="text-violet-600 dark:text-violet-400 [text-shadow:0_0_12px_rgba(139,92,246,0.7)]">Experiências</span> Visuais
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Somos um estúdio de design e motion design apaixonado por transformar ideias em realidade digital, combinando estética e funcionalidade para contar histórias que cativam.
        </p>
        <div className="mt-10">
          <a
            href="#design"
            className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.7)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] dark:shadow-[0_0_20px_rgba(196,181,253,0.6)] dark:hover:shadow-[0_0_25px_rgba(196,181,253,0.8)]"
          >
            Veja Nossos Trabalhos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;