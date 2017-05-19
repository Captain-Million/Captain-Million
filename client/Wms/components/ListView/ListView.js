import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';
import styles from './ListView.css';

const ListView = ({ list, header, ...otherProps }) => {
  const renderedItemsList = list.map(item =>
    <ListItem key={item._id} {...otherProps} {...item} />
  );

  return (
    <div className={styles.listView}>
      <span className={styles.listHeader}>{header}</span>
      <ul>
        {renderedItemsList}
      </ul>
    </div>
  );
};

ListView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  header: PropTypes.string.isRequired,
};

export default ListView;
