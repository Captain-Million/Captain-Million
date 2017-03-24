import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import ListView from './ListView';
import ListItem from '../ListItem';
import styles from './ListView.css';

const props = {
  list: [
    {
      _id: 'id1',
      title: 'title1'
    },
    {
      _id: 'id2',
      title: 'title2'
    }
  ],
  header: 'header',
  urlPrefix: 'url'
};

test('should have a listView class', t => {
  const wrapper = shallow(<ListView {...props}/>);
  t.true(wrapper.hasClass(styles.listView));
});

test('should have a header', t=> {
  const wrapper = shallow(<ListView {...props}/>);
  const header = wrapper.find(`.${styles.listHeader}`);

  t.is(header.length, 1);
  t.is(header.text(), props.header)
});

test('should have a list of items', t => {
  const wrapper = shallow(<ListView {...props}/>);
  const ul = wrapper.find('ul');
  const items = ul.find(ListItem);

  t.is(ul.length, 1);
  t.is(items.length, 2);
})
