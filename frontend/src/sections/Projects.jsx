import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Lightbulb, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

// Inline GitHub SVG Icon
const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// -------------------------------------------------------------
// Dedicated Mockups for the 4 featured projects
// -------------------------------------------------------------

// 1. RescueIQ - Tactical Disaster Operations Dashboard
const RescueIQMockup = () => (
  <div className="w-full h-full bg-[#0c1322] text-slate-300 p-2.5 sm:p-3 flex flex-col justify-between font-mono select-none overflow-hidden relative">
    {/* Ambient radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />

    {/* Top Bar */}
    <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5 relative z-10">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        <span className="text-[9px] font-sans font-semibold text-slate-400 ml-1">RescueIQ System</span>
      </div>
      <div className="flex items-center gap-1 text-[8px] text-teal-400 bg-teal-950/60 border border-teal-800/50 px-1.5 py-0.5 rounded">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
        <span>LIVE TELEMETRY</span>
      </div>
    </div>

    {/* Center: Tactical India Crisis Map Visual */}
    <div className="relative my-auto py-2 flex items-center justify-center">
      <svg className="w-36 h-36 opacity-85 text-teal-500/40" viewBox="0 0 100 100" fill="none">
        {/* Tactical grid rings */}
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Simplified India Geo Silhouette Path */}
        <path
          d="M 50 15 L 56 22 L 53 30 L 62 36 L 68 45 L 60 52 L 58 64 L 54 75 L 50 85 L 46 76 L 42 66 L 36 56 L 38 44 L 44 38 L 42 26 Z"
          fill="rgba(13, 148, 136, 0.15)"
          stroke="rgba(45, 212, 191, 0.6)"
          strokeWidth="1"
        />

        {/* Tactical Nodes with Pulses */}
        <circle cx="48" cy="35" r="2.5" fill="#f97316" />
        <circle cx="48" cy="35" r="5" stroke="#f97316" strokeWidth="0.5" className="animate-ping" opacity="0.6" />

        <circle cx="41" cy="52" r="2" fill="#2dd4bf" />
        <circle cx="58" cy="48" r="2.5" fill="#f97316" />
        <circle cx="52" cy="70" r="2" fill="#2dd4bf" />
        <circle cx="62" cy="42" r="1.5" fill="#38bdf8" />

        {/* Connecting vector tracks */}
        <line x1="48" y1="35" x2="58" y2="48" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="48" y1="35" x2="41" y2="52" stroke="rgba(45, 212, 191, 0.5)" strokeWidth="0.75" />
        <line x1="41" y1="52" x2="52" y2="70" stroke="rgba(45, 212, 191, 0.4)" strokeWidth="0.75" strokeDasharray="2 2" />
      </svg>

      {/* Floating Tactical HUD Card */}
      <div className="absolute left-1 bottom-1 bg-slate-900/90 border border-slate-700/60 rounded px-2 py-1 text-[8px] backdrop-blur-sm">
        <p className="text-slate-400">Affected Zones</p>
        <p className="font-bold text-teal-300">18 Active Sectors</p>
      </div>

      <div className="absolute right-1 top-2 bg-slate-900/90 border border-slate-700/60 rounded px-2 py-1 text-[8px] backdrop-blur-sm text-right">
        <p className="text-slate-400">Response Speed</p>
        <p className="font-bold text-amber-400">4.2 min Dispatch</p>
      </div>
    </div>

    {/* Bottom Telemetry Bar */}
    <div className="flex items-center justify-between text-[8px] text-slate-400 pt-1.5 border-t border-slate-800/80">
      <span>Gemini 1.5 Flash Analytics</span>
      <span className="text-teal-400">99.8% Uptime</span>
    </div>
  </div>
);

