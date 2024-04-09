import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter.js';

test('renders counter message', () => {
  const { getByText } = render(<Counter />);
  const counts = getByText('Counter');
  expect(counts).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const { getByTestId, getByText } = render(<Counter />);
  const countElement = getByTestId('count');
  const incrButton = getByText('+');

  fireEvent.click(incrButton);
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const { getByTestId, getByText } = render(<Counter />);
  const countElement = getByTestId('count');
  const decrButton = getByText('-');

  fireEvent.click(decrButton);
  expect(countElement).toHaveTextContent('-1');
});
