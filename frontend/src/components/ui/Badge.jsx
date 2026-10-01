import React from 'react';

export const Badge = ({
  children,
  variant = 'teal', // 'teal' | 'cyan' | 'mint' | 'neutral'
  showDot = false,
  dotPulse = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    teal: 'bg-teal-50/90 text-teal-800 border-teal-200/80',
    cyan: 'bg-cyan-50/90 text-cyan-800 border-cyan-200/80',
    mint: 'bg-emerald-50/90 text-emerald-800 border-emerald-200/80',
    neutral: 'bg-slate-50/90 text-slate-700 border-slate-200/80',
  }[variant] || 'bg-teal-50/90 text-teal-800 border-teal-200/80';

  const dotStyles = {
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    mint: 'bg-emerald-500',
    neutral: 'bg-slate-400',
  }[variant] || 'bg-teal-500';

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border shadow-soft-xs backdrop-blur-sm ${variantStyles} ${className}`}
      {...props}
    >
      {showDot && (
        <span className="relative flex h-2 w-2">
          {dotPulse && (
            <span
              className={`animate-ping-subtle absolute inline-flex h-full w-full rounded-full opacity-75 ${dotStyles}`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotStyles}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
