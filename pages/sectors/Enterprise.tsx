import { motion } from 'framer-motion';
import { ArrowRight, Check, Building2, Users, BarChart3, Globe, Shield, MessageCircle } from 'lucide-react';
import TransitionLink from '../../components/TransitionLink';
import SEO from '../../components/SEO';

const features = [
  {
    icon: Globe,
    title: 'Coordinación Multi-sede',
    description: 'Gestión centralizada de turnos para todas tus ubicaciones con visibilidad global en tiempo real.'
  },
  {
    icon: Shield,
    title: 'Cumplimiento Normativo',
    description: 'Validación automática de convenios colectivos, ETTs y normativas laborales específicas por país.'
  },
  {
    icon: Users,
    title: 'Escalabilidad Masiva',
    description: 'Desde 100 hasta 10,000+ empleados. El sistema crece contigo sin pérdida de rendimiento.'
  },
  {
    icon: BarChart3,
    title: 'Reportes Ejecutivos',
    description: 'Dashboards avanzados con KPIs de productividad, costes laborales y absentismo por departamento.'
  }
];

const benefits = [
  'Reducción del 40% en costes administrativos',
  'Cumplimiento 100% de normativas laborales',
  'Escalable sin límites',
  'Integración con SAP/ERP',
  'Soporte multi-idioma',
  'SLA garantizado 99.9%'
];

const stats = [
  { value: '200+', label: 'Grandes empresas' },
  { value: '50k+', label: 'Empleados gestionados' },
  { value: '35%', label: 'Ahorro en costes' },
  { value: '99.9%', label: 'Uptime garantizado' }
];

const Enterprise = () => {
  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos para Grandes Empresas"
        description="Solución enterprise escalable para coordinación multi-sede. Cumplimiento normativo, integración ERP y reportes ejecutivos. Reduce costes un 40%."
      />
      
      <section className="relative min-h-screen bg-[#050505] overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-technical opacity-20" />
        
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#7000FF]/10 via-transparent to-transparent pointer-events-none" />

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
            <span className="text-[#00F0FF]">Grandes Empresas</span>
          </motion.div>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7000FF]/10 border border-[#7000FF]/20 mb-6">
                <Building2 className="w-4 h-4 text-[#7000FF]" />
                <span className="text-sm font-medium text-[#7000FF]">Enterprise</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Control total de tu{' '}
                <span className="text-gradient">fuerza laboral</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Coordinación masiva de personal a escala empresarial. Integración perfecta con tus 
                sistemas ERP, cumplimiento normativo multi-país y visibilidad ejecutiva total.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <TransitionLink
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
                >
                  Solicitar demo enterprise
                  <ArrowRight className="w-5 h-5" />
                </TransitionLink>
                <a
                  href="https://wa.me/34643141366?text=Hola%20AioTek,%20me%20interesa%20la%20solución%20enterprise"
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
              <div className="aspect-square max-w-lg mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#7000FF]/20 to-[#00F0FF]/10 p-8 flex items-center justify-center border border-white/5">
                <div className="relative z-10 w-40 h-40 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
                  <Building2 className="w-20 h-20 text-[#7000FF]" />
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
                    <span className="text-sm text-white">Cumplimiento OK</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-8 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#7000FF]" />
                    <span className="text-sm text-white">10k+ empleados</span>
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
                <div className="text-3xl font-bold text-[#7000FF] mb-1">{stat.value}</div>
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
              Infraestructura <span className="text-gradient">enterprise-grade</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#7000FF]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7000FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#7000FF]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#7000FF]" />
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
                Ventajas <span className="text-gradient">competitivas</span>
              </h2>
              <p className="text-zinc-400 mb-8">
                Grandes corporaciones reducen sus costes operativos y mejoran la satisfacción 
                de sus empleados con nuestra solución escalable.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#7000FF]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#7000FF]" />
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
              className="p-8 rounded-3xl bg-gradient-to-br from-[#7000FF]/10 to-transparent border border-[#7000FF]/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">¿Necesitas una solución personalizada?</h3>
              <p className="text-zinc-400 mb-6">
                Nuestro equipo enterprise está preparado para diseñar una solución 
                a medida de tus necesidades específicas.
              </p>
              
              <TransitionLink
                to="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
              >
                Contactar con ventas enterprise
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
              Escala sin límites
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Únete a las 200+ grandes empresas que confían en AioTek para gestionar su fuerza laboral.
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

export default Enterprise;
