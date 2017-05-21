import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Hero from './Hero';
import styles from './Hero.css';

test('should have a hero class', (t) => {
  const wrapper = shallow(<Hero />);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.hero));
});
