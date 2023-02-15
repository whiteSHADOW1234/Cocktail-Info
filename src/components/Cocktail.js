import React from 'react';

const Cocktail = ({ name, images}) => (
  <div className="cards-box">
    <a href={`https://www.google.com/search?q=${name}`}>
      <div className="cards-image">
        <img 
            src={images}
            alt={name}
        />
        <h2 className="cards-title">{name}</h2>
      </div>
    </a>
  </div>
);

export default Cocktail;
