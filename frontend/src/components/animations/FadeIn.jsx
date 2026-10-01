import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeIn, fadeUpItem, getReducedVariant } from '../../utils/animations';

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const baseVariant = direction === 'none' ? fadeIn(delay, duration) : fadeUpItem;
  const variant = getReducedVariant(baseVariant, shouldReduceMotion);

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
