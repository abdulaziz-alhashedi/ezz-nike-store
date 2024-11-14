import { useState, useEffect } from 'react';

function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true'); 
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false'); 
    }
  }, [isDarkMode]);

  return (
    <div>
      <button id="toggleDark" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Mode;
