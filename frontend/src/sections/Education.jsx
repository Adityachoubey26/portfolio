import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import ADGIPSLogo from "../assets/adgips_logo.jpeg";
import SOEKPLogo from "../assets/soe kp.png";

const educationData = [
  {
    institution: "Dr Akhilesh Das Gupta Institute of Professional Studies",
    degree: "B.Tech in Information Technology",
    period: "2024 – 2028",
    status: "Currently pursuing",
    description: "Building a strong foundation in software engineering, scalable systems, and problem solving with a focus on web development, algorithms and modern technologies.",
    logo: ADGIPSLogo,
    level: "Undergraduate",
    icon: GraduationCap,
  },
  {
    institution: "School of Excellence, Khichripur",
    degree: "Senior Secondary Education (PCM)",
    period: "2020 – 2024",
    status: null,
    description: "Completed higher secondary education with a rigorous focus on Science and Mathematics, laying the groundwork for software engineering excellence.",
    logo: SOEKPLogo,
    level: "Higher Secondary",
    icon: BookOpen,
  }
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
    <pattern id="edu-dot-grid-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.5" className="fill-teal-500/25" />
    </pattern>
    <rect width="128" height="72" fill="url(#edu-dot-grid-pattern)" />
  </svg>
);

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 scroll-mt-24 relative overflow-hidden bg-transparent">
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

      {/* Global content container matching Projects, Skills, and Ecosystems */}
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
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
                ACADEMIC FOUNDATION
              </span>
              <span className="w-12 sm:w-16 h-[1.5px] bg-teal-500/80 rounded-full" />
            </div>

            {/* Main Heading: "Education" */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-2.5">
              Education
            </h2>

            {/* Short teal underline */}
            <div className="w-14 sm:w-16 h-1 bg-teal-600 rounded-full mt-2" />
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
                A foundation<br />
                for bigger goals
              </p>
              {/* Hand-drawn curved arrow pointing toward the callout */}
              <svg
                className="absolute -bottom-5 right-1 w-11 h-9 text-sky-500 pointer-events-none"
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

            {/* "Learning today / Building tomorrow" floating card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-soft px-4 py-3.5 flex items-center gap-3.5 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shadow-soft-xs">
                <GraduationCap size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Learning today</p>
                <p className="text-xs font-bold text-teal-600 leading-tight mt-0.5">Building tomorrow</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline & Cards Container */}
        <div className="relative pl-6 sm:pl-10 lg:pl-12">
          
          {/* Vertical Timeline Connecting Line */}
          <div className="absolute left-[11px] sm:left-[19px] lg:left-[23px] top-12 bottom-12 w-[2px] bg-teal-200/90 rounded-full" />

          {/* Cards Stack */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {educationData.map((edu, index) => {
              const IconComp = edu.icon;

              return (
                <div key={index} className="relative">
                  
                  {/* Timeline Circular Marker with Glow Ring */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="absolute -left-6 sm:-left-10 lg:-left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                  >
                    <div className="w-4 h-4 rounded-full bg-teal-600 ring-4 ring-teal-100 shadow-sm" />
                  </motion.div>

                  {/* Horizontal Education Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_2px_14px_rgba(15,23,42,0.04)] hover:shadow-card hover:border-teal-500/30 p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-10">
                      
                      {/* Left: Institution Logo Container */}
                      <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-slate-100/70 border border-slate-200/70 p-3 sm:p-4 flex items-center justify-center shadow-soft-xs">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Center: Main Academic Details */}
                      <div className="flex-1 min-w-0">
                        {/* Period Date Badge */}
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50/90 text-teal-700 border border-teal-200/80 shadow-soft-xs">
                            {edu.period}
                          </span>
                        </div>

                        {/* Institution Name */}
                        <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-extrabold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors mb-1.5">
                          {edu.institution}
                        </h3>

                        {/* Degree / Branch */}
                        <p className="text-slate-700 font-semibold text-sm sm:text-base mb-2.5">
                          {edu.degree}
                        </p>

                        {/* Active Status Badge (if currently pursuing) */}
                        {edu.status && (
                          <div className="mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-teal-50/90 text-teal-700 border border-teal-200/80 shadow-soft-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                              {edu.status}
                            </span>
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                          {edu.description}
                        </p>
                      </div>

                      {/* Right: Academic Metadata Column */}
                      <div className="w-full lg:w-48 shrink-0 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100/90 flex flex-row lg:flex-col items-center justify-between lg:justify-center text-left lg:text-center lg:pl-6 gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-teal-50/80 border border-teal-100/80 flex items-center justify-center text-teal-600 shadow-soft-xs shrink-0">
                          <IconComp size={22} className="text-teal-600" />
                        </div>
                        <div>
                          <div className="font-display text-base font-extrabold text-slate-900 leading-tight">
                            {edu.period}
                          </div>
                          <div className="text-xs text-slate-500 font-medium leading-tight mt-1">
                            {edu.level}
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
