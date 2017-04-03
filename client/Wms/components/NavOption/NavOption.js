import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavOption.css';

const NavOption = ({ name, path }) => (
  <li>
    <NavLink
      to={path}
      activeClassName={styles.active}
      exact={false}
    >
      <span>{name}</span>
    </NavLink>
  </li>
);

NavOption.propTypes = {
  name: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
};

export default NavOption;

