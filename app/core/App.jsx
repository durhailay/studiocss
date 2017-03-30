// @flow
import './sass/index.scss';

import React from 'react';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Services from '../components/Services';
import Projects from '../components/Projects';

const App= () => (
  <div className="app">
    <Nav />
    <Hero
      backgroundImageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Studio%20CSS&w=1200&h=600"
      headline="The Digital Frontier"
      leadCopy="Start your journey here."
    />
    <div className="l-container l-container--centered">
      <Services />
      <Projects />
    </div>
  </div>
);

export default App;
