// src/Skills.js
import './Skills.css';
import { FaPython, FaReact, FaHtml5, FaDraftingCompass, FaCogs } from 'react-icons/fa';

function Skills() {
  return (
    <section className="skills-section section-container">
      <h2>Skills</h2>
      <div className="skills-grid">

        <div className="skill-card">
          <h3><FaDraftingCompass /> SolidWorks <span>85%</span></h3>
          <div className="skill-bar solidworks"></div>
        </div>

        <div className="skill-card">
          <h3><FaPython /> Python <span>75%</span></h3>
          <div className="skill-bar python"></div>
        </div>

        <div className="skill-card">
          <h3><FaHtml5 /> HTML/CSS <span>80%</span></h3>
          <div className="skill-bar htmlcss"></div>
        </div>

        <div className="skill-card">
          <h3><FaReact /> React.js <span>65%</span></h3>
          <div className="skill-bar react"></div>
        </div>

        <div className="skill-card">
          <h3><FaCogs /> Automation Basics <span>70%</span></h3>
          <div className="skill-bar automation"></div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
