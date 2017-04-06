// @flow
import './style.scss';

import React from 'react';

const Project = ({ title, imageUrl }:
                  { title: string, imageUrl: string }) => (
	<div className="project" style={ {backgroundImage: 'url(' + imageUrl + ')'} }>
    <div className="project__meta">
      <h3 className="project__title">{title}</h3>
    </div>
  </div>
);

export default Project;
