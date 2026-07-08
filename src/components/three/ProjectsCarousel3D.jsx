import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// 3D Floating indicator shapes for each project category
function ProjectCategoryIcon({ category, isActive }) {
  const ref = useRef();
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    // Rotation speed boosts if active
    const speed = isActive ? 1.5 : 0.5;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.25;
    // Floating movement
    ref.current.position.y = 1.0 + Math.sin(state.clock.elapsedTime * 2 + (isActive ? 2 : 0)) * 0.1;
  });

  const color = isActive ? '#0d9488' : '#6366f1';

  // Return a 3D geometry representing the category
  switch (category) {
    case 'cloud': // Cylinder representing server stack
      return (
        <group ref={ref}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.08, 16]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.08, 16]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.08, 16]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.2} />
          </mesh>
        </group>
      );
    case 'mobile': // Thin phone box
      return (
        <mesh ref={ref}>
          <boxGeometry args={[0.22, 0.4, 0.04]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.1} />
        </mesh>
      );
    case 'ecommerce': // Floating torus ring (spinning coin/cart symbol)
      return (
        <mesh ref={ref}>
          <torusGeometry args={[0.18, 0.05, 12, 32]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
        </mesh>
      );
    case 'uiux': // Octahedron
      return (
        <mesh ref={ref}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
        </mesh>
      );
    case 'web': // Thin wide screen box
      return (
        <mesh ref={ref}>
          <boxGeometry args={[0.38, 0.22, 0.04]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} emissive={color} emissiveIntensity={0.1} />
        </mesh>
      );
    default: // Custom Software: Rubik's cube cluster
      return (
        <group ref={ref}>
          <mesh position={[-0.08, 0.08, 0]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0.08, 0.08, 0.08]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color={isActive ? '#14b8a6' : '#8b5cf6'} metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.08, -0.08]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      );
  }
}

function CarouselCard({ project, index, activeIndex, totalCount, onClick, radius }) {
  const cardRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Load texture
  const texture = useTexture(project.image);
  
  // Calculate angle on circle
  const angle = (index * (2 * Math.PI)) / totalCount;
  
  // Position cards in a circle facing outwards
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  useFrame((state, delta) => {
    if (!cardRef.current) return;
    
    // Float cards slightly based on index to create organic look
    const hoverOffset = Math.sin(state.clock.elapsedTime * 1.5 + index * 0.5) * 0.08;
    cardRef.current.position.y = hoverOffset;

    // Smooth hover scaling
    const targetScale = hovered ? 1.12 : 1.0;
    cardRef.current.scale.x = THREE.MathUtils.lerp(cardRef.current.scale.x, targetScale, 0.15);
    cardRef.current.scale.y = THREE.MathUtils.lerp(cardRef.current.scale.y, targetScale, 0.15);
    cardRef.current.scale.z = THREE.MathUtils.lerp(cardRef.current.scale.z, targetScale, 0.15);
    
    // Smooth emissive glow intensity based on active state and hover
    if (glowRef.current) {
      const isActive = index === activeIndex;
      const targetIntensity = isActive ? 1.8 : (hovered ? 0.8 : 0.15);
      glowRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        glowRef.current.material.emissiveIntensity,
        targetIntensity,
        0.1
      );
    }
  });

  const isActive = index === activeIndex;

  return (
    <group 
      position={[x, 0, z]} 
      rotation={[0, angle, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onClick(index);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* 3D floating icon above the card */}
      <ProjectCategoryIcon category={project.category} isActive={isActive} />

      {/* Main card box with image on front */}
      <mesh ref={cardRef}>
        <boxGeometry args={[2.0, 1.25, 0.04]} />
        {/* Material order: right, left, top, bottom, front, back */}
        <meshStandardMaterial attach="material-0" color="#111827" metalness={0.9} roughness={0.1} />
        <meshStandardMaterial attach="material-1" color="#111827" metalness={0.9} roughness={0.1} />
        <meshStandardMaterial attach="material-2" color="#111827" metalness={0.9} roughness={0.1} />
        <meshStandardMaterial attach="material-3" color="#111827" metalness={0.9} roughness={0.1} />
        <meshStandardMaterial attach="material-4" map={texture} roughness={0.2} metalness={0.1} />
        <meshStandardMaterial attach="material-5" color="#111827" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Glowing neon back-border */}
      <mesh ref={glowRef} position={[0, 0, -0.015]}>
        <boxGeometry args={[2.08, 1.33, 0.02]} />
        <meshStandardMaterial
          color={isActive ? '#0d9488' : '#6366f1'}
          emissive={isActive ? '#0d9488' : '#6366f1'}
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// Particle field swirl background
function BackgroundParticles() {
  const pointsRef = useRef();
  const particleCount = 120;
  
  const { positions, randomOffsets, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const offsets = new Float32Array(particleCount);
    const cols = new Float32Array(particleCount * 3);
    
    const palette = [
      new THREE.Color('#0d9488'), // teal
      new THREE.Color('#6366f1'), // indigo
      new THREE.Color('#8b5cf6'), // purple
      new THREE.Color('#3b82f6'), // blue
    ];

    for (let i = 0; i < particleCount; i++) {
      // Swirling arrangement
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 6;
      const y = (Math.random() - 0.5) * 5;
      
      pos[i * 3] = Math.sin(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.cos(angle) * radius - 2;
      
      offsets[i] = Math.random() * Math.PI * 2;

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 3] = randomColor.r;
      cols[i * 3 + 1] = randomColor.g;
      cols[i * 3 + 2] = randomColor.b;
    }
    
    return { positions: pos, randomOffsets: offsets, colors: cols };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array;
    // Slow ambient rotation of particle field
    pointsRef.current.rotation.y += delta * 0.03;
    
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      // Gentle floating up and down
      pos[idx + 1] += Math.sin(state.clock.elapsedTime * 0.5 + randomOffsets[i]) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ProjectsCarousel3D({ projects, activeIndex, setActiveIndex }) {
  const groupRef = useRef();
  const { pointer } = useThree();
  const radius = 3.6; // radius of the circle

  // Smoothly rotate the entire carousel to make the active index front and center
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Target rotation is negative since we rotate the carousel opposite to activeIndex direction
    const targetRotationY = -(activeIndex * (2 * Math.PI)) / projects.length;
    
    // Interpolate rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.08
    );
    
    // Mouse parallax tilting (subtle)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.08,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      pointer.x * 0.04,
      0.05
    );
  });

  const totalCount = projects.length;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} />
      <directionalLight position={[-5, 5, -5]} intensity={0.6} color="#6366f1" />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#0d9488" />
      
      {/* Circular Grid on the floor */}
      <gridHelper args={[20, 20, '#6366f1', '#1f2937']} position={[0, -1.8, -radius]} opacity={0.2} transparent />
      
      {/* Swirling Background Particles */}
      <BackgroundParticles />

      {/* Holographic core */}
      <group position={[0, 0, -radius]}>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color="#0d9488" wireframe transparent opacity={0.1} />
        </mesh>
      </group>

      {/* Rotating Carousel Group */}
      <group ref={groupRef} position={[0, 0, -radius]}>
        {projects.map((proj, idx) => (
          <CarouselCard
            key={proj.id}
            project={proj}
            index={idx}
            activeIndex={activeIndex}
            totalCount={totalCount}
            onClick={setActiveIndex}
            radius={radius}
          />
        ))}
      </group>
    </>
  );
}
