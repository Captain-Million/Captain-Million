import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import DocumentContainer from './DocumentContainer';
import styles from './DocumentContainer.css';

test('should add a css styled container for its children', t => {
  const props = { children: 'test' }
  const wrapper = shallow(<DocumentContainer {...props}/>);
  t.true(wrapper.contains(
    <div children='test' className={styles.documentContainer}/>
  ))
});
