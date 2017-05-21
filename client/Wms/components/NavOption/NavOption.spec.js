import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import NavOption from './NavOption';
import sampleIcon from '../Navigation/icons/arrival.png';

const props = {
  name: 'name',
  path: 'path',
  icon: sampleIcon,
};

test('should have a NavLink', (t) => {
  const wrapper = shallow(<NavOption {...props} />);
  const LinkComponent = wrapper.find(NavLink);

  t.is(LinkComponent.length, 1);
  t.is(LinkComponent.prop('to'), props.path);
  t.is(LinkComponent.find('span').text(), props.name);
});
