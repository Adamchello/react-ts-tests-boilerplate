import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '../pages/Home';

it('renders button with children', () => {
  act(() => {
    render(<Home />);
  });
  expect(screen.getByTestId('my-test-id').textContent).toBe('Home');
});
