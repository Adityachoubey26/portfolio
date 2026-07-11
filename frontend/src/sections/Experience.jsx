import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance / Projects",
    duration: "2023 - Present",
    description: "Building responsive and modern web interfaces using React and Tailwind, focusing on performance and user experience.",
    tags: ["React", "Tailwind", "UI/UX", "Frontend"]
  },
  {
    role: "MERN Stack Intern",
    company: "Edubuk",
    duration: "Internship",
    description: "Worked on full-stack features using MERN stack, optimizing performance and building scalable components.",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    role: "Campus Ambassador",
    company: "eDC IIT Delhi",
    duration: "2023 - Present",
    description: "Promoting entrepreneurship culture, organizing events, and connecting students with opportunities.",
    tags: ["Leadership", "Networking", "Events"]
  },
  {
    role: "Founder & Community Lead",
    company: "TechEra",
    duration: "Current",
    description: "Built and scaled a student tech community organizing hackathons, events, and networking initiatives.",
    tags: ["Community", "Leadership", "Tech Events"]
  },
  {
    role: "Founder & Designer/Developer",
    company: "GraphEra",
    duration: "2024 - Present",
    description: "Running a digital design and development agency delivering websites, graphics, and project solutions.",
    tags: ["Design", "Development", "Agency"]
  },
  {
    role: "Hackathon Participant",
    company: "Various Events",
    duration: "Ongoing",
    description: "Actively participating in hackathons, building real-world solutions under time constraints.",
    tags: ["Problem Solving", "Teamwork", "Rapid Development"]
  }
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Dot for Mobile */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary md:hidden shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      
      <div className="glass-card group hover:border-primary/30 transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{exp.duration}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
            <p className="text-white/40 font-medium">{exp.company}</p>
          </div>
          <div className="text-5xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">
            0{index + 1}
          </div>
        </div>
        
        <p className="text-white/50 leading-relaxed mb-8 italic">
          "{exp.description}"
        </p>
        
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 text-primary/60 border border-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
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
    <section id="experience" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-16 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Carrier Journey</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Experience</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:ml-0" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="light-orb w-[600px] h-[600px] -top-1/4 -right-1/4 opacity-5" />
    </section>
  );
};
export default Experience;
