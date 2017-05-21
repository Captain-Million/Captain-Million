import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Disclaimer from './Disclaimer';
import styles from './Disclaimer.css';

test('should have a disclaimer class', (t) => {
  const wrapper = shallow(<Disclaimer />);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.disclaimer));
});
