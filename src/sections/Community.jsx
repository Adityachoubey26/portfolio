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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div 
        onClick={() => navigate(community.path)}
        className={`group glass-card p-0 overflow-hidden border-white/5 transition-all duration-300 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-4deg)_scale(1.01)] cursor-pointer ${isBlue ? 'hover:border-blue-400/40' : 'hover:border-purple-400/40'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
           {/* Logo Container Section */}
           <div className="h-48 md:h-64 relative flex items-center justify-center bg-white/5 border-r border-white/5 overflow-hidden">
              {/* Branding Glow */}
              <div 
                className={`absolute w-[200px] h-[200px] blur-2xl rounded-full opacity-20 z-[0] pointer-events-none ${isBlue ? 'bg-blue-500/20' : 'bg-purple-500/20'}`} 
              />
              
              <img 
                src={community.logo} 
                alt={community.name} 
                className="relative z-10 max-h-[120px] max-w-[80%] object-contain hover:scale-110 transition duration-500" 
              />
           </div>
           
           <div className="p-10 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-2 mb-4">
                 <span className={`font-black tracking-[0.3em] uppercase text-[9px] px-3 py-1 border rounded-full ${isBlue ? 'text-blue-400 bg-blue-400/10 border-blue-400/20' : 'text-purple-400 bg-purple-400/10 border-purple-400/20'}`}>
                   {community.stats}
                 </span>
              </div>
              
              <h3 className={`text-4xl font-black mb-1 transition-colors italic leading-none ${isBlue ? 'group-hover:text-blue-400' : 'group-hover:text-purple-400'}`}>
                {community.name}
              </h3>
              <p className="text-white/40 font-bold text-xs tracking-widest uppercase mb-6">{community.role}</p>
              
              <p className="text-white/30 text-sm font-light leading-relaxed max-w-sm mb-8">
                 {community.description}
              </p>
              
              <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                 <div className={`h-0.5 w-10 rounded-full group-hover:w-16 transition-all duration-500 ${isBlue ? 'bg-blue-400' : 'bg-purple-400'}`} />
                 <span className="text-white/20 group-hover:text-white font-black uppercase tracking-widest text-[9px]">
                    {community.cta} →
                 </span>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};


const Community = () => {
  return (
    <section id="ecosystems" className="section-padding relative overflow-hidden">
      {/* Background Orbs */}
      <div className="light-orb w-[500px] h-[500px] -bottom-[10%] -left-[10%] opacity-5" />
      
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <h2 className="text-6xl font-black mb-4 tracking-tighter">Building <span className="text-accent italic">Ecosystems</span></h2>
        <p className="text-white/30 max-w-xl font-light text-lg">
           Driving technological growth through community-centric initiatives and creative professional excellence.
        </p>
      </div>

      <div className="flex flex-col gap-12 relative z-10 max-w-5xl mx-auto">
        {communities.map((community, index) => (
          <CommunityCard key={index} community={community} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Community;
