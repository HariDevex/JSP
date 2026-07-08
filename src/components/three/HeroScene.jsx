import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useDeviceTier } from './useDeviceTier';

function Shape({ geometry, color, position, scale, speed, mouseFactor }) {
  const ref = useRef();
  const mouseVec = useRef(new THREE.Vector2());

  useFrame(({ pointer }, delta) => {
    if (!ref.current) return;
    mouseVec.current.lerp(pointer, 0.05);
    ref.current.rotation.x += delta * speed * 0.3;
    ref.current.rotation.y += delta * speed * 0.5;
    ref.current.position.x = position[0] + mouseVec.current.x * mouseFactor;
    ref.current.position.y = position[1] + mouseVec.current.y * mouseFactor;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <primitive object={geometry} />
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const { isLowTier } = useDeviceTier();

  const geometries = useMemo(() => {
    const geo = [
      new THREE.TorusKnotGeometry(0.6, 0.2, 64, 8),
      new THREE.IcosahedronGeometry(0.5),
      new THREE.OctahedronGeometry(0.45),
      new THREE.TorusGeometry(0.5, 0.15, 16, 32),
    ];
    return geo;
  }, []);

  const shapes = useMemo(() => {
    if (isLowTier) {
      return [
        { geometry: geometries[0], color: '#0d9488', position: [0, 0.5, 0], scale: 0.8, speed: 0.5, mouseFactor: 0.3 },
        { geometry: geometries[1], color: '#6366f1', position: [1.8, -0.8, -1], scale: 0.6, speed: 0.3, mouseFactor: 0.2 },
      ];
    }
    return [
      { geometry: geometries[0], color: '#0d9488', position: [-2, 1, 0], scale: 1, speed: 0.6, mouseFactor: 0.5 },
      { geometry: geometries[1], color: '#6366f1', position: [2, -1, -1], scale: 0.8, speed: 0.4, mouseFactor: 0.4 },
      { geometry: geometries[2], color: '#f59e0b', position: [-1.5, -1.5, -2], scale: 0.7, speed: 0.5, mouseFactor: 0.3 },
      { geometry: geometries[3], color: '#ec4899', position: [1.8, 1.5, -1.5], scale: 0.7, speed: 0.35, mouseFactor: 0.35 },
    ];
  }, [isLowTier, geometries]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 2, -3]} intensity={0.6} color="#6366f1" />
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </>
  );
}
