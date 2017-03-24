import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import NavOption from '../NavOption';
import Navigation from './Navigation';
import styles from './Navigation.css';

test('should have a nav class', t => {
  const wrapper = shallow(<Navigation/>);
  t.true(wrapper.hasClass(styles.nav));
});

test('should have an ul element with NavOptions', t => {
  const wrapper = shallow(<Navigation/>);
  const ul = wrapper.find('ul');
  const options = ul.find(NavOption);

  t.is(ul.length, 1);
  t.is(options.length, 5);
});
