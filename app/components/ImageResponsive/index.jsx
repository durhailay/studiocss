import './style.scss';
import React from 'react';

const ImageResponsive = ({ imageUrl, imageAlt }) => (
  <img src={imageUrl} className="imageResponsive" alt={imageAlt} />
);

export default ImageResponsive;
