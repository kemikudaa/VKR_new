export class GLTFLoader {
  load = jest.fn((url, onLoad) => {
    onLoad && onLoad({ scene: {} }); // простая заглушка
  });
}