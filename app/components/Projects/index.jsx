// @flow
import './style.scss';

import React from 'react';
import Project from './Project';

const Projects = () => (
  <section className="l-section">
    <div className="l-row">
      <div className="l-col-xs-12"><h2>Projects</h2></div>
    </div>
    <div className="l-row">
      <div className="l-col-xs-12 l-col-sm-6 l-col-md-4">
        <Project
          title="British Airways"
          imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project&w=400&h=400"
        />
      </div>
      <div className="l-col-xs-12 l-col-sm-6 l-col-md-4">
        <Project
          title="British Airways"
          imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project&w=400&h=400"
        />
      </div>
      <div className="l-col-xs-12 l-col-sm-6 l-col-md-4">
        <Project
          title="British Airways"
          imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project&w=400&h=400"
        />
      </div>
    </div>
  </section>
);

export default Projects;
