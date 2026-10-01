import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Github, Twitter, Send } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/aditya-c-366b90305/", name: "LinkedIn" },
  { icon: <Instagram size={18} />, url: "https://www.instagram.com/aditya_choubey26", name: "Instagram" },
  { icon: <Github size={18} />, url: "https://github.com/Adityachoubey26", name: "GitHub" },
  { icon: <Twitter size={18} />, url: "https://x.com/ChoubeyIx", name: "Twitter" },
  { icon: <Phone size={18} />, url: "https://wa.me/919310526618", name: "WhatsApp" }
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-teal-700 font-bold uppercase tracking-[0.25em] text-xs mb-2 block">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Let's <span className="text-teal-700">Talk</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Ready to build high-impact digital experiences or scale community initiatives? Let's connect and create something exceptional.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {/* Email Link Card */}
                <a
                  href="mailto:aditya.choubey.soe@gmail.com"
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft hover:shadow-card hover:border-teal-500/30 flex items-center gap-4 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-soft-xs">
                    <Mail size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Email Address
                    </p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                      aditya.choubey.soe@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp Link Card */}
                <a
                  href="https://wa.me/919310526618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft hover:shadow-card hover:border-emerald-500/30 flex items-center gap-4 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 shadow-soft-xs">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      WhatsApp Direct
                    </p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      +91 93105 26618
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Links Row */}
              <div className="pt-6 border-t border-slate-200/70">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Find me online:
                </p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-slate-600 hover:text-teal-700 hover:border-teal-400/50 hover:bg-teal-50/50 flex items-center justify-center transition-all duration-200 shadow-soft-xs hover:shadow-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Formspree Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-card p-6 sm:p-10"
            >
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form action="https://formspree.io/f/mqkrvvpo" method="POST" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Sharma"
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@example.com"
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, ideas, or timeline..."
                    rows="5"
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 text-slate-900 placeholder:text-slate-400 text-sm transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full !py-4 font-bold text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
