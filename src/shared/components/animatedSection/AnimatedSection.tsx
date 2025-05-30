import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: -200 });
        }
      },
      { threshold: 0.5 } // 50% visível
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div id={id} ref={ref}>
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
