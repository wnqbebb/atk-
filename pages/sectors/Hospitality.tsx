import { motion } from 'framer-motion';
import { ArrowRight, Check, Hotel, Users, Calendar, TrendingUp, Clock, MessageCircle, Star } from 'lucide-react';
import TransitionLink from '../../components/TransitionLink';
import SEO from '../../components/SEO';

const features = [
  {
    icon: Calendar,
    title: 'Rotación por Ocupación',
    description: 'Ajuste automático de plantilla según previsiones de ocupación. Más personal en alta temporada, optimización en baja.'
  },
  {
    icon: TrendingUp,
    title: 'Gestión de Temporadas',
    description: 'Planificación anticipada de refuerzos para verano, navidades y eventos especiales sin sobrecargar a tu equipo fijo.'
  },
  {
    icon: Users,
    title: 'Multi-departamento',
    description: 'Coordinación entre recepción, housekeeping, restaurante y mantenimiento. Visión unificada de todo el hotel.'
  },
  {
    icon: Clock,
    title: 'Control de Horas Extras',
    description: 'Alertas automáticas cuando un empleado se acerca al límite de horas. Evita costes imprevistos y cumple la normativa.'
  }
];

const benefits = [
  'Reducción del 30% en costes de personal',
  'Cobertura perfecta en temporadas altas',
  'Menor rotación de empleados',
  'Integración con PMS (Property Management System)',
  'Control de horas extras automático',
  'Soporte 24/7 para emergencias'
];

const stats = [
  { value: '120+', label: 'Hoteles y cadenas' },
  { value: '25%', label: 'Menos horas extras' },
  { value: '98%', label: 'Satisfacción staff' },
  { value: '4.8★', label: 'Valoración media' }
];

const Hospitality = () => {
  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos para Hoteles y HORECA"
        description="Solución especializada para hostelería. Gestión por ocupación, control de temporadas y multi-departamento. Reduce costes un 30%."
      />
      
      <section className="relative min-h-screen bg-[#050505] overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-technical opacity-20" />
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00F0FF]/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-zinc-500 mb-8"
          >
            <TransitionLink to="/" className="hover:text-[#00F0FF] transition-colors">Home</TransitionLink>
            <span>/</span>
            <TransitionLink to="/servicios" className="hover:text-[#00F0FF] transition-colors">Sectores</TransitionLink>
            <span>/</span>
            <span className="text-[#00F0FF]">Hoteles</span>
          </motion.div>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
                <Hotel className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-sm font-medium text-[#00F0FF]">Sector HORECA</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Plantilla óptima{' '}
                <span className="text-gradient">en cada momento</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Gestión inteligente de personal para hoteles y restaurantes. Ajusta tu plantilla 
                automáticamente según ocupación, temporadas y eventos. Sin horas extras imprevistas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <TransitionLink
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
                >
                  Solicitar demo
                  <ArrowRight className="w-5 h-5" />
                </TransitionLink>
                <a
                  href="https://wa.me/34643141366?text=Hola%20AioTek,%20me%20interesa%20la%20solución%20para%20hoteles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-full border border-white/20 hover:bg-white/5 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-lg mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#00F0FF]/20 to-[#7000FF]/10 p-8 flex items-center justify-center border border-white/5">
                <div className="relative z-10 w-40 h-40 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
                  <Hotel className="w-20 h-20 text-[#00F0FF]" />
                </div>
                
                {/* Floating cards */}
                <motion.div
                  className="absolute top-12 right-12 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-white">4.9★ Rating</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-8 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-white">100% Ocupación</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 text-center">
                <div className="text-3xl font-bold text-[#00F0FF] mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
            >
              Diseñado para la <span className="text-gradient">hostelería</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#00F0FF]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00F0FF]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Tu hotel <span className="text-gradient">más eficiente</span>
              </h2>
              <p className="text-zinc-400 mb-8">
                Hoteles y cadenas hoteleras reducen sus costes de personal manteniendo 
                la calidad de servicio y mejorando la satisfacción de sus empleados.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#00F0FF]" />
                    </div>
                    <span className="text-zinc-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">¿Preparado para la temporada alta?</h3>
              <p className="text-zinc-400 mb-6">
                No esperes a que llegue el verano o las navidades. Implementa AioTek 
                y ten tu plantilla optimizada antes de la próxima temporada.
              </p>
              
              <TransitionLink
                to="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
              >
                Preparar mi hotel
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-[#0a0a0a] border border-white/10"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Maximiza la ocupación, minimiza costes
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Únete a los 120+ hoteles que ya optimizan su plantilla con AioTek.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 text-base font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Empezar ahora
              <ArrowRight className="w-6 h-6" />
            </TransitionLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hospitality;
