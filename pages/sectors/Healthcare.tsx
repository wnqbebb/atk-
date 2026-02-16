import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Shield, Users, Activity, Calendar, Phone, MessageCircle } from 'lucide-react';
import TransitionLink from '../../components/TransitionLink';
import SEO from '../../components/SEO';

const features = [
  {
    icon: Clock,
    title: 'Turnos 24/7 Automatizados',
    description: 'Gestión autónoma de guardias nocturnas, festivos y rotaciones complejas sin intervención manual.'
  },
  {
    icon: Shield,
    title: 'Cumplimiento Normativo',
    description: 'Validación automática de descansos obligatorios, máximos de horas y convenios colectivos del sector.'
  },
  {
    icon: Users,
    title: 'Gestión de Guardias',
    description: 'Asignación inteligente de guardias de urgencia con cobertura garantizada y alertas de conflictos.'
  },
  {
    icon: Activity,
    title: 'Integración con HIS',
    description: 'Conexión nativa con sistemas de historiales médicos para sincronización de datos en tiempo real.'
  }
];

const benefits = [
  'Reducción del 60% en errores de planificación',
  'Cobertura 24/7 sin lagunas',
  'Cumplimiento 100% de descansos legales',
  'Ahorro de 20h semanales en gestión',
  'Escalable a múltiples centros',
  'Soporte prioritario para emergencias'
];

const stats = [
  { value: '45+', label: 'Centros médicos' },
  { value: '99.8%', label: 'Cobertura garantizada' },
  { value: '0', label: 'Errores de guardia' },
  { value: '<24h', label: 'Tiempo de respuesta' }
];

const Healthcare = () => {
  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos para Sanidad"
        description="Solución especializada para hospitales y clínicas. Gestión 24/7 de guardias, cumplimiento normativo y integración con HIS. Reduce errores un 60%."
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
            <span className="text-[#00F0FF]">Sanidad</span>
          </motion.div>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
                <Activity className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-sm font-medium text-[#00F0FF]">Sector Salud</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Gestión de turnos{' '}
                <span className="text-gradient">sin errores</span>{' '}
                para sanidad
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                El caos de las guardias médicas termina aquí. Sistema inteligente que optimiza 
                coberturas 24/7, respeta descansos obligatorios y elimina conflictos antes de que ocurran.
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
                  href="https://wa.me/34643141366?text=Hola%20AioTek,%20me%20interesa%20la%20solución%20para%20sanidad"
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
                  <Activity className="w-20 h-20 text-[#00F0FF]" />
                </div>
                
                {/* Floating cards */}
                <motion.div
                  className="absolute top-12 right-12 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-sm text-white">Guardia cubierta</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-8 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#00F0FF]" />
                    <span className="text-sm text-white">24/7 Activo</span>
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

          {/* Features Grid */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
            >
              Funcionalidades específicas para <span className="text-gradient">el sector salud</span>
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
                Resultados <span className="text-gradient">cuantificables</span>
              </h2>
              <p className="text-zinc-400 mb-8">
                Nuestros clientes del sector sanitario han experimentado mejoras significativas 
                en la gestión de su personal médico y de enfermería.
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
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-10 h-10 text-[#00F0FF]" />
                <div>
                  <h3 className="text-xl font-semibold text-white">¿Listo para optimizar tus guardias?</h3>
                  <p className="text-zinc-400 text-sm">Demo personalizada sin compromiso</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-[#00F0FF]" />
                  <span>+34 643 14 13 66</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <MessageCircle className="w-5 h-5 text-[#00F0FF]" />
                  <span>Respuesta en menos de 2 horas</span>
                </div>
              </div>

              <TransitionLink
                to="/contacto"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
              >
                Solicitar información
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
              Elimina el caos de las guardias médicas
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Únete a los 45+ centros médicos que ya confían en AioTek para su gestión de turnos.
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

export default Healthcare;
