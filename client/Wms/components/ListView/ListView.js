import React from 'react';
import { Link } from 'react-router';

import formatDate from './../../../util/formatDate';

import styles from './ListView.css';

const ListView = ({ list = [], urlPrefix = '', documentType = '', header = '' } = {}) => {
  const documentsList = list.map((item) => {
    return (<li key={item._id} ><Link to={`/wms/${urlPrefix}/${item._id}`} activeClassName={styles.active}>{documentType} {formatDate(item.date)}</Link></li>);
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
