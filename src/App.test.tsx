import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

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
    off: jest.fn(),
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

test('renders ChangeDebugModeCheckbox', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('ChangeDebugModeCheckbox').length).toBe(1);
});

test('renders DebugBox if debug mode is on', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('DebugBox').length).toBe(0);
  const debugModeButton = container.getElementsByClassName('ChangeDebugModeCheckbox')[0] as HTMLInputElement;
  act(() => {
    debugModeButton.click();
  });
  expect(container.getElementsByClassName('DebugBox').length).toBe(1);
});