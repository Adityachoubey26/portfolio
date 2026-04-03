import React from 'react';
import { motion } from 'framer-motion';
import { useMouseTilt } from '../hooks/useMouseTilt';

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "Edubuk",
    period: "Internship",
    description: "Architected and optimized full-stack features using the MERN ecosystem for advanced ed-tech solutions.",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Campus Ambassador",
    company: "eDC IIT Delhi",
    period: "2023 - Present",
    description: "Driving entrepreneurship culture and representing the elite e-cell of IIT Delhi on campus.",
    tags: ["Leadership", "Networking", "Events"]
  },
  {
    title: "Founder",
    company: "GraphEra",
    period: "2024 - Present",
    description: "Directing a premium design & development agency focused on high-end digital branding.",
    tags: ["Strategy", "Creative", "Agency"]
  },
  {
    title: "Founder",
    company: "TechEra",
    period: "Current",
    description: "Spearheading a major student tech community to bridge the gap between learning and industry.",
    tags: ["Community", "Innovation", "Web3"]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const { ref, tiltStyle, handleMouseMove, handleMouseLeave } = useMouseTilt({ max: 5 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card group hover:border-primary/30 relative flex flex-col h-full cursor-default transition-all duration-300"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tiltStyle.rotateX}) rotateY(${tiltStyle.rotateY})`,
        }}
      >
        <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity translate-z-10">
          <span className="text-6xl font-black italic">{index + 1}</span>
        </div>
        
        <div className="mb-6 translate-z-20">
           <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">{exp.period}</span>
           <h3 className="text-2xl font-black mt-2 text-white group-hover:text-primary transition-colors tracking-tighter">{exp.title}</h3>
           <p className="text-sm font-bold text-white/40 tracking-widest">{exp.company}</p>
        </div>

        <p className="text-white/50 mb-8 flex-grow leading-relaxed font-light italic">
          "{exp.description}"
        </p>

        <div className="flex flex-wrap gap-2 mt-auto translate-z-10">
          {exp.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black bg-white/5 px-3 py-1 rounded-full text-white/30 border border-white/5 group-hover:border-primary/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding overflow-hidden">
      <div className="mb-20">
        <h2 className="text-5xl font-black mb-6">The <span className="text-primary italic font-serif">Trajectory</span></h2>
        <p className="text-white/30 max-w-lg font-light leading-relaxed">
           A strategic timeline of professional growth, leadership roles, and architectural contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
