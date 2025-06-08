import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas-wrapper">{children}</div>,
  useFrame: () => {},
  useThree: () => ({}),
}));

jest.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
  PerspectiveCamera: () => null,
  useGLTF: () => ({
    scene: { isObject3D: true },
    nodes: {},
    materials: {},
  }),
}));

import JewelryViewer from '../components/JewelryViewer';

jest.mock('../components/Model', () => ({
  __esModule: true,
  default: () => <div data-testid="canvas-mock">Mock Model</div>,
}));

// Устанавливаем увеличенный таймаут
jest.setTimeout(40000);

// Моки
// jest.mock('@react-three/fiber');
// jest.mock('@react-three/drei');
jest.mock('axios');

const renderWithRouter = (ui, { route = '/jewelry/1', lang = 'ru' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="/jewelry/:jewelryId" element={ui} />
      </Routes>
    </BrowserRouter>
  );
};

describe('JewelryViewer', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  it('показывает состояние загрузки', () => {
    axios.get.mockImplementation(() => new Promise(() => { }));
    renderWithRouter(<JewelryViewer />, { lang: 'ru' });
    expect(screen.getByText(/Загрузка.../i)).toBeInTheDocument();
  });

  it('отображает данные об украшении', async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'Test Earring',
        price: 1800,
        description: 'Beautiful test earring',
        sku: 'TEST123',
        three_d_file: '/models/test_earring.glb',
        dimensions: 'one size',
        materials: [{ id: 1, name: 'Silver' }],
        author: { id: 1, name: 'Test Author' },
        collection: { id: 1, name: 'Test Collection' },
        category: { id: 1, name: 'Earrings' },
        images: [{ id: 1, file_path: '/images/test.jpg', is_primary: true }],
      },
    });
    renderWithRouter(<JewelryViewer />, { lang: 'ru' });
    await waitFor(() => {
      expect(screen.getByTestId('jewelry-name')).toHaveTextContent(/Test Earring/i);
      expect(screen.getByText(/1800 Р./i)).toBeInTheDocument();
      // Проверяем материал более гибко
      const materialText = screen.queryByText(/Материал:/i);
      if (!materialText) {
        console.log('Материал не найден. DOM:', document.body.innerHTML);
      }
      expect(materialText).toBeInTheDocument();
      expect(screen.getByText(/Размер:/i)).toBeInTheDocument();
    }, { timeout: 10000 });
  });
  it('обрабатывает ошибку API', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => { });
    renderWithRouter(<JewelryViewer />, { lang: 'ru' });
    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Не удалось загрузить украшение. Пожалуйста, попробуйте позже.');
      expect(screen.getByText(/Ошибка: Network Error/i)).toBeInTheDocument();
    }, { timeout: 10000 });
    alertSpy.mockRestore();
  });
  it('показывает загрузку 3D-модели в Suspense', async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'Test Earring',
        price: 1800,
        description: 'Beautiful test earring',
        sku: 'TEST123',
        three_d_file: '/models/test_earring.glb',
        dimensions: 'one size',
        materials: [{ id: 1, name: 'Silver' }],
        author: { id: 1, name: 'Test Author' },
        collection: { id: 1, name: 'Test Collection' },
        category: { id: 1, name: 'Earrings' },
        images: [{ id: 1, file_path: '/images/test.jpg', is_primary: true }],
      },
    });

    renderWithRouter(<JewelryViewer />, { lang: 'ru' });
    // expect(screen.getByTestId('loading-3d')).toBeInTheDocument();
    expect(screen.getByText('Загрузка...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId('canvas-mock')).toBeInTheDocument();
    }, { timeout: 10000 });
  });

  it('показывает заглушку, если 3D-файл отсутствует', async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'Test Earring',
        price: 1800,
        description: 'Beautiful test earring',
        sku: 'TEST123',
        three_d_file: null,
        dimensions: 'one size',
        materials: [{ id: 1, name: 'Silver' }],
        author: { id: 1, name: 'Test Author' },
        collection: { id: 1, name: 'Test Collection' },
        category: { id: 1, name: 'Earrings' },
        images: [{ id: 1, file_path: '/images/test.jpg', is_primary: true }],
      },
    });
    renderWithRouter(<JewelryViewer />, { lang: 'ru' });
    await waitFor(() => {
      expect(screen.getByRole('img', { name: /Test Earring/i })).toBeInTheDocument();
    }, { timeout: 10000 });
  });
});