import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import character from '../assets/3D_character.png';

export const About = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tracking logic for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const badge1X = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const badge1Y = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const badge2X = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const badge2Y = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Interactive 3D Character Presentation */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center order-2 lg:order-1 profile-card-container"
          >
            {/* Ambient backlight glow */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-400/15 via-cyan-400/10 to-emerald-300/10 blur-2xl -z-10 opacity-70"
              aria-hidden="true"
            />

            <motion.div
              style={{
                rotateX: shouldReduceMotion ? 0 : rotateX,
                rotateY: shouldReduceMotion ? 0 : rotateY,
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover group overflow-hidden p-4"
            >
              {/* Subtle background gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/60 via-slate-50/40 to-cyan-50/30 rounded-3xl" />

              <motion.img
                src={character}
                alt="Aditya Choubey 3D Avatar"
                style={{ translateZ: shouldReduceMotion ? 0 : 30 }}
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(15,23,42,0.15)] scale-105"
              />

              {/* Floating Code Snippet inside the card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 text-white border border-slate-800 shadow-xl backdrop-blur-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-slate-400 font-mono ml-1.5">developer.ts</span>
                </div>
                <p className="text-[11px] text-slate-300 font-mono leading-relaxed">
                  <span className="text-teal-400">const</span> developer = {'{'}<br />
                  &nbsp;&nbsp;name: <span className="text-amber-300">"Aditya Choubey"</span>,<br />
                  &nbsp;&nbsp;focus: <span className="text-amber-300">"Frontend & Community"</span><br />
                  {'}'};
                </p>
              </div>
            </motion.div>

            {/* Decorative Floating Badges Outside */}
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : badge1X,
                y: shouldReduceMotion ? 0 : badge1Y,
              }}
              className="absolute -top-6 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-soft z-20 flex items-center gap-2"
            >
              <span className="text-2xl">🚀</span>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">Visionary</p>
                <p className="text-[10px] text-slate-500 font-medium">Impact-Driven</p>
              </div>
            </motion.div>

            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : badge2X,
                y: shouldReduceMotion ? 0 : badge2Y,
              }}
              className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-soft hidden md:flex items-center gap-2 z-20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-700">Open for Collaboration</span>
            </motion.div>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-teal-700 font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                The Tech Visionary
              </span>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                About <span className="text-teal-700">Me</span>
              </h2>

              <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                <p>
                  I'm <span className="text-slate-900 font-bold">Aditya Choubey</span>, a Frontend Developer and Community Builder dedicated to crafting intentional, high-performance digital experiences.
                </p>
                <p>
                  Currently pushing boundaries in <span className="text-slate-800 font-medium italic">Information Technology</span>, I specialize in the intersection of <span className="text-teal-700 font-semibold">React</span>, <span className="text-cyan-700 font-semibold">Modern UI Systems</span>, and <span className="text-emerald-700 font-semibold">Community Leadership</span>.
                </p>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card hover:border-teal-500/30 group transition-all">
                    <h4 className="font-display text-4xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                      10+
                    </h4>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                      Successful Events
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card hover:border-cyan-500/30 group transition-all">
                    <h4 className="font-display text-4xl font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors mb-1">
                      02
                    </h4>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                      Tech Foundations
                    </p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-6 flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">
                    <span>Get in Touch</span>
                    <ArrowRight size={16} />
                  </a>
                  <a href="#experience" className="btn-secondary">
                    Explore Experience
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
