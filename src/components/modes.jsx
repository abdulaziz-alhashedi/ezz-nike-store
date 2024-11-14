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
    <div className='mx-2'>
      <button 
        id="toggleDark" 
        onClick={toggleDarkMode}
        style={{
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

export default Mode;

