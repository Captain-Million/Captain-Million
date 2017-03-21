import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ListView.css';

const ListView = ({ list = [], urlPrefix = '', itemType = '', header = '' } = {}) => {
  const renderedItemsList = list.map((item) => {
    return (<li key={item._id} >
    <NavLink 
    to={`/wms/${urlPrefix}/${item._id}`} 
    activeClassName={styles.active}>
    {itemType} {item.title}
    </NavLink>
    </li>);
  });
  return (
    <div className={styles.listView}>
      <span className={styles.listHeader}>{header}</span>
      <ul>
        {renderedItemsList}
      </ul>
    </div>
  );
};

export default ListView;
