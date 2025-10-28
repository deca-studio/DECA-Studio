import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true });

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-800">
      <div
        ref={ref}
        className={`container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center fade-in-up ${isInView ? 'visible' : ''}`}
      >
        <div className="md:col-span-2">
          <img
            src="https://generated-images.adapta.one/rezielh%40gmail.com/019a27d4-4e0e-72b1-b51d-7055edb70f06/2025-10-27T23-15-04-161Z_Redimensione_a_imagem_para_500x300_pixels.png"
            alt="Espaço de trabalho criativo da DECA Studio com um laptop, tablet e materiais de design"
            className="rounded-lg w-full h-auto object-cover mx-auto shadow-2xl"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Sobre Nós</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Olá! Somos o DECA Studio, um estúdio criativo com mais de 5 anos de experiência no universo do design gráfico e motion design. Nossa jornada é movida pela busca incessante da excelência visual e pela capacidade de traduzir conceitos complexos em narrativas visuais impactantes e de fácil compreensão.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Especializados em identidade de marca, UI/UX e animações 2D, utilizamos ferramentas como Adobe Creative Suite e Figma para dar vida a projetos que não apenas parecem bons, mas também funcionam perfeitamente. Vamos criar algo incrível juntos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;