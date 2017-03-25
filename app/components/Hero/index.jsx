// @flow

import './style.scss';
import React from 'react';

const Hero = ({ backgroundImageUrl, headline, leadCopy }:
              { backgroundImageUrl: string, headline: string, leadCopy: string}) => (
  <div className="hero" style={{ backgroundImage: 'url(' + backgroundImageUrl + ')' }}>
    <h1 className="hero__headline">{headline}</h1>
    <p className="hero__leadCopy">{leadCopy}</p>
  </div>
);

export default Hero;
