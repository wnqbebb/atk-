import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionOverlayProps {
  isActive: boolean;
  onComplete?: () => void;
}

/**
 * PageTransitionOverlay Component
 * 
 * Overlay de transición suave tipo "fade chorreo".
 * Efecto sutil y elegante sin columnas negras robustas.
 * 
 * Animación:
 * 1. Fade in suave (aparece gradualmente)
 * 2. Se mantiene cubierto mientras cambia la página
 * 3. Fade out suave (desaparece gradualmente)
 */
const PageTransitionOverlay = ({ isActive, onComplete }: PageTransitionOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animación cuando cambia isActive
  useEffect(() => {
    if (!overlayRef.current) return;

    const overlay = overlayRef.current;
    
    if (isActive) {
      // ENTRADA: Fade in suave
      gsap.set(overlay, { opacity: 0 });
      
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      });
    } else {
      // SALIDA: Fade out suave
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          onComplete?.();
        },
      });
    }
  }, [isActive, onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ 
        visibility: isActive ? 'visible' : 'hidden',
        opacity: 0,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.98) 50%, rgba(255,255,255,0.95) 100%)',
        backdropFilter: 'blur(8px)',
        willChange: 'opacity',
      }}
    />
  );
};

export default PageTransitionOverlay;
