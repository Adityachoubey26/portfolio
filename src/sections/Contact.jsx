import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="light-orb w-[600px] h-[600px] top-[10%] -right-[10%] opacity-10 animate-float" />
      <div className="light-orb w-[300px] h-[300px] bottom-[10%] -left-[5%] opacity-5 animate-float-slow" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10 relative">
        {/* Left Side: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex flex-col gap-10"
        >
           <div>
              <h2 className="text-7xl font-black mb-6 tracking-tighter leading-tight">Let's <span className="text-primary italic underline-offset-8 decoration-primary/20">Talk</span></h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                 Ready to architect high-end digital solutions? Reach out for collaborations or project inquiries.
              </p>
           </div>
           
           <div className="flex flex-col gap-8">
              <a href="mailto:adityachoubey26@gmail.com" className="group flex items-center gap-6 p-4 rounded-3xl glass transition-all duration-500 hover:bg-surface/20 active:scale-95 card-3d">
                 <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 glow-element">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                 </div>
                 <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/30">Email Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">adityachoubey26@gmail.com</p>
                 </div>
              </a>
              
              <a href="https://wa.me/919310526618" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-4 rounded-3xl glass transition-all duration-500 hover:bg-surface/20 active:scale-95 card-3d">
                 <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 glow-element">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 </div>
                 <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/30">WhatsApp</p>
                    <p className="text-xl font-bold text-white group-hover:text-accent transition-colors">+91 93105 26618</p>
                 </div>
              </a>
           </div>

           <div className="flex gap-6 mt-4">
              {['Github', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:animate-float glow-element">
                   <div className="sr-only">{social}</div>
                   <div className="w-5 h-5 bg-current" />
                </a>
              ))}
           </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass-card p-12 rounded-[3rem] border-white/5 relative bg-surface/10 hover:bg-surface/20 transition-all duration-500 card-3d"
        >
           <form action="https://formspree.io/f/mqkrvvpo" method="POST" className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Full Name</label>
                    <input type="text" name="name" placeholder="John Wick" className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-all" required />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Email</label>
                    <input type="email" name="email" placeholder="john@killer.com" className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-all" required />
                 </div>
              </div>
              
              <div className="flex flex-col gap-3">
                 <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Message</label>
                 <textarea name="message" placeholder="Let's build something epic..." rows="5" className="bg-white/5 border border-white/5 rounded-3xl px-6 py-6 focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-all resize-none" required></textarea>
              </div>
              
              <button type="submit" className="bg-primary hover:bg-primary/80 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-2 group flex items-center justify-center gap-4 active:scale-95">
                 Ignite Discussion
                 <span className="group-hover:translate-x-2 transition-transform">🚀</span>
              </button>
           </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
