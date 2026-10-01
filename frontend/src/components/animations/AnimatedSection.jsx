import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionEntrance, getReducedVariant } from '../../utils/animations';

export const AnimatedSection = ({
  children,
  id,
  className = '',
  delay = 0,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const variant = getReducedVariant(sectionEntrance, shouldReduceMotion);

  return (
    <motion.section
      id={id}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
