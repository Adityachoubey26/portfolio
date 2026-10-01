import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, Users, MapPin, Code2 } from 'lucide-react';
import adityaPic from '../assets/aditya_pic.jpeg';

export const ProfileCard = ({ metadata }) => {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { damping: 25, stiffness: 140, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Subtle lighting sheen coordinate
  const sheenX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const sheenY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);
  const sheenBackground = useTransform(
    [sheenX, sheenY],
    ([sx, sy]) =>
      `radial-gradient(circle 280px at ${sx}% ${sy}%, rgba(255, 255, 255, 0.45) 0%, transparent 80%)`
  );

  useEffect(() => {
    const isPointerFine = window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 768;
    setCanTilt(isPointerFine && !shouldReduceMotion);
  }, [shouldReduceMotion]);

  const handleMouseMove = (e) => {
    if (!canTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto py-4 select-none">
      {/* Soft ambient back-glow behind the card (delicate teal/cyan) */}
      <div
        className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/15 via-cyan-500/12 to-emerald-400/10 blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Interactive 3D Perspective Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: canTilt ? rotateX : 0,
          rotateY: canTilt ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl bg-white p-3 sm:p-4 border border-slate-200/80 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      >
        {/* Subtle Sheen highlight */}
        {canTilt && (
          <motion.div
            style={{
              background: sheenBackground,
            }}
            className="absolute inset-0 rounded-3xl pointer-events-none z-20"
          />
        )}

        {/* Image Presentation Container */}
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100">
          <img
            src={adityaPic}
            alt="Aditya Choubey — Frontend Developer & Community Architect"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
            loading="eager"
          />

          {/* Gentle vignette at bottom for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Bottom Card Identity & Location */}
          <div
            className="absolute bottom-4 left-4 right-4 text-white z-10"
            style={{ transform: canTilt ? 'translateZ(20px)' : 'none' }}
          >
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-teal-200/90 tracking-wide uppercase">
              <MapPin size={12} className="text-teal-300" />
              <span>{metadata?.location || 'New Delhi, India'}</span>
            </div>
            <p className="font-display text-xl font-bold text-white tracking-tight mt-0.5">
              Aditya Choubey
            </p>
          </div>
        </div>

        {/* Floating Metadata Badge 1: Community Lead (Top-Left / Overflow) */}
        <motion.div
          initial={{ opacity: 0, x: -16, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          style={{ transform: canTilt ? 'translateZ(30px)' : 'none' }}
          className="absolute -top-3 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-soft flex items-center gap-2.5 z-30 pointer-events-none"
        >
          <div className="w-7 h-7 rounded-xl bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-700">
            <Users size={14} />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-900 leading-tight">Community Lead</p>
            <p className="text-[10px] text-slate-500 font-medium">TechEra & GraphEra</p>
          </div>
        </motion.div>

        {/* Floating Metadata Badge 2: Modern Web Craft (Bottom-Right / Overflow) */}
        <motion.div
          initial={{ opacity: 0, x: 16, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          style={{ transform: canTilt ? 'translateZ(30px)' : 'none' }}
          className="absolute -bottom-3 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-soft flex items-center gap-2.5 z-30 pointer-events-none"
        >
          <div className="w-7 h-7 rounded-xl bg-cyan-50 border border-cyan-200/70 flex items-center justify-center text-cyan-700">
            <Code2 size={14} />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-900 leading-tight">Modern Web Craft</p>
            <p className="text-[10px] text-slate-500 font-medium">React • Clean UI</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
