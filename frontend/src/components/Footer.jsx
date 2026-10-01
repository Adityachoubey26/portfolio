import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Github, 
  Twitter, 
  Phone, 
  Mail, 
  ChevronUp, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import adityaPic from '../assets/aditya_pic.jpeg';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setSubmitting(true);
    try {
      await fetch('https://formspree.io/f/mqkrvvpo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          message: 'Newsletter & Collaboration Subscription via Footer'
        })
      });
      setSubscribed(true);
      setEmail('');
    } catch {
      // Fallback: direct contact
      window.location.href = `mailto:aditya.choubey.soe@gmail.com?subject=Stay Connected / Collaboration&body=Hi Aditya,%0D%0A%0D%0AI would like to connect and receive updates at: ${email}`;
      setSubscribed(true);
    } finally {
      setSubmitting(false);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' }
  ];

  const initiativeLinks = [
    { name: 'TechEra', href: '/techera', isInternal: true },
    { name: 'GraphEra', href: '/graphera', isInternal: true },
    { name: 'Community', href: '/#ecosystems', isInternal: true },
    { name: 'Hackathons', href: '/techera', isInternal: true },
    { name: 'Events', href: '/techera', isInternal: true },
    { name: 'Open Source', href: 'https://github.com/Adityachoubey26', isExternal: true },
    { name: 'Blog', href: '/#projects', isInternal: true }
  ];

  const socialLinks = [
    { icon: <Linkedin size={15} />, url: "https://www.linkedin.com/in/aditya-c-366b90305/", label: "LinkedIn" },
    { icon: <Instagram size={15} />, url: "https://www.instagram.com/aditya_choubey26", label: "Instagram" },
    { icon: <Github size={15} />, url: "https://github.com/Adityachoubey26", label: "GitHub" },
    { icon: <Twitter size={15} />, url: "https://x.com/ChoubeyIx", label: "Twitter" },
    { icon: <Phone size={15} />, url: "https://wa.me/919310526618", label: "Contact Phone" }
  ];

  const legalContent = {
    privacy: {
      title: 'Privacy Policy',
      content: 'This portfolio website is operated by Aditya Choubey. We respect your privacy and do not collect, store, or sell personal information beyond details voluntarily provided via the contact form or email inquiries for professional collaboration.'
    },
    terms: {
      title: 'Terms of Service',
      content: 'All projects, branding, and written materials showcased on this portfolio are the intellectual property of Aditya Choubey and respective project initiatives (TechEra, GraphEra) unless otherwise credited. Commercial reuse requires explicit permission.'
    },
    sitemap: {
      title: 'Portfolio Sitemap',
      content: 'Pages and Navigation Hierarchy:\n• Home (#hero)\n• About Me (#about)\n• Experience (#experience)\n• Education (#education)\n• Projects Showcase (#projects)\n• Skills & Work With (#skills)\n• Ecosystems & Initiatives (#ecosystems)\n• TechEra Community (/techera)\n• GraphEra Digital Agency (/graphera)\n• Contact & Inquiries (#contact)'
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-slate-300 pt-16 sm:pt-20 pb-8 z-20 border-t border-slate-800/80">
      {/* Decorative Wave & Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Ambient subtle glow at bottom left & right */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
        
        {/* Subtle decorative curved flowing lines near corners */}
        <svg
          className="absolute -bottom-10 -left-10 w-[480px] h-[260px] text-teal-500/10"
          viewBox="0 0 480 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -20 240 C 140 220, 220 120, 380 60 C 440 38, 480 80, 520 120"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M -40 200 C 120 180, 180 80, 320 30"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        <svg
          className="absolute -bottom-10 -right-10 w-[420px] h-[240px] text-cyan-500/10"
          viewBox="0 0 420 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 440 220 C 300 200, 220 110, 80 50"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        {/* Subtle dot matrix patterns matching screenshot (left mid & right bottom) */}
        <div className="absolute top-28 left-4 sm:left-8 opacity-25 hidden md:block">
          <svg width="80" height="96" fill="none" viewBox="0 0 80 96">
            <pattern id="footer-dots-left" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#00C7BE" />
            </pattern>
            <rect width="80" height="96" fill="url(#footer-dots-left)" />
          </svg>
        </div>

        <div className="absolute bottom-28 right-4 sm:right-10 opacity-25 hidden md:block">
          <svg width="112" height="64" fill="none" viewBox="0 0 112 64">
            <pattern id="footer-dots-right" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#00C7BE" />
            </pattern>
            <rect width="112" height="64" fill="url(#footer-dots-right)" />
          </svg>
        </div>
      </div>

      {/* Main Container - Synchronized with portfolio's global max-width container */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Profile and Social Links (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            {/* Avatar & Name */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700/80 shadow-md shrink-0">
                <img
                  src={adityaPic}
                  alt="Aditya Choubey"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight leading-tight">
                  Aditya <span className="text-[#00C7BE]">Choubey</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium leading-tight mt-0.5">
                  Frontend Developer & Community Architect
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#A7B4C8] leading-relaxed max-w-sm mb-6">
              Building impactful web experiences, open communities and innovative solutions for a better tomorrow.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-[#101B2D] border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-[#00C7BE] hover:border-[#00C7BE]/60 hover:bg-[#16253D] transition-all duration-200 shadow-soft-xs hover:-translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 sm:pl-2">
            <h4 className="font-display font-bold text-base text-white tracking-tight">
              Quick Links
            </h4>
            <div className="w-8 h-[2.5px] bg-[#00C7BE] rounded-full mt-2 mb-4" />

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between text-sm text-[#A7B4C8] hover:text-[#00C7BE] transition-colors py-0.5 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight
                      size={13}
                      className="text-slate-500 group-hover:text-[#00C7BE] group-hover:translate-x-1 transition-all duration-200"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: My Initiatives (lg:col-span-3) */}
          <div className="lg:col-span-3 sm:pl-2">
            <h4 className="font-display font-bold text-base text-white tracking-tight">
              My Initiatives
            </h4>
            <div className="w-8 h-[2.5px] bg-[#00C7BE] rounded-full mt-2 mb-4" />

            <ul className="space-y-2">
              {initiativeLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between text-sm text-[#A7B4C8] hover:text-[#00C7BE] transition-colors py-0.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowRight
                      size={13}
                      className="text-slate-500 group-hover:text-[#00C7BE] group-hover:translate-x-1 transition-all duration-200"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-base text-white tracking-tight">
              Stay Connected
            </h4>
            <div className="w-8 h-[2.5px] bg-[#00C7BE] rounded-full mt-2 mb-4" />

            <p className="text-sm text-[#A7B4C8] leading-relaxed mb-4">
              Get updates about my projects, community events and new content.
            </p>

            {/* Input & Subscribe CTA Box */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center bg-[#131F33] border border-slate-700/80 rounded-xl p-1.5 focus-within:border-[#00C7BE] focus-within:ring-1 focus-within:ring-[#00C7BE]/30 transition-all">
                <Mail size={16} className="text-slate-400 ml-2.5 mr-2 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none py-1.5"
                  required
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#00C7BE] hover:bg-[#00B3AB] active:scale-95 text-slate-950 font-bold text-xs px-3.5 sm:px-4 py-2 rounded-lg transition-all shadow-sm shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? '...' : subscribed ? 'Done' : 'Subscribe'}
                </button>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-teal-400 font-medium pt-1">
                  <CheckCircle2 size={13} />
                  <span>Thanks for connecting! I'll be in touch.</span>
                </div>
              ) : (
                <p className="text-[11px] sm:text-xs text-slate-500">
                  No spam. Only important updates.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar with Top Border */}
        <div className="border-t border-slate-800/80 mt-14 sm:mt-16 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright & Built With */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-[#A7B4C8] text-center md:text-left">
            <span>© {new Date().getFullYear()} Aditya Choubey. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Built with <span className="text-red-500">❤️</span>, React and lots of ☕</span>
          </div>

          {/* Legal Links & Circular Back to Top Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-[#A7B4C8]">
              <button
                onClick={() => setModalContent(legalContent.privacy)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">|</span>
              <button
                onClick={() => setModalContent(legalContent.terms)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-slate-700">|</span>
              <button
                onClick={() => setModalContent(legalContent.sitemap)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Sitemap
              </button>
            </div>

            {/* Circular Outlined Back-to-Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full border border-[#00C7BE]/50 bg-[#0D1728] flex items-center justify-center text-[#00C7BE] hover:bg-[#00C7BE]/10 hover:border-[#00C7BE] hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer shrink-0 ml-1 sm:ml-2"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* Lightweight Accessible Info Modal for Privacy / Terms / Sitemap */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-[#0D1728] border border-slate-700/80 rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <h3 className="font-display font-bold text-lg text-white">
                {modalContent.title}
              </h3>
              <button 
                onClick={() => setModalContent(null)}
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {modalContent.content}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
