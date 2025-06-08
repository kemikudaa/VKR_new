import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';

jest.mock('@react-three/fiber');
jest.mock('@react-three/drei');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;