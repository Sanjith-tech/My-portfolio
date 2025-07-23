import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sanjith M. All Rights Reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/Sanjith-tech" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sanjith-m-ba71a5359/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
