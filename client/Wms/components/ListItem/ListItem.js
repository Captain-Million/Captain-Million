import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ListItem.css';

const ListItem = ({ itemType, urlPrefix, _id, title }) => (
  <li>
    <NavLink
      to={`/wms/${urlPrefix}/${_id}`}
      activeClassName={styles.active}
    >
      {itemType} {title}
    </NavLink>
  </li>
);

ListItem.propTypes = {
  itemType: PropTypes.string,
  urlPrefix: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  itemType: undefined,
};

export default ListItem;

