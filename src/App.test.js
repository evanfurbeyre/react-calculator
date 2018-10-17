import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import React from 'react';
import {render} from 'react-testing-library';
import App from './App';


test('renders without crashing', () => {
  const {getByText} = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});