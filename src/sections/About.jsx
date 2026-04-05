import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import character from '../assets/3D_character.png';
import StatCounter from '../components/StatCounter';

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative min-h-[100vh] lg:min-h-screen flex flex-col items-stretch overflow-visible bg-background px-[5%] py-[60px] lg:py-0"
    >
      {/* Visual Balance & Depth Support (Orbs) */}
      <div className="light-orb w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2 opacity-10" />
      <div className="light-orb w-[300px] h-[300px] bottom-0 right-[10%] opacity-5" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-stretch relative z-20 gap-12 lg:gap-0 h-full">
        
        {/* Left Side: Image Container - Floating Character */}
        <div className="flex items-end justify-center h-full relative order-2 lg:order-1 lg:-ml-[15%]">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative flex items-end justify-center h-full w-full animate-float glow-element"
          >
            <img 
              src={character} 
              alt="3D Developer" 
              className="h-[50vh] lg:h-full w-auto object-contain z-10 block"
            />
          </motion.div>
        </div>

        {/* Right Side: Content Block */}
        <div className="flex flex-col justify-center h-full order-1 lg:order-2 lg:pl-16 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8 h-fit"
          >
            <div>
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block opacity-60">Professional Profile</span>
              <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold mb-6 tracking-tight leading-tight">
                 About <span className="text-primary italic">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full ml-auto lg:ml-0 shadow-lg shadow-primary/20" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <p className="text-[16px] lg:text-[18px] text-white/90 leading-[1.6] font-medium max-w-2xl mx-auto lg:mx-0">
                  I'm <span className="text-primary font-bold">Aditya Choubey</span>, a Frontend Developer and Community Builder passionate about creating impactful digital experiences and building tech communities.
                </p>

                <p className="text-[15px] lg:text-[17px] text-white/60 leading-[1.6] font-normal max-w-2xl mx-auto lg:mx-0">
                  Currently pursuing <span className="text-white/80 font-semibold">B.Tech in Information Technology (GGSIPU)</span>, I have extensive experience working with <span className="text-primary/80 font-medium">HTML, CSS, JavaScript, and React</span>. I am driven by the interest of building real-world projects and actively participating in hackathons and tech events.
                </p>

                <div className="border-l-2 border-primary/30 pl-6 lg:pl-8 py-2 max-w-2xl mx-auto lg:mx-0 space-y-4">
                  <p className="text-[14px] lg:text-[16px] text-white/50 leading-[1.6] italic">
                    "Founder of <span className="text-primary/70 font-semibold not-italic">TechEra</span>, a student-driven tech community connecting students with professionals through events, hackathons, and networking."
                  </p>
                  <p className="text-[14px] lg:text-[16px] text-white/50 leading-[1.6] italic">
                    "Leading <span className="text-accent/70 font-semibold not-italic">GraphEra</span>, a creative initiative providing design, development, and academic solutions for students."
                  </p>
                </div>

                <p className="text-[15px] lg:text-[17px] text-white/70 leading-[1.6] font-medium max-w-2xl mx-auto lg:mx-0 border-t border-white/5 pt-6">
                  My focus lies in modern web technologies, user-focused design, and scalable frontend development.
                </p>
              </div>

              {/* Stats Layout - Refined & Subtle */}
              <div className="grid grid-cols-2 gap-6 lg:gap-8 pt-6 max-w-xl mx-auto lg:mx-0 w-full mb-12 lg:mb-0">
                 <div className="glass p-8 lg:p-10 rounded-[2rem] border-white/5 bg-surface/20 flex flex-col gap-3 relative transition-all duration-500 hover:bg-surface/30 group hover:translate-y-[-5px] hover:shadow-primary/5 card-3d">
                   <span className="text-primary text-4xl lg:text-5xl font-bold tracking-tighter leading-none"><StatCounter end={10} suffix="+" /></span>
                   <h4 className="text-white/20 font-bold text-[9px] tracking-[0.4em] uppercase group-hover:text-primary transition-colors">Events Led</h4>
                 </div>

                 <div className="glass p-8 lg:p-10 rounded-[2rem] border-white/5 bg-surface/20 flex flex-col gap-3 relative transition-all duration-500 hover:bg-surface/30 group hover:translate-y-[-5px] hover:shadow-accent/5 card-3d">
                   <span className="text-accent text-4xl lg:text-5xl font-bold tracking-tighter leading-none"><StatCounter end={2} /></span>
                   <h4 className="text-white/20 font-bold text-[9px] tracking-[0.4em] uppercase group-hover:text-accent transition-colors">Foundations</h4>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
