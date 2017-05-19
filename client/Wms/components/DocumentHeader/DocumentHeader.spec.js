import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import DocumentHeader from './DocumentHeader';
import styles from './DocumentHeader.css';

test('should have a document-header class', (t) => {
  const props = {
    name: 'name',
    itemType: 'item',
  };
  const wrapper = shallow(<DocumentHeader {...props} />);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.documentHeader));
});

test('should be able to add an item type', (t) => {
  const props = {
    name: 'name',
    itemType: 'item',
  };
  const wrapper = shallow(<DocumentHeader {...props} />);
  const itemSpan = wrapper.find('div').find('span').at(0);
  t.true(itemSpan.hasClass(styles.type));
  t.is(itemSpan.text(), props.itemType);
});

test('should be able to add a name', (t) => {
  const props = {
    name: 'name',
    itemType: 'item',
  };
  const wrapper = shallow(<DocumentHeader {...props} />);
  const nameSpan = wrapper.find('div').find('span').at(1);
  t.true(nameSpan.hasClass(styles.name));
  t.is(nameSpan.text(), ` ${props.name}`);
});
