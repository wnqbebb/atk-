import { useState, useEffect, type RefObject } from 'react';

export const useScrollProgress = (ref: RefObject<HTMLElement | null>): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate progress based on element position in viewport
      const start = windowHeight;
      const end = -elementHeight;
      const current = rect.top;
      
      const scrollProgress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return progress;
};

export default useScrollProgress;
