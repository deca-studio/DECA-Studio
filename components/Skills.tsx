import React from 'react';
import { useInView } from '../hooks/useInView';
import { BrandingIcon, UiUxIcon, MotionIcon, SocialMediaIcon, IllustrationIcon, WebDesignIcon } from './icons/SkillIcons';

const skills = [
  { icon: <BrandingIcon />, title: 'Branding & Identidade Visual', description: 'Criamos marcas fortes e memoráveis, desde o logo até o guia de estilo completo.' },
  { icon: <UiUxIcon />, title: 'UI/UX Design', description: 'Projetamos interfaces digitais intuitivas e esteticamente agradáveis para apps e websites.' },
  { icon: <MotionIcon />, title: 'Motion Graphics', description: 'Damos vida às suas ideias com animações 2D, vídeos explicativos e logos animados.' },
  { icon: <SocialMediaIcon />, title: 'Design para Mídia Social', description: 'Desenvolvemos criativos impactantes para engajar sua audiência nas redes sociais.' },
  { icon: <IllustrationIcon />, title: 'Ilustração Digital', description: 'Criamos ilustrações vetoriais personalizadas que comunicam sua mensagem de forma única.' },
  { icon: <WebDesignIcon />, title: 'Web Design', description: 'Desenhamos layouts de websites modernos, responsivos e focados na experiência do usuário.' },
];

const Skills: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ once: true });

  return (
    <section id="skills" ref={ref} className={`py-20 md:py-32 bg-white dark:bg-gray-800 fade-in-up ${isInView ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">Nossas Habilidades & Serviços</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Combinamos criatividade e tecnologia para oferecer soluções visuais completas e eficientes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg shadow-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white dark:hover:bg-gray-700">
              <div className="flex justify-center items-center mb-6 text-violet-600 dark:text-violet-400 w-16 h-16 mx-auto bg-violet-100 dark:bg-violet-900/30 rounded-full shadow-lg shadow-violet-300/50 dark:shadow-lg dark:shadow-violet-900/70">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;