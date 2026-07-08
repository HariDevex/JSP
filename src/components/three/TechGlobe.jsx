import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDeviceTier } from './useDeviceTier';

const logos = [
  { name: 'React', color: '#61dafb' },
  { name: 'Node', color: '#68a063' },
  { name: 'Mongo', color: '#4db33d' },
  { name: 'JS', color: '#f7df1e' },
  { name: 'HTML', color: '#e34f26' },
  { name: 'CSS', color: '#1572b6' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Java', color: '#007396' },
  { name: 'SQL', color: '#e38c00' },
  { name: 'DevOps', color: '#00acc1' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: 'Express', color: '#fff' },
];

function LogoDot({ color, position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Ring({ radius, color, speed, offsetY }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  const segments = 40;
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push([
        Math.cos(theta) * radius,
        offsetY,
        Math.sin(theta) * radius,
      ]);
    }
    return pts;
  }, [radius, offsetY]);

  return (
    <group ref={ref}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial color={color} opacity={0.5} transparent />
        </mesh>
      ))}
    </group>
  );
}

export default function TechGlobe() {
  const { isLowTier } = useDeviceTier();
  const groupRef = useRef();

  const dots = useMemo(() => {
    const count = isLowTier ? 6 : 12;
    const selected = logos.slice(0, count);
    return selected.map((logo, i) => {
      const phi = Math.acos(2 * (i / count) - 1);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = isLowTier ? 1.8 : 2.2;
      return {
        color: logo.color,
        position: [
          Math.sin(phi) * Math.cos(theta) * radius,
          Math.sin(phi) * Math.sin(theta) * radius,
          Math.cos(phi) * radius,
        ],
      };
    });
  }, [isLowTier]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 4]} intensity={0.8} />
      {dots.map((dot, i) => (
        <LogoDot key={i} color={dot.color} position={dot.position} />
      ))}
      <Ring radius={isLowTier ? 1.8 : 2.5} color="#0d9488" speed={0.15} offsetY={0} />
      <Ring radius={isLowTier ? 1.5 : 2.0} color="#6366f1" speed={-0.1} offsetY={0.1} />
      <mesh>
        <sphereGeometry args={[isLowTier ? 0.2 : 0.3, 16, 16]} />
        <meshBasicMaterial color="#0d9488" opacity={0.2} transparent />
      </mesh>
    </group>
  );
}
