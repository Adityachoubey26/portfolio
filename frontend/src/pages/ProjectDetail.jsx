import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import character from '../assets/3D_character.png';

const defaultImages = {
  "student-portal": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "krishi-app": "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  "portfolio": "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
};

const SafeImage = ({ src, alt, projectType, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <img
        src={imgSrc || defaultImages[projectType]}
        alt={alt || "Project preview"}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={() => {
          if (imgSrc !== defaultImages[projectType]) {
            setImgSrc(defaultImages[projectType]);
          }
        }}
      />
      {/* 3D Glass Style Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-6">Oops! Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline italic font-bold">Back to Reality →</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-background min-h-screen text-white font-sans selection:bg-primary/30 relative"
    >
      {/* Global Noise Overlay */}
      <div className="noise" />

      {/* Decorative Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[150px] rounded-full" />
      </div>

      {/* 1. Back to Home Button */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8 relative z-50">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-white/10 transition duration-400 text-sm font-semibold text-white/70 hover:text-white"
        >
          <span className="group-hover:-translate-x-1.5 transition-transform text-lg">←</span>
          Back to Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10 space-y-32">
        
        {/* 2. Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-primary/50" />
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">{project.category}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1]">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg mt-4 font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-gradient-to-br from-primary to-accent rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-primary/20 active:scale-95"
                >
                  GitHub Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl font-black uppercase tracking-widest text-[10px] backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                >
                  Live Website
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
             {/* Dynamic Ambient Glow */}
             <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-[2.5rem] -z-10 group-hover:bg-blue-500/30 transition-colors duration-700" />
             
             <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm overflow-hidden [transform-style:preserve-3d] transition-all hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)]">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                   <SafeImage
                    src={project.images[0]}
                    alt={project.title}
                    projectType={projectId}
                    className="w-full h-full"
                   />
                </div>
             </div>
          </motion.div>
        </section>

        {/* 3. Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="space-y-6">
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg italic font-medium">
                 {project.detailedDescription}
              </p>
           </div>
           {/* Ambient Glow + Image Container */}
           <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full -z-10 group-hover:bg-blue-500/20 transition-colors duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                 <SafeImage 
                    src={project.images[1]} 
                    alt="Overview Visual" 
                    projectType={projectId}
                    className="w-full h-full" 
                 />
              </div>
           </div>
        </section>

        {/* 4. Problem & Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-red-400/20 transition-all hover:-translate-y-1.5 hover:scale-[1.02] duration-300 group">
              <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-full bg-red-400/10 border border-red-400/20 flex items-center justify-center text-red-400 text-sm">×</span>
                 The Problem
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium group-hover:text-white transition-colors">
                 {project.problemText}
              </p>
           </div>
           <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-green-400/30 transition-all hover:-translate-y-1.5 hover:scale-[1.02] duration-300 group">
              <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-sm">✓</span>
                 The Solution
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium group-hover:text-white transition-colors">
                 {project.solutionText}
              </p>
           </div>
        </section>

        {/* 5. Key Features Grid */}
        <section className="space-y-12">
           <h2 className="text-4xl font-black text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Key Features</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.detailedFeatures.map((f, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] group-hover:scale-110 transition-all duration-500 overflow-hidden p-3.5">
                       <img 
                         src={f.icon} 
                         alt={f.title} 
                         className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-500" 
                         onError={(e) => {
                           e.target.src = "https://cdn-icons-png.flaticon.com/512/3242/3242257.png";
                         }}
                       />
                    </div>
                    <h4 className="text-xl font-black mb-4">{f.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-white/80">
                       {f.description}
                    </p>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. Visual Showcase Gallery */}
        <section className="space-y-12">
           <div className="flex items-center gap-4">
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Visual Showcase</h2>
              <div className="h-px flex-1 bg-white/5" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Gallery Image 1 */}
              <div className="relative group">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full -z-10 group-hover:bg-blue-500/20 transition-colors duration-700" />
                 <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
                    <SafeImage 
                       src={project.images[2]} 
                       alt="Showcase 1" 
                       projectType={projectId}
                       className="w-full h-full" 
                    />
                 </div>
              </div>
              {/* Gallery Image 2 */}
              <div className="relative group">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full -z-10 group-hover:bg-blue-500/20 transition-colors duration-700" />
                 <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
                    <SafeImage 
                       src={project.images[3]} 
                       alt="Showcase 2" 
                       projectType={projectId}
                       className="w-full h-full" 
                    />
                 </div>
              </div>
           </div>
        </section>


        {/* 7. Tech Stack & Impact */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           <div className="space-y-10">
              <div className="space-y-6">
                 <h2 className="text-3xl font-black uppercase tracking-widest text-xs text-gray-500">Core Technologies</h2>
                 <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech, i) => (
                       <span key={i} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-black text-white/70 hover:border-primary/40 hover:text-white transition-all cursor-default">
                          {tech}
                       </span>
                    ))}
                 </div>
              </div>
              
              <div className="space-y-6">
                 <h2 className="text-3xl font-black uppercase tracking-widest text-xs text-gray-500">The Impact</h2>
                 <ul className="space-y-4">
                    {project.impactItems.map((item, i) => (
                       <li key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent/20 transition-all">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{item}</span>
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Creator's Note integration */}
           <div className="relative">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="flex flex-col items-center"
              >
                 <div className="relative w-full max-w-[350px]">
                    <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
                    <img
                       src={character}
                       alt="3D Character"
                       className="w-full object-contain animate-float-slow drop-shadow-3xl"
                    />
                 </div>
                 
                 <div className="mt-12 text-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] w-full">
                    <h4 className="text-xl font-black mb-2 italic">Reflections</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                       Successfully delivering {project.title} taught me the importance of scalable architecture and user-centric problem solving.
                    </p>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* 8. Final CTA */}
        <section className="pb-20">
           <div className="text-center py-24 rounded-[4rem] border border-white/5 bg-surface/5 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10" />
              
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">Ready to <span className="text-primary italic">Collaborate?</span></h2>
              <Link 
                to="/#contact" 
                className="inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                 Let's Talk Business
              </Link>
           </div>
        </section>

      </div>
    </motion.div>


  );
};

export default ProjectDetail;

