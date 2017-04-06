// @flow
import './style.scss';

import React from 'react';

const NavItem = ({ text, url, clickHandler }:
									{ text: string, url: string, clickHandler: Function }) => (
	<li className="nav__item"><a className="nav__link" href={url} onClick={clickHandler}>{text}</a></li>
);

export default NavItem;
