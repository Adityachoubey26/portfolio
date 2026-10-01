import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Briefcase, 
  Users, 
  Rocket, 
  ChevronRight,
  Megaphone,
  Calendar,
  Share2,
  Zap
} from 'lucide-react';

// Brand & Tool SVG Icons - Accurate, Colorful, Crisp
const TechLogo = ({ name }) => {
  switch (name) {
    case 'React':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 8.1 10.65 8.7C11.33 9.04 11.82 9.54 12.36 10.09C13.24 10.98 14.28 12.03 16.5 12.03C18.9 12.03 20.4 10.83 21 8.43C20.1 9.63 19.05 9.93 17.85 9.33C17.17 8.99 16.68 8.49 16.14 7.94C15.26 7.05 14.22 6 12 6ZM7.5 12C5.1 12 3.6 13.2 3 15.6C3.9 14.4 4.95 14.1 6.15 14.7C6.83 15.04 7.32 15.54 7.86 16.09C8.74 16.98 9.78 18.03 12 18.03C14.4 18.03 15.9 16.83 16.5 14.43C15.6 15.63 14.55 15.93 13.35 15.33C12.67 14.99 12.18 14.49 11.64 13.94C10.76 13.05 9.72 12 7.5 12Z" fill="#38BDF8" />
        </svg>
      );
    case 'Figma':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );
    case 'JavaScript':
      return (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#F7DF1E] text-black font-extrabold flex items-center justify-end pr-0.5 pb-0.5 text-[9px] sm:text-[10px] leading-none shrink-0 shadow-soft-xs">
          JS
        </div>
      );
    case 'TypeScript':
      return (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#3178C6] text-white font-extrabold flex items-center justify-end pr-0.5 pb-0.5 text-[9px] sm:text-[10px] leading-none shrink-0 shadow-soft-xs">
          TS
        </div>
      );
    case 'Vite':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none">
          <path d="M29.5 5.5L16.8 28.6C16.5 29.1 15.5 29.1 15.2 28.6L2.5 5.5C2.1 4.8 2.7 4 3.5 4.1L16 6.3L28.5 4.1C29.3 4 29.9 4.8 29.5 5.5Z" fill="url(#vite-gradient)" />
          <path d="M21.5 3L11.5 15H17.5L12 25L23 11H17L21.5 3Z" fill="#FFD62E" />
          <defs>
            <linearGradient id="vite-gradient" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5L21.5 7V17L12 22.5L2.5 17V7L12 1.5Z" fill="#539E43" />
          <path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" fill="#333333" />
          <path d="M12 7.5L15 9.2V14.8L12 16.5L9 14.8V9.2L12 7.5Z" fill="#539E43" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5C12 1.5 5.5 7 5.5 13.5C5.5 17.5 8.5 21 12 22.5C15.5 21 18.5 17.5 18.5 13.5C18.5 7 12 1.5 12 1.5Z" fill="#47A248" />
          <path d="M12 2.5V21.5C11.6 21.3 6.5 18 6.5 13.5C6.5 8 12 2.5 12 2.5Z" fill="#499D4A" />
        </svg>
      );
    case 'Express':
      return (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[9px] sm:text-[10px] tracking-tight shrink-0 shadow-soft-xs">
          ex
        </div>
      );
    case 'CSS3':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z" fill="#264DE4" />
          <path d="M12 3.6V19.8L17.7 18.2L19.2 3.6H12Z" fill="#2965F1" />
          <path d="M12 7.7H7.7L8 10.9H12V14.1L9.6 13.5L9.4 11.8H7.2L7.6 15.6L12 16.8V14.1H12Z" fill="#EBEBEB" />
          <path d="M12 7.7V10.9H15.9L15.6 14.1L12 15.1V16.8L16.4 15.6L16.8 10.9H12V7.7Z" fill="white" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path
            d="M149.508 157.438L69.141 54H54V125.975H66.685V69.897L139.73 164.241C143.155 162.203 146.425 159.923 149.508 157.438Z"
            fill="url(#next_paint0_exp)"
          />
          <rect x="115.195" y="54" width="12.695" height="71.975" fill="url(#next_paint1_exp)" />
          <defs>
            <linearGradient id="next_paint0_exp" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next_paint1_exp" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Firebase':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M4.5 18.5L7.2 2.8C7.3 2.3 7.9 2.1 8.2 2.5L12 9.5L4.5 18.5Z" fill="#FFA000" />
          <path d="M12.5 10L14.2 6.5C14.4 6 15.1 6 15.3 6.5L19.5 18.5L12.5 10Z" fill="#F57C00" />
          <path d="M12 22.5L19.5 18.5L15.3 6.5C15.1 6 14.4 6 14.2 6.5L12.5 10L4.5 18.5L12 22.5Z" fill="#FFCA28" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#336791" />
          <path d="M12 5C9 5 7 7 7 10C7 13 8 14 9 16C9.5 17 10 18 11 18.5C11.5 18.8 12.5 18.8 13 18.5C14 18 14.5 17 15 16C16 14 17 13 17 10C17 7 15 5 12 5Z" fill="white" />
        </svg>
      );
    case 'Git':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L9.1 4.2L11.5 6.6C12.1 6.4 12.8 6.5 13.3 7C13.8 7.5 14 8.2 13.8 8.8L16.1 11.1C16.7 10.9 17.4 11.1 17.9 11.6C18.6 12.3 18.6 13.4 17.9 14.1C17.2 14.8 16.1 14.8 15.4 14.1C14.9 13.6 14.8 12.9 15 12.3L12.8 10.1V15.4C13 15.6 13.1 15.9 13.1 16.2C13.1 17.2 12.3 18 11.3 18C10.3 18 9.5 17.2 9.5 16.2C9.5 15.4 10 14.7 10.7 14.5V9.4C10 9.2 9.5 8.5 9.5 7.7C9.5 7.2 9.7 6.8 10 6.4L7.6 4L2.4 9.2C1.8 9.8 1.8 10.8 2.4 11.4L10.9 19.9C11.5 20.5 12.5 20.5 13.1 19.9L21.6 11.4C22.2 10.8 22.2 9.8 21.6 10.9Z" fill="#F05032" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#181717">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.86 21.528C9.36 21.618 9.54 21.311 9.54 21.045C9.54 20.806 9.53 20.016 9.53 19.176C7 19.646 6.33 18.496 6.13 17.936C6.02 17.656 5.53 16.766 5.1 16.526C4.74 16.336 4.23 15.856 5.09 15.846C5.89 15.836 6.46 16.586 6.65 16.896C7.56 18.436 9.02 17.996 9.6 17.736C9.69 17.076 9.95 16.636 10.24 16.386C7.97 16.126 5.6 15.246 5.6 11.336C5.6 10.226 5.99 9.306 6.65 8.586C6.55 8.326 6.2 7.286 6.75 5.886C6.75 5.886 7.6 5.616 9.54 6.926C10.35 6.706 11.21 6.596 12.07 6.596C12.93 6.596 13.79 6.706 14.6 6.926C16.54 5.606 17.39 5.886 17.39 5.886C17.94 7.286 17.59 8.326 17.49 8.586C18.15 9.306 18.54 10.216 18.54 11.336C18.54 15.266 16.16 16.126 13.88 16.386C14.25 16.706 14.57 17.326 14.57 18.296C14.57 19.686 14.56 20.806 14.56 21.045C14.56 21.311 14.74 21.628 15.24 21.528C19.23 20.188 22.1 16.446 22.1 12.017C22.1 6.484 17.623 2 12 2Z" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M13.9 10.3H11.8V8.3H13.9V10.3ZM11.1 10.3H9V8.3H11.1V10.3ZM8.3 10.3H6.2V8.3H8.3V10.3ZM13.9 7.6H11.8V5.6H13.9V7.6ZM11.1 7.6H9V5.6H11.1V7.6ZM8.3 7.6H6.2V5.6H8.3V7.6ZM16.7 10.3H14.6V8.3H16.7V10.3ZM23.4 11.2C22.9 10.5 21.8 10.3 21.2 10.4C21 9.9 20.6 9.4 20 9.1L19.4 8.8L19 9.3C18.6 9.8 18.3 10.4 18.3 11H17.4V11.2C17.4 12.3 16.5 13.2 15.4 13.2H4.1C3.8 13.2 3.6 13.4 3.4 13.6C2.2 15.2 2.6 17.5 4.3 18.7C6.4 20.2 11.8 20.2 15.6 18.3C19.7 16.2 22.4 12.7 23.4 11.2Z" fill="#2496ED" />
        </svg>
      );
    case 'Discord':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#5865F2">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case 'Notion':
      return (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-black text-white font-extrabold flex items-center justify-center text-[10px] sm:text-xs shrink-0 shadow-soft-xs font-serif">
          N
        </div>
      );
    case 'Megaphone':
      return <Megaphone size={16} className="text-sky-500" />;
    case 'Team':
      return <Users size={16} className="text-rose-500" />;
    case 'Calendar':
      return <Calendar size={16} className="text-blue-500" />;
    case 'Network':
      return <Share2 size={16} className="text-emerald-500" />;
    case 'Zap':
      return <Zap size={16} className="text-amber-500 fill-amber-400" />;
    default:
      return <Code2 size={16} className="text-teal-600" />;
  }
};

