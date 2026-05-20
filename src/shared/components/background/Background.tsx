import React, { useMemo, type CSSProperties } from "react";
import styles from "./Background.module.css";

const NIGHT_SKY_COLORS = [
  "#280F36",
  "#632B6C",
  "#BE6590",
  "#FFC1A0",
  "#FE9C7F",
];
const BUBBLE_COLORS = ["#0aace3", "#1e88e5", "#fb8c00", "#ffffff"];

const STAR_GROUP_COUNT = 35;
const CROSS_STAR_COUNT = 15;
const BUBBLE_COUNT = 30;

type BackgroundVariant = "light" | "dark";

interface BackgroundProps {
  variant?: BackgroundVariant;
}

interface Star {
  className: string;
  top: number;
  left: number;
  duration?: number;
  backgroundColor: string;
  boxShadow?: string;
}

interface Bubble {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
}

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const randomItem = <T,>(items: T[]) =>
  items[Math.floor(Math.random() * items.length)];

const createStar = (
  className: string,
  topRange: [number, number],
  leftRange: [number, number],
  durationRange?: [number, number],
  withShadow = false,
): Star => {
  const color = randomItem(NIGHT_SKY_COLORS);

  return {
    className,
    top: randomBetween(...topRange),
    left: randomBetween(...leftRange),
    duration: durationRange ? randomBetween(...durationRange) : undefined,
    backgroundColor: color,
    boxShadow: withShadow ? `0 0 6px 1px ${color}` : undefined,
  };
};

const createBubble = (): Bubble => ({
  top: randomBetween(8, 92),
  left: randomBetween(-5, 98),
  size: randomBetween(18, 120),
  duration: randomBetween(14, 32),
  delay: randomBetween(-24, 0),
  color: randomItem(BUBBLE_COLORS),
  opacity: randomBetween(0.14, 0.34),
});

function Background({ variant = "dark" }: BackgroundProps) {
  const { stars, crossStars, crossAuxStars, bubbles } = useMemo(() => {
    const generatedStars: Star[] = [];
    const generatedCrossStars: Star[] = [];
    const generatedCrossAuxStars: Star[] = [];

    for (let i = 0; i < STAR_GROUP_COUNT; i++) {
      generatedStars.push(
        createStar(
          `${styles.star} ${styles.star_0} ${styles.blink}`,
          [0, 50],
          [0, 100],
          [10, 15],
        ),
        createStar(
          `${styles.star} ${styles.star_1} ${styles.blink}`,
          [0, 40],
          [0, 100],
          [2, 5],
        ),
        createStar(
          `${styles.star} ${styles.star_2} ${styles.blink}`,
          [20, 70],
          [0, 100],
          [5, 8],
        ),
        createStar(
          `${styles.star} ${styles.star_4} ${styles.blink}`,
          [20, 70],
          [0, 100],
          [4, 10],
        ),
      );
    }

    for (let i = 0; i < CROSS_STAR_COUNT; i++) {
      generatedStars.push(
        createStar(
          `${styles.star} ${styles.star_5} ${styles.blink}`,
          [0, 50],
          [0, 100],
          [4, 8],
        ),
      );

      generatedCrossStars.push(createStar(styles.blur, [0, 50], [0, 50]));

      generatedCrossAuxStars.push(
        createStar(styles.blur, [0, 100], [0, 100]),
        createStar(
          `${styles.star} ${styles.star_2}`,
          [0, 100],
          [0, 100],
          [4, 10],
          true,
        ),
        createStar(
          `${styles.star} ${styles.star_3}`,
          [0, 50],
          [0, 50],
          [4, 10],
          true,
        ),
      );
    }

    return {
      stars: generatedStars,
      crossStars: generatedCrossStars,
      crossAuxStars: generatedCrossAuxStars,
      bubbles: Array.from({ length: BUBBLE_COUNT }, createBubble),
    };
  }, []);

  if (variant === "light") {
    return (
      <div
        className={`${styles.background} ${styles.light_sky}`}
        aria-hidden="true"
      >
        <div className={styles.bubbles}>
          {bubbles.map((bubble, index) => {
            const style: CSSProperties = {
              top: `${bubble.top}vh`,
              left: `${bubble.left}vw`,
              width: bubble.size,
              height: bubble.size,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              backgroundColor: bubble.color,
              opacity: bubble.opacity,
            };

            return (
              <div
                key={`bubble-${index}`}
                className={styles.bubble}
                style={style}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.background} ${styles.sky}`} aria-hidden="true">
      <div className={styles.stars}>
        {stars.map((star, index) => (
          <StarElement key={`star-${index}`} star={star} />
        ))}
      </div>

      <div className={styles.stars_cross}>
        {crossStars.map((star, index) => (
          <StarElement key={`cross-${index}`} star={star} />
        ))}
      </div>

      <div className={styles.stars_cross_aux}>
        {crossAuxStars.map((star, index) => (
          <StarElement key={`cross-aux-${index}`} star={star} />
        ))}
      </div>
    </div>
  );
}

function StarElement({ star }: { star: Star }) {
  const style: CSSProperties = {
    top: `${star.top}vh`,
    left: `${star.left}vw`,
    animationDuration: star.duration ? `${star.duration}s` : undefined,
    backgroundColor: star.backgroundColor,
    boxShadow: star.boxShadow,
  };

  return <div className={star.className} style={style} />;
}

export default React.memo(Background);
