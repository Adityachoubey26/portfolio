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
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Community />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnchorScroll />
      <div className="bg-background min-h-screen text-white selection:bg-primary/30 font-sans relative overflow-x-hidden">
        {/* Global Noise Overlay */}
        <div className="noise" />
        
        {/* Persistent Background Blobs */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full animate-blob opacity-30" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full animate-blob animation-delay-4000 opacity-20" />
        </div>

        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/techera" element={<TechEra />} />
            <Route path="/graphera" element={<GraphEra />} />
          </Routes>
        </main>
        
        <footer className="py-16 text-center border-t border-white/5 relative z-10 bg-background/80 backdrop-blur-md">
          <div className="container-custom">
            <p className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
               © {new Date().getFullYear()} ADITYA CHOUBEY. ARCHITECTING THE FUTURE.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
