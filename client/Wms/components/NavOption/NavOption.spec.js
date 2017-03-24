import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import NavOption from './NavOption';

const props = {
  name: 'name',
  path: 'path'
};

test('should be a li element', t => {
  const wrapper = shallow(<NavOption {...props}/>);
  t.is(wrapper.type(), 'li');
});

test('should have a NavLink', t => {
  const wrapper = shallow(<NavOption {...props}/>);
  const LinkComponent = wrapper.find(NavLink);

  t.is(LinkComponent.length, 1);
  t.is(LinkComponent.prop('to'), props.path);
  t.is(LinkComponent.find('span').text(), props.name);
});
