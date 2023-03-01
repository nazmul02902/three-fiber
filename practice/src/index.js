import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Canvas>
    <ambientLight intensity={0.3} />
    <directionalLight color="red" position={[0, 0, 3]} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </Canvas>
);
