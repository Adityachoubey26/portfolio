import React from 'react';
import { Lightbulb } from 'lucide-react';

// Crisp, lightweight inline SVG icons matching the reference image exactly
const SkillIcon = ({ name }) => {
  switch (name) {
    case 'Next.js':
      return (
        <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path
            d="M149.508 157.438L69.141 54H54V125.975H66.685V69.897L139.73 164.241C143.155 162.203 146.425 159.923 149.508 157.438Z"
            fill="url(#next_paint0)"
          />
          <rect x="115.195" y="54" width="12.695" height="71.975" fill="url(#next_paint1)" />
          <defs>
            <linearGradient id="next_paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next_paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'React':
      return (
        <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'HTML5/CSS3':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z" fill="#E44D26" />
          <path d="M12 3.6V19.8L17.7 18.2L19.2 3.6H12Z" fill="#F16529" />
          <path d="M12 7.7H7.7L8 10.9H12V14.1L9.6 13.5L9.4 11.8H7.2L7.6 15.6L12 16.8V14.1H12Z" fill="#EBEBEB" />
          <path d="M12 7.7V10.9H15.9L15.6 14.1L12 15.1V16.8L16.4 15.6L16.8 10.9H12V7.7Z" fill="white" />
        </svg>
      );
    case 'JavaScript SE':
      return (
        <svg className="w-6 h-6 rounded-md overflow-hidden" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#F7DF1E" />
          <path d="M6 18.5V13.8H8.5V18.5C8.5 19.8 7.6 20.5 6.3 20.5C5.1 20.5 4.3 19.8 4 19L5.8 17.9C6 18.3 6.3 18.7 6.8 18.7C7.3 18.7 7.6 18.4 7.6 17.8V13.8" fill="#000" />
          <path d="M15.5 13.8C17.6 13.8 19 15 19 16.8C19 18.8 17.4 20.5 14.8 20.5C13.2 20.5 12 19.8 11.4 18.8L13.1 17.8C13.6 18.5 14.1 18.9 14.9 18.9C15.8 18.9 16.4 18.4 16.4 17.6C16.4 16.9 15.9 16.5 14.8 16.1C13.3 15.5 11.8 14.8 11.8 13.1C11.8 11.6 13.2 10.5 15.1 10.5C16.4 10.5 17.5 11 18.1 12.1L16.5 13.1C16.1 12.6 15.6 12.3 15 12.3C14.3 12.3 13.8 12.7 13.8 13.3C13.8 13.9 14.3 14.3 15.5 14.8" fill="#000" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 8.1 10.65 8.7C11.33 9.04 11.82 9.54 12.36 10.09C13.24 10.98 14.28 12.03 16.5 12.03C18.9 12.03 20.4 10.83 21 8.43C20.1 9.63 19.05 9.93 17.85 9.33C17.17 8.99 16.68 8.49 16.14 7.94C15.26 7.05 14.22 6 12 6ZM7.5 12C5.1 12 3.6 13.2 3 15.6C3.9 14.4 4.95 14.1 6.15 14.7C6.83 15.04 7.32 15.54 7.86 16.09C8.74 16.98 9.78 18.03 12 18.03C14.4 18.03 15.9 16.83 16.5 14.43C15.6 15.63 14.55 15.93 13.35 15.33C12.67 14.99 12.18 14.49 11.64 13.94C10.76 13.05 9.72 12 7.5 12Z" fill="#38BDF8" />
        </svg>
      );
    case 'Framer Motion':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M4 0H20V8H12L4 0Z" fill="#0055FF" />
          <path d="M4 8H12L20 16H4V8Z" fill="#FF0055" />
          <path d="M12 16L4 24V16H12Z" fill="#EE00FF" />
        </svg>
      );
    case 'Responsive UI':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'NodeJS':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5L21.5 7V17L12 22.5L2.5 17V7L12 1.5Z" fill="#539E43" />
          <path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" fill="#333333" />
          <path d="M12 7.5L15 9.2V14.8L12 16.5L9 14.8V9.2L12 7.5Z" fill="#539E43" />
        </svg>
      );
    case 'Java Core':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M8.5 17.5C8.5 17.5 7 18 6.5 19.5C6.1 20.7 7.5 21.6 9 21.7C11.5 21.8 14.2 21.5 16.5 20.5C18.8 19.5 19.5 18 19.5 18C19.5 18 18.2 19 16.5 19.5C14 20.2 10.5 20.2 8.5 17.5Z" fill="#5382A1" />
          <path d="M7 14.5C7 14.5 5.5 15.2 6.5 16.2C7.3 17 8.5 17 11 17C14.5 17 18 16 18 16C18 16 16.5 16.7 14 17.2C10.5 17.9 7.8 17.5 7 14.5Z" fill="#5382A1" />
          <path d="M12.5 4C13.5 5.5 12 7.5 12 7.5C14.5 6 15.5 4 15.5 4C15.5 4 16 6.5 13.5 8.5C11 10.5 10 12.5 11 14.5C10 13.5 9.5 11.5 10.5 10C11.5 8.5 12.5 7 12.5 4Z" fill="#E76F00" />
          <path d="M15 8C16 9 14.5 10.5 14.5 10.5C16.5 9.5 17 8 17 8C17 8 17.5 10 15.5 11.5C13.5 13 13 14.5 13.5 16C12.5 15 12 13.5 13 12C14 10.5 15 9.5 15 8Z" fill="#E76F00" />
        </svg>
      );
    case 'Spring Boot':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#6DB33F" />
          <path d="M16.5 7.5C12 8 8 12 7.5 16.5C12 16 16 12 16.5 7.5Z" fill="white" />
        </svg>
      );
    case 'RESTful APIs':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <polyline points="8 12 11 15 16 10" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5C12 1.5 5.5 7 5.5 13.5C5.5 17.5 8.5 21 12 22.5C15.5 21 18.5 17.5 18.5 13.5C18.5 7 12 1.5 12 1.5Z" fill="#47A248" />
          <path d="M12 2.5V21.5C11.6 21.3 6.5 18 6.5 13.5C6.5 8 12 2.5 12 2.5Z" fill="#499D4A" />
          <path d="M12 22.5V1.5C12 1.5 12.2 1.7 12.5 2C13.2 2.8 17.5 8 17.5 13.5C17.5 18 12.4 21.3 12 22.5Z" fill="#58B85C" />
        </svg>
      );
    case 'Express.js':
      return (
        <div className="w-6 h-6 rounded-md bg-slate-900 text-white font-bold flex items-center justify-center text-[10px] tracking-tighter">
          ex
        </div>
      );
    case 'PostgreSQL':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#336791" />
          <path d="M12 5C9 5 7 7 7 10C7 13 8 14 9 16C9.5 17 10 18 11 18.5C11.5 18.8 12.5 18.8 13 18.5C14 18 14.5 17 15 16C16 14 17 13 17 10C17 7 15 5 12 5Z" fill="white" />
          <circle cx="10" cy="9" r="1" fill="#336791" />
          <circle cx="14" cy="9" r="1" fill="#336791" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M13.9 10.3H11.8V8.3H13.9V10.3ZM11.1 10.3H9V8.3H11.1V10.3ZM8.3 10.3H6.2V8.3H8.3V10.3ZM13.9 7.6H11.8V5.6H13.9V7.6ZM11.1 7.6H9V5.6H11.1V7.6ZM8.3 7.6H6.2V5.6H8.3V7.6ZM16.7 10.3H14.6V8.3H16.7V10.3ZM23.4 11.2C22.9 10.5 21.8 10.3 21.2 10.4C21 9.9 20.6 9.4 20 9.1L19.4 8.8L19 9.3C18.6 9.8 18.3 10.4 18.3 11H17.4V11.2C17.4 12.3 16.5 13.2 15.4 13.2H4.1C3.8 13.2 3.6 13.4 3.4 13.6C2.2 15.2 2.6 17.5 4.3 18.7C6.4 20.2 11.8 20.2 15.6 18.3C19.7 16.2 22.4 12.7 23.4 11.2Z" fill="#2496ED" />
        </svg>
      );
    case 'Git & GitHub':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#24292F">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.86 21.528C9.36 21.618 9.54 21.311 9.54 21.045C9.54 20.806 9.53 20.016 9.53 19.176C7 19.646 6.33 18.496 6.13 17.936C6.02 17.656 5.53 16.766 5.1 16.526C4.74 16.336 4.23 15.856 5.09 15.846C5.89 15.836 6.46 16.586 6.65 16.896C7.56 18.436 9.02 17.996 9.6 17.736C9.69 17.076 9.95 16.636 10.24 16.386C7.97 16.126 5.6 15.246 5.6 11.336C5.6 10.226 5.99 9.306 6.65 8.586C6.55 8.326 6.2 7.286 6.75 5.886C6.75 5.886 7.6 5.616 9.54 6.926C10.35 6.706 11.21 6.596 12.07 6.596C12.93 6.596 13.79 6.706 14.6 6.926C16.54 5.606 17.39 5.886 17.39 5.886C17.94 7.286 17.59 8.326 17.49 8.586C18.15 9.306 18.54 10.216 18.54 11.336C18.54 15.266 16.16 16.126 13.88 16.386C14.25 16.706 14.57 17.326 14.57 18.296C14.57 19.686 14.56 20.806 14.56 21.045C14.56 21.311 14.74 21.628 15.24 21.528C19.23 20.188 22.1 16.446 22.1 12.017C22.1 6.484 17.623 2 12 2Z" />
        </svg>
      );
    case 'Vercel / Netlify':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L22 20H2L12 2Z" fill="#000000" />
        </svg>
      );
    case 'VS Code':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.5L7 11.5L3 8.5L1.5 9.5L5 13L1.5 16.5L3 17.5L7 14.5L17.5 23.5L22.5 21V5L17.5 2.5ZM17.5 18L10 13L17.5 8V18Z" fill="#007ACC" />
        </svg>
      );
    case 'Postman':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M6 12L15 7L12 16L10.5 13.5L6 12Z" fill="white" />
        </svg>
      );
    case 'CI/CD':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'Linux':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="13" rx="6" ry="8" fill="#F0F0F0" stroke="#000" strokeWidth="1.5" />
          <ellipse cx="12" cy="8" rx="4.5" ry="4" fill="#000" />
          <circle cx="10.5" cy="7.5" r="0.8" fill="#FFF" />
          <circle cx="13.5" cy="7.5" r="0.8" fill="#FFF" />
          <polygon points="12,8.5 10.5,10 13.5,10" fill="#FFA500" />
          <ellipse cx="8" cy="20" rx="3" ry="1.5" fill="#FFA500" />
          <ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#FFA500" />
        </svg>
      );
    case 'Design Systems':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="14" y2="10" />
        </svg>
      );
    case 'Figma Design':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4H12V12H8Z" fill="#F24E1E" />
          <path d="M12 4H16C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12C13.79 12 12 10.21 12 8V4Z" fill="#FF7262" />
          <path d="M12 12H16C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16V12Z" fill="#1ABCFE" />
          <path d="M4 16C4 13.79 5.79 12 8 12H12V16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16Z" fill="#0ACF83" />
          <circle cx="8" cy="16" r="4" fill="#0ACF83" />
          <circle cx="8" cy="8" r="4" fill="#F24E1E" />
          <circle cx="8" cy="20" r="2" fill="#A259FF" />
          <path d="M4 16C4 18.21 5.79 20 8 20V12H4V16Z" fill="#A259FF" />
        </svg>
      );
    case 'Brand Identity':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'UI/UX Strategy':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
        </svg>
      );
    case 'Product Thinking':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" fill="#FEF08A" />
        </svg>
      );
    case 'Community Building':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'Content Creation':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" fill="#8B5CF6" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    default:
      return (
        <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-700 flex items-center justify-center font-bold text-xs">
          {name.charAt(0)}
        </div>
      );
  }
};

