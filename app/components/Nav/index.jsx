// @flow
import './style.scss';

import React from 'react';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

type Props = {
  navigateTo: Function
};

export default class Nav extends React.Component {
  props: Props;
  handleClick(e: MouseEvent) {
    e.preventDefault();
    if (e.target instanceof HTMLAnchorElement && e.target.href) {
      let url: string = e.target.href;
      this.props.navigateTo(url);
    }
  }
  render() {
    return (
      <nav className="nav">
        <NavGroup>
          <NavItem text="Home" url="/" clickHandler={ (e: MouseEvent) => this.handleClick(e) } />
          <NavItem text="Services" url="/services" clickHandler={ (e: MouseEvent) => this.handleClick(e) } />
          <NavItem text="Projects" url="/projects" clickHandler={ (e: MouseEvent) => this.handleClick(e) } />
          <NavItem text="About" url="/about" clickHandler={ (e: MouseEvent) => this.handleClick(e) } />
          <NavItem text="Contact" url="/contact" clickHandler={ (e: MouseEvent) => this.handleClick(e) } />
        </NavGroup>
      </nav>
    );
  }
}