// 2. TechVistar - Enterprise SaaS Website Mockup
const TechVistarMockup = () => (
  <div className="w-full h-full bg-white text-slate-800 p-2.5 sm:p-3 flex flex-col justify-between select-none overflow-hidden relative">
    {/* Micro Navbar */}
    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
      <div className="flex items-center gap-1">
        <span className="w-2.5 h-2.5 rounded-sm bg-teal-600" />
        <span className="text-[10px] font-extrabold text-slate-900 tracking-tight">TechVistar</span>
      </div>
      <div className="hidden xs:flex items-center gap-2 text-[7px] text-slate-500 font-medium">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Work</span>
      </div>
      <span className="text-[7px] font-semibold text-white bg-teal-600 px-1.5 py-0.5 rounded-full">
        Contact
      </span>
    </div>

    {/* Hero Section Split */}
    <div className="grid grid-cols-2 gap-2 my-auto items-center py-1">
      {/* Left copy */}
      <div>
        <p className="text-[10px] sm:text-[11px] font-extrabold text-slate-900 leading-[1.2] mb-1">
          Transforming Ideas Into <span className="text-teal-600">Digital Products</span>
        </p>
        <p className="text-[7px] text-slate-400 leading-tight mb-2 line-clamp-2">
          We build enterprise digital solutions with CMS integration and modern architecture.
        </p>
        <div className="flex items-center gap-1">
          <span className="text-[7px] font-bold text-white bg-slate-900 px-2 py-0.5 rounded">
            Explore
          </span>
          <span className="text-[7px] font-semibold text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded">
            Services
          </span>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-white/90 text-teal-600 flex items-center justify-center shadow-sm">
            <span className="text-[8px] ml-0.5">▶</span>
          </div>
        </div>
        {/* Pagination indicators */}
        <div className="absolute bottom-1 right-1 flex gap-0.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-teal-600" />
          <span className="w-1.5 h-1.5 rounded-sm bg-white/80" />
        </div>
      </div>
    </div>

    {/* Bottom Footer Info */}
    <div className="flex items-center justify-between text-[7px] text-slate-400 pt-1 border-t border-slate-100">
      <span>CMS Powered Panel</span>
      <span className="text-teal-600 font-semibold">99+ SEO Score</span>
    </div>
  </div>
);

// 3. Online Judge - LeetCode Style IDE Mockup
const OnlineJudgeMockup = () => (
  <div className="w-full h-full bg-[#0f172a] text-slate-300 p-2.5 sm:p-3 flex flex-col justify-between font-mono select-none overflow-hidden relative">
    {/* Micro Navbar */}
    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded bg-teal-500" />
        <span className="text-[9px] font-sans font-bold text-white tracking-wide">CodeArena</span>
        <span className="text-[7px] bg-slate-800 text-slate-400 px-1 py-0.5 rounded">v2.4</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[7px] text-emerald-400 font-sans">Docker Ready</span>
      </div>
    </div>

    {/* Split Editor */}
    <div className="grid grid-cols-2 gap-2 my-auto py-1">
      {/* Left Problem Info */}
      <div className="bg-slate-900/80 rounded p-1.5 border border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold text-white">Two Sum</span>
            <span className="text-[7px] text-emerald-400 bg-emerald-950/60 px-1 rounded">Easy</span>
          </div>
          <p className="text-[7px] text-slate-400 font-sans leading-tight line-clamp-3">
            Given array nums and integer target, return indices of two numbers that sum to target.
          </p>
        </div>
        <div className="text-[7px] bg-slate-950 p-1 rounded border border-slate-800/80 text-slate-400">
          <code>nums = [2,7,11], t = 9</code>
        </div>
      </div>

      {/* Right Code Area */}
      <div className="bg-[#0b0f19] rounded p-1.5 border border-slate-800 flex flex-col justify-between">
        <div className="text-[7px] leading-relaxed">
          <p className="text-purple-400">#include &lt;vector&gt;</p>
          <p className="text-blue-400">class <span className="text-amber-300">Solution</span> &#123;</p>
          <p className="text-slate-400 pl-1.5">public:</p>
          <p className="text-teal-300 pl-3">vector&lt;int&gt; twoSum &#123;</p>
          <p className="text-slate-500 pl-4.5">// Hash map O(n)</p>
          <p className="text-teal-300 pl-3">&#125;</p>
          <p className="text-blue-400">&#125;;</p>
        </div>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[6.5px] font-sans font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded">
            Run
          </span>
          <span className="text-[6.5px] font-sans font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">
            Submit
          </span>
        </div>
      </div>
    </div>

    {/* Bottom Status */}
    <div className="flex items-center justify-between text-[7px] text-slate-400 pt-1 border-t border-slate-800">
      <span>Docker Sandboxed</span>
      <span className="text-emerald-400">4ms • Memory 10.2MB</span>
    </div>
  </div>
);

