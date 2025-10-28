import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import DesignGallery from './components/DesignGallery';
import MotionGallery from './components/MotionGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import CursorFollower from './components/CursorFollower';
import type { ModalContent } from './types';

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme || (userPrefersDark ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const openModal = useCallback((content: ModalContent) => {
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <CursorFollower />
      {/* This wrapper ensures all content is clickable, sitting above the cursor follower effect */}
      <div className="relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Testimonials />
          <DesignGallery onOpenModal={openModal} />
          <MotionGallery onOpenModal={openModal} />
          <Contact />
        </main>
        <Footer />
      </div>
      <Modal content={modalContent} onClose={closeModal} />
    </div>
  );
};

export default App;