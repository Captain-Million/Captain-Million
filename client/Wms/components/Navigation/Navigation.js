import React from 'react';

import NavOption from '../NavOption';
import styles from './Navigation.css';

const basePath = '/wms';

const navOptions = [
  {
    path: `${basePath}/arrival`,
    name: 'Arrival'
  },
  {
    path: `${basePath}/dispatch`,
    name: 'Dispatch'
  },
  {
    path: `${basePath}/products`,
    name: 'Products'
  },
  {
    path: `${basePath}/inventory`,
    name: 'Inventory'
  },
  {
    path: `${basePath}/report`,
    name: 'Report'
  },
]

const Navigation = () => {
  const navLinks = navOptions.map(option =>
    <NavOption key={option.name} {...option}/>
  )

  return (
    <div className={styles.nav}>
      <ul>
        {navLinks}
      </ul>
    </div>
  );
};

export default Navigation;
