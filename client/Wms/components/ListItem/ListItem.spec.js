import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import ListItem from './ListItem';
import styles from './ListItem.css';

const props = {
  itemType: 'type',
  urlPrefix: 'url',
  _id: 'id',
  title: 'title'
};

test('should be a li element', t => {
  const wrapper = shallow(<ListItem {...props}/>);
  t.is(wrapper.type(), 'li');
});

test('should have a NavLink component', t => {
  const wrapper = shallow(<ListItem {...props}/>);

  t.true(wrapper.contains(
    <NavLink
      to={`/wms/${props.urlPrefix}/${props._id}`}
      activeClassName={styles.active}
    >
      {props.itemType} {props.title}
    </NavLink>
  ));
})