// 4. Student Portal - Academic Management Dashboard Mockup
const StudentPortalMockup = () => (
  <div className="w-full h-full bg-[#f8fafc] text-slate-800 p-2.5 sm:p-3 flex flex-col justify-between select-none overflow-hidden relative">
    {/* Micro Navbar */}
    <div className="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded bg-teal-600 flex items-center justify-center text-white text-[7px] font-bold">
          S
        </div>
        <span className="text-[9px] font-extrabold text-slate-900 tracking-tight">Student Hub</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[8px] font-semibold text-slate-600">Aditya C.</span>
        <div className="w-3.5 h-3.5 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center text-[7px] font-bold text-teal-800">
          A
        </div>
      </div>
    </div>

    {/* Stat Cards Row */}
    <div className="grid grid-cols-4 gap-1 my-1">
      <div className="bg-sky-50/80 border border-sky-200/60 rounded p-1 text-center">
        <span className="text-[10px] font-black text-sky-700 block">5</span>
        <span className="text-[6.5px] text-sky-600/90 font-medium block">Subjects</span>
      </div>
      <div className="bg-teal-50/80 border border-teal-200/60 rounded p-1 text-center">
        <span className="text-[10px] font-black text-teal-700 block">12</span>
        <span className="text-[6.5px] text-teal-600/90 font-medium block">Tasks</span>
      </div>
      <div className="bg-emerald-50/80 border border-emerald-200/60 rounded p-1 text-center">
        <span className="text-[10px] font-black text-emerald-700 block">3</span>
        <span className="text-[6.5px] text-emerald-600/90 font-medium block">Projects</span>
      </div>
      <div className="bg-purple-50/80 border border-purple-200/60 rounded p-1 text-center">
        <span className="text-[10px] font-black text-purple-700 block">2</span>
        <span className="text-[6.5px] text-purple-600/90 font-medium block">Clubs</span>
      </div>
    </div>

    {/* Recent Activity List */}
    <div className="bg-white rounded border border-slate-200/80 p-1.5 shadow-sm">
      <div className="text-[7.5px] font-bold text-slate-700 mb-1 flex items-center justify-between">
        <span>Recent Activity</span>
        <span className="text-[6.5px] text-teal-600">Updated</span>
      </div>
      <div className="space-y-0.5 text-[7px]">
        <div className="flex items-center justify-between text-slate-600">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="truncate max-w-[90px]">DBMS Lab submitted</span>
          </div>
          <span className="text-slate-400 text-[6px]">2h ago</span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="truncate max-w-[90px]">OS Lecture notes</span>
          </div>
          <span className="text-slate-400 text-[6px]">5h ago</span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="truncate max-w-[90px]">Community project sync</span>
          </div>
          <span className="text-slate-400 text-[6px]">1d ago</span>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-[7px] text-slate-400 pt-1 border-t border-slate-100">
      <span>Centralized Campus Portal</span>
      <span className="text-teal-600 font-semibold">Real-time DB</span>
    </div>
  </div>
);

// Preview Dispatcher Component
const ProjectPreview = ({ project }) => {
  switch (project.id) {
    case 'rescueiq':
      return <RescueIQMockup />;
    case 'techvistar':
      return <TechVistarMockup />;
    case 'online-judge':
      return <OnlineJudgeMockup />;
    case 'student-portal':
      return <StudentPortalMockup />;
    default:
      return (
        <div className="w-full h-full relative overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
      );
  }
};

