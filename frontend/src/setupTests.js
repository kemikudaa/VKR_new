// Полифилл для TextEncoder и TextDecoder
const { TextEncoder, TextDecoder } = require('text-encoding');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import 'whatwg-fetch';
import '@testing-library/jest-dom';