// @flow
import './sass/index.scss';

import React from 'react';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Services from '../components/Services';
import Projects from '../components/Projects';

import smoothScroll from './js/smoothscroll';

export default class App extends React.Component {
  navigateTo(url: string): void {
    if (history) {
      history.pushState(null, 'Studio CSS', url);
      let arr: Array<string> = url.split('/');
      console.log(arr[arr.length - 1]);
      let el: ?HTMLElement = document.getElementById(arr[arr.length - 1]);
      if (el) {
        smoothScroll(document.getElementsByTagName('body')[0], el);
      }
    }
  }
  render() {
    return (
      <div className="app">
        <Nav navigateTo={ (url: string) => this.navigateTo(url) } />
        <Hero
          backgroundImageUrl="https://placeholdit.imgix.net/~text?txtsize=33&txt=Studio%20CSS&w=1200&h=600"
          headline="The Digital Frontier"
          leadCopy="Start your journey here."
        />
        <Services />
        <Projects />
      </div>
    );
  }
}
