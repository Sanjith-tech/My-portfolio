import './Projects.css';

function Projects() {
  return (
    <section className="projects-section section-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Auto-CAD Arm Simulation</h3>
          <p>Designed and simulated a robotic arm using SolidWorks + Python for kinematics.</p>
         
        </div>

        <div className="project-card">
          <h3>Code Automation Script</h3>
          <p>Built a Python tool that auto-generates CAD part specs from parameter input.</p>
          
        </div>

        <div className="project-card">
          <h3>3D Portfolio Website</h3>
          <p>A React-based personal website featuring animated gears and smooth SVG background.</p>
        
        </div>
      </div>
    </section>
  );
}

export default Projects;
