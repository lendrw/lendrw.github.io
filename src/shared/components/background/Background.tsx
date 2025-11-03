import React, { useMemo } from 'react';
import styles from './Background.module.css';

const nightsky = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

const getRandomInt = (min: number, max: number) => Math.random() * (max - min) + min;
const getRandomColor = () => nightsky[Math.floor(Math.random() * nightsky.length)];

const createStar = (className: string, topRange: [number, number], leftRange: [number, number], durationRange?: [number, number], withShadow = false) => {
  const color = getRandomColor();
  return {
    className,
    top: getRandomInt(...topRange),
    left: getRandomInt(...leftRange),
    duration: durationRange ? getRandomInt(...durationRange) : null,
    backgroundColor: color,
    boxShadow: withShadow ? `0px 0px 6px 1px ${color}` : undefined,
  };
};

const Background: React.FC = () => {
  const { stars, crossStars, crossAuxStars } = useMemo(() => {
    const newStars = [];
    const cross = [];
    const crossAux = [];

    for (let i = 0; i < 35; i++) {
      newStars.push(
        createStar(`${styles.star} ${styles.star_0} ${styles.blink}`, [0, 50], [0, 100], [10, 15]),
        createStar(`${styles.star} ${styles.star_1} ${styles.blink}`, [0, 40], [0, 100], [2, 5]),
        createStar(`${styles.star} ${styles.star_2} ${styles.blink}`, [20, 70], [0, 100], [5, 8]),
        createStar(`${styles.star} ${styles.star_4} ${styles.blink}`, [20, 70], [0, 100], [4, 10])
      );
    }

    for (let i = 0; i < 15; i++) {
      newStars.push(createStar(`${styles.star} ${styles.star_5} ${styles.blink}`, [0, 50], [0, 100], [4, 8]));
      cross.push(createStar(styles.blur, [0, 50], [0, 50]));
      crossAux.push(
        createStar(styles.blur, [0, 100], [0, 100]),
        createStar(`${styles.star} ${styles.star_2}`, [0, 100], [0, 100], [4, 10], true),
        createStar(`${styles.star} ${styles.star_3}`, [0, 50], [0, 50], [4, 10], true)
      );
    }

    return { stars: newStars, crossStars: cross, crossAuxStars: crossAux };
  }, []);

  const renderStars = (stars: any[]) =>
    stars.map((star, index) => (
      <div
        key={index}
        className={star.className}
        style={{
          top: `${star.top}vh`,
          left: `${star.left}vw`,
          animationDuration: star.duration ? `${star.duration}s` : undefined,
          backgroundColor: star.backgroundColor,
          boxShadow: star.boxShadow,
        }}
      />
    ));

  return (
    <div className={`${styles.sky} ${styles.starry_sky}`}>
      <div className={styles.stars}>{renderStars(stars)}</div>
      <div className={styles.stars_cross}>{renderStars(crossStars)}</div>
      <div className={styles.stars_cross_aux}>{renderStars(crossAuxStars)}</div>
    </div>
  );
};

export default React.memo(Background);
