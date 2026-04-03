import React from 'react';
import { motion } from 'framer-motion';
import techeraLogo from '../assets/TechEra_logo.png';
import grapheraLogo from '../assets/graphera_logo.png';

const communities = [
  {
    name: "TechEra",
    role: "Founder & Architect",
    logo: techeraLogo,
    description: "A prominent student tech community focused on collaborative engineering. We organize hackathons, expert-led workshops, and foster a spirit of modern innovation.",
    color: "from-blue-600 to-cyan-400",
    impact: "500+ INNOVATORS",
    shadow: "shadow-primary/20"
  },
  {
    name: "GraphEra",
    role: "Founding Director",
    logo: grapheraLogo,
    description: "A hybrid design studio and creative agency where engineering meets aesthetics. We provide high-end digital services while nurturing upcoming creative talent.",
    color: "from-orange-600 to-red-500",
    impact: "ELITE AGENCY",
    shadow: "shadow-accent/20"
  }
];

const Community = () => {
  return (
    <section className="section-padding bg-surface/20 rounded-[4rem] my-24 border border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-black tracking-[0.5em] text-[10px] uppercase block mb-6"
        >
          Leadership & Impact
        </motion.span>
        <h2 className="text-6xl font-black mb-8">Building <span className="text-primary italic">Ecosystems</span></h2>
        <p className="text-white/40 max-w-xl mx-auto font-light text-lg">
           Driving technological growth through community-centric initiatives and creative professional excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {communities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`group glass-card p-12 border-white/5 hover:border-white/10 relative overflow-hidden flex flex-col transition-all duration-500 hover:${item.shadow}`}
          >
            {/* Logo and Impact Header */}
            <div className="flex justify-between items-start mb-12">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass p-3 border-white/10 group-hover:scale-110 transition-transform duration-500 bg-surface/50 overflow-hidden shadow-2xl">
                     <img src={item.logo} alt={item.name} className="w-full h-full object-contain filter drop-shadow-xl" />
                  </div>
                  <div>
                     <h3 className="text-4xl font-black text-white italic tracking-tighter group-hover:text-primary transition-colors">{item.name}</h3>
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">{item.role}</span>
                  </div>
               </div>
               <div className="glass px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-white/30 border-white/5">
                  {item.impact}
               </div>
            </div>

            <p className="text-white/50 leading-relaxed mb-12 text-lg font-light italic">
              "{item.description}"
            </p>

            <div className="mt-auto pt-8 border-t border-white/5">
               <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-primary transition-all duration-300">
                  ENTER {item.name}
                  <div className="h-px w-10 bg-white/10 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
               </button>
            </div>
            
            {/* Top-right glow */}
            <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Community;
