import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Community from './sections/Community';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';
import TechEra from './pages/TechEra';
import GraphEra from './pages/GraphEra';
import ScrollToTop from './components/ScrollToTop';
import AmbientBackground from './components/AmbientBackground';
import ScrollReveal from './components/ScrollReveal';
import Footer from './components/Footer';

// Helper component to handle anchor scrolling across routes
const AnchorScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Education /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Community /></ScrollReveal>
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnchorScroll />
      <div className="min-h-screen bg-canvas text-slate-900 font-sans relative overflow-x-hidden">
        {/* Subtle Light Ambient Background (soft teal, cyan, mint) */}
        <AmbientBackground />

        {/* Floating Light Navbar */}
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/techera" element={<TechEra />} />
            <Route path="/graphera" element={<GraphEra />} />
          </Routes>
        </main>

        {/* Premium Dark Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
