import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1>Experience</h1>

        </div>
        <div className='projectsList'>
            <h1>Projects</h1>
        </div>
    </div>
    <div id="photography" className='photography'>
        <div className='photography-contents'>
            <h1>Photography</h1>
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
        <div className='contact-well'>
            <h1>Get In Touch!</h1>
            <p>You can e-mail me at:</p>
            <p className="email-address">mwembury@gmail.com</p>
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