import React from 'react';
import { Link } from 'react-router';

import styles from './ListView.css';

const ListView = ({ list = [], urlPrefix = '', documentType = '', header = '' } = {}) => {
  const documentsList = list.map((item) => {
    return (<li><Link to={`/wms/${urlPrefix}/${item._id}`} activeClassName={styles.active} key={item._id}>{documentType} {item.name}</Link></li>);
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
