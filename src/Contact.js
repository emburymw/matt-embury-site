import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">Let's connect and discuss opportunities</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:mwembury@gmail.com">mwembury@gmail.com</a>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <a href="tel:+16138041369">(613) 804-1369</a>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Canmore, Alberta, Canada</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h2>Connect With Me</h2>
            <div className="social-grid">
              <a href="https://www.linkedin.com/in/mattembury" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/emburymw" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 