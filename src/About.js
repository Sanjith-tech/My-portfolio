import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I'm Sanjith, a passionate <span className="highlight">Mechanical Engineering</span> student with a growing interest in <span className="highlight">software development</span>.
        My journey began with machines and mechanics, but soon expanded into coding — where I now build creative solutions using Python, JavaScript, and React.
      </p>
    </section>
  );
};

export default About;
