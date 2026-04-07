import React from 'react';
import { motion } from 'framer-motion';
import ADGIPSLogo from "../assets/adgips_logo.jpeg";
import SOEKPLogo from "../assets/soe kp.png";

const education = [
  {
    title: "Dr Akhilesh Das Gupta Institute of Professional Studies",
    subtitle: "B.Tech in Information Technology",
    duration: "2024 – 2028",
    description: "Architecting a future in Information Technology with a focus on scalable systems and modern software engineering principles.",
    logo: ADGIPSLogo
  },
  {
    title: "School of Excellence, Khichripur",
    subtitle: "Senior Secondary Education",
    duration: "2020 – 2024",
    description: "Completed higher secondary education with a rigorous focus on Science and Mathematics, laying the groundwork for engineering excellence.",
    logo: SOEKPLogo
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-16 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Academic Foundation</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Education</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:ml-0" />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 relative z-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 border-white/5 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Premium Branded Badge */}
                <div className="relative shrink-0">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-full blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge Container */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-tr from-primary to-accent transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-3 overflow-hidden shadow-2xl">
                      <img 
                        src={edu.logo} 
                        alt={edu.title} 
                        className="w-full h-full object-contain !grayscale-0" 
                      />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col md:flex-row justify-between gap-6 w-full text-center md:text-left pt-2">
                  <div className="flex-1">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{edu.duration}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{edu.title}</h3>
                    <p className="text-white/60 font-medium text-lg leading-tight mb-4 md:mb-0">{edu.subtitle}</p>
                  </div>
                  
                  {/* Right side description */}
                  <div className="md:max-w-xs lg:max-w-sm flex items-center justify-center md:justify-end">
                    <p className="text-white/40 text-sm leading-relaxed italic md:text-right border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-4 md:pl-0 md:pr-4">
                      "{edu.description}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Decor */}
      <div className="light-orb w-[600px] h-[600px] -bottom-1/4 -right-1/4 opacity-5 pointer-events-none" />
    </section>
  );
};

export default Education;
