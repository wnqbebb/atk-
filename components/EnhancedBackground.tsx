import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

/**
 * EnhancedBackground - Fondo profesional high-ticket con SVGs y partículas
 * Solo para la página de servicios
 */
const EnhancedBackground = () => {
  const { isDark } = useTheme();

  // Generar partículas aleatorias
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid base mejorado */}
      <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-20' : 'opacity-5'}`} />
      
      {/* Gradiente radial base */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark 
            ? 'radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.15) 0%, transparent 50%)'
        }}
      />

      {/* Círculos concéntricos animados SVG */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-30">
        <defs>
          <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx="600"
            cy="600"
            r={200 + i * 100}
            fill="none"
            stroke="url(#circleGrad)"
            strokeWidth="1"
            strokeDasharray="10 10"
            initial={{ rotate: 0, opacity: 0.3 }}
            animate={{ 
              rotate: i % 2 === 0 ? 360 : -360,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 20 + i * 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ transformOrigin: 'center' }}
          />
        ))}
      </svg>

      {/* Líneas diagonales animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={i * 150}
            x2="100%"
            y2={i * 150 + 300}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Hexágonos flotantes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-50">
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}

      {/* Partículas cian infinitas */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, #00F0FF 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px #00F0FF`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Orbes de luz flotantes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            background: `radial-gradient(circle, rgba(0, 240, 255, ${0.1 + i * 0.05}) 0%, transparent 70%)`,
            left: `${i % 2 === 0 ? -10 : 70}%`,
            top: `${i * 25}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Formas geométricas SVG decorativas */}
      <svg className="absolute top-20 right-20 w-40 h-40 opacity-20">
        <motion.circle
          cx="80"
          cy="80"
          r="60"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="2"
          strokeDasharray="20 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>

      <svg className="absolute bottom-40 left-20 w-32 h-32 opacity-20">
        <motion.rect
          x="16"
          y="16"
          width="64"
          height="64"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="2"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>

      {/* Líneas de conexión animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={`connect-${i}`}
            d={`M ${i * 25}%,100% Q ${50 + i * 10}%,50% ${100 - i * 20}%,0%`}
            fill="none"
            stroke="#00F0FF"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Efecto de estrellas brillantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-[#00F0FF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradiente de fondo inferior */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background: isDark
            ? 'linear-gradient(to top, rgba(0, 240, 255, 0.05) 0%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0, 240, 255, 0.08) 0%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default EnhancedBackground;
