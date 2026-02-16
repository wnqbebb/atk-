import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FileSpreadsheet, Eye, TrendingDown, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';

const benefits = [
  {
    id: 'excel',
    title: 'El enemigo es el Excel',
    description: 'La planificación manual genera <span class="text-red-500 font-semibold">errores</span>, <span class="text-red-500 font-semibold">conflictos</span> entre empleados y <span class="text-red-500 font-semibold">pérdidas de tiempo</span> incalculables. Cada cambio de turno es una potencial <span class="text-red-500 font-semibold">bomba de tiempo</span>.',
    icon: FileSpreadsheet,
    stat: '40%',
    statLabel: 'de errores evitables',
    isProblem: true,
  },
  {
    id: 'control',
    title: 'Control Total',
    description: 'Visualiza coberturas, vacaciones y bajas en tiempo real. Toma decisiones informadas con datos actualizados al instante.',
    icon: Eye,
    stat: 'Tiempo real',
    statLabel: 'visibilidad total',
  },
  {
    id: 'ahorro',
    title: 'Ahorro Directo',
    description: 'Reduce el tiempo administrativo y elimina los <span class="text-red-500 font-semibold">errores costosos</span> en nómina. El software se paga solo en el primer mes.',
    icon: TrendingDown,
    stat: '30%',
    statLabel: 'menos tiempo admin',
  },
];

interface BentoCardProps {
  benefit: typeof benefits[0];
  index: number;
  isDark: boolean;
}

const BentoCard = ({ benefit, index, isDark }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      500px circle at ${mouseX}px ${mouseY}px,
      rgba(0, 240, 255, 0.1),
      transparent 60%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      className={`group ${benefit.isProblem ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <div className={`relative h-full p-6 sm:p-8 rounded-3xl overflow-hidden transition-all duration-500 border ${
        benefit.isProblem 
          ? isDark 
            ? 'bg-black text-white border-red-500/30 group-hover:border-red-500/60 shadow-2xl shadow-red-500/10'
            : 'bg-zinc-950 text-white border-red-500/40 group-hover:border-red-500/70 shadow-2xl shadow-red-500/20'
          : isDark
            ? 'bg-[#0a0a0a] border-white/10 group-hover:border-[#00F0FF]/30'
            : 'bg-white border-zinc-200 group-hover:border-[#00F0FF]/30 shadow-lg'
      }`}>
        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background }}
        />

        <div className="relative">
          {/* Header with icon */}
          <div className="flex items-start justify-between mb-6">
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                benefit.isProblem 
                  ? isDark ? 'bg-red-500/10' : 'bg-red-50'
                  : isDark ? 'bg-[#00F0FF]/10 group-hover:bg-[#00F0FF]/20' : 'bg-[#00F0FF]/10 group-hover:bg-[#00F0FF]/20'
              }`}>
                <benefit.icon className={`w-6 h-6 ${benefit.isProblem ? isDark ? 'text-red-400' : 'text-red-500' : 'text-[#00F0FF]'}`} />
              </div>
            </div>
            <span className={`text-xs font-mono ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>0.{index + 1}</span>
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold mb-3 ${benefit.isProblem ? 'text-white' : isDark ? 'text-white' : 'text-zinc-900'}`}>
            {benefit.title}
          </h3>

          {/* Description */}
          <p className={`leading-relaxed mb-6 text-sm sm:text-base ${benefit.isProblem ? 'text-zinc-300' : isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
            dangerouslySetInnerHTML={{ __html: benefit.description }}
          />

          {/* Stat */}
          <div className={`pt-6 border-t ${benefit.isProblem ? 'border-red-500/30' : isDark ? 'border-white/10' : 'border-zinc-200'}`}>
            <div className={`text-2xl sm:text-3xl font-bold mb-1 ${benefit.isProblem ? 'text-red-500' : 'text-[#00F0FF]'}`}>{benefit.stat}</div>
            <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{benefit.statLabel}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const { isDark } = useTheme();

  return (
    <section id="proceso" className={`relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-zinc-50'
    }`}>
      {/* Grid background */}
      <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-20' : 'opacity-5'}`} />
      
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#7000FF]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            De tu caos actual a{' '}
            <span className="text-[#00d4ff]">operaciones fluidas</span>
          </h2>
        </motion.div>

        {/* Bento Grid - 2 columnas en móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <BentoCard key={benefit.id} benefit={benefit} index={index} isDark={isDark} />
          ))}
        </div>

        {/* Diferenciador - Fondo claro destacado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl border-2 border-[#00F0FF]/30 transition-colors duration-500 ${
            isDark 
              ? 'bg-zinc-100' 
              : 'bg-zinc-50'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-zinc-900">
                No somos un <span className="text-[#00F0FF]">SaaS enlatado</span>
              </h3>
              <p className="max-w-xl text-sm sm:text-base text-zinc-700">
                A diferencia del software rígido, <span className="text-[#00F0FF] font-semibold">AioTek</span> desarrolla la tecnología <span className="text-[#00F0FF] font-semibold">a medida</span> de tu operativa. Nos adaptamos a tus <span className="text-[#00F0FF] font-semibold">reglas de negocio</span>, no al revés.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <TransitionLink
                to="/contacto"
                className={`flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border transition-all whitespace-nowrap ${
                  isDark 
                    ? 'text-white border-white/20 hover:border-[#00F0FF]/50 hover:bg-white/5' 
                    : 'text-zinc-900 border-zinc-300 hover:border-[#00F0FF]/50 hover:bg-zinc-100'
                }`}
              >
                Ver más
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
              <TransitionLink
                to="/contacto"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all whitespace-nowrap"
              >
                Solicitar Demo
              </TransitionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
