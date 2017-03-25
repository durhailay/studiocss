// @flow
import './sass/index.scss';

import React from 'react';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
import ImageResponsive from '../components/ImageResponsive';

const App = () => (
  <div className="app">
    <Nav />
    <Hero
      backgroundImageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Studio%20CSS&w=1200&h=600"
      headline="The Digital Frontier"
      leadCopy="Start your journey here."
    />
    <div className="l-container l-container--centered">
      <section className="l-section">
        <div className="l-row">
          <div className="l-col-xs-12"><h2>Hello Studio CSS</h2></div>
        </div>
        <div className="l-row">
          <div className="l-col-xs-12 l-col-sm-4">
            <ImageResponsive
              imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Service&w=400&h=300"
              imageAlt="Service Image"
            />
            <h3>Service</h3>
             <p>Bacon ipsum dolor amet strip steak pork belly filet mignon, rump shank short ribs turducken capicola pancetta tri-tip pig hamburger kielbasa salami. Flank alcatra burgdoggen meatloaf cupim.</p>
          </div>
          <div className="l-col-xs-12 l-col-sm-4">
            <ImageResponsive
              imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Service&w=400&h=300"
              imageAlt="Service Image"
            />
            <h3>Service</h3>
             <p>Bacon ipsum dolor amet strip steak pork belly filet mignon, rump shank short ribs turducken capicola pancetta tri-tip pig hamburger kielbasa salami. Flank alcatra burgdoggen meatloaf cupim.</p>
          </div>
          <div className="l-col-xs-12 l-col-sm-4">
            <ImageResponsive
              imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Service&w=400&h=300"
              imageAlt="Service Image"
            />
            <h3>Service</h3>
             <p>Bacon ipsum dolor amet strip steak pork belly filet mignon, rump shank short ribs turducken capicola pancetta tri-tip pig hamburger kielbasa salami. Flank alcatra burgdoggen meatloaf cupim.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default App;
