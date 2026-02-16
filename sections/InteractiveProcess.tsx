import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FileSpreadsheet, Cog, Rocket, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import TransitionLink from '../components/TransitionLink';

const steps = [
  {
    id: 1,
    icon: FileSpreadsheet,
    title: 'Diagnóstico',
    subtitle: 'Análisis profundo',
    description: 'Auditamos tus procesos actuales y identificamos cuellos de botella. Mapeamos flujos críticos y puntos de fricción.',
    duration: 'Día 1-2',
    deliverables: ['Mapa de procesos', 'Análisis de brechas', 'Propuesta técnica'],
    color: '#00F0FF',
  },
  {
    id: 2,
    icon: Cog,
    title: 'Configuración',
    subtitle: 'Implementación ágil',
    description: 'Desarrollamos tu solución a medida con ciclos de feedback constantes. Integración con tus sistemas existentes.',
    duration: 'Semana 1-2',
    deliverables: ['Software configurado', 'Integraciones activas', 'Tests de validación'],
    color: '#00D4FF',
  },
  {
    id: 3,
    icon: Rocket,
    title: 'Deployment',
    subtitle: 'Puesta en producción',
    description: 'Lanzamiento controlado con migración de datos y capacitación de equipos. Soporte técnico dedicado 24/7.',
    duration: 'Día 15',
    deliverables: ['Sistema en producción', 'Datos migrados', 'Equipo capacitado'],
    color: '#00B8FF',
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Optimización',
    subtitle: 'Mejora continua',
    description: 'Monitoreo de métricas y ajustes basados en datos. Escalabilidad garantizada según tu crecimiento.',
    duration: 'Continuo',
    deliverables: ['Dashboard de KPIs', 'Reportes automáticos', 'Soporte continuo'],
    color: '#009CFF',
  },
];

const ProcessCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connector line - hidden on mobile */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-24 left-[60%] w-[80%] h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
            className="origin-left h-full"
            style={{
              background: isDark 
                ? `linear-gradient(90deg, ${step.color}40, ${steps[index + 1]?.color || step.color}20)`
                : `linear-gradient(90deg, ${step.color}60, ${steps[index + 1]?.color || step.color}30)`
            }}
          />
        </div>
      )}

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`relative h-full p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
          isDark 
            ? 'bg-[#0a0a0a]/80 border-white/10 group-hover:border-[#00F0FF]/40' 
            : 'bg-white/80 border-zinc-200 group-hover:border-[#00F0FF]/40 shadow-lg'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: isDark
              ? `radial-gradient(circle at 50% 0%, ${step.color}10 0%, transparent 60%)`
              : `radial-gradient(circle at 50% 0%, ${step.color}15 0%, transparent 60%)`
          }}
        />

        {/* Step number */}
        <div className="relative flex items-center justify-between mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-br from-[#00F0FF]/20 to-[#00F0FF]/5 border border-[#00F0FF]/30' 
                : 'bg-gradient-to-br from-[#00F0FF]/30 to-[#00F0FF]/10 border border-[#00F0FF]/40'
            }`}
            style={{
              boxShadow: isDark 
                ? `0 0 30px ${step.color}20` 
                : `0 0 30px ${step.color}30`
            }}
          >
            <step.icon className="w-7 h-7" style={{ color: step.color }} />
          </motion.div>
          
          <span className={`text-5xl font-bold font-display ${
            isDark ? 'text-white/5' : 'text-zinc-200'
          }`}>
            {String(step.id).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="relative">
          <span className={`text-xs font-semibold tracking-wider uppercase ${
            isDark ? 'text-[#00F0FF]' : 'text-[#00B8D4]'
          }`}>
            {step.subtitle}
          </span>
          
          <h3 className={`text-2xl font-bold mt-2 mb-3 font-display ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            {step.title}
          </h3>
          
          <p className={`text-sm leading-relaxed mb-6 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {step.description}
          </p>

          {/* Duration badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5 ${
            isDark 
              ? 'bg-white/5 text-zinc-300 border border-white/10' 
              : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse`} style={{ backgroundColor: step.color }} />
            {step.duration}
          </div>

          {/* Deliverables */}
          <div className="space-y-2">
            {step.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.3 + i * 0.1 }}
                className={`flex items-center gap-2 text-sm ${
                  isDark ? 'text-zinc-500' : 'text-zinc-500'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const InteractiveProcess = () => {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-20' : 'opacity-5'}`} />
        
        {/* Central glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 60%)',
          }}
        />

        {/* Animated orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%)`,
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              isDark 
                ? 'bg-[#00F0FF]/5 border-[#00F0FF]/30 text-[#00F0FF]' 
                : 'bg-[#00F0FF]/10 border-[#00F0FF]/40 text-[#00B8D4]'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">METODOLOGÍA PROBADA</span>
          </motion.div>

          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            De la{' '}
            <span className="text-[#00F0FF]">consulta</span>
            {' '}a la{' '}
            <span className="text-[#00F0FF]">operación</span>
            {' '}en 15 días
          </h2>
          
          <p className={`max-w-2xl mx-auto text-lg ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Proceso ágil y transparente. Sin sorpresas, sin demoras. 
            Cada etapa tiene entregables claros y medibles.
          </p>
        </motion.div>

        {/* Progress Line - Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-[400px] w-[2px] h-[400px] -translate-x-1/2">
          <div className={`w-full h-full ${isDark ? 'bg-white/5' : 'bg-zinc-200'}`} />
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00F0FF] to-[#00B8FF] origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`relative p-10 rounded-3xl border overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-[#0a0a0a] to-[#050505] border-white/10' 
              : 'bg-gradient-to-br from-white to-zinc-50 border-zinc-200 shadow-xl'
          }`}
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#00F0FF]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className={`text-2xl sm:text-3xl font-bold mb-3 font-display ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                ¿Listo para empezar?
              </h3>
              <p className={`max-w-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Agenda una consulta gratuita. Analizamos tu caso específico 
                y te mostramos cómo optimizar tus procesos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <TransitionLink
                to="/contacto"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#00F0FF] text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]' 
                    : 'bg-[#00B8D4] text-white hover:shadow-[0_0_40px_rgba(0,184,212,0.4)]'
                }`}
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: '15', label: 'Días promedio de implementación' },
            { value: '99%', label: 'Proyectos entregados a tiempo' },
            { value: '24/7', label: 'Soporte técnico disponible' },
            { value: '0', label: 'Costos ocultos o sorpresas' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl lg:text-5xl font-bold font-display mb-2 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                <span className="text-[#00F0FF]">{stat.value}</span>
              </div>
              <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveProcess;
