import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Canvas style={{ height: "100vh" }}>
    <OrbitControls />
    {/* <ambientLight intensity={0.9}/> */}
    <directionalLight color="red" position={[1, 1, 1]} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
    <SpotLight position={[3, 3, 0]} castShadow  />
    <SpotLight position={[-3, 3, 0]} color={[1, 0.25, 0.7]} angle={0.6} castShadow  />
  </Canvas>
);
