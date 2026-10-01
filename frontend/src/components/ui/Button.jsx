import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { buttonInteraction } from '../../utils/animations';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
  target,
  rel,
  ...props
}) => {
  const shouldReduce = useReducedMotion();

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3.5 gap-2',
    lg: 'text-base px-7 py-4 gap-2.5',
  }[size] || 'text-sm px-6 py-3.5 gap-2';

  const variantStyles = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-[0_4px_14px_-2px_rgba(13,148,136,0.35)] hover:shadow-[0_6px_20px_-2px_rgba(13,148,136,0.45)]',
    secondary: 'bg-white text-slate-800 border border-slate-200/90 hover:bg-slate-50 hover:border-teal-500/40 hover:text-teal-800 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]',
    ghost: 'text-slate-600 hover:text-teal-700 hover:bg-teal-50/60',
  }[variant] || 'bg-teal-600 text-white';

  const motionProps = shouldReduce
    ? {}
    : {
        whileHover: buttonInteraction.hover,
        whileTap: buttonInteraction.tap,
      };

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${combinedClasses}`}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`group ${combinedClasses}`}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
