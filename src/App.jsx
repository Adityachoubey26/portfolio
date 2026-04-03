import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Community from './sections/Community';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary/30 font-sans relative">
      {/* Global Noise Overlay */}
      <div className="noise" />
      
      {/* Persistent Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full animate-blob" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full animate-blob animation-delay-4000" />
      </div>

      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Community />
        <Contact />
      </main>
      
      <footer className="py-16 text-center border-t border-white/5 relative z-10 bg-background/50 backdrop-blur-md">
        <p className="text-white/20 text-sm font-medium tracking-widest uppercase">
           © {new Date().getFullYear()} ADITYA CHOUBEY. ARCHITECTING THE FUTURE.
        </p>
      </footer>
    </div>
  );
}

export default App;
