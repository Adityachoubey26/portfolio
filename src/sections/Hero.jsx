import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMouseTilt } from '../hooks/useMouseTilt';
import adityaPic from '../assets/aditya_pic.jpeg';

const Hero = () => {
  const { ref: tiltRef, tiltStyle, handleMouseMove, handleMouseLeave } = useMouseTilt({ max: 15 });
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full noise" />
      
      {/* Moving Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -z-10 animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[150px] -z-10 animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: yParallax }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-6"
          >
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 bg-surface shadow-2xl animate-float">
                <img src={adityaPic} alt="Aditya Mini" className="w-full h-full object-cover" />
             </div>
             <div>
                <span className="text-accent font-black tracking-widest uppercase text-[10px] block">Currently Building</span>
                <span className="text-white/60 text-xs font-mono">Future of Open Web</span>
             </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Aditya <br />
            <span className="text-primary italic relative">
               Choubey
               <motion.span 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ delay: 1, duration: 1 }}
                 className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full" 
               />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 mb-10 max-w-xl leading-relaxed font-light">
            Creative Frontend Developer & <span className="text-white font-medium">Community Architect.</span> <br />
            <span className="text-white/30 italic text-lg">"Crafting digital ecosystems with 3D precision."</span>
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/80 text-white px-10 py-5 rounded-3xl font-black transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group active:scale-95"
            >
              Recent Works
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://wa.me/919310526618"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-[2px] rounded-3xl group active:scale-95 transition-all"
            >
              <div className="bg-surface/60 group-hover:bg-surface/20 px-10 py-[18px] rounded-3xl font-black transition-all flex items-center gap-3">
                Let's Talk
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Visual Element (3D Profile) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative flex justify-center items-center perspective-1000"
        >
           {/* Floating elements around head */}
           <motion.div 
             animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
             whileHover={{ 
               scale: 1.05, 
               boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
               borderColor: "rgba(59, 130, 246, 0.6)"
             }}
             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute top-0 right-[15%] glass px-4 py-2 rounded-full z-20 text-[10px] font-black uppercase tracking-widest border-primary/40 shadow-2xl transition-all cursor-default"
           >
             Frontend Dev • Community Builder
           </motion.div>
           
           <motion.div 
             animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute bottom-10 left-[10%] glass px-4 py-2 rounded-xl z-20 text-[10px] font-black uppercase tracking-widest border-accent/40 shadow-2xl"
           >
             🌐 Community Lead
           </motion.div>

           {/* The 3D tilted image */}
           <div 
             ref={tiltRef}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             className="relative w-80 h-80 md:w-[450px] md:h-[450px] group cursor-pointer"
             style={{
               transformStyle: 'preserve-3d',
               transform: `rotateX(${tiltStyle.rotateX}) rotateY(${tiltStyle.rotateY})`,
               transition: 'transform 0.1s ease-out'
             }}
           >
              {/* Outer Glows */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity rounded-full" />
              
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-3xl transform translate-z-10 group-hover:scale-105 transition-transform duration-500">
                 <img 
                    src={adityaPic} 
                    alt="Aditya Choubey" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                 
                 {/* Glass overlay on bottom */}
                 <div className="absolute bottom-10 left-10 p-4">
                    <h3 className="text-2xl font-black text-white italic drop-shadow-2xl">Aditya Choubey</h3>
                    <p className="text-white/60 text-xs font-black uppercase tracking-widest">Architecting Innovation</p>
                 </div>
              </div>

              {/* Decorative rings behind */}
              <div className="absolute -inset-10 border border-white/5 rounded-[4rem] -z-10 animate-spin-slow opacity-20" />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
