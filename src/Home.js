import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import resumePdf from './documents/MattEmburyResume2025.pdf';

function Home() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotographyClick = () => {
    navigate('/photography');
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-nav">
          <button onClick={() => scrollToSection('home')} className="sidebar-btn">1</button>
          <button onClick={() => scrollToSection('about')} className="sidebar-btn">2</button>
          <button onClick={() => scrollToSection('projects')} className="sidebar-btn">3</button>
          <button onClick={() => scrollToSection('photography')} className="sidebar-btn">4</button>
        </div>
      </div>

      <div id="home" className='home'>
          <h1 className='home-title'>Matt <br /> Embury</h1>
          <p className='home-subtitle'>Software Developer <br /> Photographer <br /> Mountain Athlete</p>
      </div>
      <div id="about" className='about'>
            <div className='about-content'>
              <img src={require('./images/Matt.jpg')} alt="Matt" />
              <div className="about-text">
                <h1>About Me</h1>
                <p>Software Developer by day, hobbyist photographer and mountain athlete by night. I'm a full stack developer with a passion for building web applications and mobile apps.
                    I've created this site to showcase some of my recent projects as I try to expand my skills and learn new technologies. You can also check out 
                     my <a href='https://github.com/emburymw'>Github portfoilio</a> to see how I've developed my projects directly! </p>

                <p>On weekends you'll find me in the mountains trail running, backcountry skiing, or rock climbing. Probably with camera in hand.</p>
              </div>
            </div>
    </div>
    <div id="projects" className='projects'>
        <div className='tech'>
            <h1>Technical Skills</h1>

            <div className='tech-icons'>
              <div className='tech-item'>
                <img title="Angular" alt="Angular logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Angular</div>
              </div>
              <div className='tech-item'>
                <img title="React" alt="React logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>React</div>
              </div>
              <div className='tech-item'>
                <img title="Node.js" alt="Node.js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Node.js</div>
              </div>
              <div className='tech-item'>
                <img title="MySQL" alt="MySQL logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>MySQL</div>
              </div>
              <div className='tech-item'>
                <img title="Java" alt="Java logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Java</div>
              </div>
              <div className='tech-item'>
                <img title="Python" alt="Python logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Python</div>
              </div>
              <div className='tech-item'>
                <img title="C++" alt="C++ logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>C++</div>
              </div>
              <div className='tech-item'>
                <img title="HTML5" alt="HTML5 logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>HTML5</div>
              </div>
              <div className='tech-item'>
                <img title="CSS3" alt="CSS3 logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>CSS3</div>
              </div>
              <div className='tech-item'>
                <img title="JavaScript" alt="JavaScript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>JavaScript</div>
              </div>
              <div className='tech-item'>
                <img title="TypeScript" alt="TypeScript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>TypeScript</div>
              </div>
              <div className='tech-item'>
                <img title="Git" alt="Git logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Git</div>
              </div>
              <div className='tech-item'>
                <img title="Jira" alt="Jira logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Jira</div>
              </div>
              <div className='tech-item'>
                <img title="SonarQube" alt="SonarQube logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-plain-wordmark.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>SonarQube</div>
              </div>
              <div className='tech-item'>
                <img title="Jenkins" alt="Jenkins logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
                <div className='tech-separator'></div>
                <div className='tech-label'>Jenkins</div>
              </div>

            </div>

            <button className="resume-btn" onClick={() => window.open(resumePdf, '_blank', 'noopener,noreferrer')}>Download my resume</button>

        </div>
        <div className='projectsList'>
            <h1>Projects</h1>
            <div className='current-project'>
              <h2>Current Project</h2>
              <p><b>The Lonely Mountain Project</b> is a gamified fitness challenge app that integrates with the Strava API. When a user opts in, it tracks cumulative distance from runs, hikes, or ski tours and maps progress against Bilbo’s journey in The Hobbit.</p>
              <p>On each new Strava activity, the app:</p>
              <ul>
                <li>Calculates the user’s cumulative distance</li>
                <li>Determine the next checkpoint along Bilbo’s route</li>
                <li>Updates the activity description with progress, checkpoints reached, and Tolkien-themed facts</li>
              </ul>
              <p>A web dashboard and database-backed backend track progress, while AI components enhance personalization with tailored commentary and summaries.</p>
            </div>
              <p>Images coming soon...</p>
              <div className='loading-spinner' aria-label='Loading current project'></div>
            <button className="resume-btn" onClick={() => window.open('https://github.com/emburymw', '_blank', 'noopener,noreferrer')}>View my GitHub projects</button>
        </div>
    </div>
    <div id="photography" className='photography'>
        <div className='photography-contents'>
            <h1 id="photographyTitle">Photography</h1>
          <div className="photo-grid">
            <img src={require('./images/Church.png')} alt="Photography 1" onClick={() => openModal(require('./images/Church.png'))} />
            <img src={require('./images/FoxKit.png')} alt="Photography 2" onClick={() => openModal(require('./images/FoxKit.png'))} />
            <img src={require('./images/Heeley.png')} alt="Photography 3" onClick={() => openModal(require('./images/Heeley.png'))} />
            <img src={require('./images/Moose.jpg')} alt="Photography 4" onClick={() => openModal(require('./images/Moose.jpg'))} />
            <img src={require('./images/Paget.jpg')} alt="Photography 5" onClick={() => openModal(require('./images/Paget.jpg'))} />
            <img src={require('./images/Bison.png')} alt="Photography 6" onClick={() => openModal(require('./images/Bison.png'))} />
          </div>
          <button className="photography-btn" onClick={handlePhotographyClick}>View Full Gallery</button>
        </div>
    </div>
    <div className='contact'>
        <div>
            <p> © <b> Matt Embury </b> 2025 All Rights Reserved <br></br>
            <a href="mailto:mwembury@gmail.com">mwembury@gmail.com</a> <br></br>
            (613) 804-1369</p>
        </div>
    </div>

    {isModalOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>
          <img src={selectedImage} alt="Full size" className="modal-image" />
        </div>
      </div>
    )}
    </>
  );
}

export default Home; 