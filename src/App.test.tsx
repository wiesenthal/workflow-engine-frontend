import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { equals } from '@jest/expect-utils';

// Example:
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders WorkflowSpace', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('WorkflowSpace').length).toBe(1);
});

test('renders ExecuteWorkflowButton', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('ExecuteWorkflowButton').length).toBe(1);
});