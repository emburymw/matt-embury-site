import React from 'react';
import { Link } from 'react-router-dom';

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

      <div className='contact'>
        <div className="contact-container">
          <div className="contact-header">
            <h3>Let's Connect</h3>
            <p>Ready to collaborate or have a chat?</p>
          </div>
          <div className="contactText">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:mwembury@gmail.com" className="contact-link">mwembury@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">(613) 804-1369</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span className="contact-value">Canmore, Alberta, Canada</span>
                </div>
              </div>
            </div>
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="hyperlinks">
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
          <div className="contact-navigation">
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/photography">Photography</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="contact-footer">
            <p>© 2025 <b>Matt Embury</b> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 