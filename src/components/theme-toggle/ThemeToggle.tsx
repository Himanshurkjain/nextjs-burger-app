import React from 'react';
import { useTheme } from '@/store/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ToggleButton.module.css';
import { useState } from 'react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggle() {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme();
  }

  return (
    <button onClick={toggle} className={`${styles.toggleButton} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
       Switch Theme{theme === 'light' ? <FaMoon /> : <FaSun />} 
    </button>
  );
};

export default ThemeToggle;