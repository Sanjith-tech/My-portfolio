import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [resumeMessage, setResumeMessage] = useState('');

  const handleResumeDownload = () => {
  setResumeMessage("📄 Resume download started!");

  // Automatically close after 4 seconds
  setTimeout(() => {
    setResumeMessage('');
  }, 4000);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzpenrn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success');
        setMessage('✅ Message sent successfully!');
        form.reset();
      } else {
        setStatus('error');
        setMessage('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('❌ Network error. Try again later.');
    }

    setTimeout(() => {
      setStatus('');
      setMessage('');
    }, 4000); // Message disappears after 4 seconds
  };

  return (
    <section className="contact-section section-container" id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <i className="fas fa-user"></i>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-comment-dots"></i>
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      {/* 🔔 Popup Message */}
      {status && (
        <div className={`popup-message ${status}`}>
          {message}
        </div>
      )}

      {resumeMessage && (
        <div className="popup-message success">
          {resumeMessage}
        </div>
      )}

      <div className="social-links" data-aos="fade-up">
        <a href="https://www.linkedin.com/in/sanjith-m-ba71a5359/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Sanjith-tech" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="/resume_1.pdf" download onClick={handleResumeDownload}>
          <i className="fas fa-file-download"></i> Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
