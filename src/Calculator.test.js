import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Calculator from './Calculator';


test('renders without crashing', () => {
  expect(() => 1).toBeTruthy();
});


test('click 1', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.one').simulate('click');
  
  expect(calc.find('.screen').prop('children')).toEqual(1);

  calc.unmount();
});


test('1 + 1', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.one').simulate('click');
  calc.find('.evaluate').simulate('click');

  
  expect(calc.find('.screen').prop('children')).toEqual(2);
  calc.unmount();
});


test('9 - 4', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.nine').simulate('click');
  calc.find('.minus').simulate('click');
  calc.find('.four').simulate('click');
  calc.find('.evaluate').simulate('click');

  expect(calc.find('.screen').prop('children')).toEqual(5);
  calc.unmount();
});

test('7 x 5', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.seven').simulate('click');
  calc.find('.multiply').simulate('click');
  calc.find('.five').simulate('click');
  calc.find('.evaluate').simulate('click');

  expect(calc.find('.screen').prop('children')).toEqual(35);
  calc.unmount();
});

test('7 x 16', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.seven').simulate('click');
  calc.find('.multiply').simulate('click');
  calc.find('.one').simulate('click');
  calc.find('.six').simulate('click');
  calc.find('.evaluate').simulate('click');

  expect(calc.find('.screen').prop('children')).toEqual(112);
  calc.unmount();
});

test('1 + 1 + 1', () => {
  const calc = mount(
      <Calculator />
  );
  
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.one').simulate('click');
  calc.find('.evaluate').simulate('click');

  
  expect(calc.find('.screen').prop('children')).toEqual(3);
  calc.unmount();
});