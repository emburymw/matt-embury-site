import React from 'react';

function Photography() {
  return (
    <div className="page-content">
      <h1>Photography</h1>
      <p>Check out my photography work.</p>
      
      <div className="photography-contents">
        <div className="photo-grid">
            <img src={require('./images/FoxKit.png')} alt="Photography 1" />
            <img src={require('./images/Church.png')} alt="Photography 2" />
            <img src={require('./images/Heeley.png')} alt="Photography 3" />
            <img src={require('./images/Moose.jpg')} alt="Photography 4" />
            <img src={require('./images/Paget.jpg')} alt="Photography 5" />
            <img src={require('./images/Bison.png')} alt="Photography 6" />
        </div>

      </div>
    </div>
  );
}

export default Photography; 