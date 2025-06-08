module.exports = {
  jest: {
    configure: {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^three$': '<rootDir>/src/__mocks__/three.js',
        '^@react-three/fiber$': '<rootDir>/src/__mocks__/@react-three/fiber.js',
        '^@react-three/drei$': '<rootDir>/src/__mocks__/@react-three/drei.js',
        '^three/examples/jsm/loaders/GLTFLoader.js$': '<rootDir>/src/__mocks__/GLTFLoader.js',
      },
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: [
        '/node_modules/(?!three/examples/jsm/.*)',
      ],
    },
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      return middlewares;
    },
  },
  webpack: {
    configure: {
      ignoreWarnings: [
        (warning) => warning.message.includes('Failed to parse source map'),
      ],
    },
  },
};