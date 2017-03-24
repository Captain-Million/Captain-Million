import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import cn from 'classnames';

import createCell from './createCell';
import styles from './createCell.css';

const TestCell = props => (<div {...props}/>);

const TestComponent = createCell(TestCell);

const propsNoDataOrOptions = {
  fieldType: 'type',
  fieldData: null
}

const propsNoOptions = {
  fieldType: 'type',
  fieldData: 'data',
};

const propsOptions = {
  ...propsNoOptions,
  fieldOptions: 'options'
};

test('should be a TableCell component', t => {
  const wrapper = shallow(<TestComponent {...propsNoDataOrOptions}/>);
  t.is(wrapper.type(), TestCell);
});

test('should show the cell data', t => {
  const wrapperNoData = shallow(<TestComponent {...propsNoDataOrOptions}/>);
  const wrapperData = shallow(<TestComponent {...propsNoOptions}/>);

  t.is(wrapperNoData.children().node, undefined);
  t.is(wrapperData.children().node, propsNoOptions.fieldData);
});

test('should have type class with a possible option class', t => {
  const wrapperNoOptions = shallow(<TestComponent {...propsNoOptions}/>);
  const wrapperOptions = shallow(<TestComponent {...propsOptions}/>);

  t.true(wrapperNoOptions.hasClass(
    styles[propsNoOptions.fieldType]
  ));

  t.true(wrapperOptions.hasClass(
    cn(
      styles[propsOptions.fieldType],
      styles[propsOptions.fieldOptions]
    )
  ));
});
