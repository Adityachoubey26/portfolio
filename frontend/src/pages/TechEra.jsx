import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TechEraLogo from "../assets/TechEra_logo.png";

const TechEra = () => {
  const navigate = useNavigate();

  const punchlines = [
    { title: "500+", subtitle: "Elite Members", icon: "👥" },
    { title: "10+", subtitle: "Live Events", icon: "🚀" },
    { title: "∞", subtitle: "Growth Spirit", icon: "📈" }
  ];

  const offers = [
    { title: "Hackathons", description: "Intense coding marathons building real-world solutions in record time.", icon: "💻" },
    { title: "Tech Events", description: "Industry-aligned workshops and seminars led by experts.", icon: "🎤" },
    { title: "Workshops", description: "Hands-on technical sessions across emerging technologies.", icon: "🛠️" },
    { title: "Networking", description: "Bridging the gap between students and elite tech professionals.", icon: "🤝" }
  ];

  const socials = [
    { 
      name: "WhatsApp", 
      url: "https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO?mode=wwc", 
      color: "hover:bg-green-500/10 hover:border-green-400/40", 
      iconColor: "bg-green-500/20 text-green-400",
      svg: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/tech__eraa", 
      color: "hover:bg-pink-500/10 hover:border-pink-400/40", 
      iconColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white",
      svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/techeraa/", 
      color: "hover:bg-blue-500/10 hover:border-blue-400/40", 
      iconColor: "bg-blue-600 text-white",
      svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    },
    { 
      name: "Website", 
      url: "#", 
      color: "hover:bg-blue-400/10 hover:border-blue-400/40", 
      iconColor: "bg-blue-500/20 text-blue-400",
      svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30 font-sans relative overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Back Button */}
        <div className="flex items-start mt-6 mb-10">
          <button 
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-blue-400/40 hover:text-white hover:scale-105 transition duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
          >
            ← Back to Home
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Building Student Ecosystems</span>
            <h1 className="text-8xl font-black mb-8 tracking-tighter italic leading-none">
              Tech<span className="text-blue-400 not-italic">Era</span>
            </h1>
            <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed max-w-lg">
               Empowering students through high-impact tech events, hackathons, and real-world opportunities. We bridge the gap between learning and industry.
            </p>
            
            {/* Social Icon Buttons */}
            <div className="flex flex-wrap gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 ${social.color} hover:scale-105 transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${social.iconColor} transition-transform group-hover:rotate-12 p-2.5`}>
                     <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        {social.svg}
                     </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center group"
          >
            {/* Soft Glow */}
            <div className="absolute w-[320px] h-[320px] bg-blue-500/15 blur-3xl rounded-full z-[-1]" />
            
            <img 
              src={TechEraLogo} 
              alt="TechEra" 
              className="w-[280px] h-[280px] object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </motion.div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {punchlines.map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-card p-10 border-white/5 bg-white/[0.02] text-center hover:bg-white/[0.05] transition-all"
             >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-black text-blue-400 mb-2 italic">{stat.title}</h3>
                <p className="text-white/20 font-black uppercase tracking-[0.3em] text-[9px]">{stat.subtitle}</p>
             </motion.div>
           ))}
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-[2rem] overflow-hidden group shadow-2xl"
           >
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 opacity-60" />
              <img src="https://images.unsplash.com/photo-1540575861501-7c03e177a2ad?q=80&w=1470&auto=format&fit=crop" alt="Tech Event" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-8 left-8 z-20">
                 <h4 className="text-2xl font-black italic tracking-tight">Tech Summits</h4>
                 <p className="text-white/60 text-sm font-medium">Industry workshops and seminars</p>
              </div>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-[2rem] overflow-hidden group shadow-2xl"
           >
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 opacity-60" />
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop" alt="Hackathon" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-8 left-8 z-20">
                 <h4 className="text-2xl font-black italic tracking-tight">Hackathons</h4>
                 <p className="text-white/60 text-sm font-medium">24h of pure innovation</p>
              </div>
           </motion.div>
        </div>

        {/* Missing Hackathon Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-32"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl z-[-1]" />
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop" 
            alt="Students coding together" 
            className="w-full h-[300px] object-cover rounded-2xl shadow-2xl hover:scale-[1.03] transition duration-300"
          />
        </motion.div>

        {/* Vision & What We Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
           <div className="lg:col-span-1">
              <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.5em] mb-10 block">Community Vision</h2>
              <p className="text-white/40 leading-relaxed font-medium text-lg mb-8 italic">
                 "Our mission is to build the world's most accessible and high-impact student tech community, where geography doesn't limit opportunity."
              </p>
              <div className="p-8 border-l-2 border-blue-400/30 bg-blue-400/5 rounded-r-2xl">
                 <p className="text-white/60 font-light leading-relaxed">
                    We're expanding our presence to multiple campuses, launching global virtual hackathons, and building a mentorship network that connects students with the world's top tech firms.
                 </p>
              </div>
           </div>

           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
              {offers.map((offer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="glass-card p-10 border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all"
                >
                   <div className="text-3xl mb-6">{offer.icon}</div>
                   <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">{offer.title}</h3>
                   <p className="text-white/30 text-base leading-relaxed font-medium">{offer.description}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};


export default TechEra;
