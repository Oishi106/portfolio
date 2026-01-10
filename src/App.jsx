import { useEffect } from 'react';
import Lenis from 'lenis';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Skill from './Components/Skill.jsx';
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="dark-tech-bg" aria-hidden="true">
        <div className="dark-tech-noise" />
      </div>

      <div className="relative z-10">
        <div className="app-container mx-auto w-full max-w-6xl px-4 md:px-8">
          <Navbar />
          <Hero />
          <About />
          <Skill />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
