import { Suspense, cloneElement } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';

export default function SceneWrapper({ children, className = '', style = {}, scrollRef }) {
  const childrenWithScroll = children && scrollRef
    ? cloneElement(children, { scrollRef })
    : children;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 0, ...style }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Suspense fallback={null}>
          {childrenWithScroll}
        </Suspense>
      </Canvas>
    </div>
  );
}
