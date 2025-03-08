import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedSection = ({ id, children, className }) => {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false); 

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

    let throttleTimer;
    window.addEventListener("scroll", () => {
      if (throttleTimer) clearTimeout(throttleTimer);
      throttleTimer = setTimeout(handleScroll, 100);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, id]);

  return (
    <div id={id} className={className}>
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
