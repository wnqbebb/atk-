import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageTransition Component
 * 
 * Transición espectacular entre páginas usando Framer Motion.
 * Efecto "Cyan Wave" con el branding de AioTek.
 * 
 * Secuencia:
 * 1. Wave cyan cubre la pantalla desde abajo
 * 2. Logo ATK aparece y pulsa
 * 3. Wave se expande hacia arriba revelando nueva página
 */
const PageTransition = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsAnimating(true);
      
      // Después de la animación de salida, actualizamos la ubicación
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsAnimating(false);
      }, 1700); // Duración total de la transición (1.2s + 0.5s)

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          key="transition"
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Wave que sube desde abajo */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#00F0FF] via-[#00d4ff] to-[#00b8cc]"
            initial={{ height: '0%' }}
            animate={{ 
              height: ['0%', '100%', '100%', '0%'],
            }}
            transition={{
              duration: 1.7,
              times: [0, 0.35, 0.65, 1],
              ease: 'easeInOut',
            }}
          >
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
            
            {/* Glow central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/20 blur-[120px]" />
          </motion.div>

          {/* Logo ATK */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -10, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.1, 1, 0.8],
              rotate: [-10, 0, 0, 0, 0],
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={{
              duration: 1.7,
              times: [0, 0.2, 0.35, 0.65, 1],
              ease: 'easeOut',
            }}
          >
            <div className="relative">
              {/* Outer ring girando */}
              <motion.div 
                className="absolute inset-0 w-40 h-40 -m-8 rounded-full border-2 border-white/40"
                style={{ borderStyle: 'dashed' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Círculo principal */}
              <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-2xl shadow-cyan-500/50">
                <span className="text-4xl font-bold text-white tracking-tighter">
                  A<span className="text-white/80">T</span>K
                </span>
              </div>
              
              {/* Puntos orbitales */}
              <motion.div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              />
              <motion.div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, repeat: 2, delay: 0.1 }}
              />
              <motion.div 
                className="absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, repeat: 2, delay: 0.2 }}
              />
              <motion.div 
                className="absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, repeat: 2, delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Partículas flotantes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/60"
              initial={{ 
                x: 0, 
                y: 100,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: Math.cos(i * 45 * Math.PI / 180) * 200,
                y: [100, -300, -500],
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5]
              }}
              transition={{
                duration: 1.2,
                delay: 0.4 + i * 0.06,
                ease: 'easeOut'
              }}
              style={{
                left: '50%',
                bottom: '20%',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
