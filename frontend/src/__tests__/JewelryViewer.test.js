// src/__tests__/JewelryViewer.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JewelryWrapper from '../components/JewelryViewer';

// Мокируем axios
jest.mock('axios');
import axios from 'axios';

const mockJewelryData = {
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
};

const renderWithRouter = (jewelryId = '1') => {
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="/jewelry/:jewelryId" element={<JewelryWrapper />} />
      </Routes>
    </BrowserRouter>,
    { initialEntries: [`/jewelry/${jewelryId}`] }
  );
};

describe('JewelryViewer', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockJewelryData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('отображает состояние загрузки при ожидании данных', () => {
    renderWithRouter();
    expect(screen.getByText('Загрузка...')).toBeInTheDocument();
  });

  test('отображает данные украшения после загрузки', async () => {
    renderWithRouter();
    await waitFor(() => {
      expect(screen.getByText('Test Earring')).toBeInTheDocument();
      expect(screen.getByText('1800 Р.')).toBeInTheDocument();
      expect(screen.getByText('Материал: Silver')).toBeInTheDocument();
      expect(screen.getByText('Размер: one size')).toBeInTheDocument();
    });
  });

  test('отображает сообщение об ошибке при неудачном запросе', async () => {
    axios.get.mockRejectedValue(new Error('Server error'));
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    renderWithRouter();
    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Не удалось загрузить украшение. Пожалуйста, попробуйте позже.');
    });

    mockAlert.mockRestore();
  });

  test('рендерит 3D-модель, если файл указан', async () => {
    renderWithRouter();
    await waitFor(() => {
      const canvas = document.querySelector('canvas');
      expect(canvas).toBeInTheDocument();
    });
  });

  test('отображает изображение-заглушку, если 3D-файл отсутствует', async () => {
    axios.get.mockResolvedValue({ data: { ...mockJewelryData, three_d_file: null } });

    renderWithRouter();
    await waitFor(() => {
      const placeholderImage = screen.getByAltText('Test Earring');
      expect(placeholderImage).toHaveAttribute('src', '/img/SnapBG.ai_1745139437294 1.png');
    });
  });

  test('отображает правильные мета-теги', async () => {
    renderWithRouter();
    await waitFor(() => {
      expect(document.title).toBe('Test Earring - APROTAG');
      expect(document.querySelector('meta[name="description"]').content).toBe('Beautiful test earring');
    });
  });
});