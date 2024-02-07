import React from 'react';
import { useTheme } from '@/store/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  isDarkMode: boolean; 
}

const ToggleButton = styled.button<ToggleButtonProps>`
    background-color:  ${props => props.isDarkMode ?  '#2c3e50' : '#f39c12'};
    color: #ffffff;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    align-items: center;
    border-radius: 5px;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggle() {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme();
  }

  return (
    <ToggleButton onClick={toggle} isDarkMode={isDarkMode}>
       Switch theme {theme === 'light' ? <FaMoon /> : <FaSun />} 
    </ToggleButton>
  );
};

export default ThemeToggle;