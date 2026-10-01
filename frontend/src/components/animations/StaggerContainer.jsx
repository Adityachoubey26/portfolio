import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, getReducedVariant } from '../../utils/animations';

export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const variant = getReducedVariant(
    staggerContainer(staggerDelay, delayChildren),
    shouldReduceMotion
  );

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
