import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Architectural Frontend",
    skills: [
      { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
      { name: "HTML5/CSS3", icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" },
      { name: "JavaScript SE", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
      { name: "Responsive UI", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" }
    ]
  },
  {
    name: "Scalable Backend",
    skills: [
       { name: "Java Core", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
       { name: "Spring Boot", icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
       { name: "RESTful APIs", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165036.png" },
       { name: "NodeJS", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" }
    ]
  },
  {
    name: "Professional Stack",
    skills: [
       { name: "Git & GitHub", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
       { name: "Vercel / Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
       { name: "VS Code", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
       { name: "Postman", icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png" }
    ]
  },
  {
    name: "Strategic Creative",
    skills: [
       { name: "Figma Design", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
       { name: "Brand Identity", icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png" },
       { name: "Strategy", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png" },
       { name: "Architecture", icon: "https://cdn-icons-png.flaticon.com/512/10433/10433049.png" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Abilities & Stack</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Skills</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:ml-0" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                 <span className="w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                 {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 p-2.5 shadow-xl">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                      />
                    </div>
                    <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="light-orb w-[600px] h-[600px] -bottom-1/4 -left-1/4 opacity-5" />
    </section>
  );
};


export default Skills;

