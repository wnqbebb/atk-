import { motion } from 'framer-motion';
import { Building2, Briefcase, Hotel, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';

const sectors = [
  {
    icon: Building2,
    title: 'Sanidad',
    slug: 'sanidad',
    description: 'Turnos 24/7 y guardias complejas gestionadas sin error. Gestión autónoma de personal médico y horarios críticos.',
    features: ['Turnos 24/7 automatizados', 'Gestión de guardias', 'Cobertura de urgencias', 'Integración con HIS'],
  },
  {
    icon: Briefcase,
    title: 'Grandes Empresas',
    slug: 'empresas',
    description: 'Coordinación masiva de personal y normativas laborales. Escalable a miles de empleados sin perder control.',
    features: ['Coordinación multi-sede', 'Cumplimiento normativo', 'Escalabilidad masiva', 'Reportes ejecutivos'],
  },
  {
    icon: Hotel,
    title: 'Hoteles',
    slug: 'hoteles',
    description: 'Rotación perfecta y cobertura continua para el sector HORECA. Optimiza tu plantilla según ocupación.',
    features: ['Rotación por ocupación', 'Temporadas altas', 'Multi-departamento', 'Control de horas extras'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const Services = () => {
  const { isDark } = useTheme();

  return (
    <section id="sectores" className={`relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-white'
    }`}>
      {/* Nebula background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(0, 240, 255, 0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, transparent 60%)',
            filter: 'blur(30px)',
          }}
        />
      </div>
      {/* Grid background */}
      <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-20' : 'opacity-5'}`} />
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className={`section-label mb-4 block transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>SOLUCIONES POR SECTOR</span>
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Adaptado a tu{' '}
            <span className="text-[#00F0FF]">industria</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0 transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Cada sector tiene sus propias reglas. Nuestro software se adapta a tus necesidades específicas, no al revés.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className={`h-full p-6 sm:p-8 rounded-3xl transition-all duration-500 flex flex-col ${
                isDark 
                  ? 'bg-[#0a0a0a] border border-white/10 group-hover:border-[#00F0FF]/30 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]' 
                  : 'bg-white border border-zinc-200 group-hover:border-[#00F0FF]/30 group-hover:shadow-xl shadow-sm'
              }`}>
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center group-hover:bg-[#00F0FF]/20 transition-colors duration-300">
                    <sector.icon className="w-7 h-7 text-[#00F0FF]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 transition-colors ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>{sector.title}</h3>
                <p className={`mb-6 leading-relaxed text-sm sm:text-base flex-grow transition-colors ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>{sector.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {sector.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm transition-colors ${
                      isDark ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA - Centrado correctamente */}
                <div className="flex justify-center mt-auto">
                  <TransitionLink
                    to={`/industrias/${sector.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all group/link"
                  >
                    Ver solución
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </TransitionLink>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
