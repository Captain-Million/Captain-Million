import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavOption.css';

const NavOption = ({ name, path, icon }) => (
  <NavLink
    to={path}
    className={styles.navLink}
    activeClassName={styles.activeNavLink}
    exact={false}
  >
    <img src={icon} alt={name} />
    <span>{name}</span>
  </NavLink>
);

NavOption.propTypes = {
  name: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  icon: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default NavOption;

