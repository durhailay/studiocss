// @flow
import './style.scss';

import React from 'react';
import Service from './Service';

const Services = () => (
  <section id="services" className="l-section services">
    <div className="l-container l-container--centered">
      <div className="l-row">
        <div className="l-col"><h2>Services</h2></div>
      </div>
      <div className="l-row">
        <div className="l-col-xs-4">
          <Service
            imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Service&w=400&h=300"
            title="Design"
            description="Innovative design that will make you wetter than a nun on Easter morning."
          />
        </div>
        <div className="l-col-xs-4">
          <Service
            imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Service&w=400&h=300"
            title="Develop"
            description="Our developers can tell you the square root of 2468 without using a calculator."
          />
        </div>
        <div className="l-col-xs-4">
          <Service
            imageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Service&w=400&h=300"
            title="Delight"
            description="It's like sunny delight, only more climatic."
          />
        </div>
      </div>
    </div>
  </section>
);


export default Services;
