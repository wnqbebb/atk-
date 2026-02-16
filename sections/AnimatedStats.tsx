import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const StatItem = ({ value, suffix = '', prefix = '', label, description, icon: Icon, index }: StatItemProps) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 2000
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(value);
    }
  }, [isInView, hasAnimated, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className={`relative p-8 rounded-3xl border transition-all duration-500 h-full ${
        isDark 
          ? 'bg-[#0a0a0a]/50 border-white/5 hover:border-[#00F0FF]/30' 
          : 'bg-white/80 border-zinc-100 hover:border-[#00F0FF]/30 shadow-sm hover:shadow-xl'
      }`}>
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDark ? 'bg-gradient-to-br from-[#00F0FF]/5 to-transparent' : 'bg-gradient-to-br from-[#00F0FF]/10 to-transparent'
        }`} />
        
        <div className="relative">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
            isDark ? 'bg-[#00F0FF]/10' : 'bg-[#00F0FF]/10'
          }`}>
            <Icon className="w-6 h-6 text-[#00F0FF]" />
          </div>

          {/* Value */}
          <div className="flex items-baseline gap-1 mb-2">
            <span className={`text-5xl lg:text-6xl font-bold font-display ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              {prefix}{displayValue}{suffix}
            </span>
          </div>

          {/* Label */}
          <h3 className={`text-lg font-semibold mb-2 ${
            isDark ? 'text-zinc-200' : 'text-zinc-800'
          }`}>
            {label}
          </h3>

          {/* Description */}
          <p className={`text-sm ${
            isDark ? 'text-zinc-500' : 'text-zinc-500'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedStats = () => {
  const { isDark } = useTheme();
  const containerRef = useRef(null);

  const stats = [
    {
      value: 40,
      suffix: '%',
      label: 'Reducción de errores',
      description: 'Disminución promedio en errores de nómina y planificación',
      icon: TrendingUp,
    },
    {
      value: 20,
      suffix: 'h',
      label: 'Horas ahorradas',
      description: 'Tiempo semanal recuperado por el equipo de RRHH',
      icon: Clock,
    },
    {
      value: 500,
      suffix: '+',
      label: 'Profesionales',
      description: 'Empleados gestionados eficientemente por cliente medio',
      icon: Users,
    },
    {
      value: 99,
      suffix: '.9%',
      label: 'Disponibilidad',
      description: 'Uptime garantizado con infraestructura enterprise',
      icon: Shield,
    },
  ];

  return (
    <section className={`relative py-24 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-zinc-50'
    }`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-10' : 'opacity-5'}`} />
        
        {/* Animated gradient */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-display ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Resultados <span className="text-[#00F0FF]">medibles</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Impacto real en las operaciones de nuestros clientes enterprise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
