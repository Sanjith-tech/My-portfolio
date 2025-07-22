import React from 'react';
import './App.css';
import './HeroSection.css'; 
import Background from './Background';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import AnimatedBackground from './AnimatedBackground';
import Gears from './Gears';








function App() {
  return (
    <div className="App">
      <Background />
      <header className="hero-section">
        <h1>Hi, I'm Sanjith</h1>
        <p>Mechanical Engineer | Coding Enthusiast</p>
      </header>
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <AnimatedBackground />
      <Gears/>
      
     
      
    </div>

  );
}

export default App;
