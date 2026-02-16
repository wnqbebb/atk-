import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FileSpreadsheet, Eye, TrendingDown, ArrowRight } from 'lucide-react';
import TransitionLink from '../components/TransitionLink';

const benefits = [
  {
    id: 'excel',
    title: 'El enemigo es el Excel',
    description: 'La planificación manual genera errores, conflictos entre empleados y pérdidas de tiempo incalculables. Cada cambio de turno es una potencial bomba de tiempo.',
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
    description: 'Reduce el tiempo administrativo y elimina los errores costosos en nómina. El software se paga solo en el primer mes.',
    icon: TrendingDown,
    stat: '30%',
    statLabel: 'menos tiempo admin',
  },
];

interface BentoCardProps {
  benefit: typeof benefits[0];
  index: number;
}

const BentoCard = ({ benefit, index }: BentoCardProps) => {
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
          ? 'bg-[#0a0a0a] text-white border-red-500/20 group-hover:border-red-500/40' 
          : 'bg-[#0a0a0a] border-white/10 group-hover:border-[#00F0FF]/30'
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
                benefit.isProblem ? 'bg-red-500/10' : 'bg-[#00F0FF]/10 group-hover:bg-[#00F0FF]/20'
              }`}>
                <benefit.icon className={`w-6 h-6 ${benefit.isProblem ? 'text-red-400' : 'text-[#00F0FF]'}`} />
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-600">0.{index + 1}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white">
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="leading-relaxed mb-6 text-sm sm:text-base text-zinc-400">
            {benefit.description}
          </p>

          {/* Stat */}
          <div className={`pt-6 border-t ${benefit.isProblem ? 'border-red-500/20' : 'border-white/10'}`}>
            <div className={`text-2xl sm:text-3xl font-bold mb-1 ${benefit.isProblem ? 'text-red-400' : 'text-[#00F0FF]'}`}>{benefit.stat}</div>
            <div className="text-sm text-zinc-500">{benefit.statLabel}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <section id="producto" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-technical opacity-20" />
      
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
          <span className="section-label mb-4 block">EL PROBLEMA VS LA SOLUCIÓN</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Deja de perder dinero con{' '}
            <span className="text-gradient">sistemas obsoletos</span>
          </h2>
          <div className="mt-6">
            <p className="text-zinc-400 text-lg">
              Gestión de turnos sin complicaciones
            </p>
          </div>
        </motion.div>

        {/* Bento Grid - 2 columnas en móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <BentoCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Diferenciador */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                No somos un SaaS enlatado
              </h3>
              <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
                A diferencia del software rígido, AioTek desarrolla la tecnología a medida de tu operativa. Nos adaptamos a tus reglas de negocio, no al revés.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <TransitionLink
                to="/contacto"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full border border-white/20 hover:border-[#00F0FF]/50 hover:bg-white/5 transition-all whitespace-nowrap"
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

export default BentoGrid;
