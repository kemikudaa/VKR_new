const THREE = {
  AmbientLight: jest.fn().mockImplementation(() => ({
    isLight: true,
  })),
  DirectionalLight: jest.fn().mockImplementation(() => ({
    isLight: true,
    position: { set: jest.fn() },
  })),
  PointLight: jest.fn().mockImplementation(() => ({
    isLight: true,
    position: { set: jest.fn() },
  })),
  Object3D: jest.fn().mockImplementation(() => ({
    isObject3D: true,
  })),
  Vector3: jest.fn().mockImplementation(() => ({
    set: jest.fn(),
  })),
};

module.exports = THREE;