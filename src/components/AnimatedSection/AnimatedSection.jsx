import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedSection = ({ id, children, className }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });

    const handleScroll = () => {
      const element = document.getElementById(id);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight / 1.5 && rect.bottom >= window.innerHeight / 1.5;

      if (isVisible) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: -100 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, id]);

  return (
    <div id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
