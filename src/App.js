import React, { useEffect } from 'react'; // ✅ import useEffect
import './App.css';
import './HeroSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Background from './Background';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import AnimatedBackground from './AnimatedBackground';
import Gears from './Gears';
import { ImPacman } from 'react-icons/im';
import Footer from './Footer';
import Chatbot from './Chatbot';



function App() {
  // ✅ Initialize AOS animations
  useEffect(() => {
    Aos.init({
      duration: 1000,   // animation duration in ms
      once: true        // animate only once
    });
  }, []);

  return (
    <div className="App">
      <Background />
      <header className="hero-section" data-aos="fade-down">
        <h1>Hi, I'm Sanjith</h1>
        <p>Mechanical Engineer | Coding Enthusiast</p>
      </header>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <AnimatedBackground />
      <Gears />
      <Footer />
      <Chatbot />

    </div>
  );
}

export default App;
