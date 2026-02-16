import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, CalendarDays, Check, Clock, Shield, Zap, TrendingUp, CalendarCheck, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';
import SEO from '../components/SEO';
import EnhancedBackground from '../components/EnhancedBackground';
import AnimatedStats from '../sections/AnimatedStats';
import InteractiveProcess from '../sections/InteractiveProcess';
import EnterpriseFeatures from '../sections/EnterpriseFeatures';

const mainServices = [
  {
    id: 'turnos',
    icon: CalendarDays,
    title: 'Gestión Inteligente de Turnos',
    subtitle: 'Elimina el caos de la planificación manual',
    problem: 'Planificar turnos para equipos grandes (Para equipos medianos y grandes) es un rompecabezas imposible. Cada cambio genera efectos dominó que terminan en errores de nómina.',
    solution: 'Sistema autónomo que optimiza automáticamente coberturas, respeta descansos legales y alerta de conflictos antes de que ocurran.',
    benefits: [
      'Reducción del 40% en errores de nómina',
      'Ahorro de 15-20 horas mensuales en planificación',
      'Cumplimiento automático de convenios colectivos',
      'Visibilidad en tiempo real de coberturas',
    ],
    features: [
      { icon: Clock, text: 'Planificación automática 24/7' },
      { icon: Shield, text: 'Validación legal integrada' },
      { icon: Zap, text: 'Alertas de conflictos en tiempo real' },
      { icon: TrendingUp, text: 'Reportes de productividad' },
    ],
    gradient: 'from-[#00F0FF]/20 to-[#7000FF]/10',
    color: 'text-[#00F0FF]',
    bgColor: 'bg-[#00F0FF]/10',
  },
  {
    id: 'recepcion',
    icon: CalendarCheck,
    title: 'Recepción Inteligente',
    subtitle: 'Gestión automática de citas y atención a clientes sin intervención manual',
    problem: 'Las solicitudes de citas y mensajes de clientes generan pérdida de oportunidades por respuesta tardía, gestión manual constante de la agenda, olvidos y cancelaciones de citas, y sobrecarga del equipo administrativo.',
    solution: 'Sistema de recepción inteligente que responde automáticamente a leads y clientes, agenda citas de forma automática en tu calendario, envía confirmaciones inmediatas y recordatorios automáticos antes de la cita.',
    benefits: [
      'Agenda llena sin gestión manual',
      'Reducción de cancelaciones y ausencias',
      'Respuesta inmediata 24/7',
      'Mayor conversión de solicitudes en citas confirmadas',
    ],
    features: [
      { icon: MessageCircle, text: 'Gestión automática de citas desde web o mensajería' },
      { icon: Clock, text: 'Recordatorios automáticos programados' },
      { icon: Shield, text: 'Sincronización con calendario' },
      { icon: Zap, text: 'Escalado a personal cuando se requiere' },
    ],
    gradient: 'from-[#7000FF]/20 to-[#00F0FF]/10',
    color: 'text-[#7000FF]',
    bgColor: 'bg-[#7000FF]/10',
  },
  {
    id: 'auditoria',
    icon: Search,
    title: 'Auditoría Inteligente de Procesos',
    subtitle: 'Identifica y elimina ineficiencias en tus operaciones repetitivas',
    problem: 'Procesos manuales repetitivos consumen horas de tu equipo, generan errores costosos y desvían recursos de tareas estratégicas. No sabes exactamente dónde se está perdiendo tiempo y dinero.',
    solution: 'Auditoría especializada que analiza tus flujos de trabajo, identifica tareas repetitivas susceptibles de automatización y diseña un plan de acción para reducir errores y liberar tiempo de tu equipo.',
    benefits: [
      'Identificación de procesos que consumen más tiempo',
      'Reducción de errores en tareas manuales',
      'Plan de automatización priorizado por ROI',
      'Liberación de tu equipo para tareas estratégicas',
    ],
    features: [
      { icon: Search, text: 'Análisis exhaustivo de procesos actuales' },
      { icon: Clock, text: 'Medición precisa de tiempo y recursos' },
      { icon: Shield, text: 'Detección de cuellos de botella' },
      { icon: Zap, text: 'Roadmap de automatización personalizado' },
    ],
    gradient: 'from-[#00F0FF]/20 to-white/10',
    color: 'text-[#00F0FF]',
    bgColor: 'bg-[#00F0FF]/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

const Services = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Servicios de Gestión de Turnos y Automatización"
        description="Descubre nuestras soluciones: Gestión Inteligente de Turnos, Automatización WhatsApp y Agentes de Voz IA. Reduce costos operativos hasta un 40%."
      />
      
      {/* Section 1: Hero de Servicios con Fondo WOW */}
      <section className={`relative min-h-screen py-24 sm:py-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-white'
      }`}>
        {/* Fondo mejorado con SVGs y partículas */}
        <EnhancedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24 sm:mb-32"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-8 border ${
                isDark 
                  ? 'bg-black/50 border-[#00F0FF]/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]' 
                  : 'bg-white/80 border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]'
              }`}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-[#00F0FF]" />
              </motion.div>
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Soluciones Enterprise
              </span>
            </motion.div>
            
            <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.1] ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Tres formas de{' '}
              <span className="text-gradient">eliminar el caos</span>
              {' '}operativo
            </h1>
            
            <p className={`text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Cada solución está diseñada para resolver un problema específico 
              que te está costando dinero, tiempo o tranquilidad.
            </p>
          </motion.div>

          {/* Main Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24 sm:space-y-32"
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual/Icon con efectos mejorados */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    className={`relative aspect-square max-w-lg mx-auto rounded-[2.5rem] bg-gradient-to-br ${service.gradient} p-8 sm:p-12 flex items-center justify-center border backdrop-blur-sm ${
                      isDark ? 'border-white/10' : 'border-zinc-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Fondo animado */}
                    <div className="absolute inset-0 opacity-20 rounded-[2.5rem] overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-grid-technical"
                        animate={{ 
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    
                    {/* Círculos pulsantes */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border border-[#00F0FF]/20"
                        style={{
                          width: `${60 + i * 20}%`,
                          height: `${60 + i * 20}%`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                    
                    {/* Main Icon */}
                    <motion.div
                      className={`relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center ${
                        isDark 
                          ? 'bg-[#0a0a0a]/80 border border-[#00F0FF]/30 shadow-[0_0_60px_rgba(0,240,255,0.3)]' 
                          : 'bg-white/90 border border-[#00F0FF]/40 shadow-[0_0_60px_rgba(0,240,255,0.4)]'
                      }`}
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <service.icon className={`w-16 h-16 sm:w-20 sm:h-20 ${service.color}`} />
                    </motion.div>

                    {/* Floating elements animados */}
                    <motion.div
                      className={`absolute top-8 right-8 w-16 h-16 rounded-2xl flex items-center justify-center ${
                        isDark 
                          ? 'bg-[#0a0a0a]/80 border border-[#00F0FF]/30' 
                          : 'bg-white/90 border border-[#00F0FF]/40'
                      }`}
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Check className="w-8 h-8 text-[#00F0FF]" />
                    </motion.div>
                    
                    <motion.div
                      className={`absolute bottom-12 left-8 w-14 h-14 rounded-xl flex items-center justify-center ${
                        isDark 
                          ? 'bg-[#0a0a0a]/80 border border-[#7000FF]/30' 
                          : 'bg-white/90 border border-[#7000FF]/40'
                      }`}
                      animate={{ 
                        y: [0, 15, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <Zap className="w-7 h-7 text-[#7000FF]" />
                    </motion.div>

                    {/* Partículas flotantes alrededor */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-[#00F0FF]"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 20}%`,
                          boxShadow: '0 0 10px #00F0FF',
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.2, 1, 0.2],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Label */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
                      isDark 
                        ? `${service.bgColor} border-white/10` 
                        : 'bg-white border-zinc-200 shadow-sm'
                    }`}
                  >
                    <service.icon className={`w-4 h-4 ${service.color}`} />
                    <span className={`text-sm font-semibold ${service.color}`}>
                      Solución #{index + 1}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {service.title}
                  </h2>

                  {/* Subtitle */}
                  <p className={`text-xl mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {service.subtitle}
                  </p>

                  {/* Problem Statement */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className={`mb-8 p-6 rounded-2xl border-l-4 ${
                      isDark 
                        ? 'bg-red-500/5 border-red-500/50' 
                        : 'bg-red-50 border-red-400'
                    }`}
                  >
                    <p className="text-red-400 font-semibold mb-2">El problema que enfrentas:</p>
                    <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {service.problem}
                    </p>
                  </motion.div>

                  {/* Solution */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className={`mb-8 p-6 rounded-2xl border-l-4 ${
                      isDark 
                        ? 'bg-[#00F0FF]/5 border-[#00F0FF]/50' 
                        : 'bg-[#00F0FF]/10 border-[#00F0FF]'
                    }`}
                  >
                    <p className="text-[#00F0FF] font-semibold mb-2">Cómo lo resolvemos:</p>
                    <p className={`leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      {service.solution}
                    </p>
                  </motion.div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                      isDark ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      Resultados cuantificables
                    </p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${service.bgColor}`}
                          >
                            <Check className={`w-3 h-3 ${service.color}`} />
                          </motion.div>
                          <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-2 text-sm ${
                          isDark ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        <feature.icon className={`w-4 h-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} />
                        {feature.text}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <TransitionLink
                        to="/contacto"
                        className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full transition-all ${
                          isDark 
                            ? 'text-black bg-[#00F0FF] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]' 
                            : 'text-white bg-[#00B8D4] hover:shadow-[0_0_40px_rgba(0,184,212,0.5)]'
                        }`}
                      >
                        Consultar esta solución
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </TransitionLink>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <TransitionLink
                        to="/contacto"
                        className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full border transition-all ${
                          isDark 
                            ? 'text-white border-white/20 hover:bg-white/5 hover:border-[#00F0FF]/50' 
                            : 'text-zinc-900 border-zinc-300 hover:bg-zinc-100 hover:border-[#00F0FF]/50'
                        }`}
                      >
                        Ver demo
                        <ArrowRight className="w-5 h-5" />
                      </TransitionLink>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Animated Stats */}
      <AnimatedStats />

      {/* Section 3: Interactive Process */}
      <InteractiveProcess />

      {/* Section 4: Enterprise Features */}
      <EnterpriseFeatures />

      {/* Section 5: Final CTA con fondo mejorado */}
      <section className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Fondo animado del CTA */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-10' : 'opacity-5'}`} />
          
          {/* Círculos animados */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={i}
                cx="300"
                cy="300"
                r={100 + i * 80}
                fill="none"
                stroke="#00F0FF"
                strokeWidth="1"
                strokeDasharray="10 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              />
            ))}
          </svg>
          
          {/* Glow central */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#00F0FF]/20 via-transparent to-transparent"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`max-w-3xl mx-auto p-10 sm:p-16 rounded-[2.5rem] relative overflow-hidden border ${
                isDark 
                  ? 'bg-[#0a0a0a]/80 border-[#00F0FF]/20 backdrop-blur-sm' 
                  : 'bg-white/90 border-[#00F0FF]/30 backdrop-blur-sm shadow-2xl'
              }`}
            >
              {/* Glow animado */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#00F0FF]/20 via-transparent to-transparent pointer-events-none"
              />
              
              <div className="relative z-10">
                <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  ¿No estás seguro de qué solución necesitas?
                </h2>
                <p className={`text-lg mb-10 max-w-xl mx-auto ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  En una llamada gratuita de 15 minutos, analizaremos tu operativa 
                  y te diremos exactamente dónde estás perdiendo dinero.
                </p>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <TransitionLink
                    to="/contacto"
                    className={`group inline-flex items-center gap-3 px-10 py-5 text-base font-medium rounded-full transition-all ${
                      isDark 
                        ? 'text-black bg-[#00F0FF] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)]' 
                        : 'text-white bg-[#00B8D4] hover:shadow-[0_0_60px_rgba(0,184,212,0.5)]'
                    }`}
                  >
                    <MessageCircle className="w-6 h-6" />
                    Agendar diagnóstico gratuito
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </TransitionLink>
                </motion.div>
                
                <p className={`mt-6 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Sin compromiso. Sin tarifas ocultas. Respuesta en menos de 2 horas.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
