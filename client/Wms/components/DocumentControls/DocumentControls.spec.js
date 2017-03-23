import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import DocumentControls from './DocumentControls';
import styles from './DocumentControls.css';

test('contains links', t => {
  const wrapper = shallow(<DocumentControls/>);
  const links = wrapper.find('a');

  t.true(links.length >= 1);
  links.forEach(
    node => t.true(node.hasClass(styles.button))
  );
});

test('contains a default link', t => {
  const wrapper = shallow(<DocumentControls/>);
  
  t.true(wrapper
    .find('a')
    .find(`.${styles.button_default}`)
    .length === 1
  );
});
