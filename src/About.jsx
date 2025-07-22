import React from 'react';
import './About.css';
import gear1 from '../assets/gear1.svg';
import gear2 from '../assets/gear2.svg';

function About() {
  return (
    <div className="about-section">
      <div className="text-content">
        <h2>About Me</h2>
        <p>
          I'm a Mechanical Engineering student with a deep interest in coding, automation, and design.
          Passionate about combining hardware logic with modern software to build smart solutions.
        </p>
      </div>
      <div className="gear-visuals">
        <img src={gear1} alt="Gear 1" className="gear gear1" />
        <img src={gear2} alt="Gear 2" className="gear gear2" />
      </div>
    </div>
  );
}

export default About;
