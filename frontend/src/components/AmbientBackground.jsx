import React from 'react';

/**
 * Lightweight, high-performance ambient background.
 * Provides soft atmospheric depth via CSS blur zones and tactile micro-dot grid
 * with zero pointer-tracking overhead or layout recalculations.
 */
export const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-30 overflow-hidden bg-[#f8faf9]"
      aria-hidden="true"
    >
      {/* Delicate tactile micro-dot grid pattern for subtle depth */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.4]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="light-dot-grid"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#0f172a" fillOpacity="0.04" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#light-dot-grid)" />
      </svg>

      {/* Very soft ambient illumination zones */}
      {/* Top-Right Soft Teal */}
      <div className="absolute -top-[10%] right-[-5%] w-[650px] h-[650px] rounded-full bg-teal-300/15 blur-[140px]" />

      {/* Top-Left Soft Cyan / Light Blue */}
      <div className="absolute top-[5%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-300/12 blur-[130px]" />

      {/* Center/Mid-page Subtle Mint accent */}
      <div className="absolute top-[45%] right-[10%] w-[550px] h-[550px] rounded-full bg-emerald-200/12 blur-[150px]" />

      {/* Bottom Subtle Cyan accent near footer transition */}
      <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-teal-200/10 blur-[140px]" />
    </div>
  );
};

export default AmbientBackground;
