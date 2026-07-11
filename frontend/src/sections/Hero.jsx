import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import adityaPic from '../assets/aditya_pic.jpeg';

const Hero = () => {
  // 3D Tilt calculations for the profile picture
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 120 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 120 });

  // Sheen highlight coordinates
  const reflectX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { damping: 25, stiffness: 120 });
  const reflectY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { damping: 25, stiffness: 120 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Staggered child variants for text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  };

  return (
    <section id="hero" className="flex items-center pt-28 pb-20 md:pt-36 md:pb-24 relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="light-orb w-[600px] h-[600px] -top-20 -left-20 opacity-20" />
      <div className="light-orb w-[400px] h-[400px] bottom-20 right-20 opacity-10" />
      <div className="noise" />

      {/* Hero Text Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Left Content with Staggered entry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 mt-16 md:mt-0"
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Available for Innovation</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            <span className="text-white">Aditya</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 tracking-tight">
              Choubey
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/40 mb-12 max-w-xl leading-relaxed font-medium">
            Creative Frontend Developer & <span className="text-white">Community Architect</span> crafting digital ecosystems with precision.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start mb-14">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Explore Works
              <span className="text-xl">→</span>
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Let's Talk
            </a>
          </motion.div>

          {/* Scroll Indicator mimicking the screenshot */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col items-center md:items-start gap-2.5 opacity-40 select-none mt-12"
          >
            <span className="text-[9px] font-extrabold tracking-[0.3em] text-white/60 uppercase">
              Scroll To Explore
            </span>
            <div className="w-[18px] h-[30px] rounded-full border-2 border-white/30 flex justify-center p-1 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-blue-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image with 3D Depth effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative group"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] mx-auto perspective-1000">
            {/* Soft Rotating Gradient Halo */}
            <div className="halo-gradient-container" />

            {/* Concentric Animated Depth Rings */}
            <div className="depth-ring depth-ring-1" />
            <div className="depth-ring depth-ring-2" />

            {/* Pulsing Glow Border Wrapper */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow-pulse" />
            
            {/* Interactive 3D Frame */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 glass-premium shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] transition-all duration-300"
            >
               {/* Floating Holographic Glow Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay opacity-30 pointer-events-none z-10 animate-pulse-slow" />

               {/* Dynamic spotlight sheeting highlighting */}
               <motion.div 
                 style={{
                   background: useTransform(
                     [reflectX, reflectY],
                     ([rx, ry]) => `radial-gradient(circle 220px at ${rx}% ${ry}%, rgba(255, 255, 255, 0.15) 0%, transparent 80%)`
                   ),
                   zIndex: 15
                 }}
                 className="absolute inset-0 pointer-events-none"
               />

               <img 
                 src={adityaPic} 
                 alt="Aditya Choubey" 
                 className="w-full h-full object-cover img-premium scale-102" 
               />
               
               {/* Overlay Content */}
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
               <div className="absolute bottom-8 left-8" style={{ transform: "translateZ(30px)" }}>
                 <p className="text-primary font-bold text-sm tracking-[0.3em] uppercase mb-1">Based in Delhi, India</p>
                 <h2 className="text-3xl font-bold text-white italic">Aditya Choubey</h2>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
