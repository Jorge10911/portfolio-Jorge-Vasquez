'use client';

import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(prefersDarkScheme.matches);

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
      applyTheme(event.matches);
    };

    prefersDarkScheme.addEventListener('change', handleChange);

    applyTheme(prefersDarkScheme.matches);

    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (isDarkMode) => {
    const body = document.body;
    const main = document.querySelector('main');
    if (isDarkMode) {
      body.classList.add('dark');
      main.classList.add('dark');
    } else {
      body.classList.remove('dark');
      main.classList.remove('dark');
    }
  };

  return (
    <div>
      <button
        className="flex flex-row justify-center w-12 h-10 px-3 py-2 ring-1 ring-zinc-900/5 dark:ring-white/10 active:ring-teal-400 dark:active:ring-teal-400 shadow-lg rounded-full dark:bg-zinc-800/90"
        data-testid="themeSwitcherButton"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <svg className="stroke-zinc-500 fill-zinc-700 hover:stroke-zinc-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.376 15.378C20.1872 15.8734 18.9119 16.1277 17.624 16.126C12.239 16.126 7.874 11.761 7.874 6.37599C7.874 5.04599 8.14 3.77899 8.622 2.62399C6.84547 3.36511 5.32797 4.61535 4.26063 6.21725C3.19329 7.81915 2.62384 9.70107 2.624 11.626C2.624 17.011 6.989 21.376 12.374 21.376C14.2989 21.3762 16.1808 20.8067 17.7827 19.7394C19.3846 18.672 20.6349 17.1545 21.376 15.378Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg className="stroke-teal-500 hover:stroke-teal-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
