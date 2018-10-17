import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Calculator from './Calculator';




test('renders without crashing', () => {
  expect(() => 1).toBeTruthy();
});


test('should change the text on click', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.one').simulate('click');
  
  expect(calc.find('.screen').prop('children')).toEqual('1');
});
