import React from 'react';
import type { Project, ModalContent } from '../types';
import ProjectCard from './ProjectCard';
import { useInView } from '../hooks/useInView';

const designProjects: Project[] = [
  { id: 1, title: 'Branding Dali Moda Praia e Fitness', description: 'Identidade visual completa para uma loja de moda.', imageUrl: 'https://i.ibb.co/YJFhSLC/4.png', tags: ['Branding', 'Logo'], detailedDescription: 'O projeto envolveu a criação de um logo, paleta de cores, tipografia e materiais de marketing para estabelecer uma marca acolhedora e moderna. O objetivo era atrair um público jovem e urbano, destacando a qualidade artesanal do café.', client: 'Café & Prosa', year: 2023 },
  { id: 2, title: 'Kit Branding', description: 'Design marca para empresas.', imageUrl: 'https://i.ibb.co/S4NPWnQB/6.png', tags: ['Branding', 'Illustrator'], detailedDescription: 'Desenvolvemos um UI Kit completo e um sistema de design em Figma, focando em uma experiência de usuário limpa, motivadora e fácil de usar. O kit inclui componentes reutilizáveis, telas de rastreamento de atividades, progresso e socialização.', client: 'FitTrack', year: 2024 },
  { id: 3, title: 'Identidade Visual Religiosa', description: 'Id Visual Religiosa que mostra o propósito real do projeto.', imageUrl: 'https://i.ibb.co/27dnRYs6/5.png', tags: ['Web Design', 'UX'], detailedDescription: 'Redesign completo do e-commerce com foco em otimização da conversão e experiência de compra mobile-first. A nova interface é elegante, rápida e destaca os produtos com imagens de alta qualidade e navegação intuitiva.', client: 'Moda Store', year: 2023 },
  { id: 4, title: 'Branding de projeto Barista', description: 'Criação de Logomarca para o ramo Barista.', imageUrl: 'https://i.ibb.co/pBNT03mj/3.png', tags: ['Social Media', 'Photoshop'], detailedDescription: 'Criação de uma série de visuais para Instagram e Facebook para promover o lançamento de um novo produto. A campanha utilizou uma estética vibrante e mensagens diretas para gerar engajamento e reconhecimento da marca.', client: 'TechLaunch', year: 2024 },
  { id: 5, title: 'Logomarca Corazza Agrícola', description: 'Projeto de identidade visual para a Corazza Agrícola, representando de forma moderna os pilares do agronegócio — céu, solo, sol e lavoura — integrados à inicial C, transmitindo natureza, sustentabilidade e produção agrícola.', imageUrl: 'https://i.ibb.co/wrFbC1BX/2.png', tags: ['Packaging', 'Illustrator'], detailedDescription: 'Design de embalagens sustentáveis e atraentes para uma nova linha de snacks orgânicos. O design utiliza ilustrações botânicas e uma paleta de cores terrosas para comunicar a naturalidade e qualidade dos ingredientes.', client: 'NaturaBites', year: 2022 },
  { id: 6, title: 'Marcas Base', description: 'Série de ilustrações vetoriais para marcas diversas.', imageUrl: 'https://i.ibb.co/Lz8bZwN9/1.png', tags: ['Illustration', 'Vector'], detailedDescription: 'Desenvolvimento de um estilo de ilustração único para um blog, criando uma identidade visual coesa para os artigos. As ilustrações ajudam a explicar conceitos complexos de tecnologia de forma simples e visualmente agradável.', client: 'InovaTech Blog', year: 2023 },
];

interface DesignGalleryProps {
  onOpenModal: (content: ModalContent) => void;
}

const DesignGallery: React.FC<DesignGalleryProps> = ({ onOpenModal }) => {
  const [ref, isInView] = useInView<HTMLElement>({ once: true });

  return (
    <section id="design" ref={ref} className={`py-20 md:py-32 bg-gray-100 dark:bg-gray-900 fade-in-up ${isInView ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">Projetos de Design</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Uma seleção dos nossos trabalhos favoritos que demonstram nossa paixão por design limpo e funcional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
