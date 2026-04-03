import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import adityaPic from '../assets/aditya_pic.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Socials', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-8 py-2 flex items-center justify-between border border-white/5 shadow-2xl ${
          scrolled ? 'bg-surface/80 backdrop-blur-xl' : 'bg-surface/40 backdrop-blur-md'
        }`}>
          {/* Circular Avatar Logo */}
          <motion.a 
            href="#"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary/50 group-hover:border-accent p-[2px] transition-colors relative shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
               <img src={adityaPic} alt="Aditya" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="text-lg font-black tracking-tighter hidden sm:block">
               <span className="text-white group-hover:text-primary transition-colors">ADITYA</span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919310526618"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/40 active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
