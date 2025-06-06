// src/__tests__/MainMenu.test.js
const { TextEncoder, TextDecoder } = require('text-encoding');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainMenu from '../components/MainMenu';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('MainMenu', () => {
  test('renders MainMenu на русском языке', () => {
    renderWithRouter(<MainMenu />);
    expect(screen.getByText('APROTAG')).toBeInTheDocument();
    expect(screen.getByTestId('nav-about-us')).toHaveTextContent('О НАС');
    expect(screen.getByTestId('nav-catalog')).toHaveTextContent('КАТАЛОГ');
    expect(screen.getByTestId('nav-collections')).toHaveTextContent('КОЛЛЕКЦИИ');
    expect(screen.getByText('Я АВТОР')).toBeInTheDocument();
  });

  test('renders MainMenu на английском языке', () => {
    renderWithRouter(<MainMenu lang="en" />);
    expect(screen.getByText('APROTAG')).toBeInTheDocument();
    expect(screen.getByTestId('nav-about-us')).toHaveTextContent('ABOUT US');
    expect(screen.getByTestId('nav-catalog')).toHaveTextContent('CATALOG');
    expect(screen.getByTestId('nav-collections')).toHaveTextContent('COLLECTIONS');
    expect(screen.getByText('I AM AN AUTHOR')).toBeInTheDocument();
  });

  test('открывает мобильное меню при клике на гамбургер', async () => {
    renderWithRouter(<MainMenu />);
    const hamburgerButton = screen.getByText('☰');
    fireEvent.click(hamburgerButton);
    expect(screen.getByText('✕')).toBeInTheDocument();
    // Проверяем мобильное меню
    const mobileMenu = await screen.findByTestId('nav-about-us', {
      container: document.querySelector('.bg-black\\/90'),
    });
    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveTextContent('О НАС');
  });

  test('отображает правильные мета-теги для русского языка', async () => {
    renderWithRouter(<MainMenu />);
    await waitFor(() => {
      expect(document.title).toBe('APROTAG - Авторские ювелирные изделия');
      expect(document.querySelector('meta[name="description"]')?.content).toBe(
        'Платформа APROTAG: уникальные ювелирные изделия с 3D-визуализацией. Купите серьги, кольца и авторские коллекции.'
      );
    });
  });

  test('проверяет корректность ссылок в навигации', () => {
    renderWithRouter(<MainMenu />);
    const aboutUsLink = screen.getByTestId('nav-about-us').closest('a');
    const catalogLink = screen.getByTestId('nav-catalog').closest('a');
    expect(aboutUsLink).toHaveAttribute('href', '/AboutUs');
    expect(catalogLink).toHaveAttribute('href', '/Catalog');
  });
});