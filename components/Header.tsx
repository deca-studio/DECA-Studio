import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre Nós' },
    { href: '#skills', label: 'Serviços' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#design', label: 'Design' },
    { href: '#motion', label: 'Motion' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm dark:bg-gray-800/80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-violet-600 dark:text-violet-400 transition-all duration-300 [text-shadow:0_0_8px_rgba(139,92,246,0.5)]">DECA Studio</a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-800 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="bg-violet-600 text-white px-5 py-2 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] dark:shadow-[0_0_15px_rgba(196,181,253,0.5)] dark:hover:shadow-[0_0_20px_rgba(196,181,253,0.7)]">
            Vamos Conversar
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;