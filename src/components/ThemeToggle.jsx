import React, { useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <button onClick={handleClick}>
      {theme === 'light' ? '🌞 Mode clair' : '🌙 Mode sombre'}
    </button>
  );
};

export default ThemeToggle;
