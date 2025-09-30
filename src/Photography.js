import React from 'react';

function Photography() {
  return (
    <div className="page-content">
      <h1>Weekend Warrior Photographer</h1>
      <p>The eye for detail goes beyond software. Check out some of my photography work.</p>
      
      <div className="photography-contents">
        <div className="photo-grid">
            <img src={require('./images/Church.webp')} alt="Photography 1" />
            <img src={require('./images/FoxKit.webp')} alt="Photography 2" />
            <img src={require('./images/Heeley.webp')} alt="Photography 3" />
            <img src={require('./images/Moose.webp')} alt="Photography 4" />
            <img src={require('./images/Paget.webp')} alt="Photography 5" />
            <img src={require('./images/Bison.webp')} alt="Photography 6" />
        </div>

      </div>
    </div>
  );
}

export default Photography; 