import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/aditya-c-366b90305/", color: "hover:text-blue-500" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/aditya_choubey26", color: "hover:text-pink-500" },
    { icon: <Github size={20} />, url: "https://github.com/Adityachoubey26", color: "hover:text-white" },
    { icon: <Twitter size={20} />, url: "https://x.com/ChoubeyIx", color: "hover:text-blue-400" },
    { icon: <Phone size={20} />, url: "https://wa.me/919310526618", color: "hover:text-green-500" }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      <div className="light-orb w-[600px] h-[600px] top-[10%] -right-[10%] opacity-10 animate-float" />
      <div className="light-orb w-[300px] h-[300px] bottom-[10%] -left-[5%] opacity-5 animate-float-slow" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white mb-12">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Talk</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">
              Ready to architect high-end digital solutions? Reach out for collaborations or project inquiries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
              <a href="mailto:aditya.choubey.soe@gmail.com" className="glass-card group flex items-center gap-6 !p-6 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</p>
                  <p className="text-base sm:text-lg font-bold text-white truncate">aditya.choubey.soe@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/919310526618" target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center gap-6 !p-6 hover:border-accent/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">WhatsApp</p>
                  <p className="text-base sm:text-lg font-bold text-white">+91 93105 26618</p>
                </div>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-110 shadow-lg ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card !p-8 md:!p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            
            <form action="https://formspree.io/f/mqkrvvpo" method="POST" className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-2">Name</label>
                  <input type="text" name="name" placeholder="Aditya" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all" required />
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-2">Email</label>
                  <input type="email" name="email" placeholder="example@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all" required />
                </div>
              </div>
              
              <div className="space-y-3 text-left">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-2">Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all resize-none" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full !py-5 group relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>🚀</motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
