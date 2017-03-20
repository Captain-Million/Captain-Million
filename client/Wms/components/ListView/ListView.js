import React from 'react';
import { NavLink } from 'react-router-dom';

import formatDate from './../../../util/formatDate';

import styles from './ListView.css';

const ListView = ({ list = [], urlPrefix = '', documentType = '', header = '' } = {}) => {
  const documentsList = list.map((item) => {
    return (<li key={item._id} ><NavLink to={`/wms/${urlPrefix}/${item._id}`} activeClassName={styles.active}>{documentType} {formatDate(item.date)}</NavLink></li>);
  });
  return (
    <div className={styles.listView}>
      <span className={styles.listHeader}>{header}</span>
      <ul>
        {documentsList}
      </ul>
    </div>
  );
};

export default ListView;
