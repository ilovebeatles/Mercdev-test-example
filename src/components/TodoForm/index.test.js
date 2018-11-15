import React from 'react';
import { mount } from 'enzyme'
import TodoForm from './';

it('renders correctly', () => {
  const component = mount(<TodoForm addItem={() => {}}/>);
  expect(component).toMatchSnapshot();
});

test('created todo is passed to parent component on form submit', () => {
  const addItem = jest.fn();
  const mockTodoValue = 'mock todo';
  const component = mount(<TodoForm addItem={addItem}/>);

  component.find('input').first().simulate('change', {
    target: {
      value: mockTodoValue,
    }
  });

  component.find('form').first().simulate('submit');
  expect(addItem).toHaveBeenCalledWith({ newItemValue: mockTodoValue });
});
