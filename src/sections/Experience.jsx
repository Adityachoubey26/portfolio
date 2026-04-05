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
      className="h-full"
    >
      <div className="group h-full flex flex-col justify-between glass-card p-10 border-white/5 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1.5 card-3d">
        <div>
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                 <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">{exp.duration}</span>
                 <h3 className="text-3xl font-black italic tracking-tight group-hover:text-primary transition-colors">{exp.role}</h3>
                 <p className="text-white/60 font-medium text-lg">{exp.company}</p>
              </div>
              <div className="text-5xl font-black text-white/5 italic opacity-20 group-hover:opacity-100 group-hover:text-primary/20 transition-all duration-700">
                 {index + 1}
              </div>
           </div>
           
           <p className="text-white/40 leading-relaxed mb-8 font-light italic">
              "{exp.description}"
           </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-all">
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
    <section id="experience" className="py-24 relative overflow-visible bg-surface/5">
      <div className="max-w-6xl mx-auto px-6">
      {/* Light Orbs */}
      <div className="light-orb w-[600px] h-[600px] -top-[20%] -left-[10%] opacity-5" />
      
      <div className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-6">
           <div className="h-1 w-12 bg-accent rounded-full opacity-50" />
           <span className="text-accent font-black tracking-widest text-xs uppercase">
              {experiences.length}+ Experiences
           </span>
        </div>
        <h2 className="text-6xl font-black mb-4 tracking-tighter">Experience</h2>
        <p className="text-white/30 max-w-2xl font-light text-lg">
           A timeline of my work, leadership, and real-world contributions.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-stretch">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
