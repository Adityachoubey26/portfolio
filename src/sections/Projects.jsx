import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: "student-portal",
    title: "Student Portal WEB APP",
    category: "MANAGEMENT SYSTEM",
    description: "A high-performance management dashboard for students to track academics, attendance, and resources seamlessly.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "krishi-app",
    title: "Krishi App",
    category: "AGRITECH SOLUTION",
    description: "Empowering farmers with real-time analytics and market insights to revolutionize modern agricultural practices.",
    image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "CREATIVE FRONTEND",
    description: "A premium, slightly 3D portfolio featuring advanced glassmorphism and smooth mouse-reactive animations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
  }
];

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <div
        onClick={() => navigate(`/projects/${project.id}`)}
        className="group h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 transform-gpu hover:scale-[1.02] hover:-translate-y-2 hover:[transform:rotateX(3deg)_rotateY(-3deg)] hover:border-blue-400/30 cursor-pointer shadow-xl hover:shadow-primary/10"
      >
        <div className="h-[220px] w-full relative overflow-hidden">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-100" />
           
           <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 z-10">
              <div className="bg-primary/20 backdrop-blur-md border border-white/10 p-3 rounded-full text-primary shadow-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
           </div>
        </div>

        <div className="p-6 flex flex-col flex-1 space-y-4">
           <div className="flex items-center gap-3">
              <div className="h-[1px] w-5 bg-primary/60" />
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">{project.category}</span>
           </div>
           
           <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors italic leading-tight">{project.title}</h3>
           
           <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
             {project.description}
           </p>
           
           <div className="mt-auto pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400/40 text-blue-300 text-sm font-medium hover:bg-blue-500/10 hover:border-blue-400 hover:text-white transition duration-300">
                 Explore Project
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Orbs */}
      <div className="light-orb w-[400px] h-[400px] top-0 -right-[10%] opacity-5" />
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative z-10">
        <div>
           <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-accent rounded-full opacity-50" />
              <span className="text-accent font-black tracking-widest text-xs uppercase">Portfolio 2024</span>
           </div>
           <h2 className="text-6xl font-black tracking-tighter">Featured <span className="text-primary italic">Inventions</span></h2>
        </div>
        <p className="text-white/30 max-w-sm text-right font-light leading-relaxed">
           Blending technical precision with creative vision to build scalable digital ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
