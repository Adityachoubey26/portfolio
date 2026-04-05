import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import adityaPic from '../assets/aditya_pic.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full noise opacity-05" />
      
      {/* Light Orbs for Depth */}
      <div className="light-orb w-[400px] h-[400px] top-[10%] -left-[10%] opacity-10" />
      <div className="light-orb w-[300px] h-[300px] bottom-[20%] right-[5%] opacity-5" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Static Top Badge */}
          <div className="flex items-center gap-3 mb-8">
             <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <img src={adityaPic} alt="Aditya Mini" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-2xl">
                <span className="text-accent font-black tracking-widest uppercase text-[10px] block mb-0.5">Currently Building</span>
                <span className="text-white/60 text-xs font-mono">Future of Open Web</span>
             </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            Aditya <br />
            <span className="text-primary italic relative">
               Choubey
               <motion.span 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ delay: 1, duration: 1 }}
                 className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-60" 
               />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Creative Frontend Developer & <span className="text-white font-medium">Community Architect.</span> <br />
            <span className="text-white/30 italic text-lg mt-2 block">"Crafting digital ecosystems with precision."</span>
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/80 text-white px-10 py-5 rounded-3xl font-black transition-all shadow-xl shadow-primary/20 flex items-center gap-3 active:scale-95 hover:translate-y-[-2px] hover:shadow-primary/30"
            >
              Recent Works
              <span>→</span>
            </a>
            <a
              href="https://wa.me/919310526618"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-[2px] rounded-3xl active:scale-95 transition-all group"
            >
              <div className="bg-surface/60 group-hover:bg-surface/20 px-10 py-[18px] rounded-3xl font-black transition-all flex items-center gap-3 group-hover:shadow-lg">
                Let's Talk
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Visual Element */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative flex justify-center items-center"
        >
           {/* Static badges with glass style */}
           <div className="absolute -top-4 right-[10%] bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full z-20 text-[10px] font-black uppercase tracking-widest text-white/90 shadow-2xl hover:scale-105 transition-transform duration-300">
             Frontend Dev • Community Builder
           </div>
           
           <div className="absolute -bottom-6 left-[5%] bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-2xl z-20 text-[10px] font-black uppercase tracking-widest text-white/90 shadow-2xl hover:scale-105 transition-transform duration-300">
             🌐 Community Lead
           </div>

           {/* Image Container with Hover 3D & Deep Shadow */}
           <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] group">
              {/* Soft Grounding Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-primary/20 blur-[80px] rounded-full z-[-1]" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] [transform-style:preserve-3d] transition-all duration-500 ease-out hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)_scale(1.02)] border border-white/5">
                 <img 
                    src={adityaPic} 
                    alt="Aditya Choubey" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 
                 <div className="absolute bottom-10 left-10 p-4 drop-shadow-lg">
                    <h3 className="text-2xl font-black text-white italic">Aditya Choubey</h3>
                    <p className="text-white/60 text-xs font-black uppercase tracking-widest">Architecting Innovation</p>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>

  );
};

export default Hero;
