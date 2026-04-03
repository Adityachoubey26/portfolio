import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const socials = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/adityachoubey' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/adityachoubey' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com/adityachoubey' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/adityachoubey' },
  ];

  return (
    <section id="contact" className="section-padding mb-32 relative">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="glass-card p-12 md:p-24 relative overflow-hidden border-white/10 bg-surface/30 flex flex-col items-center text-center shadow-2xl backdrop-blur-3xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="z-10 w-full max-w-3xl flex flex-col items-center"
        >
          <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block opacity-80">Get In Touch</span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            Let’s Build Something <span className="text-primary italic">Meaningful</span>
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-12 font-medium leading-relaxed">
            I’m always open to collaborating on impactful projects, innovative ideas, and meaningful tech experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 w-full px-4">
             <motion.a
               href="mailto:aditya.choubey.soe@gmail.com"
               whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
               whileTap={{ scale: 0.98 }}
               className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg transition-all w-full sm:w-auto shadow-xl"
             >
               <Mail size={20} className="group-hover:rotate-12 transition-transform" />
               <span className="uppercase tracking-wider">Send Email</span>
             </motion.a>
             
             <motion.a
               href="https://wa.me/919310526618"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.2)" }}
               whileTap={{ scale: 0.98 }}
               className="group flex items-center justify-center gap-3 px-8 py-4 glass border-white/10 rounded-2xl font-bold text-lg transition-all w-full sm:w-auto"
             >
               <MessageCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
               <span className="uppercase tracking-wider">Chat on WhatsApp</span>
             </motion.a>
          </div>

          <div className="flex flex-col items-center gap-8">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Connect with me</span>
             
             <div className="flex flex-wrap justify-center gap-6">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full glass border-white/10 text-white/70 hover:text-primary transition-colors cursor-pointer"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 px-4"
      >
         <p className="text-[10px] font-black uppercase tracking-[0.4em]">Designed & Engineered by Aditya Choubey</p>
         <div className="flex gap-4 text-[9px] font-black uppercase tracking-[0.3em]">
            <span>PV. 2.0</span>
            <div className="w-[1px] h-3 bg-white/20" />
            <span>2024 EDITION</span>
         </div>
      </motion.div>
    </section>
  );
};

export default Contact;

