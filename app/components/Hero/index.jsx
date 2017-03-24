import './style.scss';
import React from 'react';
import ImageResponsive from '../ImageResponsive';

const Hero = ({ backgroundImageUrl, headline, leadCopy }) => (
  <div className="hero" style={{ backgroundImage: 'url(' + backgroundImageUrl + ')' }}>
    <h1 className="hero__headline">{headline}</h1>
    <p className="hero__leadCopy">{leadCopy}</p>
  </div>
);

export default Hero;
