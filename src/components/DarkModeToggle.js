import React, { useState } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className={isDarkMode ? 'dark-mode' : ''}>

      </div>
    </div>
  );
}
