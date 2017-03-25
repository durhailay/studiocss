// @flow
import './style.scss';

import React from 'react';

const NavItem = ({ text, url }: { text: string, url: string }) => (
	<li className="nav__item"><a className="nav__link" href={url}>{text}</a></li>
);

export default NavItem;
