import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios');
jest.mock('three/examples/jsm/loaders/GLTFLoader');

// Подавляем предупреждения React Router
jest.spyOn(console, 'warn').mockImplementation((message) => {
  if (message.includes('React Router Future Flag')) {
    return;
  }
  console.warn(message);
});

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/apro__ ___tag./i)).toBeInTheDocument();
  });
});