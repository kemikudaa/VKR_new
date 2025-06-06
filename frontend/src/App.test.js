// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/APROTAG/i)).toBeInTheDocument();
});