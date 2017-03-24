import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import createRowType from './createRowType';
import styles from './createRowType.css';

const propsNoData = {
  fields: [
    {
      type: 'type1',
      name: 'name1',
      title: 'title1'
    },
    {
      type: 'type2',
      name: 'name2',
      title: 'title2',
      options: 'options'
    },
  ]
};

const propsWithData = {
  ...propsNoData,
  data: {
    name1: 'data1',
    name2: 'data2'
  }
};

const TestComponent = props => (<td {...props}/>);

const TestRow = createRowType(TestComponent);

test('should be a tr element', t => {
  const wrapper = shallow(<TestRow {...propsNoData}/>);
  t.is(wrapper.type(), 'tr');
});

test('should have cells based on the number of fields', t => {
  const wrapper = shallow(<TestRow {...propsNoData}/>);
  t.is(wrapper.find('tr').children().length, 2)
});

test('should use field input if no data has been provided', t => {
  const expected = {
    fieldType: propsNoData.fields[0].type,
    fieldData: propsNoData.fields[0].title,
    fieldOptions: undefined
  };

  const wrapper = shallow(<TestRow {...propsNoData}/>);

  t.deepEqual(wrapper.find('tr').children().node.props, expected);
});

test('should use data if data was provided', t => {
  const expected = {
    fieldType: propsWithData.fields[0].type,
    fieldData: propsWithData.data[propsWithData.fields[0].name],
    fieldOptions: undefined
  };

  const wrapper = shallow(<TestRow {...propsWithData}/>);

  t.deepEqual(wrapper.find('tr').children().node.props, expected);
});

test('should use options only if data was provided', t => {
  const expectedIfData = {
    fieldType: propsWithData.fields[1].type,
    fieldData: propsWithData.data[propsWithData.fields[1].name],
    fieldOptions: propsWithData.fields[1].options
  };

  const expectedIfNoData = {
    fieldType: propsNoData.fields[1].type,
    fieldData: propsNoData.fields[1].title,
    fieldOptions: undefined
  };

  const wrapperNoData = shallow(<TestRow {...propsNoData}/>);
  const wrapperWithData = shallow(<TestRow {...propsWithData}/>);

  t.deepEqual(wrapperNoData.find('tr').children().nodes[1].props, expectedIfNoData);
  t.deepEqual(wrapperWithData.find('tr').children().nodes[1].props, expectedIfData);
});
