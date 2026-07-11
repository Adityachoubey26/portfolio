import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import character from '../assets/3D_character.png';

const About = () => {
  const containerRef = useRef(null);

  // Mouse tracking logic for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Background Orbs with subtle mouse parallax */}
      <motion.div 
        style={{ x: useTransform(mouseX, [-0.5, 0.5], [50, -50]), y: useTransform(mouseY, [-0.5, 0.5], [50, -50]) }}
        className="light-orb w-[600px] h-[600px] top-1/4 -left-1/4 opacity-20" 
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Interactive 3D Character */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center order-2 lg:order-1 perspective-1000"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-premium border border-white/10 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Dynamic Glow Overlay */}
              <motion.div 
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) => `radial-gradient(circle at ${50 + x * 100}% ${50 + y * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 80%)`
                  )
                }}
                className="absolute inset-0 z-10 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/5" />
              
              <motion.img 
                src={character} 
                alt="3D Developer" 
                style={{ translateZ: 50 }}
                className="w-full h-full object-contain img-premium drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-110"
              />
              
              {/* Floating Code/Decorative elements inside the box for depth */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-premium rounded-2xl border-white/5 backdrop-blur-md transform translate-z-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-red-400" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                   <span className="text-[10px] text-white/40 font-mono ml-2">portfolio.tsx</span>
                </div>
                <p className="text-xs text-white/60 font-mono mt-3 leading-relaxed">
                   const developer = {'{'} <br/>
                   &nbsp;&nbsp;name: "Aditya",<br/>
                   &nbsp;&nbsp;focus: "Frontend & 3D Web"<br/>
                   {'}'}
                </p>
              </div>
            </motion.div>

            {/* Decorative Badges Outside */}
            <motion.div 
              style={{ x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
              className="absolute -top-10 -right-6 glass-premium p-5 rounded-2xl border border-white/10 shadow-2xl animate-float z-20"
            >
               <span className="text-4xl">🚀</span>
            </motion.div>
            
            <motion.div 
              style={{ x: useTransform(mouseX, [-0.5, 0.5], [-30, 30]), y: useTransform(mouseY, [-0.5, 0.5], [10, -10]) }}
              className="absolute -bottom-6 -left-10 glass-premium p-4 rounded-xl border border-white/5 shadow-xl animate-float-slow hidden md:block"
            >
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Available for Innovation</span>
               </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6 block">The Tech Visionary</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 underline-gradient">Me</span>
              </h2>
              
              <div className="space-y-8 text-white/50 text-lg md:text-xl leading-relaxed max-w-xl">
                <p>
                  I'm <span className="text-white font-bold border-b-2 border-primary/30">Aditya Choubey</span>, a Frontend Developer and Community Builder dedicated to crafting digital masterpieces.
                </p>
                <p>
                  Currently pushing boundaries in <span className="text-white/80 italic font-medium">Information Technology</span>, I specialize in the intersection of <span className="text-primary">React</span>, <span className="text-secondary">3D Visuals</span>, and <span className="text-accent">User Experience</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-6">
                   <div className="glass-card !p-8 border-white/5 hover:border-primary/30 group transition-all duration-500">
                      <h4 className="text-4xl font-extrabold text-white group-hover:text-primary transition-colors mb-2">10+</h4>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Successful Events</p>
                   </div>
                   <div className="glass-card !p-8 border-white/5 hover:border-secondary/30 group transition-all duration-500">
                      <h4 className="text-4xl font-extrabold text-white group-hover:text-secondary transition-colors mb-2">02</h4>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Tech Foundations</p>
                   </div>
                </div>

                <div className="pt-10 flex flex-wrap gap-6">
                   <a href="#contact" className="btn-primary !px-10 !py-4 shadow-primary/20">
                     <span>Get in Touch</span>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                   <a href="#experience" className="btn-secondary !px-10 !py-4 border-white/10 hover:border-white/20">
                     Explore Work
                   </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
