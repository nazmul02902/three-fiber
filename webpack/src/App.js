import { Canvas } from "@react-three/fiber";
import {  OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import Ground from "./components/Ground";
import { Car } from "./components/Car";

const CarShow = () => {
  return (
    <>
    {/* <ambientLight/> */}
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color attach={"background"} args={[0, 0, 0]} />
      <Ground/>
      <Car/>
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows style={{ height: "100vh" }}>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
