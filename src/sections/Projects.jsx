import React from 'react';
import { motion } from 'framer-motion';
import { useMouseTilt } from '../hooks/useMouseTilt';

const projects = [
  {
    title: "Student Portal WEB APP",
    category: "MANAGEMENT SYSTEM",
    description: "A high-performance management dashboard for students to track academics, attendance, and resources seamlessly.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Krishi App",
    category: "AGRITECH SOLUTION",
    description: "Empowering farmers with real-time analytics and market insights to revolutionize modern agricultural practices.",
    image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Portfolio Website",
    category: "CREATIVE FRONTEND",
    description: "A premium, slightly 3D portfolio featuring advanced glassmorphism and smooth mouse-reactive animations.",
    image: "https://images.unsplash.com/photo-1517433447752-ce361bd4040e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const ProjectCard = ({ project, index }) => {
  const { ref, tiltStyle, handleMouseMove, handleMouseLeave } = useMouseTilt({ max: 8 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group glass-card overflow-hidden p-0 border-white/5 hover:border-primary/20 transition-all duration-300 transform-gpu cursor-pointer shadow-2xl hover:shadow-primary/10"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tiltStyle.rotateX}) rotateY(${tiltStyle.rotateY})`,
        }}
      >
        <div className="aspect-video relative overflow-hidden overflow-hidden">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
           
           <div className="absolute top-6 right-6 translate-z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
              <div className="glass p-4 rounded-full text-white bg-primary shadow-3xl">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
           </div>
        </div>

        <div className="p-8 flex flex-col translate-z-10 group-hover:translate-z-20 transition-all duration-500">
           <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{project.category}</span>
           </div>
           
           <h3 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors italic">{project.title}</h3>
           <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3">
             {project.description}
           </p>
           
           <div className="mt-auto pt-6 border-t border-white/5">
              <a href={project.link} className="text-xs font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors flex items-center gap-3">
                 Case Study
                 <div className="h-px w-0 group-hover:w-10 bg-primary transition-all duration-500" />
              </a>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
           <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-accent rounded-full" />
              <span className="text-accent font-black tracking-widest text-xs uppercase">Portfolio 2024</span>
           </div>
           <h2 className="text-6xl font-black">Featured <span className="text-primary italic">Inventions</span></h2>
        </div>
        <p className="text-white/30 max-w-sm text-right font-light leading-relaxed">
           Blending technical precision with creative vision to build scalable digital ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
