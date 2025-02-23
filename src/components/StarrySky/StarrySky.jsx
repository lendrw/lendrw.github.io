import React, { useEffect } from 'react';
import styles from './StarrySky.module.css';

const StarrySky = () => {
    const nightsky = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

  const getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    const generateStars = () => {
      const starsContainer = document.querySelector('.stars');
      const starsCross = document.querySelector('.stars-cross');
      const starsCrossAux = document.querySelector('.stars-cross-aux');

      const generateStar = (className, top, left, duration, color, shadow) => {
        const star = document.createElement('div');
        star.className = className;
        star.style.top = `${top}vh`;
        star.style.left = `${left}vw`;
        star.style.animationDuration = `${duration}s`;
        if (color) star.style.backgroundColor = color;
        if (shadow) star.style.boxShadow = `0px 0px 6px 1px ${shadow}`;
        return star;
      };

      for (let i = 0; i < 100; i++) {
        starsContainer.appendChild(
          generateStar('star star-1 blink', getRandomInt(0, 40), getRandomInt(0, 100), getRandomInt(2, 5))
        );
        starsContainer.appendChild(
          generateStar('star star-2 blink', getRandomInt(20, 70), getRandomInt(0, 100), getRandomInt(4, 8))
        );
        starsContainer.appendChild(
          generateStar('star star-4 blink', getRandomInt(20, 70), getRandomInt(0, 100), getRandomInt(4, 8))
        );
      }

      for (let i = 0; i < 65; i++) {
        starsContainer.appendChild(
          generateStar('star star-0', getRandomInt(0, 50), getRandomInt(0, 100), getRandomInt(1, 2.5))
        );
        starsContainer.appendChild(
          generateStar('star star-1 blink', getRandomInt(0, 50), getRandomInt(0, 100), getRandomInt(2.5, 4))
        );
        starsContainer.appendChild(
          generateStar('star star-2 blink', getRandomInt(0, 50), getRandomInt(0, 100), getRandomInt(4, 5))
        );
      }

      for (let i = 0; i < 40; i++) {
        starsContainer.appendChild(
          generateStar('star star-0', getRandomInt(40, 75), getRandomInt(0, 100), getRandomInt(1, 3))
        );
        starsContainer.appendChild(
          generateStar('star star-1 blink', getRandomInt(40, 75), getRandomInt(0, 100), getRandomInt(2, 4))
        );
      }

      for (let i = 0; i < 30; i++) {
        if (i % 2 === 0) {
          starsContainer.appendChild(
            generateStar(
              'star star-5',
              getRandomInt(0, 50),
              getRandomInt(0, 100),
              getRandomInt(5, 7),
              nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))]
            )
          );
        }

        starsCrossAux.appendChild(
          generateStar('blur', getRandomInt(0, 100), getRandomInt(0, 100), null, nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))])
        );

        starsCrossAux.appendChild(
          generateStar(
            'star star-2',
            getRandomInt(0, 100),
            getRandomInt(0, 100),
            getRandomInt(4, 10),
            nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))],
            nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))]
          )
        );

        starsCross.appendChild(
          generateStar('blur', getRandomInt(0, 50), getRandomInt(0, 50), null, nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))])
        );

        starsCross.appendChild(
          generateStar(
            'star star-2',
            getRandomInt(0, 50),
            getRandomInt(0, 50),
            getRandomInt(4, 10),
            nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))],
            nightsky[Math.ceil(getRandomInt(0, nightsky.length - 1))]
          )
        );
      }
    };

    generateStars();
  }, []);
  
    return (
      <div className={`sky ${styles.starry_sky}`}>
        <div className="stars"></div>
        <div className="stars-cross"></div>
        <div className="stars-cross-aux"></div>
      </div>
    );
  }

export default StarrySky;
