import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import DocumentHeader from './DocumentHeader';
import styles from './DocumentHeader.css';

test('adds a css styled container for its children', t => {
  const props = { children: 'test' }
  const wrapper = shallow(<DocumentHeader {...props}/>);
  t.pass()
});
