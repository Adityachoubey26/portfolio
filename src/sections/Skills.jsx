import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Architectural Frontend",
    skills: ["React", "HTML5/CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Responsive Design"]
  },
  {
    name: "Scalable Backend",
    skills: ["Java Core", "RESTful APIs", "Spring Boot (Basics)", "Node.js Ecosystem"]
  },
  {
    name: "Professional Stack",
    skills: ["Git & GitHub", "Vercel / Netlify", "VS Code Mastery", "Postman"]
  },
  {
    name: "Strategic Creative",
    skills: ["Graphic Design", "Brand Identity", "Marketing Strategy", "Community Architecture"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="mb-20">
        <h2 className="text-5xl font-black mb-6">Technological <span className="text-primary italic">Arsenal</span></h2>
        <div className="h-1 w-24 bg-primary rounded-full mb-6" />
        <p className="text-white/30 max-w-md font-light">
           A diverse technical and creative stack engineered for high-performance digital environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
               <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
               {category.name}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                  }}
                  className="glass px-5 py-3 rounded-2xl text-[11px] font-black text-white/50 hover:text-white border-white/5 hover:border-primary/40 transition-all cursor-default uppercase tracking-widest"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
