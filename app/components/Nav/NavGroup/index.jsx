// @flow
import './style.scss';

import React from 'react';

const NavGroup = ({ children }: { children?: React.Children }) => (
	<ul className="nav__group">{children}</ul>
);

export default NavGroup;
