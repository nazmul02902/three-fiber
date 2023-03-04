import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Canvas style={{ height: "100vh" }}>
    <OrbitControls />
    {/* <ambientLight intensity={0.9}/> */}
    {/* <directionalLight color="red" position={[1, 1, 1]} /> */}
    <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
    <mesh rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[3, 3]} />
    </mesh>
  </Canvas>
);
