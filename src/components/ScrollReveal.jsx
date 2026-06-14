import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, duration = 0.9 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Linear/Apple deceleration curve
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
