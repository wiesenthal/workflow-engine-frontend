import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Example:
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

jest.mock('socket.io-client', () => {
  return jest.fn(() => ({
    emit: jest.fn(),
    on: jest.fn(),
    // Add other socket methods you use as needed
  }));
});

test('renders WorkflowSpace', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('WorkflowSpace').length).toBe(1);
});

test('renders ExecuteWorkflowButton', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('ExecuteWorkflowButton').length).toBe(1);
});

test('renders WorkflowSelector', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('WorkflowSelector').length).toBe(1);
});