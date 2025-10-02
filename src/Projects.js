import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-hero">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">Building solutions that combine technology with adventure</p>
      </div>
      
      <div className="projects-content">
        <div className="current-project-section">
          <div className="project-card featured">
            <h2>Current Personal Project</h2>
            <div className="project-header">
              <h3>The Lonely Mountain Project</h3>
              <span className="project-status">In Development</span>
            </div>
            <p className="project-description">
              A gamified fitness challenge app that integrates with the Strava API. When a user opts in, it tracks cumulative distance from runs, hikes, or ski tours and maps progress against Bilbo's journey in The Hobbit.
            </p>
            
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Calculates the user's cumulative distance</li>
                <li>Determines the next checkpoint along Bilbo's route</li>
                <li>Updates activity descriptions with progress, checkpoints reached, and Tolkien-themed facts</li>
                <li>Web dashboard and database-backed backend track progress</li>
                <li>AI components enhance personalization with tailored commentary and summaries</li>
              </ul>
            </div>
            
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Strava API</span>
                <span className="tech-tag">AI Integration</span>
                <span className="tech-tag">Database</span>
              </div>
            </div>
            
            <div className="project-status-indicator">
              <p>Images and demo coming soon...</p>
            </div>
          </div>
        </div>
        
        <div className="other-projects-section">
          <h2>Completed Projects</h2>
          
          <div className="project-card">
            <div className="project-header">
              <h3>Movemore Canmore</h3>
              <span className="project-status completed">Completed</span>
            </div>
            <p className="project-description">
              A single-page responsive React website for a local physiotherapy business in Canmore, Alberta. Features modern design, mobile-first responsive layout, and professional presentation of physiotherapy services.
            </p>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Single-page responsive design</li>
                <li>Mobile-first approach</li>
                <li>Professional business presentation</li>
                <li>Full French translation toggleable</li>
                <li>Contact information and service details</li>
                <li>Clean, accessible design</li>
              </ul>
            </div>
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsive Design</span>
                <span className="tech-tag">HTML5</span>
              </div>
            </div>
            <div className="project-links">
              <a href="https://movemorecanmore.ca" target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Live Site
              </a>
              <a href="https://github.com/emburymw/movemore" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Portfolio Website</h3>
              <span className="project-status completed">Completed</span>
            </div>
            <p className="project-description">
              This responsive portfolio website built with React, showcasing my photography, technical skills, and professional experience. Features modern design, smooth animations, and mobile-first responsive layout.
            </p>
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Responsive Design</span>
                <span className="tech-tag">GitHub Pages</span>
              </div>
            </div>
            <div className="project-links">
              <a href="https://github.com/emburymw/matt-embury-site" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="github-section">
          <h2>Explore My Code</h2>
          <p>Check out my GitHub profile to see all my projects, contributions, and coding journey.</p>
          <button className="resume-btn" onClick={() => window.open('https://github.com/emburymw', '_blank', 'noopener,noreferrer')}>
            View my GitHub projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects; 