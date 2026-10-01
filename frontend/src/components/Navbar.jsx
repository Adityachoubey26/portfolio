import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import adityaPic from '../assets/aditya_pic.jpeg';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll detection for background blur & border (throttled with RAF)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((l) => l.id)];
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container-custom">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-soft'
                : 'bg-white/50 backdrop-blur-sm border border-slate-200/50'
            }`}
          >
            {/* Logo / Brand */}
            <a
              href="#hero"
              onClick={(e) => handleNavLinkClick(e, '#hero')}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
            >
              <div className="flex items-center">
                <span className="w-2.5 h-[2px] bg-teal-500 rounded-full mr-2 hidden sm:inline-block" />
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-teal-600/30 group-hover:border-teal-600 transition-colors shadow-sm">
                  <img
                    src={adityaPic}
                    alt="Aditya Choubey"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors font-display">
                  Aditya Choubey
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  Frontend & Community
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 px-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`relative py-1 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                      isActive
                        ? 'text-teal-900 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-[-4px] left-0 right-0 h-[2.5px] bg-teal-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: CTA and Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919310526618"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all duration-200 shadow-[0_2px_10px_-2px_rgba(13,148,136,0.4)] hover:shadow-[0_4px_14px_-2px_rgba(13,148,136,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight size={15} />
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-xl border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 transition-colors shadow-soft-xs"
              >
                <span
                  className={`w-4 h-0.5 bg-slate-800 rounded-full transition-all duration-200 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-slate-800 rounded-full transition-all duration-200 my-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-slate-800 rounded-full transition-all duration-200 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm md:hidden flex justify-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="w-full max-w-xs h-full bg-white shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={adityaPic}
                      alt="Aditya"
                      className="w-8 h-8 rounded-full object-cover border border-teal-600/30"
                    />
                    <span className="font-bold text-sm text-slate-900 font-display">Navigation</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs text-slate-500 font-semibold px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavLinkClick(e, link.href)}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-teal-50 text-teal-800 border border-teal-200/60 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="https://wa.me/919310526618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Let's Talk on WhatsApp
                </a>
                <p className="text-center text-[11px] text-slate-400">
                  New Delhi, India • Available for Work
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
