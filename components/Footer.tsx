import React from 'react';
import { InstagramIcon, FacebookIcon, XIcon, WhatsAppIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso perfil no Instagram" className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.7)] dark:hover:drop-shadow-[0_0_5px_rgba(196,181,253,0.5)]">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso perfil no Facebook" className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.7)] dark:hover:drop-shadow-[0_0_5px_rgba(196,181,253,0.5)]">
            <FacebookIcon />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso perfil no X" className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.7)] dark:hover:drop-shadow-[0_0_5px_rgba(196,181,253,0.5)]">
            <XIcon />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Entre em contato pelo WhatsApp" className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.7)] dark:hover:drop-shadow-[0_0_5px_rgba(196,181,253,0.5)]">
            <WhatsAppIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} DECA Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;