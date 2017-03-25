// @flow
import './style.scss';

import React from 'react';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

const Nav = () => (
  <nav className="nav">
    <NavGroup>
      <NavItem text="Home" url="/" />
      <NavItem text="Services" url="/services" />
      <NavItem text="About" url="/about" />
      <NavItem text="Contact" url="/contact" />
    </NavGroup>
  </nav>
);

export default Nav;
