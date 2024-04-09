"use client"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FC, Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/Addons.js";

const Earth: FC = () => {
  const earth = useGLTF("./planet/scene.gltf") as unknown as GLTF;
  return (
    <primitive object={earth.scene} scale={1.5} rotation-y={0} />
  );
};

const EarthCanvas: FC = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,

      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;