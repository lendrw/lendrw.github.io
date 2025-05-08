import { useEffect, useState } from 'react';
import styles from './Background.module.css';

interface Star {
  className: string;
  top: number;
  left: number;
  duration: number;
  backgroundColor: string;
  boxShadow?: string;
}

const Background = () => {
  const nightsky: string[] = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

  const getRandomInt = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const [stars, setStars] = useState<Star[]>([]);
  const [crossStars, setCrossStars] = useState<Star[]>([]);
  const [crossAuxStars, setCrossAuxStars] = useState<Star[]>([]);

  const generateStars = () => {
    const newStars: Star[] = [];
    const crossStars: Star[] = [];
    const crossAuxStars: Star[] = [];

    for (let i = 0; i < 35; i++) {
      newStars.push({
        className: 'star star0 blink',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 100),
        duration: getRandomInt(10, 15),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star1 blink',
        top: getRandomInt(0, 40),
        left: getRandomInt(0, 100),
        duration: getRandomInt(2, 5),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star2 blink',
        top: getRandomInt(20, 70),
        left: getRandomInt(0, 100),
        duration: getRandomInt(5, 8),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star4 blink',
        top: getRandomInt(20, 70),
        left: getRandomInt(0, 100),
        duration: getRandomInt(4, 10),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });
    }

    for (let i = 0; i < 18; i++) {
      newStars.push({
        className: 'star star5 blink',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 100),
        duration: getRandomInt(4, 8),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      crossStars.push({
        className: 'blur',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 50),
        duration: NaN,
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      crossAuxStars.push({
        className: 'blur',
        top: getRandomInt(0, 100),
        left: getRandomInt(0, 100),
        duration: NaN,
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      crossAuxStars.push({
        className: 'star star-2',
        top: getRandomInt(0, 100),
        left: getRandomInt(0, 100),
        duration: getRandomInt(4, 10),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
        boxShadow: `0px 0px 6px 1px ${nightsky[Math.floor(getRandomInt(0, nightsky.length))]}`,
      });

      crossAuxStars.push({
        className: 'star star3',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 50),
        duration: getRandomInt(4, 10),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
        boxShadow: `0px 0px 6px 1px ${nightsky[Math.floor(getRandomInt(0, nightsky.length))]}`,
      });
    }

    setStars(newStars);
    setCrossStars(crossStars);
    setCrossAuxStars(crossAuxStars);
  };

  useEffect(() => {
    generateStars(); 
  }, []);

  return (
    <div className={`${styles.starry_sky} ${styles.sky}`}>
      <div className={styles.stars}>
        {stars.map((star, index) => (
          <div
            key={index}
            className={star.className}
            style={{
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              animationDuration: `${star.duration}s`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.starsCross}>
        {crossStars.map((crossStar, index) => (
          <div
            key={index}
            className={crossStar.className}
            style={{
              top: `${crossStar.top}vh`,
              left: `${crossStar.left}vw`,
              animationDuration: `${crossStar.duration}s`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.starsCrossAux}>
        {crossAuxStars.map((crossAuxStar, index) => (
          <div
            key={index}
            className={crossAuxStar.className}
            style={{
              top: `${crossAuxStar.top}vh`,
              left: `${crossAuxStar.left}vw`,
              animationDuration: `${crossAuxStar.duration}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Background;