const experiences = [
  {
    number: "01",
    badge: "2023 – Present",
    role: "Frontend Developer",
    company: "Freelance / Projects",
    description: "Building responsive and modern web interfaces using React and Tailwind, focusing on performance, accessibility, and fluid user experience.",
    icon: Code2,
    logos: ['React', 'Tailwind CSS', 'Figma', 'JavaScript', 'TypeScript', 'Vite']
  },
  {
    number: "02",
    badge: "Internship",
    role: "MERN Stack Intern",
    company: "Edubuk",
    description: "Worked on full-stack features using MERN stack, optimizing performance and building scalable frontend components.",
    icon: Briefcase,
    logos: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS3']
  },
  {
    number: "03",
    badge: "2023 – Present",
    role: "Campus Ambassador",
    company: "eDC IIT Delhi",
    description: "Represented eDC IIT Delhi, organized events, and built a stronger developer community on campus.",
    icon: Users,
    logos: ['Megaphone', 'Team', 'Calendar', 'Network', 'Notion']
  },
  {
    number: "04",
    badge: "Current",
    role: "Founder & Community Lead",
    company: "TechEra",
    description: "Building a high-impact community of tech enthusiasts, organizing hackathons, workshops and mentorship initiatives.",
    icon: Rocket,
    logos: ['Team', 'GitHub', 'Discord', 'Zap', 'Notion']
  }
];

