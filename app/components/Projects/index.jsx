// @flow
import './style.scss';

import React from 'react';
import Project from './Project';

const Projects = () => (
  <section id="projects" className="l-section">
    <div className="l-container l-container--centered">
      <div className="l-row">
        <div className="l-col"><h2>Projects</h2></div>
      </div>
      <div className="l-row">
        <div className="l-col">
          <Project
            title="British Airways"
            imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project&w=400&h=400"
          />
        </div>
        <div className="l-col">
          <Project
            title="Boston Ivy"
            imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project&w=400&h=400"
          />
        </div>
        <div className="l-col">
          <Project
            title="IG"
            imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project&w=400&h=400"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
