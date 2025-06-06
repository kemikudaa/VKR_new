module.exports = {
  ...jest.requireActual('three'),
  GLTFLoader: jest.fn().mockImplementation(() => ({
    load: jest.fn((url, onLoad) => {
      onLoad({ scene: {} }); // Мок для загрузки модели
    }),
  })),
};