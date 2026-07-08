import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useDeviceTier } from '../useDeviceTier';

const techs = [
  { name: 'React', color: '#61dafb', stack: 'mern' },
  { name: 'Node', color: '#68a063', stack: 'mern' },
  { name: 'Mongo', color: '#4db33d', stack: 'mern' },
  { name: 'Express', color: '#fff', stack: 'mern' },
  { name: 'JS', color: '#f7df1e', stack: 'mean' },
  { name: 'Angular', color: '#dd0031', stack: 'mean' },
  { name: 'Python', color: '#3776ab', stack: 'data' },
  { name: 'Java', color: '#007396', stack: 'java' },
  { name: 'SQL', color: '#e38c00', stack: 'data' },
  { name: 'DevOps', color: '#00acc1', stack: 'devops' },
  { name: 'Tailwind', color: '#06b6d4', stack: 'frontend' },
  { name: 'CSS', color: '#1572b6', stack: 'frontend' },
];

const STACK_COLORS = {
  mern: '#0d9488',
  mean: '#6366f1',
  data: '#f59e0b',
  java: '#ec4899',
  devops: '#06b6d4',
  frontend: '#8b5cf6',
};

function OrbitRing({ radius, color, speed, tilt = 0 }) {
  const ref = useRef();
  const segments = 60;
  const points = useMemo(() => {
    const pts = new Float32Array(segments * 3);
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts[i * 3] = Math.cos(theta) * radius;
      pts[i * 3 + 1] = 0;
      pts[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return pts;
  }, [radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={segments}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

function TechParticle({ color, position, speed }) {
  const ref = useRef();
  const glowRef = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 1.3;
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(performance.now() * 0.002) * 0.15);
    }
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.1, 0]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function StackLines({ dots }) {
  const stacks = useMemo(() => {
    const map = {};
    dots.forEach((d) => {
      if (!map[d.stack]) map[d.stack] = [];
      map[d.stack].push(d);
    });

    const lines = [];
    Object.entries(map).forEach(([stack, members]) => {
      for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {
          lines.push({
            start: members[i].position,
            end: members[j].position,
            color: STACK_COLORS[stack] || '#6366f1',
          });
        }
      }
    });
    return lines;
  }, [dots]);

  return (
    <group>
      {stacks.map((line, i) => (
        <lineSegments key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                line.start[0], line.start[1], line.start[2],
                line.end[0], line.end[1], line.end[2],
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={line.color} transparent opacity={0.2} />
        </lineSegments>
      ))}
    </group>
  );
}

export default function TechGlobeUpgraded({ scrollRef }) {
  const { isLowTier } = useDeviceTier();
  const groupRef = useRef();

  const dots = useMemo(() => {
    const count = isLowTier ? 6 : techs.length;
    const selected = techs.slice(0, count);
    return selected.map((tech, i) => {
      const phi = Math.acos(2 * (i / count) - 1);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = isLowTier ? 1.8 : 2.5;
      return {
        ...tech,
        position: [
          Math.sin(phi) * Math.cos(theta) * radius,
          Math.sin(phi) * Math.sin(theta) * radius,
          Math.cos(phi) * radius,
        ],
      };
    });
  }, [isLowTier]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const scroll = scrollRef?.current || { progress: 0, velocity: 0 };
    const speed = 0.15 + Math.abs(scroll.velocity) * 0.4;
    groupRef.current.rotation.y += delta * speed;
    groupRef.current.rotation.x = Math.sin(scroll.progress * Math.PI * 0.5) * 0.1;
  });

  if (isLowTier) {
    return (
      <group ref={groupRef}>
        {dots.map((dot, i) => (
          <TechParticle key={i} color={dot.color} position={dot.position} speed={0.3 + i * 0.1} />
        ))}
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 4]} intensity={0.5} />
      <pointLight position={[0, 0, -4]} intensity={0.3} color="#6366f1" />
      <StackLines dots={dots} />
      <OrbitRing radius={2.5} color="#0d9488" speed={0.08} />
      <OrbitRing radius={2.0} color="#6366f1" speed={-0.05} tilt={0.3} />
      <OrbitRing radius={1.5} color="#ec4899" speed={0.06} tilt={-0.2} />
      {dots.map((dot, i) => (
        <TechParticle key={i} color={dot.color} position={dot.position} speed={0.3 + i * 0.1} />
      ))}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#0d9488" opacity={0.15} transparent />
      </mesh>
    </group>
  );
}
