export const Canvas = ({ children, ...props }) => (
  <div data-testid={props['data-testid'] || 'canvas-mock'}>{children}</div>
);
export const useFrame = jest.fn();
export const useThree = jest.fn(() => ({}));