import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-pink-200 transform-origin-left z-50 shadow-sm"
    />
  );
};

export default ScrollIndicator;
