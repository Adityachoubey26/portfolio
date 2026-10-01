import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * High-performance, layout-stable ScrollReveal component.
 * Uses pure opacity transitions without vertical translation (y), scaling, or blur filters
 * to prevent layout shifts, footer instability, and GPU rasterization lag.
 */
const ScrollReveal = ({ children, delay = 0, duration = 0.5 }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
