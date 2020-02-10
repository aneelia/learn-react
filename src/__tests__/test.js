import React from 'react';
// import expect method for checking results
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

const Button = () => (
  <button onClick={() => {}}>Click me!</button>
);

test('check button in thee DOM after rendering', () => {
  const { getByText } = render(<Button />);
  const button = getByText('Click me!');

  expect(button).toBeInTheDocument();
});

test('check if button clicked', () => {
  const { getByText } = render(<Button />);
  const button = getByText('Click me!');

  Simulate.click(button);
});
