import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import adityaPic from '../assets/aditya_pic.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container-custom">
          <div className={`glass-premium rounded-2xl px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl transition-all duration-500 ${
            scrolled ? 'bg-surface/90 backdrop-blur-2xl' : 'bg-surface/40 backdrop-blur-xl'
          }`}>
            {/* Logo */}
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="w-10 h-10 rounded-full border border-primary/30 group-hover:border-primary p-[2px] transition-all relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                 <img src={adityaPic} alt="Aditya" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-lg font-bold tracking-tight hidden sm:block">
                 <span className="text-white group-hover:text-primary transition-colors">ADITYA</span>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-all duration-300"
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
                className="hidden sm:flex btn-primary !py-2 !px-6 !text-[10px] uppercase tracking-widest"
              >
                Let's Talk
              </a>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={toggleMenu}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass-premium rounded-xl border border-white/10 z-[110]"
              >
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-white block rounded-full origin-center"
                />
                <motion.span 
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-white block rounded-full"
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-white block rounded-full origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center p-12"
      >
        <div className="flex flex-col items-center gap-6 w-full">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold tracking-tight text-white/40 hover:text-primary transition-all duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.a
            href="https://wa.me/919310526618"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="mt-8 btn-primary w-full text-center"
          >
            Connect Now
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
