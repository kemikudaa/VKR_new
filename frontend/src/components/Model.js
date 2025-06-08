import { useGLTF } from '@react-three/drei';

const Model = ({ fileUrl }) => {
  const { scene } = useGLTF(fileUrl);
  return <primitive object={scene} />;
};

export default Model;