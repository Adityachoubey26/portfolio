import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="light-orb w-[600px] h-[600px] top-[10%] -right-[10%] opacity-10 animate-float" />
      <div className="light-orb w-[300px] h-[300px] bottom-[10%] -left-[5%] opacity-5 animate-float-slow" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Talk</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">
              Ready to architect high-end digital solutions? Reach out for collaborations or project inquiries.
            </p>

            <div className="space-y-6">
              <a href="mailto:adityachoubey26@gmail.com" className="glass-card group flex items-center gap-6 !p-6 hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</p>
                  <p className="text-lg font-bold text-white">adityachoubey26@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/919310526618" target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center gap-6 !p-6 hover:border-accent/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">WhatsApp</p>
                  <p className="text-lg font-bold text-white">+91 93105 26618</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card !p-8 md:!p-12 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            
            <form action="https://formspree.io/f/mqkrvvpo" method="POST" className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Name</label>
                  <input type="text" name="name" placeholder="Aditya" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 text-white transition-all" required />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Email</label>
                  <input type="email" name="email" placeholder="example@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 text-white transition-all" required />
                </div>
              </div>
              
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-6 focus:outline-none focus:border-primary/50 text-white transition-all resize-none" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full !py-5 group">
                Send Message
                <span className="group-hover:translate-x-2 transition-transform">🚀</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
