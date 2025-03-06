import React, { useEffect, useState } from 'react';
import styles from './StarrySky.module.css';

const StarrySky = () => {

  const nightsky = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

  const getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const [stars, setStars] = useState([]);
  const [crossStars, setCrossStars] = useState([]);
  const [crossAuxStars, setCrossAuxStars] = useState([]);

  const generateStars = () => {
    const newStars = [];
    const crossStars = [];
    const crossAuxStars = [];

    for (let i = 0; i < 35; i++) {

      newStars.push({
        className: 'star star-0 blink',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 100),
        duration: getRandomInt(10, 15),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star-1 blink',
        top: getRandomInt(0, 40),
        left: getRandomInt(0, 100),
        duration: getRandomInt(2, 5),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star-2 blink',
        top: getRandomInt(20, 70),
        left: getRandomInt(0, 100),
        duration: getRandomInt(5, 8),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star-4 blink',
        top: getRandomInt(20, 70),
        left: getRandomInt(0, 100),
        duration: getRandomInt(4, 10),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

    }

    for (let i = 0; i < 25; i++) {

      newStars.push({
        className: 'star star-0 blink',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 100),
        duration: getRandomInt(2, 9),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star-1 blink',
        top: getRandomInt(0, 40),
        left: getRandomInt(0, 100),
        duration: getRandomInt(2, 5),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
        boxShadow: `0px 0px 6px 1px ${nightsky[Math.floor(getRandomInt(0, nightsky.length))]}`,
      });

      newStars.push({
        className: 'star star-2 blink',
        top: getRandomInt(10, 70),
        left: getRandomInt(0, 100),
        duration: getRandomInt(4, 8),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

    }

    for (let i = 0; i < 20; i++) {

      newStars.push({
        className: 'star star-0',
        top: getRandomInt(40, 75),
        left: getRandomInt(0, 100),
        duration: getRandomInt(2, 9),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      newStars.push({
        className: 'star star-1 blink',
        top: getRandomInt(40, 75),
        left: getRandomInt(0, 100),
        duration: getRandomInt(2, 5),
        boxShadow: `0px 0px 6px 1px ${nightsky[Math.floor(getRandomInt(0, nightsky.length))]}`,
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

    }

    for (let i = 0; i < 18; i++) {

      newStars.push({
        className: 'star star-5 blink',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 100),
        duration: getRandomInt(4, 8),
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      crossStars.push({
        className: 'blur',
        top: getRandomInt(0, 50),
        left: getRandomInt(0, 50),
        duration: null,
        backgroundColor: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      });

      crossAuxStars.push({
        className: 'blur',
        top: getRandomInt(0, 100),
        left: getRandomInt(0, 100),
        duration: null,
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
        className: 'star star-3',
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
    <div className={`sky ${styles.starry_sky}`}>
      <div className="stars">
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
      <div className="stars-cross">
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
      <div className="stars-cross-aux">
        {crossAuxStars.map((crossAuxStars, index) => (
            <div
              key={index}
              className={crossAuxStars.className}
              style={{
                top: `${crossAuxStars.top}vh`,
                left: `${crossAuxStars.left}vw`,
                animationDuration: `${crossAuxStars.duration}s`,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default StarrySky;
