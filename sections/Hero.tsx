import { motion } from 'framer-motion';
import { ArrowRight, Settings, Zap, Cpu, Clock, Shield, BarChart3, Users, Workflow } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';

const floatingElements = [
  { Icon: Settings, label: 'Sistemas 24/7', radius: 140, speed: 15, startAngle: 0 },
  { Icon: Zap, label: 'Automatización', radius: 160, speed: 20, startAngle: 45 },
  { Icon: Cpu, label: 'Tecnología', radius: 130, speed: 12, startAngle: 90 },
  { Icon: Clock, label: 'Ahorro de tiempo', radius: 150, speed: 18, startAngle: 135 },
  { Icon: Shield, label: 'Seguridad', radius: 170, speed: 22, startAngle: 180 },
  { Icon: BarChart3, label: 'Analytics', radius: 135, speed: 14, startAngle: 225 },
  { Icon: Users, label: 'Equipos', radius: 155, speed: 19, startAngle: 270 },
  { Icon: Workflow, label: 'Workflows', radius: 145, speed: 16, startAngle: 315 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="inicio" className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-zinc-50'
    }`}>
      {/* Grid técnico */}
      <div className="absolute inset-0 bg-grid-technical opacity-30" />
      
      {/* Difuminado cyan parpadeante */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(0, 240, 255, 0.05) 30%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      
      {/* Glows */}
      <div className="brand-glow-tl" />
      <div className="brand-glow-tr" />
      <div className="brand-glow-br" />

      {/* Main content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        {/* Orb ATK Mejorado */}
        <motion.div
          variants={itemVariants}
          className="relative mb-10"
        >
          <div className="relative w-48 h-48">
            {/* Outer glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, rgba(0, 240, 255, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Middle ring rotating */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00F0FF]/40"
              style={{ 
                borderStyle: 'dashed',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.3), inset 0 0 30px rgba(0, 240, 255, 0.1)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Inner ring rotating reverse */}
            <motion.div
              className="absolute inset-4 rounded-full border border-[#00F0FF]/60"
              style={{ 
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)'
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Core sphere */}
            <div className={`absolute inset-8 rounded-full flex items-center justify-center overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-br from-zinc-800 via-zinc-900 to-black' 
                : 'bg-gradient-to-br from-zinc-100 via-white to-zinc-200'
            }`}
            style={{
              boxShadow: isDark 
                ? 'inset 0 0 40px rgba(0, 240, 255, 0.2), 0 0 40px rgba(0, 240, 255, 0.3)' 
                : 'inset 0 0 40px rgba(0, 240, 255, 0.15), 0 0 40px rgba(0, 240, 255, 0.2)',
            }}
            >
              {/* Inner gradient animation */}
              <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(0, 240, 255, 0.3), transparent, rgba(112, 0, 255, 0.2), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <span className={`relative z-10 font-display text-5xl font-bold tracking-tighter ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
              style={{
                textShadow: isDark ? '0 0 30px rgba(0, 240, 255, 0.5)' : 'none'
              }}
              >
                ATK
              </span>
            </div>
            
            {/* Floating particles around */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#00F0FF]"
                style={{
                  top: '50%',
                  left: '50%',
                  boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)',
                }}
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 100, 0],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 100, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Orbital floating elements around the orb */}
            {floatingElements.map(({ Icon, label, radius, speed, startAngle }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 hidden lg:block pointer-events-none"
                style={{
                  marginLeft: -radius,
                  marginTop: -20,
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
                  style={{ 
                    width: radius * 2, 
                    height: 40,
                    transform: `rotate(${startAngle}deg)`
                  }}
                >
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    animate={{ rotate: -360 }}
                    transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg ${
                        isDark 
                          ? 'bg-black/70 border-[#00F0FF]/40 shadow-[#00F0FF]/30' 
                          : 'bg-white/90 border-[#00F0FF]/40 shadow-[#00F0FF]/20'
                      }`}
                    >
                      <Icon className="w-3 h-3 text-[#00F0FF]" />
                      <span className={`text-[10px] font-medium whitespace-nowrap ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{label}</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Eliminamos el caos en la{' '}
          <span className="text-gradient">planificación de turnos</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`max-w-2xl text-lg mb-8 px-2 sm:px-0 transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          Deja de perder dinero en errores de nómina y horas manuales. El primer software de gestión de turnos que se adapta a tus reglas, no al revés.
        </motion.p>

        {/* CTA - Solo Solicitar Demo */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <TransitionLink
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-black rounded-full bg-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all"
          >
            Solicitar Demo
            <ArrowRight className="w-5 h-5" />
          </TransitionLink>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className={`grid grid-cols-3 gap-8 mt-16 pt-12 border-t w-full max-w-2xl transition-colors ${
            isDark ? 'border-white/10' : 'border-zinc-200'
          }`}
        >
          {[
            { value: '40%', label: 'Menos errores' },
            { value: '24/7', label: 'Disponible' },
            { value: '100%', label: 'A medida' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-bold mb-1 transition-colors ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>{stat.value}</div>
              <div className={`text-xs uppercase tracking-wider transition-colors ${
                isDark ? 'text-zinc-500' : 'text-zinc-500'
              }`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
