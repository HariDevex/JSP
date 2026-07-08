import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeviceTier } from '../useDeviceTier';

const COLORS = [
  new THREE.Color('#0d9488'),
  new THREE.Color('#6366f1'),
  new THREE.Color('#4f46e5'),
  new THREE.Color('#3730a3'),
];

const CONNECT_DIST = 2.0;
const REPULSE_RADIUS = 1.5;

export default function ParticlesUpgraded({ scrollRef }) {
  const { isLowTier } = useDeviceTier();
  const count = isLowTier ? 80 : 200;
  const meshRef = useRef();
  const connectionsRef = useRef();
  const { pointer } = useThree();

  const { positions, speeds, colors, offsets, basePositions, connectionPairs } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const col = new Float32Array(count * 3);
    const off = new Float32Array(count);
    const base = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10 - 5;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      spd[i] = 0.005 + Math.random() * 0.015;
      off[i] = Math.random() * Math.PI * 2;

      const t = Math.random();
      const c = COLORS[Math.floor(t * (COLORS.length - 1))].clone().lerp(
        COLORS[Math.min(Math.floor(t * (COLORS.length - 1)) + 1, COLORS.length - 1)],
        t * (COLORS.length - 1) - Math.floor(t * (COLORS.length - 1))
      );
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    const pairs = [];
    if (!isLowTier) {
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = base[i * 3] - base[j * 3];
          const dy = base[i * 3 + 1] - base[j * 3 + 1];
          const dz = base[i * 3 + 2] - base[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < CONNECT_DIST) {
            pairs.push([i, j, dist]);
          }
        }
      }
    }

    return { positions: pos, speeds: spd, colors: col, offsets: off, basePositions: base, connectionPairs: pairs };
  }, [count, isLowTier]);

  const linePositions = useMemo(() => {
    if (isLowTier) return new Float32Array();
    const arr = new Float32Array(connectionPairs.length * 6);
    return arr;
  }, [connectionPairs, isLowTier]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const pos = meshRef.current.geometry.attributes.position.array;
    const scroll = scrollRef?.current || { progress: 0, velocity: 0, direction: 0 };
    const velocity = Math.min(Math.abs(scroll.velocity), 1);
    const burst = velocity > 0.3 ? velocity * 2 : 0;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const px = pointer.x * 8;
      const py = pointer.y * 5;

      const dx = pos[i3] - px;
      const dy = pos[i3 + 1] + py;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let pushX = 0, pushY = 0;
      if (dist < REPULSE_RADIUS && dist > 0.01) {
        const force = (1 - dist / REPULSE_RADIUS) * 2;
        pushX = (dx / dist) * force;
        pushY = (dy / dist) * force;
      }

      const wave = Math.sin(scroll.progress * Math.PI * 2 + offsets[i]) * 0.3;

      pos[i3] += (basePositions[i3] + pushX + burst * (basePositions[i3] * 0.1) - pos[i3]) * 0.02;
      pos[i3 + 1] += speeds[i] * delta * 5 + pushY + wave * delta * 0.5 + burst * delta * 2;
      pos[i3 + 2] += burst * delta * (basePositions[i3 + 2] * 0.02);

      if (pos[i3 + 1] > 10) pos[i3 + 1] = -10;
      if (pos[i3 + 1] < -10) pos[i3 + 1] = 10;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    if (connectionsRef.current && !isLowTier) {
      const linePos = connectionsRef.current.geometry.attributes.position.array;
      connectionPairs.forEach(([i, j], idx) => {
        const i6 = idx * 6;
        linePos[i6] = pos[i * 3];
        linePos[i6 + 1] = pos[i * 3 + 1];
        linePos[i6 + 2] = pos[i * 3 + 2];
        linePos[i6 + 3] = pos[j * 3];
        linePos[i6 + 4] = pos[j * 3 + 1];
        linePos[i6 + 5] = pos[j * 3 + 2];
      });
      connectionsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      {!isLowTier && (
        <lineSegments ref={connectionsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={connectionPairs.length * 2}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#6366f1"
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}
    </group>
  );
}
