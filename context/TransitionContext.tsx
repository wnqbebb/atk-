import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react';
import gsap from 'gsap';

interface TransitionContextType {
  isTransitioning: boolean;
  navigateWithTransition: (to: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

interface TransitionProviderProps {
  children: ReactNode;
  onNavigate?: (to: string) => void;
}

export const TransitionProvider = ({ children, onNavigate }: TransitionProviderProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const animateTransition = useCallback(async (to: string) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const overlay = overlayRef.current;
    
    if (!overlay) {
      // Fallback si no hay overlay
      if (onNavigate) onNavigate(to);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setIsTransitioning(false);
      return;
    }

    // Timeline principal - Transición ultra rápida y suave
    const tl = gsap.timeline();

    // FASE 1: Fade in muy rápido
    tl.to(overlay, {
      opacity: 1,
      duration: 0.15,
      ease: 'power1.out',
    });

    // FASE 2: Cambio de página inmediato
    tl.add(() => {
      if (onNavigate) onNavigate(to);
      window.scrollTo({ top: 0, behavior: 'auto' });
    });

    // Pausa mínima para que el DOM renderice
    tl.to({}, { duration: 0.05 });

    // FASE 3: Fade out suave
    tl.to(overlay, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.out',
    });

    // Fin de la transición
    tl.add(() => {
      setIsTransitioning(false);
    });

    return tl;
  }, [isTransitioning, onNavigate]);

  const navigateWithTransition = useCallback((to: string) => {
    animateTransition(to);
  }, [animateTransition]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, navigateWithTransition }}>
      {children}
      {/* Page Transition Overlay - Efecto suave tipo "chorreo" */}
      <PageTransitionOverlay 
        overlayRef={overlayRef}
        isActive={isTransitioning}
      />
    </TransitionContext.Provider>
  );
};

// Componente interno del overlay - Efecto suave sutil
interface PageTransitionOverlayProps {
  overlayRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
}

const PageTransitionOverlay = ({ overlayRef, isActive }: PageTransitionOverlayProps) => {
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

export default TransitionContext;
