import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useDeviceTier } from '../useDeviceTier';

const LETTER_POSITIONS = [
  { char: 'J', position: [-1.2, 0, 0], scale: 1 },
  { char: 'S', position: [0, 0.1, 0], scale: 1 },
  { char: 'P', position: [1.2, -0.05, 0], scale: 1 },
];

const BEAR_POINTS = [
  [-2.8, 1.2, 0], [-2.4, 1.6, 0.2], [-2.0, 1.2, 0],
  [-1.5, 0.6, -0.2], [-1.2, 0.2, 0], [-0.8, -0.2, 0.1],
  [-0.4, -0.6, -0.1], [0, -1.0, 0], [0.4, -0.6, 0.1],
  [0.8, -0.2, -0.1], [1.2, 0.2, 0], [1.5, 0.6, 0.2],
  [2.0, 1.2, 0], [2.4, 1.6, -0.2], [2.8, 1.2, 0],
  [2.0, 1.8, 0.3], [2.0, 2.2, 0], [2.0, 1.8, -0.3],
  [-2.0, 1.8, 0.3], [-2.0, 2.2, 0], [-2.0, 1.8, -0.3],
  [0, 0.5, -0.5], [0, 0, 0.5],
];

function Letter({ position, scrollRef }) {
  const meshRef = useRef();
  const materialRef = useRef();
  const baseY = position[1];

  useFrame(({ pointer }) => {
    if (!meshRef.current || !materialRef.current) return;
    const scroll = scrollRef?.current || { progress: 0, velocity: 0 };
    const drift = Math.sin(scroll.progress * Math.PI * 2 + position[0]) * 0.3;
    meshRef.current.position.y = baseY + drift;
    meshRef.current.rotation.x = pointer.y * 0.1 + scroll.progress * 0.2;
    meshRef.current.rotation.z = pointer.x * 0.1;
    materialRef.current.emissiveIntensity = 0.2 + scroll.progress * 0.3;
  });

  const geo = useMemo(() => {
    const g = new THREE.BoxGeometry(0.6, 0.8, 0.3);
    return g;
  }, []);

  return (
    <mesh ref={meshRef} position={position} geometry={geo}>
      <meshPhysicalMaterial
        ref={materialRef}
        color="#0d9488"
        metalness={0.8}
        roughness={0.15}
        clearcoat={0.4}
        emissive="#0d9488"
        emissiveIntensity={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function BearConstellation({ scrollRef }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const scroll = scrollRef?.current || { progress: 0, velocity: 0 };
    groupRef.current.rotation.y += delta * (0.2 + scroll.velocity * 0.5);
    groupRef.current.position.y = Math.sin(scroll.progress * Math.PI) * 0.3;
  });

  const bearLines = useMemo(() => {
    const pairs = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
      [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14],
      [15, 16], [16, 17], [18, 19], [19, 20],
      [0, 18], [2, 15], [12, 17], [14, 20],
      [4, 21], [10, 21], [5, 22], [9, 22],
    ];
    const positions = new Float32Array(pairs.length * 6);
    pairs.forEach(([a, b], idx) => {
      const i6 = idx * 6;
      const pA = BEAR_POINTS[a];
      const pB = BEAR_POINTS[b];
      positions[i6] = pA[0]; positions[i6 + 1] = pA[1]; positions[i6 + 2] = pA[2];
      positions[i6 + 3] = pB[0]; positions[i6 + 4] = pB[1]; positions[i6 + 5] = pB[2];
    });
    return positions;
  }, []);

  return (
    <group ref={groupRef} position={[0, -1.5, -1]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={bearLines.length / 3}
            array={bearLines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.3} />
      </lineSegments>
      {BEAR_POINTS.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroBranded({ scrollRef }) {
  const { isLowTier } = useDeviceTier();

  if (isLowTier) {
    return (
      <group>
        {LETTER_POSITIONS.map((l) => (
          <Letter key={l.char} char={l.char} position={l.position} scrollRef={scrollRef} />
        ))}
      </group>
    );
  }

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} />
      <directionalLight position={[-3, 2, -3]} intensity={0.5} color="#6366f1" />
      <pointLight position={[0, 0, 3]} intensity={0.4} color="#0d9488" />
      {LETTER_POSITIONS.map((l) => (
        <Letter key={l.char} char={l.char} position={l.position} scrollRef={scrollRef} />
      ))}
      <BearConstellation scrollRef={scrollRef} />
    </>
  );
}
