import React, { useState } from 'react';

function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const photographyImages = [
    // Wildlife Photography
    { src: require('./images/FoxKit.webp'), alt: 'Wild Fox Kit in Natural Habitat', title: 'Fox Kit' },
    { src: require('./images/Moose.webp'), alt: 'Algonquin Park Moose Surprise', title: 'Wild Moose' },
    { src: require('./images/Bison.webp'), alt: 'Frosty Bison at Elk Island National Park', title: 'Wild Bison' },
    { src: require('./images/baldEagleBlue.webp'), alt: 'Bald Eagle in Flight', title: 'Bald Eagle' },
    { src: require('./images/loon.webp'), alt: 'Common Loon on Canadian Lake', title: 'Loon' },
    { src: require('./images/MamaBear.webp'), alt: 'Mother Bear with Cubs', title: 'Mama Bear' },
    { src: require('./images/puffin.webp'), alt: 'Atlantic Puffin in Iceland', title: 'Puffin' },
    { src: require('./images/sheep.webp'), alt: 'Icelandic Sheep in Mountain Pasture', title: 'Icelandic Sheep' },
    { src: require('./images/SunbathingSeals.webp'), alt: 'Seals Sunbathing on Rocky Shore', title: 'Sunbathing Seals' },
    
    // Landscape Photography
    { src: require('./images/Heeley.webp'), alt: 'Heeley Pass during Peak Wildflower Season', title: 'Mountain Vista' },
    { src: require('./images/Paget.webp'), alt: 'Scenic Paget Peak View', title: 'Paget Peak' },
    { src: require('./images/TentRidge.webp'), alt: 'Mountain Ridge Landscape onlooking to Goat Mountain', title: 'Tent Ridge' },
    { src: require('./images/ChesterLake.webp'), alt: 'Chester Lake Alpine Reflection', title: 'Chester Lake' },
    { src: require('./images/JimmySimpson.webp'), alt: 'Jimmy Simpson Shale Covered Descent', title: 'Mt. Jimmy Simpson' },
    { src: require('./images/Yamnuska.webp'), alt: 'Yamnuska Looking Onto Yates Mountain', title: 'Yamnuska' },
    { src: require('./images/natFlowers.webp'), alt: 'IcelandicNational Park Wildflower Meadow', title: 'Lupin Field' },
    { src: require('./images/stars.webp'), alt: 'Long Exposure Composition of 150 Images Layered Together', title: 'Starry Night' },
    { src: require('./images/TofinoDog.webp'), alt: 'Adventure Dog on Tofino Beach', title: 'Beach Dog' },
    
    // Iceland Photography
    { src: require('./images/LandMann.webp'), alt: 'Landmannalaugar In Iceland', title: 'Volcanic Landscapes' },
    { src: require('./images/landmanna.webp'), alt: 'Landmannalaugar Geothermal Area', title: 'Geothermal Trail Run' },
    { src: require('./images/Church.webp'), alt: 'Icelandic Church Architecture', title: 'Historic Church' },
    { src: require('./images/NatSummitTV.webp'), alt: 'Ha Ling Peak Early Season Summit', title: 'Summit View' },
    { src: require('./images/IcelandTV.webp'), alt: 'The Unfortunate Beauty of Dying Glaciers and Invasive Flowers', title: 'Svinafellsjökull Glacier' },
    
    // Climbing & Adventure
    { src: require('./images/Grassi Climb-1.webp'), alt: 'Grassi Lakes Climbing Route', title: 'Grassi Climb' },
    { src: require('./images/TempleAscent.webp'), alt: 'Alpenglow on the Mount Temple Ascent', title: 'Temple Ascent' },
    
    // Travel & Culture
    { src: require('./images/amsterdam.webp'), alt: 'Amsterdam Canal Architecture', title: 'Amsterdam' },
    { src: require('./images/dachau.webp'), alt: 'Dachau Memorial Site', title: 'Dachau Memorial' },
    
  ];

  return (
    <div className="photography-page">
      <div className="photography-hero">
        <h1 className="photography-title">Weekend Warrior Photographer</h1>
        <p className="photography-subtitle">The eye for detail goes beyond software. Check out some of my photography work.</p>
      </div>
      
      <div className="photography-contents">
        <div className="photo-grid">
          {photographyImages.map((image, index) => (
            <div key={index} className="photo-item" onClick={() => openModal(image.src)}>
              <img 
                src={image.src} 
                alt={image.alt} 
                loading={index < 6 ? "eager" : "lazy"}
                className="photo-image"
                decoding="async"
                fetchpriority={index < 3 ? "high" : "auto"}
              />
              <div className="photo-overlay">
                <h3 className="photo-title">{image.title}</h3>
                <p className="photo-description">{image.alt}</p>
              </div>
            </div>
          ))}
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
    </div>
  );
}

export default Photography; 