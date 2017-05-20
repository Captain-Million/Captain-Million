import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Features from './Features';
import styles from './Features.css';

test('should have a features class', (t) => {
  const wrapper = shallow(<Features />);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.features));
});
