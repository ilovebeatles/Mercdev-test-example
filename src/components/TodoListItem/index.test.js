import React from 'react';
import { shallow } from 'enzyme'
import TodoListItem from './';

it('renders correctly', () => {
  const item = {
    done: true,
    value: 'test'
  };
  const component = shallow(<TodoListItem  item={item}/>);
  expect(component).toMatchSnapshot();
});
