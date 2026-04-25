import React, { useMemo } from 'react';
import styles from './LightBackground.module.css';

const colors = [
  'rgba(124, 58, 237, 0.8)',   // Roxo
  'rgba(6, 182, 212, 0.8)',    // Ciano
  'rgba(245, 158, 11, 0.7)',  // Laranja
  'rgba(16, 185, 129, 0.7)',  // Esmeralda
  'rgba(239, 68, 68, 0.7)',   // Vermelho
];

const getRandomInt = (min: number, max: number) => Math.random() * (max - min) + min;

const createParticle = (index: number) => ({
  id: index,
  size: getRandomInt(6, 18),
  top: getRandomInt(0, 100),
  left: getRandomInt(0, 100),
  duration: getRandomInt(12, 25),
  delay: getRandomInt(0, 8),
  color: colors[Math.floor(Math.random() * colors.length)],
  blur: Math.random() > 0.8,
});

const LightBackground: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => createParticle(i));
  }, []);

  return (
    <div className={styles.container}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            filter: particle.blur ? 'blur(2px)' : 'none',
          }}
        />
      ))}
      <div className={styles.gradient} />
    </div>
  );
};

export default React.memo(LightBackground);