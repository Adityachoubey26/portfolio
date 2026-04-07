import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import character from '../assets/3D_character.png';
import StatCounter from '../components/StatCounter';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="light-orb w-[500px] h-[500px] top-1/2 -left-1/4 opacity-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Floating Character/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:order-1"
          >
            <div className="relative w-full max-w-[400px] aspect-square rounded-[3rem] overflow-hidden glass-premium border border-white/10 group">
              <img 
                src={character} 
                alt="3D Developer" 
                className="w-full h-full object-contain img-premium drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
            {/* Absolute Badges */}
            <div className="absolute -top-6 -right-6 glass-premium p-4 rounded-2xl border border-white/10 shadow-2xl animate-float">
               <span className="text-3xl">🚀</span>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Professional Story</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-16">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
              </h2>
              
              <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                <p>
                  I'm <span className="text-white font-bold">Aditya Choubey</span>, a Frontend Developer and Community Builder passionate about creating impactful digital experiences.
                </p>
                <p>
                  Currently pursuing <span className="text-white/80">B.Tech in Information Technology</span>, I specialize in building high-performance web applications with React and modern CSS. My goal is to bridge the gap between design and technology.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-8">
                   <div className="glass-card !p-6 border-white/5 hover:border-primary/20 transition-all">
                      <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                      <p className="text-xs uppercase tracking-widest font-bold text-white/30">Events Led</p>
                   </div>
                   <div className="glass-card !p-6 border-white/5 hover:border-accent/20 transition-all">
                      <h4 className="text-3xl font-bold text-accent mb-1">02</h4>
                      <p className="text-xs uppercase tracking-widest font-bold text-white/30">Foundations</p>
                   </div>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                   <a href="#contact" className="btn-primary !px-6 !py-3">Download CV</a>
                   <a href="#experience" className="btn-secondary !px-6 !py-3">My Journey</a>
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
