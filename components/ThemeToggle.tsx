import React from 'react';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.4)] dark:hover:shadow-[0_0_10px_rgba(196,181,253,0.3)]"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;