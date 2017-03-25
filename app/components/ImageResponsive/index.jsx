import './style.scss';
import React from 'react';

const ImageResponsive = ({ imageUrl, imageAlt }: { imageUrl: string, imageAlt: string}) => (
  <img src={imageUrl} className="imageResponsive" alt={imageAlt} />
);

export default ImageResponsive;
