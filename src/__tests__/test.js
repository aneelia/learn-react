import React from 'react';
// import expect method for checking results
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

const ShowText = ({ children }) => <div>{children}</div>;

test('check text in document after rendering', () => {
  const testMessage = 'Test Message';
  render(<ShowText>{testMessage}</ShowText>);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

test('check click attribute', () => {
  const testMessage = 'Test Message';
  render(<ShowText>{testMessage}</ShowText>);

  expect(screen.getByText(testMessage)).toHaveAttribute('click');
});

xtest('skip this', () => {});
