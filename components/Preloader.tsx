import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const phrases = [
  'Arquitectando soluciones...',
  'Compilando innovación...',
  'Desplegando excelencia...',
];

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 25;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const newProgress = Math.min((current / steps) * 100, 100);
      setProgress(newProgress);

      // Cambiar frase según progreso
      if (newProgress > 30 && newProgress < 60) setCurrentPhrase(1);
      else if (newProgress >= 60) setCurrentPhrase(2);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Grid sutil de fondo */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Contenido principal */}
          <div className="relative flex flex-col items-center">
            {/* Logo animado */}
            <div className="relative mb-8">
              {/* Círculos orbitando */}
              <motion.div
                className="absolute inset-0 w-24 h-24 -m-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00d4ff]/30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00d4ff]/30" />
              </motion.div>

              {/* Círculo de progreso */}
              <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#00d4ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="226"
                    strokeDashoffset={226 - (226 * progress) / 100}
                    transition={{ duration: 0.1 }}
                  />
                </svg>

                {/* Logo ATK en el centro */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-0.5">
                    <span className="text-xl font-bold text-zinc-900">A</span>
                    <span className="text-xl font-bold text-[#00d4ff]">T</span>
                    <span className="text-xl font-bold text-zinc-900">K</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Frases elegantes */}
            <div className="h-8 mb-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  {currentPhrase === 0 && <Code2 className="w-4 h-4 text-[#00d4ff]" />}
                  {currentPhrase === 1 && <Cpu className="w-4 h-4 text-[#00d4ff]" />}
                  {currentPhrase === 2 && <Sparkles className="w-4 h-4 text-[#00d4ff]" />}
                  <span className="text-sm font-medium text-zinc-500 tracking-wide">
                    {phrases[currentPhrase]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Barra de progreso minimalista */}
            <div className="w-48 h-1 rounded-full bg-zinc-100 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00b4d8] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Porcentaje */}
            <motion.p
              className="mt-3 text-xs font-mono text-zinc-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>

          {/* Esquina inferior */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-xs tracking-widest uppercase">AioTek Systems</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
