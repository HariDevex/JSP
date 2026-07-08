import { useEffect, useRef } from 'react';

export function usePageScroll() {
  const scrollRef = useRef({ progress: 0, velocity: 0, direction: 0 });

  useEffect(() => {
    let lastY = window.scrollY;
    let lastTime = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const dt = Math.min(now - lastTime, 50);
      const dy = window.scrollY - lastY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      scrollRef.current = {
        progress: window.scrollY / max,
        velocity: dy / dt,
        direction: Math.sign(dy),
      };

      lastY = window.scrollY;
      lastTime = now;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollRef;
}
