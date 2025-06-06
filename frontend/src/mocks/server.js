// Полифилл для TextEncoder и TextDecoder
const { TextEncoder, TextDecoder } = require('text-encoding');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
  rest.get('http://127.0.0.1:8000/jewelries/:jewelryId', (req, res, ctx) => {
    const { jewelryId } = req.params;
    return res(
      ctx.json({
        id: parseInt(jewelryId),
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
      })
    );
  })
);