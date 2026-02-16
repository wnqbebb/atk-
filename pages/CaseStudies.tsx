import { motion } from 'framer-motion';
import { ArrowRight, Award, TrendingUp, Users, Clock, MessageCircle, Building2, Shield } from 'lucide-react';
import TransitionLink from '../components/TransitionLink';
import SEO from '../components/SEO';

const stats = [
  { icon: TrendingUp, value: '40%', label: 'Reducción de errores' },
  { icon: Clock, value: '20h', label: 'Ahorro semanal' },
  { icon: Users, value: '50+', label: 'Empresas' },
  { icon: Award, value: '99%', label: 'Satisfacción' },
];

const cases = [
  {
    company: 'Clínica MedicalCenter',
    sector: 'Salud',
    icon: Building2,
    result: 'Redujeron errores de nómina un 60%',
    description: 'Implementación de gestión de turnos para 45 médicos y enfermeras con integración a su sistema de historiales.',
  },
  {
    company: 'Cadena RetailMax',
    sector: 'Retail',
    icon: Shield,
    result: 'Ahorro de 25h semanales en planificación',
    description: 'Automatización completa de la planificación para 12 tiendas y 200 empleados con rotaciones complejas.',
  },
  {
    company: 'Seguridad Plus',
    sector: 'Seguridad',
    icon: Award,
    result: 'Cobertura 24/7 optimizada',
    description: 'Sistema de gestión de guardias para 80 vigilantes con control de horas y cumplimiento normativo.',
  },
];

const CaseStudies = () => {
  return (
    <>
      <SEO 
        title="Casos de Éxito - Resultados Reales"
        description="Descubre cómo empresas como la tuya han reducido errores de nómina un 40% y ahorrado 20h semanales con AioTek."
      />
      
      <section className="relative min-h-screen py-24 sm:py-32 bg-[#050505] overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-technical opacity-20" />
        
        {/* Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#7000FF]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-sm text-zinc-300">Casos de Éxito</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Resultados que <span className="text-gradient">hablan</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto px-2 sm:px-0">
              Descubre cómo empresas como la tuya han transformado su gestión de turnos con AioTek.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-20"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 text-center hover:border-[#00F0FF]/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all"
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00F0FF] mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-4 sm:space-y-6">
            {cases.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-[#00F0FF]/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center">
                        <study.icon className="w-5 h-5 text-[#00F0FF]" />
                      </div>
                      <span className="px-3 py-1 text-xs font-medium text-[#00F0FF] bg-[#00F0FF]/10 rounded-full">
                        {study.sector}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{study.company}</h3>
                    <p className="text-zinc-400 mb-4 text-sm sm:text-base">{study.description}</p>
                    <div className="flex items-center gap-2 text-[#00F0FF] font-semibold text-sm sm:text-base">
                      <TrendingUp className="w-5 h-5" />
                      {study.result}
                    </div>
                  </div>
                  <TransitionLink
                    to="/contacto"
                    className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full border border-white/20 hover:border-[#00F0FF]/30 hover:bg-white/5 transition-all whitespace-nowrap self-start lg:self-center"
                  >
                    Quiero estos resultados
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </TransitionLink>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#0a0a0a] border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto text-sm sm:text-base">
              Agenda una demo gratuita y descubre cómo AioTek puede transformar tu operativa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TransitionLink
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
              >
                Solicitar demo
                <ArrowRight className="w-5 h-5" />
              </TransitionLink>
              <TransitionLink
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-full border border-white/20 hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
