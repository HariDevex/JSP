import { useState, useEffect } from 'react';

function getDeviceTier() {
  if (typeof window === 'undefined') return { isMobile: false, isLowTier: false };

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info');
  const renderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    : '';

  const isIntel = renderer && /intel/i.test(renderer);
  const isMobileGpu = renderer && (/adreno|mali|powervr/i.test(renderer));

  const isLowTier = isMobile || isMobileGpu || (isIntel && isMobile);

  gl?.getExtension('WEBGL_lose_context')?.loseContext();

  return { isMobile, isLowTier };
}

export function useDeviceTier() {
  const [tier, setTier] = useState({ isMobile: false, isLowTier: false });

  useEffect(() => {
    setTier(getDeviceTier());
  }, []);

  return tier;
}
