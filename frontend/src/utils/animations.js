/**
 * Global Animation System
 * Smooth, intentional, and performance-friendly variants for Framer Motion.
 * Respects prefers-reduced-motion.
 */

// Custom easing curves
export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeOutQuint = [0.22, 1, 0.36, 1];
export const springGentle = { type: 'spring', stiffness: 120, damping: 20 };
export const springSnappy = { type: 'spring', stiffness: 350, damping: 25 };

/**
 * Container variant that staggers child animations
 */
export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

/**
 * Item variant that fades and slides up smoothly
 */
export const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutQuint,
    },
  },
};

/**
 * Simple fade in variant
 */
export const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: easeOutQuint,
    },
  },
});

/**
 * Section entrance variant for whole-section reveals
 */
export const sectionEntrance = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuint,
    },
  },
};

/**
 * Floating badge entrance
 */
export const badgeEntrance = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutQuint,
    },
  },
};

/**
 * Navbar entrance variant
 */
export const navbarVariant = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOutQuint,
    },
  },
};

/**
 * Button hover & tap interactions
 */
export const buttonInteraction = {
  hover: {
    y: -2,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: { duration: 0.1 },
  },
};

/**
 * Micro card hover variant
 */
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: easeOutQuint },
  },
};

/**
 * Returns reduced-motion variant fallback if user prefers reduced motion
 */
export const getReducedVariant = (standardVariant, shouldReduce) => {
  if (!shouldReduce) return standardVariant;
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };
};
