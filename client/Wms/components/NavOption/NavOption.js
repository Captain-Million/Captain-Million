import React from 'react';
import PropTypes from 'prop-types';
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
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NavOption;

