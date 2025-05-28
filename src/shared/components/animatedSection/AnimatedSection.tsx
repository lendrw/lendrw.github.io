import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children }) => {
  const controls: AnimationControls = useAnimation();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const controlsStart = () => {
      controls.start({ opacity: 1, x: 0 });
    };

    controlsStart();

    const handleScroll = () => {
      const element = document.getElementById(id);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight / 1.5 && rect.bottom >= window.innerHeight / 1.5;

      if (isVisible) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: -200 });
      }
    };

    let throttleTimer: ReturnType<typeof setTimeout>;
    const throttledScroll = () => {
      if (throttleTimer) clearTimeout(throttleTimer);
      throttleTimer = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledScroll);

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [controls, id]);

  return (
    <div id={id}>
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : -200 }}
        animate={controls}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
