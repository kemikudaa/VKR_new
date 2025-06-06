module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  jest: {
    configure: {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
      modulePaths: ['<rootDir>/node_modules'],
      transformIgnorePatterns: [
        '/node_modules/(?!axios|three|@mediapipe)/', // Добавляем @mediapipe для EarTracker
      ],
      transform: {
        '^.+\\.(js|jsx|mjs|cjs)$': 'babel-jest',
      },
      moduleNameMapper: {
        '^three/examples/jsm/loaders/GLTFLoader$': '<rootDir>/src/__mocks__/three.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Для CSS-файлов
      },
    },
  },
};