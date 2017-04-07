// @flow
import './style.scss';

import React from 'react';
import ImageResponsive from '../../../lib/ImageResponsive';

const Service = ({ title, description, imageUrl }:
                  { title: string, description: string, imageUrl: string }) => (
	<div className="service">
    <ImageResponsive imageUrl={imageUrl} imageAlt={title} />
    <h3 className="service__title">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Service;
