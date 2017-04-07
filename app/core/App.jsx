// @flow
import './sass/index.scss';

import React from 'react';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Services from '../components/Services';
import Projects from '../components/Projects';

import smoothScroll from './js/smoothscroll';

export default class App extends React.Component {

  navigateTo = (url: string): void => {
    if (history) {
      history.pushState(null, 'Studio CSS', url);
      let body = document.getElementsByTagName('body')[0];
      let arr: Array<string> = url.split('/');
      let el: ?HTMLElement = document.getElementById(arr[arr.length - 1]);
      if (el) {
        smoothScroll(body, el, 40);
      } else {
        smoothScroll(body, body, 40);
      }
    }
  }

  render() {
    return (
      <div className="app">
        <header>
          <Nav isSticky={ true } clickCallback={ this.navigateTo } />
          <Hero
            backgroundImageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Studio%20CSS&w=1200&h=600"
            headline="The Digital Frontier"
            leadCopy="Start your journey here."
          />
        </header>
        <Services />
        <Projects />
      </div>
    );
  }
}
