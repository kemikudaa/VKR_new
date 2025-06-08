import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainMenu from '../components/MainMenu';

// Подавляем предупреждения React Router
jest.spyOn(console, 'warn').mockImplementation((message) => {
  if (message.includes('React Router Future Flag Warning')) {
    return;
  }
  console.warn(message);
});

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('MainMenu', () => {
  it('рендерится корректно на русском', () => {
    renderWithRouter(<MainMenu />);
    expect(screen.getByTestId('nav-about-us-desktop')).toHaveTextContent(/О НАС/i);
    expect(screen.getByTestId('nav-catalog-desktop')).toHaveTextContent(/КАТАЛОГ/i);
    expect(screen.getByTestId('nav-collections-desktop')).toHaveTextContent(/КОЛЛЕКЦИИ/i);
    expect(screen.getByText(/Я АВТОР/i)).toBeInTheDocument();
  });

  it('рендерится корректно на английском', () => {
    renderWithRouter(<MainMenu lang="en" />);
    expect(screen.getByTestId('nav-about-us-desktop')).toHaveTextContent(/ABOUT US/i);
    expect(screen.getByTestId('nav-catalog-desktop')).toHaveTextContent(/CATALOG/i);
    expect(screen.getByTestId('nav-collections-desktop')).toHaveTextContent(/COLLECTIONS/i);
    expect(screen.getByText(/I AM AN AUTHOR/i)).toBeInTheDocument();
  });

  it('открывает мобильное меню при клике на гамбургер', () => {
    renderWithRouter(<MainMenu />);
    const hamburgerButton = screen.getByText('☰');
    fireEvent.click(hamburgerButton);
    expect(screen.getByText('✕')).toBeInTheDocument();
    expect(screen.getByTestId('nav-about-us-mobile')).toBeInTheDocument();
    expect(screen.getByTestId('nav-catalog-mobile')).toBeInTheDocument();
    expect(screen.getByTestId('nav-collections-mobile')).toBeInTheDocument();
  });

  it('отображает мета-теги для SEO', async () => {
    renderWithRouter(<MainMenu />);
    await waitFor(() => {
      expect(document.title).toBe('APROTAG - Авторские ювелирные изделия');
    });
  });

  it('проверяет корректность ссылок навигации', () => {
    renderWithRouter(<MainMenu />);
    const aboutUsLink = screen.getByTestId('nav-about-us-desktop').closest('a');
    const catalogLink = screen.getByTestId('nav-catalog-desktop').closest('a');
    const collectionsLink = screen.getByTestId('nav-collections-desktop').closest('a');

    expect(aboutUsLink).toHaveAttribute('href', '/AboutUs');
    expect(catalogLink).toHaveAttribute('href', '/Catalog');
    expect(collectionsLink).toHaveAttribute('href', '/Collections');
  });
});