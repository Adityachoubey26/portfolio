import React from 'react';
import { motion } from 'framer-motion';
import TechEraLogo from "../assets/TechEra_logo.png";
import GraphEraLogo from "../assets/graphera_logo.png";

import { useNavigate } from 'react-router-dom';

const communities = [
  {
    name: "TechEra",
    role: "FOUNDER & ARCHITECT",
    stats: "500+ Innovators",
    description: "Building a high-impact engineering ecosystem for the next generation of tech leaders.",
    logo: TechEraLogo,
    color: "blue",
    path: "/techera",
    cta: "Explore Community"
  },
  {
    name: "GraphEra",
    role: "FOUNDING DIRECTOR",
    stats: "Elite Agency",
    description: "Driving commercial success through high-end design, development, and strategic academic solutions.",
    logo: GraphEraLogo,
    color: "purple",
    path: "/graphera",
    cta: "Explore Services"
  }
];

const CommunityCard = ({ community, index }) => {
  const isBlue = community.color === "blue";
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div 
        onClick={() => navigate(community.path)}
        className="glass-card !p-8 group hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden relative"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* Circular Glowing Logo */}
          <div className="relative shrink-0">
             <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${isBlue ? 'bg-primary' : 'bg-secondary'}`} />
             <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 glass-premium p-4 group-hover:scale-110 transition-transform duration-500 shadow-xl flex items-center justify-center">
                <img 
                  src={community.logo} 
                  alt={community.name} 
                  className="w-full h-full object-contain img-premium !grayscale-0" 
                />
             </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
               <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${isBlue ? 'text-primary border-primary/20 bg-primary/5' : 'text-secondary border-secondary/20 bg-secondary/5'}`}>
                 {community.stats}
               </span>
               <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{community.role}</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
              {community.name}
            </h3>
            
            <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-xl">
               {community.description}
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4 group-hover:gap-6 transition-all duration-500">
               <div className="btn-primary !py-2 !px-6 !text-xs">
                  {community.cta}
               </div>
            </div>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20 ${isBlue ? 'bg-primary' : 'bg-secondary'}`} />
      </div>
    </motion.div>
  );
};

const Community = () => {
  return (
    <section id="ecosystems" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Building Global Networks</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Ecosystems</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 relative z-10 max-w-5xl mx-auto">
          {communities.map((community, index) => (
            <CommunityCard key={index} community={community} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="light-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
    </section>
  );
};

export default Community;
