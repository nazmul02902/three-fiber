import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Scene = () => (
  <>
    <OrbitControls />
    <mesh castShadow>
      <meshStandardMaterial color={"red"} />
      <boxBufferGeometry/>
    </mesh>
  </>
);

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
