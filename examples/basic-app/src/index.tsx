import React from 'react';
import ReactDOM from 'react-dom/client';
import { fiber, drei, useThreeObject, useAnimate } from 'triadjs-core';

function RotatingBox() {
  const ref = React.useRef<any>(null);
  useAnimate(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={[0, 2, 0]} castShadow receiveShadow>
      <boxGeometry args={[4, 4, 4]} />
      <meshPhysicalMaterial
        color="#ff9900"
        roughness={0.3}
        metalness={0.7}
        clearcoat={0.3}
        clearcoatRoughness={0.1}
        reflectivity={0.7}
        iridescence={0.1}
      />
    </mesh>
  );
}

function App() {
  return (
    <fiber.Canvas
      camera={{ position: [10, 10, 12], fov: 50 }}
      shadows
      style={{ width: '100vw', height: '100vh', display: 'block' }}
    >
      <drei.OrbitControls makeDefault enableDamping />
      <drei.Grid infiniteGrid cellSize={1} sectionColor={'#888'} fadeDistance={40} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 7]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh receiveShadow position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
      <RotatingBox />
    </fiber.Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
