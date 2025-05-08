import React from 'react';
import styles from './StyledThemeButton.module.css';
import { useAppThemeContext } from '../../contexts'; // ajuste o caminho conforme seu projeto

const StyledThemeButton: React.FC = () => {
  const { themeName, toggleTheme } = useAppThemeContext();
  const isDarkMode = themeName === 'dark';

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
        {isDarkMode && (
          <div className={styles.stars}>
            {Array.from({ length: 80 }).map((_, index) => {
              const size = Math.random() * 0.8 + 0.5;
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              const delay = Math.random() * 10;
              const opacity = Math.random() * 0.8 + 0.2;
              const colors = ["#ff7ab6", "#c8ff01", "#BE6590", "#FFC1A0", "#FE9C7F", "#0aace3"];
              const color = colors[Math.floor(Math.random() * colors.length)];
              const isBlurred = Math.random() < 0.5;

              return (
                <div
                  key={index}
                  className={`${styles.star} ${styles.blink} ${isBlurred ? styles.blurred : ""}`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${top}%`,
                    left: `${left}%`,
                    opacity: opacity,
                    backgroundColor: color,
                    animationDuration: `${delay + 1}s`,
                    animationDelay: `${delay}s`
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </label>
  );
};

export default StyledThemeButton;
