import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import heroData from '../data/heroData';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProfileCard from '../components/ProfileCard';
import StaggerContainer from '../components/animations/StaggerContainer';
import { fadeUpItem, getReducedVariant } from '../utils/animations';

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const itemVariant = getReducedVariant(fadeUpItem, shouldReduceMotion);

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <Github size={18} />;
      case 'LinkedIn':
        return <Linkedin size={18} />;
      case 'Twitter':
        return <Twitter size={18} />;
      case 'Email':
        return <Mail size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <StaggerContainer staggerDelay={0.09} delayChildren={0.1}>
              {/* Availability Badge */}
              <motion.div variants={itemVariant} className="mb-6">
                <Badge variant="teal" showDot={true} dotPulse={true}>
                  {heroData.badge.status}
                </Badge>
              </motion.div>

              {/* Editorial Heading */}
              <motion.h1
                variants={itemVariant}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6"
              >
                <span>{heroData.name.first}</span>{' '}
                <span className="text-teal-700">{heroData.name.last}</span>
              </motion.h1>

              {/* Role Sub-heading */}
              <motion.p
                variants={itemVariant}
                className="text-lg sm:text-xl font-semibold text-slate-700 tracking-tight mb-4"
              >
                {heroData.role}
              </motion.p>

              {/* Introduction Paragraph */}
              <motion.p
                variants={itemVariant}
                className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8"
              >
                {heroData.description}
              </motion.p>

              {/* Action Buttons (CTAs) */}
              <motion.div
                variants={itemVariant}
                className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10"
              >
                <Button
                  href={heroData.ctas.primary.href}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                  className="w-full sm:w-auto"
                >
                  {heroData.ctas.primary.text}
                </Button>
                <Button
                  href={heroData.ctas.secondary.href}
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  {heroData.ctas.secondary.text}
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariant}
                className="flex items-center gap-2.5 pt-4 border-t border-slate-200/60"
              >
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
                  Connect:
                </span>
                {heroData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 text-slate-600 hover:text-teal-700 hover:border-teal-500/40 hover:bg-teal-50/50 flex items-center justify-center transition-all duration-200 shadow-soft-xs hover:shadow-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </motion.div>
            </StaggerContainer>
          </div>

          {/* Right Column: Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ProfileCard metadata={heroData.profileCard} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