// -------------------------------------------------------------
// Individual 2-Column Horizontal Split Card
// -------------------------------------------------------------
const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="bg-white/95 rounded-[26px] border border-slate-200/85 shadow-[0_4px_25px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:border-teal-500/30 transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-stretch group cursor-pointer relative"
    >
      {/* Left Column: Visual Mockup / Preview Window */}
      <div className="w-full sm:w-[48%] min-h-[220px] sm:min-h-[260px] rounded-2xl overflow-hidden relative shrink-0 shadow-inner border border-slate-200/70 bg-slate-50 transition-transform duration-300 group-hover:scale-[1.02]">
        <ProjectPreview project={project} />

        {/* Featured Pill (on Card 1 / featured projects) */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-teal-800 text-[11px] font-bold border border-teal-200/80 shadow-soft-xs">
              <span className="text-teal-600">★</span> Featured
            </span>
          </div>
        )}
      </div>

      {/* Right Column: Content Details */}
      <div className="w-full sm:w-[52%] flex flex-col justify-between py-1">
        <div>
          {/* Top row: Category Badge & Arrow Button */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70">
              {project.category}
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:border-teal-300 transition-colors shadow-soft-xs shrink-0">
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.tags?.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-medium text-slate-600 bg-slate-100/90 border border-slate-200/70 rounded-lg px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons: GitHub & Live Demo */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-soft-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-3.5 h-3.5 fill-current" />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="opacity-70" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-teal-50/60 border border-teal-500/80 text-teal-700 text-xs font-semibold shadow-soft-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Live Demo</span>
                <ExternalLink size={12} className="text-teal-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// -------------------------------------------------------------
// Main Projects Section Component
// -------------------------------------------------------------
export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Available filter categories matching specification
  const filters = ['All', 'Full Stack', 'Frontend', 'AI', 'Community', 'Other'];

  // All projects list from projectsData
  const allProjectsList = Object.values(projectsData);

  // Filter logic
  const filteredProjects = allProjectsList.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full Stack') {
      return project.filterCategory === 'Full Stack' || project.category.includes('Full Stack');
    }
    if (activeFilter === 'Frontend') {
      return project.filterCategory === 'Frontend' || project.category.includes('Frontend');
    }
    if (activeFilter === 'AI') {
      return project.filterCategory === 'AI' || project.category.includes('AI');
    }
    if (activeFilter === 'Community') {
      return (
        project.tags?.some((t) => t.toLowerCase().includes('community')) ||
        project.description?.toLowerCase().includes('community') ||
        project.filterCategory === 'Community'
      );
    }
    if (activeFilter === 'Other') {
      return !['Full Stack', 'Frontend', 'AI'].includes(project.filterCategory);
    }
    return true;
  });

  // Limit display to 4 projects initially in "All" mode to match reference screenshot
  const displayedProjects =
    activeFilter === 'All' && !showAll
      ? filteredProjects.slice(0, 4)
      : filteredProjects;

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-24 relative overflow-hidden bg-transparent">
      {/* Ambient atmospheric gradients matching Skills */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none -z-10" />

      {/* Global content container - identical to Skills section */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            {/* Eyebrow Label with teal line */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-teal-700">
                SELECTED WORKS
              </span>
              <span className="w-8 h-[1.5px] bg-teal-600 rounded-full" />
            </div>

            {/* Main Heading: "Projects I've Built" */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-3">
              <span>Projects </span>
              <span className="text-teal-600">I've Built</span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-[15px] max-w-2xl leading-relaxed">
              A collection of projects, hackathons and ideas turned into real-world solutions using modern technologies, clean design and scalable architecture.
            </p>
          </div>

          {/* Top-Right Callout & Handwritten Annotation */}
          <div className="relative flex items-center gap-4 sm:gap-6 lg:self-start pt-2">
            {/* Handwritten note with curved arrow */}
            <div className="relative hidden md:block text-right pr-6">
              <p className="font-handwriting text-lg sm:text-[21px] text-sky-600 font-bold leading-tight -rotate-3 select-none">
                Turning ideas<br />
                into real projects
              </p>
              {/* Hand-drawn curved arrow pointing down toward the cards */}
              <svg
                className="absolute -bottom-8 right-2 w-12 h-12 text-sky-600 pointer-events-none"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 10 5 C 15 25, 30 38, 42 34" />
                <polyline points="36 30 43 35 38 41" />
              </svg>
            </div>

            {/* Always learning / Always building card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-soft px-4 py-3.5 flex items-center gap-3.5 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shadow-soft-xs">
                <Lightbulb size={20} className="fill-sky-400/20 text-sky-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Always learning</p>
                <p className="text-xs font-bold text-teal-700 leading-tight mt-0.5">Always building</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-sm shadow-teal-600/25 border border-teal-600'
                    : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-soft-xs'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Decorative Grid Accents */}
        <div className="relative">
          {/* Top-left radiate marks */}
          <div className="absolute -top-7 -left-3 pointer-events-none text-teal-400 hidden sm:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="18" x2="8" y2="10" />
              <line x1="10" y1="19" x2="14" y2="9" />
              <line x1="16" y1="21" x2="20" y2="13" />
            </svg>
          </div>

          {/* Bottom-left dot grid pattern */}
          <div className="absolute -bottom-10 -left-10 w-28 h-28 pointer-events-none opacity-30 hidden sm:block">
            <svg width="100%" height="100%" fill="none">
              <pattern id="dot-pattern-proj" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" className="fill-teal-600" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dot-pattern-proj)" />
            </svg>
          </div>

          {/* Bottom-right decorative slashes */}
          <div className="absolute -bottom-6 -right-4 pointer-events-none text-teal-400 hidden sm:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="8" y1="14" x2="16" y2="6" />
              <line x1="14" y1="20" x2="22" y2="12" />
            </svg>
          </div>

          {/* 2-Column Desktop Grid */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        {allProjectsList.length > 4 && activeFilter === 'All' && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-teal-50/50 border border-teal-500/80 text-teal-800 text-xs sm:text-sm font-bold shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>{showAll ? 'View Less' : 'View All Projects'}</span>
              <ArrowRight size={15} className="text-teal-600 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
