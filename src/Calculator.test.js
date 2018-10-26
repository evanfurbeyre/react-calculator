import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Calculator from './Calculator';


test('renders without crashing', () => {
  expect(() => 1).toBeTruthy();
});


test('1', () => {
  const calc = mount(
      <Calculator />
  ); 
  calc.find('.one').simulate('click'); 
  expect(calc.find('.screen').prop('children')).toEqual('1');
  calc.unmount();
});

test('12', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.one').simulate('click');
  calc.find('.two').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('12');
  calc.unmount();
});

test('1 +', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('1');
  calc.unmount();
});



test('1 + 2', () => {
  const calc = mount(
      <Calculator />
  );  
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.two').simulate('click');  
  expect(calc.find('.screen').prop('children')).toEqual('2');
  calc.unmount();
});

test('1 + 2 +', () => {
  const calc = mount(
      <Calculator />
  );  
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.two').simulate('click');  
  calc.find('.plus').simulate('click');  

  expect(calc.find('.screen').prop('children')).toEqual('3');
  calc.unmount();
});


test('9 - 4 - ', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.nine').simulate('click');
  calc.find('.minus').simulate('click');
  calc.find('.four').simulate('click');
  calc.find('.evaluate').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('5');
  calc.unmount();
});

test('7 x 5 =', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.seven').simulate('click');
  calc.find('.multiply').simulate('click');
  calc.find('.five').simulate('click');
  calc.find('.evaluate').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('35');
  calc.unmount();
});


test('1 + 4 - 2', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.one').simulate('click');
  calc.find('.evaluate').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('3');
  calc.unmount();
});

test('4 *-1', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.four').simulate('click');
  calc.find('.invert').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('-4');
  calc.unmount();
});

test('4 %', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.four').simulate('click');
  calc.find('.percent').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('0.04');
  calc.unmount();
});

test('1 + +', () => {
  const calc = mount(
      <Calculator />
  );
  calc.find('.one').simulate('click');
  calc.find('.plus').simulate('click');
  calc.find('.plus').simulate('click');
  expect(calc.find('.screen').prop('children')).toEqual('1');
  calc.unmount();
});