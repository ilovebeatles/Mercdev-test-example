import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import App from './App';

it('renders correctly', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

