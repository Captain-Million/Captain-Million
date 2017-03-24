import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import DocumentHeader from './DocumentHeader';
import styles from './DocumentHeader.css';

//NOTE: Removed the space for now
test('should add a styled div element', t => {
  const wrapper = shallow(<DocumentHeader/>);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.documentHeader));
});

test('should be able to add an item type', t => {
  const props = { itemType: 'item' };
  const wrapper = shallow(<DocumentHeader {...props}/>);
  const itemSpan = wrapper.find('div').find('span');
  t.true(itemSpan.hasClass(styles.type));
  t.is(itemSpan.text(), props.itemType);
});

test('should be able to add a name', t => {
  const props = { name: 'name' };
  const wrapper = shallow(<DocumentHeader {...props}/>);
  const nameSpan = wrapper.find('div').find('span');

  t.true(nameSpan.hasClass(styles.name));
  t.is(nameSpan.text(), props.name);
});
