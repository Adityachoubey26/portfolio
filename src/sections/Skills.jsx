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
    <section id="skills" className="py-32 max-w-6xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-5xl font-black mb-6 italic tracking-tighter">Skills & <span className="text-primary not-italic">Technologies</span></h2>
        <div className="h-1 w-24 bg-primary rounded-full mb-8" />
        <p className="text-gray-400 max-w-[500px] font-medium leading-relaxed">
           A curated set of tools and technologies I use to build modern, high-performance digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
               <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
               {category.name}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] group-hover:bg-white/10 group-hover:border-blue-400/30 transition-all duration-500 p-2.5">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain group-hover:rotate-12 group-hover:brightness-125 transition-all duration-500 drop-shadow-sm" 
                    />
                  </div>
                  <span className="text-[13px] font-black text-white/50 group-hover:text-white transition-colors duration-300 tracking-wider">
                    {skill.name}
                  </span>
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

