import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Users, Calendar, BarChart3, Star } from 'lucide-react';
import TechEraLogo from "../assets/TechEra_logo.png";
import GraphEraLogo from "../assets/graphera_logo.png";

const communities = [
  {
    name: "TechEra",
    badge: "500+ Innovators",
    role: "FOUNDER & ARCHITECT",
    description: "Building a high-impact engineering ecosystem for the next generation of tech leaders, organizing national hackathons, technical workshops, and mentorship initiatives.",
    logo: TechEraLogo,
    path: "/techera",
    cta: "Explore Community",
    stats: [
      { icon: Users, value: "500+", label: "Innovators" },
      { icon: Calendar, value: "20+", label: "Events Organized" },
      { icon: BarChart3, value: "10+", label: "Partner Institutions" }
    ]
  },
  {
    name: "GraphEra",
    badge: "Digital Agency",
    role: "FOUNDING DIRECTOR",
    description: "A creative and technical agency focused on building modern digital products, open-source solutions and scalable web experiences for startups, communities and businesses.",
    logo: GraphEraLogo,
    path: "/graphera",
    cta: "Explore Agency",
    stats: [
      { icon: Users, value: "50+", label: "Projects Delivered" },
      { icon: Star, value: "30+", label: "Happy Clients" },
      { icon: BarChart3, value: "5+", label: "Ongoing Products" }
    ]
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
    <pattern id="dot-grid-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.5" className="fill-teal-500/25" />
    </pattern>
    <rect width="128" height="72" fill="url(#dot-grid-pattern)" />
  </svg>
);

const CommunityCard = ({ community, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_2px_14px_rgba(15,23,42,0.04)] hover:shadow-card hover:border-teal-500/30 p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-10">
        
        {/* Left: Brand Logo Container */}
        <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-slate-100/70 border border-slate-200/70 p-3 sm:p-4 flex items-center justify-center shadow-soft-xs">
          <img
            src={community.logo}
            alt={community.name}
            className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Center: Main Information */}
        <div className="flex-1 min-w-0">
          {/* Badge & Role */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2.5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50/90 text-teal-700 border border-teal-200/80 shadow-soft-xs">
              {community.badge}
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              {community.role}
            </span>
          </div>

          {/* Initiative Title */}
          <h3 className="font-display text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors mb-2.5">
            {community.name}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-xl">
            {community.description}
          </p>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => navigate(community.path)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-sm shadow-teal-600/20 hover:shadow-md hover:shadow-teal-600/30 transition-all duration-200 group/btn cursor-pointer"
            >
              <span>{community.cta}</span>
              <ArrowUpRight size={15} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Right: Vertical Metrics Column */}
        <div className="w-full lg:w-56 shrink-0 pt-5 lg:pt-0 border-t lg:border-t-0 border-slate-100/80 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5">
          {community.stats.map((stat, statIdx) => {
            const IconComponent = stat.icon;
            return (
              <div key={statIdx} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50/90 border border-teal-100/90 flex items-center justify-center text-teal-600 shrink-0 shadow-soft-xs">
                  <IconComponent size={18} className="text-teal-600" />
                </div>
                <div>
                  <div className="font-display text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
};

export const Community = () => {
  return (
    <section id="ecosystems" className="py-20 md:py-28 scroll-mt-24 relative overflow-hidden bg-transparent">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none -z-10" />

      {/* Decorative Dot Matrix on right */}
      <div className="absolute top-24 right-4 sm:right-8 lg:right-16 hidden sm:block opacity-60">
        <DotGrid />
      </div>
      <div className="absolute bottom-16 right-4 sm:right-8 lg:right-16 hidden sm:block opacity-60">
        <DotGrid />
      </div>

      {/* Global content container matching Skills and Projects */}
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
                BUILDING GLOBAL NETWORKS
              </span>
              <span className="w-12 sm:w-16 h-[1.5px] bg-teal-500/80 rounded-full" />
            </div>

            {/* Main Heading: "Ecosystems & Initiatives" */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-3">
              <span>Ecosystems </span>
              <span className="text-teal-600">& Initiatives</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-slate-500 text-sm sm:text-[15px] max-w-xl leading-relaxed">
              Communities, platforms and initiatives I'm building to create impact, connect people and drive innovation across tech ecosystems.
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
              <p className="font-handwriting text-lg sm:text-[21px] text-sky-600 font-bold leading-tight -rotate-3 select-none">
                Communities<br />
                that create<br />
                real impact
              </p>
              {/* Hand-drawn curved arrow pointing toward the card */}
              <svg
                className="absolute -bottom-6 right-1 w-12 h-10 text-sky-500 pointer-events-none"
                viewBox="0 0 50 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 6 4 C 14 16, 26 26, 42 20" />
                <polyline points="35 14 42 20 38 27" />
              </svg>
            </div>

            {/* "Building people / Building opportunities" floating card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-soft px-4 py-3.5 flex items-center gap-3.5 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shadow-soft-xs">
                <Users size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Building people</p>
                <p className="text-xs font-bold text-teal-600 leading-tight mt-0.5">Building opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Initiative Cards Stack */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {communities.map((community, index) => (
            <CommunityCard key={community.name} community={community} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Community;
