import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Canvas style={{ height: "100vh" }}>
    <color attach={"background"} args={[0, 0, 0]} />
    <OrbitControls maxPolarAngle={1.45} />
    {/* <spotLight
     color={[1, 0.25, 0.7]}
     intensity={1.5}
     angle={0.6}
     penumbra={0.5}
     position={[5, 5, 0]}
     castShadow
     shadow-bias={-0.0001}
    />
    <spotLight
     color={[1, 0.25, 0.7]}
     intensity={1.5}
     angle={0.6}
     penumbra={0.5}
     position={[-5, 5, 0]}
     castShadow
     shadow-bias={-0.0001}
    /> */}
    <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
    <mesh rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[10, 10]} />
      {/* <meshPhongMaterial attach="material" color="red" /> */}
    </mesh>
  </Canvas>
);
