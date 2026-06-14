import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  const cardRef = useRef(null);

  // 3D Tilt variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 120 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 120 });

  // Sheen light coordinates
  const reflectX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { damping: 20, stiffness: 120 });
  const reflectY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { damping: 20, stiffness: 120 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="animated-gradient-border h-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate(`/projects/${project.id}`)}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="glass-card card-3d-interactive !p-0 overflow-hidden border-0 h-full flex flex-col cursor-pointer transition-shadow shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] duration-500"
        >
          {/* Moving sheen reflection */}
          <motion.div 
            style={{
              background: useTransform(
                [reflectX, reflectY],
                ([rx, ry]) => `radial-gradient(circle 180px at ${rx}% ${ry}%, rgba(255, 255, 255, 0.12) 0%, transparent 80%)`
              ),
              zIndex: 10
            }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden" style={{ transform: "translateZ(15px)" }}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover img-premium opacity-50 group-hover:opacity-100 group-hover:scale-105 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-8 flex-1 flex flex-col" style={{ transform: "translateZ(25px)" }}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center gap-4">
              <div className="btn-primary !py-2 !px-4 !text-xs !rounded-lg hover:translate-y-0">
                Details
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-16 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Projects</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:ml-0" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="light-orb w-[500px] h-[500px] top-1/2 -left-1/4 opacity-5" />
    </section>
  );
};

export default Projects;
