import React from 'react';
import { render, screen } from '@testing-library/react';
import CircleContainer from './Components/Circle';

test('loads and displays Timer', () => {
  render(
    <CircleContainer time={3000} togglePause={() => {}} shouldAnimate={false} timeLimit={5000} />
  );
  const container = screen.getByTestId('circle-container');
  expect(container).toBeVisible();
});
