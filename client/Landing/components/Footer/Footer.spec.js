import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Footer from './Footer';
import styles from './Footer.css';

test('should have a footer class', (t) => {
  const wrapper = shallow(<Footer />);
  t.is(wrapper.type(), 'div');
  t.true(wrapper.hasClass(styles.footer));
});
