import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import adityaPic from '../assets/aditya_pic.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="flex items-center pt-28 pb-20 md:pt-36 md:pb-24 relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="light-orb w-[600px] h-[600px] -top-20 -left-20 opacity-20" />
      <div className="light-orb w-[400px] h-[400px] bottom-20 right-20 opacity-10" />
      <div className="noise" />

      {/* Hero Text Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 mt-16 md:mt-0"
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Available for Innovation</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            <span className="text-white">Aditya</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 tracking-tight">
              Choubey
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/40 mb-12 max-w-xl leading-relaxed font-medium">
            Creative Frontend Developer & <span className="text-white">Community Architect</span> crafting digital ecosystems with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Explore Works
              <span className="text-xl">→</span>
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative group"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] mx-auto">
            {/* Pulsing Glow Border Wrapper */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow-pulse" />
            
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 glass-premium shadow-2xl [transform-style:preserve-3d] transition-all duration-700 ease-out group-hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)_scale(1.02)]">
               <img 
                 src={adityaPic} 
                 alt="Aditya Choubey" 
                 className="w-full h-full object-cover img-premium" 
               />
               
               {/* Overlay Content */}
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
               <div className="absolute bottom-8 left-8">
                 <p className="text-primary font-bold text-sm tracking-[0.3em] uppercase mb-1">Based in Delhi, India</p>
                 <h2 className="text-3xl font-bold text-white italic">Aditya Choubey</h2>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
