import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import styles from './Navigation.css';

test('should have a nav class', (t) => {
  const wrapper = shallow(<Navigation />);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.nav));
});
