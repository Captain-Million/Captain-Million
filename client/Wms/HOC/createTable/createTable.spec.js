import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import createTable, { Th, Td } from './createTable';
import styles from './createTable.css';

const fields = [
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

const props = {
  products: [
    {
      _id: 'id1',
      name1: 'data1'
    },
    {
      _id: 'id2',
      name1: 'data2'
    }
  ]
};

const TestTable = createTable(fields);

test('should be a tr element', t => {
  const wrapper = shallow(<TestTable {...props}/>);
  t.is(wrapper.type(), 'table');
});

test('should have a thead with a single row element', t => {
  const wrapper = shallow(<TestTable {...props}/>);
  t.is(wrapper.find('thead').children().length, 1);
});

test('should have a tbody with a row for each product', t => {
  const wrapper = shallow(<TestTable {...props}/>);
  t.is(wrapper.find('tbody').children().length, 2);
});

test('should have a th', t => {
  const wrapper = shallow(<Th/>);
  t.is(wrapper.type(), 'th')
});

test('should have a td', t => {
  const wrapper = shallow(<Td/>);
  t.is(wrapper.type(), 'td')
});