const marqueeLogos = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'PostgreSQL',
  'Git',
  'GitHub',
  'Docker',
  'Figma'
];

// Reusable Dot Grid decorative SVG matching reference design
const DotGrid = ({ className = "" }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    width="128"
    height="72"
    viewBox="0 0 128 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <pattern id="exp-dot-grid-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.5" className="fill-teal-500/25" />
    </pattern>
    <rect width="128" height="72" fill="url(#exp-dot-grid-pattern)" />
  </svg>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-24 relative overflow-hidden bg-transparent">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none -z-10" />

      {/* Decorative Dot Matrix on right */}
      <div className="absolute top-24 right-4 sm:right-8 lg:right-16 hidden sm:block opacity-60">
        <DotGrid />
      </div>
      <div className="absolute bottom-16 left-4 sm:left-8 hidden sm:block opacity-40">
        <DotGrid />
      </div>

      {/* Global content container matching Projects, Skills, and Education */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Small uppercase label with teal horizontal rule */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-teal-500/80 rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
                CAREER JOURNEY
              </span>
            </div>

            {/* Main Heading: "Experience" */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-2">
              Experience
            </h2>

            {/* Short teal underline */}
            <div className="w-14 sm:w-16 h-1 bg-teal-600 rounded-full mt-2 mb-3.5" />

            {/* Subtitle Description */}
            <p className="text-slate-500 text-sm sm:text-[15px] max-w-xl leading-relaxed">
              A journey of learning, building and creating impact through real-world projects, internships and community initiatives.
            </p>
          </motion.div>

          {/* Top-Right Callout & Handwritten Annotation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex items-center gap-3 sm:gap-6 lg:self-start pt-2"
          >
            {/* Handwritten note with curved arrow */}
            <div className="relative hidden md:block text-right pr-6">
              <p className="font-handwriting text-lg sm:text-[20px] text-sky-600 font-bold leading-tight -rotate-3 select-none">
                Turning ideas<br />
                into real-world<br />
                impact
              </p>
              {/* Hand-drawn curved arrow pointing toward the callout */}
              <svg
                className="absolute -bottom-5 right-2 w-11 h-9 text-sky-500 pointer-events-none"
                viewBox="0 0 45 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 6 4 C 13 15, 23 24, 38 18" />
                <polyline points="30 14 38 18 34 25" />
              </svg>
            </div>

            {/* "Real Experience / Real Growth" floating card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-soft px-4 py-3.5 flex items-center gap-3.5 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shadow-soft-xs">
                <Briefcase size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Real Experience</p>
                <p className="text-xs font-bold text-teal-600 leading-tight mt-0.5">Real Growth</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Four Experience Cards - Strict 2-Column x 2-Row Equal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;

            return (
              <motion.div
                key={exp.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_2px_14px_rgba(15,23,42,0.04)] hover:shadow-card hover:border-teal-500/30 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between"
              >
                {/* Large Faint Sequence Number in Top-Right */}
                <div className="font-display font-black text-4xl sm:text-5xl text-slate-200/70 select-none absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none group-hover:text-teal-100/80 transition-colors">
                  {exp.number}
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Left Experience Icon */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-teal-50/90 border border-teal-100/90 flex items-center justify-center text-teal-600 shrink-0 shadow-soft-xs group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={24} className="transition-transform group-hover:scale-110 duration-300" />
                  </div>

                  {/* Center Main Content */}
                  <div className="flex-1 min-w-0 pr-8 sm:pr-12">
                    {/* Badge */}
                    <div className="mb-2">
                      <span className="inline-block text-xs font-semibold px-3 py-0.5 rounded-full bg-teal-50/90 text-teal-700 border border-teal-200/80 shadow-soft-xs">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors mb-0.5">
                      {exp.role}
                    </h3>

                    {/* Organization */}
                    <p className="text-slate-500 font-semibold text-xs sm:text-sm mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technology Logos Row */}
                    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                      {exp.logos.map((logoName, lIdx) => (
                        <div
                          key={lIdx}
                          title={logoName}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center p-1.5 shadow-soft-xs hover:scale-110 hover:border-teal-300 transition-all duration-200 shrink-0 cursor-default"
                        >
                          <TechLogo name={logoName} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Animated Technology Logo Marquee - Fixed Height, Aligned with Grid */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_14px_rgba(15,23,42,0.04)] px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 mt-8 sm:mt-10 marquee-container overflow-hidden">
          
          {/* Stationary Left Label */}
          <div className="flex items-center gap-2.5 shrink-0 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 whitespace-nowrap">
              TECHNOLOGIES I WORK WITH
            </span>
          </div>

          {/* Subtle Vertical Divider */}
          <div className="w-[1px] h-6 bg-slate-200/90 mx-1 sm:mx-2 shrink-0 hidden sm:block" />

          {/* Continuous Infinite Moving Logo Track */}
          <div className="flex-1 overflow-hidden fade-mask-x relative py-1">
            <div className="animate-marquee-left flex items-center gap-6 sm:gap-8">
              {/* First Sequence */}
              {marqueeLogos.map((tech, idx) => (
                <div
                  key={`first-${idx}`}
                  title={tech}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-center p-1.5 shadow-soft-xs hover:scale-110 transition-transform duration-200 shrink-0 cursor-pointer"
                >
                  <TechLogo name={tech} />
                </div>
              ))}
              {/* Duplicated Sequence for seamless loop */}
              {marqueeLogos.map((tech, idx) => (
                <div
                  key={`second-${idx}`}
                  title={tech}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-center p-1.5 shadow-soft-xs hover:scale-110 transition-transform duration-200 shrink-0 cursor-pointer"
                >
                  <TechLogo name={tech} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Direction Indicator */}
          <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400 shrink-0 ml-1 sm:ml-2">
            <ChevronRight size={14} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
