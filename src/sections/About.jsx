import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMouseTilt } from '../hooks/useMouseTilt';
import developer3D from '../assets/developer_3d_pure_black.png';
import StatCounter from '../components/StatCounter';

const Particles = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.4 + 0.1,
            scale: Math.random() * 0.5 + 0.3
          }}
          animate={{ 
            y: ["-5%", "5%", "-5%"],
            opacity: [0.1, 0.6, 0.1]
          }}
          transition={{ 
            duration: Math.random() * 8 + 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const { ref: tiltRef, tiltStyle, handleMouseMove, handleMouseLeave } = useMouseTilt({ max: 6 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateMouse = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.02;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.02;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="section-padding relative min-h-screen flex items-center overflow-hidden py-24 lg:py-40"
    >
      <Particles />
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-5xl h-full -z-20 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/20 blur-[180px] rounded-full mix-blend-screen" 
        />
      </div>

      {/* 3D CHARACTER - GROUNDED & MASKED */}
      <div className="hidden lg:flex absolute bottom-0 left-[-5%] w-[45%] h-full z-10 pointer-events-none items-end justify-center">
        <motion.div
           ref={tiltRef}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="relative w-full h-[95%] flex items-end justify-center pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${tiltStyle.rotateX}) rotateY(${tiltStyle.rotateY})`,
              transition: 'transform 0.2s ease-out'
            }}
            className="relative w-full h-full"
          >
             {/* Character Image with Aggressive Masking to Kill Black Box */}
             <img 
               src={developer3D} 
               alt="3D Developer" 
               className="w-full h-full object-contain mix-blend-screen contrast-[1.3] brightness-[1.1]" 
               style={{
                 maskImage: 'radial-gradient(circle at 45% 50%, black 35%, transparent 85%)',
                 WebkitMaskImage: 'radial-gradient(circle at 45% 50%, black 35%, transparent 85%)'
               }}
             />

             {/* Floor Grounding Effects */}
             <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[50%] h-[4%] bg-black/90 blur-2xl rounded-[100%] shadow-[0_20px_60px_#000] -z-10" />
             <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[70%] h-[15%] bg-primary/10 blur-[100px] rounded-[100%] -z-20 opacity-30" />

             {/* Dynamic Cursor Light Reflection */}
             <motion.div 
               style={{ x: springX, y: springY }}
               className="absolute top-1/2 left-[45%] w-1.5 h-1.5 bg-primary/60 rounded-full blur-sm z-40"
             />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 relative z-20">
        {/* Left column spacer to prevent character overlap on large screens */}
        <div className="hidden lg:block lg:col-span-5 h-full pointer-events-none" />

        {/* Content Side */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left lg:pl-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-14">
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block opacity-50">Creative Architect</span>
              <h2 className="text-7xl lg:text-[9rem] font-black mb-10 tracking-tighter leading-[0.8] mix-blend-difference">
                 About <span className="text-primary italic">Me</span>
              </h2>
              <div className="h-2 w-28 bg-gradient-to-r from-primary to-accent rounded-full mb-10 ml-auto lg:ml-0" />
            </div>

            <div className="space-y-12 text-xl lg:text-2xl text-white/40 leading-relaxed font-light max-w-3xl mx-auto lg:mx-0">
              <p>
                I’m <span className="text-white font-bold">Aditya Choubey</span>, a <span className="text-primary font-black tracking-tight">Frontend Developer</span> at the edge of interactivity and design.
              </p>
              
              <p className="border-l-4 border-primary/20 pl-8 italic font-normal text-white/70 bg-white/5 py-6 rounded-r-3xl shadow-2xl">
                I architect <span className="text-primary font-bold">Digital Universes</span> that bridge the gap between complex technology and human storytelling.
              </p>

              {/* Stats Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-12">
                 <motion.div 
                   whileHover={{ y: -10, scale: 1.02 }}
                   className="glass p-12 rounded-[3rem] border-white/5 bg-surface/40 backdrop-blur-3xl flex flex-col gap-5 relative group shadow-black shadow-2xl"
                 >
                   <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl rounded-[3rem]" />
                   <span className="text-primary text-6xl font-black tracking-tighter leading-none"><StatCounter end={10} suffix="+" /></span>
                   <h4 className="text-white/30 font-black text-[10px] tracking-[0.5em] uppercase">Events Led</h4>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -10, scale: 1.02 }}
                   className="glass p-12 rounded-[3rem] border-white/5 bg-surface/40 backdrop-blur-3xl flex flex-col gap-5 relative group shadow-black shadow-2xl"
                 >
                   <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl rounded-[3rem]" />
                   <span className="text-accent text-6xl font-black tracking-tighter leading-none"><StatCounter end={2} /></span>
                   <h4 className="text-white/30 font-black text-[10px] tracking-[0.5em] uppercase">Foundations</h4>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Section Grounding */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_transparent_30%,_#0B0F19_100%)] pointer-events-none opacity-70" />
    </section>
  );
};

export default About;








