// @flow
import './style.scss';

import React from 'react';
import ImageResponsive from '../../ImageResponsive';

const Project = ({ title, imageUrl }:
                  { title: string, imageUrl: string }) => (
	<div className="project">
    <ImageResponsive imageUrl={imageUrl} imageAlt={title} />
    <h3 className="project__title">{title}</h3>
  </div>
);

export default Project;
