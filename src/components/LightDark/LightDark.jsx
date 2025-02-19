import React, { useState, useEffect } from 'react';
import styles from './LightDark.module.css';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify-icons/feather/sun';
import moonIcon from '@iconify-icons/feather/moon';

const LightDark = () => {
  // Estado para controlar o tema
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Efeito para aplicar o tema ao body e salvar no localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Verificar o tema salvo no localStorage ao carregar o componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <label>
      <input
        type="checkbox"
        className={styles.toggle_checkbox}
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className={styles.toggle_slot}>
        
        <div className={styles.toggle_button}></div>
        
      </div>
    </label>
  );
};

export default LightDark;