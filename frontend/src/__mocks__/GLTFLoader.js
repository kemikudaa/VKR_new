// export const GLTFLoader = jest.fn().mockImplementation(() => ({
//   load: jest.fn((url, callback) => {
//     callback({ scene: { isObject3D: true } });
//   }),
// }));

export class GLTFLoader {
  load = jest.fn((url, onLoad) => {
    onLoad && onLoad({ scene: {} }); // простая заглушка
  });
}