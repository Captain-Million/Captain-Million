import React from 'react';

import NavOption from '../NavOption';
import styles from './Navigation.css';

import arrival from './icons/arrival.png';
import dispatch from './icons/dispatch.png';
import products from './icons/products.png';
import inventory from './icons/inventory.png';
import report from './icons/report.png';

const basePath = '/wms';

const navOptions = [
  {
    path: `${basePath}/arrival`,
    name: 'Arrival',
    icon: arrival,
  },
  {
    path: `${basePath}/dispatch`,
    name: 'Dispatch',
    icon: dispatch,
  },
  {
    path: `${basePath}/products`,
    name: 'Products',
    icon: products,
  },
  {
    path: `${basePath}/inventory`,
    name: 'Inventory',
    icon: inventory,
  },
  {
    path: `${basePath}/report`,
    name: 'Report',
    icon: report,
  },
];

const Navigation = () => {
  const navLinks = navOptions.map(option =>
    <NavOption key={option.name} {...option} />
  );

  return (
    <div className={styles.nav}>
        {navLinks}
    </div>
  );
};

export default Navigation;