const skillColumns = [
  {
    id: 'frontend',
    title: 'ARCHITECTURAL FRONTEND',
    dotColor: '#0d9488', // Teal
    direction: 'up',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'HTML5/CSS3' },
      { name: 'JavaScript SE' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Responsive UI' },
    ],
  },
  {
    id: 'backend',
    title: 'SCALABLE BACKEND',
    dotColor: '#0284c7', // Blue
    direction: 'down',
    skills: [
      { name: 'NodeJS' },
      { name: 'Java Core' },
      { name: 'Spring Boot' },
      { name: 'RESTful APIs' },
      { name: 'MongoDB' },
      { name: 'Express.js' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    id: 'stack',
    title: 'PROFESSIONAL STACK',
    dotColor: '#10b981', // Mint/Teal
    direction: 'up',
    skills: [
      { name: 'Docker' },
      { name: 'Git & GitHub' },
      { name: 'Vercel / Netlify' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'CI/CD' },
      { name: 'Linux' },
    ],
  },
  {
    id: 'creative',
    title: 'STRATEGIC CREATIVE',
    dotColor: '#0284c7', // Blue
    direction: 'down',
    skills: [
      { name: 'Design Systems' },
      { name: 'Figma Design' },
      { name: 'Brand Identity' },
      { name: 'UI/UX Strategy' },
      { name: 'Product Thinking' },
      { name: 'Community Building' },
      { name: 'Content Creation' },
    ],
  },
];

const SkillCard = ({ skill }) => (
  <div className="bg-white rounded-2xl border border-slate-200/70 shadow-[0_2px_6px_rgba(15,23,42,0.03)] px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 hover:shadow-soft hover:scale-[1.015] hover:border-teal-400/40 select-none cursor-default">
    <div className="w-7 h-7 flex items-center justify-center shrink-0">
      <SkillIcon name={skill.name} />
    </div>
    <span className="text-[13.5px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            {/* Small uppercase label with teal line */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-teal-700">
                ABILITIES & STACK
              </span>
              <span className="w-8 h-[1.5px] bg-teal-600 rounded-full" />
            </div>

            {/* Main Heading: "Skills | Work With" */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-3">
              <span>Skills</span> <span className="text-teal-600 font-semibold mx-1">|</span> <span className="text-teal-600">Work With</span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-[15px] max-w-xl leading-relaxed">
              A combination of tools, frameworks and technologies I enjoy working with to build modern, scalable and user-friendly products.
            </p>
          </div>

          {/* Top-Right Callout & Handwritten Annotation */}
          <div className="relative flex items-center gap-3 sm:gap-6 lg:self-start pt-2">
            {/* Handwritten note with curved arrow */}
            <div className="relative hidden md:block text-right pr-6">
              <p className="font-handwriting text-lg sm:text-[21px] text-sky-700 font-bold leading-tight -rotate-3 select-none">
                Continuously moving<br />
                skills for a more<br />
                interactive feel
              </p>
              {/* Curved arrow pointing down towards the columns */}
              <svg
                className="absolute -bottom-7 right-0 w-11 h-11 text-sky-700 pointer-events-none"
                viewBox="0 0 45 45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 12 5 C 28 8, 38 20, 24 38" />
                <polyline points="18 34 24 39 30 35" />
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

        {/* Four Skill Columns with Infinite Vertical Marquee */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {skillColumns.map((col) => {
            const isUp = col.direction === 'up';

            return (
              <div
                key={col.id}
                className="bg-white/70 backdrop-blur-sm rounded-[26px] border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] p-4 sm:p-5 relative column-hover-container flex flex-col"
              >
                {/* Column Header */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100/80">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: col.dotColor }}
                  />
                  <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 truncate">
                    {col.title}
                  </h3>
                </div>

                {/* Vertical Scrolling Marquee Viewport */}
                <div className="h-[490px] relative overflow-hidden fade-mask-y select-none">
                  {/* Subtle top & bottom gradient overlays to enhance smooth dissolve */}
                  <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white/90 via-white/50 to-transparent pointer-events-none z-10" />

                  {/* Direction Line with Arrow */}
                  {isUp ? (
                    <div className="absolute left-1.5 top-4 bottom-16 w-3 pointer-events-none z-20 flex flex-col items-center">
                      <div className="text-teal-600">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M5 1L1 5M5 1L9 5M5 1V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="w-[1.5px] flex-1 bg-gradient-to-b from-teal-500/80 via-teal-400/40 to-transparent rounded-full" />
                    </div>
                  ) : (
                    <div className="absolute left-1.5 top-14 bottom-4 w-3 pointer-events-none z-20 flex flex-col items-center">
                      <div className="w-[1.5px] flex-1 bg-gradient-to-b from-transparent via-sky-400/40 to-sky-500/80 rounded-full" />
                      <div className="text-sky-600">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M5 9L1 5M5 9L9 5M5 9V0"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Marquee Track: duplicated list for mathematically seamless loop */}
                  <div className="pl-5 pr-1 py-1">
                    <div
                      className={`flex flex-col gap-3 shrink-0 ${
                        isUp ? 'animate-marquee-up' : 'animate-marquee-down'
                      }`}
                    >
                      {/* Original Items */}
                      {col.skills.map((skill, sIdx) => (
                        <SkillCard key={`orig-${sIdx}`} skill={skill} />
                      ))}
                      {/* Cloned Items for seamless loop */}
                      {col.skills.map((skill, sIdx) => (
                        <SkillCard key={`clone-${sIdx}`} skill={skill} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Direction Pill Badge */}
                {isUp ? (
                  <div className="absolute -left-2 sm:-left-3 bottom-6 z-30 pointer-events-none">
                    <div className="bg-teal-50/95 backdrop-blur-md border border-teal-200/90 rounded-xl px-2.5 py-1 shadow-soft-xs text-center">
                      <p className="text-[9px] font-bold text-teal-800 leading-tight">Moving</p>
                      <p className="text-[9px] font-extrabold text-teal-700 leading-tight whitespace-nowrap">
                        Bottom → Top
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute -left-2 sm:-left-3 bottom-6 z-30 pointer-events-none">
                    <div className="bg-sky-50/95 backdrop-blur-md border border-sky-200/90 rounded-xl px-2.5 py-1 shadow-soft-xs text-center">
                      <p className="text-[9px] font-bold text-sky-800 leading-tight">Moving</p>
                      <p className="text-[9px] font-extrabold text-sky-700 leading-tight whitespace-nowrap">
                        Top → Bottom
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
