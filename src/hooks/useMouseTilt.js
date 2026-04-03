import { useState, useCallback, useRef } from 'react';

export const useMouseTilt = (settings = { max: 15, perspective: 1000 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * settings.max;
    const tiltY = ((centerX - x) / centerX) * settings.max;

    setRotateX(tiltX);
    setRotateY(tiltY);
  }, [settings.max]);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  return {
    ref,
    tiltStyle: {
      perspective: settings.perspective,
      rotateX: rotateX + 'deg',
      rotateY: rotateY + 'deg',
      display: 'inline-block'
    },
    handleMouseMove,
    handleMouseLeave
  };
};
