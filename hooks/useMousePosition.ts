import { useState, useEffect, type RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (ref?: RefObject<HTMLElement | null>): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const element = ref?.current || window;
    element.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [ref]);

  return position;
};

export default useMousePosition;
