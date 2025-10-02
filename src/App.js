import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Photography from './Photography';
import Contact from './Contact';
import { trackPageView } from './analytics';


const preloadImages = () => {
  const criticalImages = [
    './images/IcelandTV.webp',
    './images/TentRidge.webp',
    './images/ThreeSisters.webp',
    './images/LandMann.webp'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();
  
  // Get the current page name from the pathname
  const getPageName = (pathname) => {
    if (pathname === '/') return 'home';
    return pathname.substring(1); // Remove the leading slash
  };

  return (
    <div className="App" data-page={getPageName(location.pathname)}>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/photography">Photography</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <Router>
      <PageTracker />
      <AppContent />
    </Router>
  );
}

export default App;
