// @flow
import './style.scss';

import React from 'react';
import NavLogo from './NavLogo';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

type Props = {
  isSticky: ?boolean,
  clickCallback: Function
};

export default class Nav extends React.Component {

  props: Props;

  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLAnchorElement && e.target.href) {
      let url: string = e.target.href;
      this.props.clickCallback(url);
    }
  }

  render() {
    return (
      <nav className={ this.props.isSticky ? 'nav nav--sticky' : 'nav' }>
        <NavLogo />
        <NavGroup>
          <NavItem text="Home" url="/" clickHandler={ this.handleClick } />
          <NavItem text="Services" url="/services" clickHandler={ this.handleClick } />
          <NavItem text="Projects" url="/projects" clickHandler={ this.handleClick } />
          <NavItem text="About" url="/about" clickHandler={ this.handleClick } />
          <NavItem text="Contact" url="/contact" clickHandler={ this.handleClick } />
        </NavGroup>
      </nav>
    );
  }
}
