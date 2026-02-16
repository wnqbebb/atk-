import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Users, Clock, Activity, ArrowRight, Building2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';

const HighTicketShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const { isDark } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 3D Tilt effect - starts tilted and flattens as user scrolls
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  const tabs = ['Turnos', 'Personal', 'Cobertura', 'Alertas'];

  const stats = [
    { label: 'Turnos/día', value: '500+', icon: Calendar },
    { label: 'Personal', value: '120', icon: Users },
    { label: 'Cobertura', value: '99%', icon: Activity },
  ];

  return (
    <section ref={sectionRef} className={`relative py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-white'
    }`}>
      {/* Curved line decoration */}
      <svg className="absolute top-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1440 256" preserveAspectRatio="none">
        <path
          d="M0,128 Q360,0 720,128 T1440,128"
          fill="none"
          stroke="url(#curve-gradient-light)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="curve-gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-colors ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}>
            Gestión de turnos{' '}
            <span className="text-[#00F0FF]">sin complicaciones</span>
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>
            Visualiza, planifica y optimiza la asignación de tu personal en tiempo real. Adiós al Excel, hola al control total.
          </p>
        </motion.div>

        {/* 3D Dashboard Container */}
        <motion.div
          style={{ rotateX, scale, opacity }}
          className="perspective-1000"
        >
          <div className="relative preserve-3d">
            {/* Dashboard Container */}
            <div className={`relative rounded-3xl overflow-hidden border shadow-2xl transition-colors ${
              isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200'
            }`}>
              {/* Shimmer border effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-aiotek-cyan/20 via-transparent to-aiotek-cyan/20 animate-shimmer" 
                  style={{ backgroundSize: '200% 100%' }}
                />
              </div>

              {/* Dashboard Content */}
              <div className="relative">
                {/* Top Bar */}
                <div className={`flex items-center justify-between px-6 py-4 border-b transition-colors ${
                  isDark ? 'border-white/10' : 'border-zinc-100'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aiotek-cyan to-aiotek-cyan-dark flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <span className={`font-display font-bold text-sm transition-colors ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        Aio<span className="text-aiotek-cyan">Tek</span> Manager
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-zinc-950"
                    >
                      <Calendar className="w-4 h-4" />
                      Nuevo Turno
                    </motion.button>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-700 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Sistema Activo
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className={`w-56 p-4 border-r transition-colors ${
                    isDark ? 'border-white/10 bg-[#080808]' : 'border-zinc-100 bg-zinc-50/50'
                  }`}>
                    <div className="mb-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-xl bg-zinc-950"
                      >
                        <Calendar className="w-4 h-4" />
                        Nuevo Turno
                      </motion.button>
                    </div>

                    <div className="space-y-1">
                      <div className={`text-xs uppercase tracking-wider mb-2 px-3 transition-colors ${
                        isDark ? 'text-zinc-500' : 'text-zinc-400'
                      }`}>Menú</div>
                      {['Dashboard', 'Turnos', 'Personal', 'Cobertura', 'Reportes', 'Configuración'].map((item, index) => (
                        <button
                          key={item}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                            index === 0
                              ? isDark 
                                ? 'text-white bg-white/10' 
                                : 'text-zinc-900 bg-white shadow-sm'
                              : isDark 
                                ? 'text-zinc-500 hover:text-white hover:bg-white/5' 
                                : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/50'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Panel */}
                  <div className={`flex-1 p-8 transition-colors ${
                    isDark ? 'bg-[#0a0a0a]' : 'bg-white'
                  }`}>
                    {/* Welcome Section */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-aiotek-cyan to-aiotek-cyan-dark flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-2xl font-display font-bold mb-2 transition-colors ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        Panel de <span className="text-gradient">Control Total</span>
                      </h3>
                      <p className={`text-sm max-w-md mx-auto transition-colors ${
                        isDark ? 'text-zinc-400' : 'text-zinc-500'
                      }`}>
                        Gestión inteligente de personal y horarios. Todo bajo control, todo en tiempo real.
                      </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                      <div className={`flex items-center gap-1 p-1 rounded-full transition-colors ${
                        isDark ? 'bg-zinc-900' : 'bg-zinc-100'
                      }`}>
                        {tabs.map((tab, index) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                              activeTab === index
                                ? isDark ? 'text-white' : 'text-zinc-900'
                                : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-500 hover:text-zinc-700'
                            }`}
                          >
                            {activeTab === index && (
                              <motion.div
                                layoutId="activeTabDashboard"
                                className={`absolute inset-0 rounded-full shadow-sm transition-colors ${
                                  isDark ? 'bg-white/10' : 'bg-white'
                                }`}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{tab}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className={`relative p-6 rounded-2xl border cursor-pointer group transition-colors ${
                            isDark 
                              ? 'bg-[#111111] border-white/5 hover:border-aiotek-cyan/30' 
                              : 'bg-zinc-50 border-zinc-100'
                          }`}
                        >
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-aiotek-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-aiotek-cyan/10 flex items-center justify-center">
                                <stat.icon className="w-4 h-4 text-aiotek-cyan" />
                              </div>
                            </div>
                            <div className={`text-sm mb-1 transition-colors ${
                              isDark ? 'text-zinc-500' : 'text-zinc-500'
                            }`}>{stat.label}</div>
                            <div className={`text-3xl font-bold transition-colors ${
                              isDark ? 'text-white' : 'text-zinc-900'
                            }`}>{stat.value}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Schedule Preview */}
                    <div className={`mt-6 p-4 rounded-2xl border transition-colors ${
                      isDark 
                        ? 'bg-[#111111] border-white/5' 
                        : 'bg-zinc-50 border-zinc-100'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className={`font-semibold transition-colors ${
                          isDark ? 'text-white' : 'text-zinc-900'
                        }`}>Turnos de Hoy</h4>
                        <span className={`text-sm transition-colors ${
                          isDark ? 'text-zinc-500' : 'text-zinc-500'
                        }`}>15 de Enero, 2025</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { time: '08:00 - 16:00', dept: 'Urgencias', staff: 'Dr. García', status: 'active' },
                          { time: '16:00 - 00:00', dept: 'Cirugía', staff: 'Dra. Martínez', status: 'pending' },
                          { time: '00:00 - 08:00', dept: 'UCI', staff: 'Dr. López', status: 'pending' },
                        ].map((shift, i) => (
                          <div key={i} className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                            isDark 
                              ? 'bg-[#0a0a0a] border-white/5' 
                              : 'bg-white border-zinc-100'
                          }`}>
                            <div className="flex items-center gap-4">
                              {shift.status === 'active' ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Clock className={`w-4 h-4 ${isDark ? 'text-zinc-600' : 'text-zinc-300'}`} />
                              )}
                              <div>
                                <div className={`text-sm font-medium transition-colors ${
                                  isDark ? 'text-white' : 'text-zinc-900'
                                }`}>{shift.dept}</div>
                                <div className={`text-xs transition-colors ${
                                  isDark ? 'text-zinc-500' : 'text-zinc-500'
                                }`}>{shift.staff}</div>
                              </div>
                            </div>
                            <div className={`flex items-center gap-2 text-sm transition-colors ${
                              isDark ? 'text-zinc-500' : 'text-zinc-500'
                            }`}>
                              <Clock className="w-4 h-4" />
                              {shift.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Alert */}
                    <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-amber-900">Cobertura baja detectada</div>
                        <div className="text-xs text-amber-700">Urgencias necesita 2 médicos más para el turno de noche.</div>
                      </div>
                      <button className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors">
                        Resolver
                      </button>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 flex justify-center">
                      <TransitionLink
                        to="/contacto"
                        className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full bg-[#00F0FF] hover:bg-[#00c4cc] transition-all shadow-lg shadow-[#00F0FF]/25"
                      >
                        Agendar Demo
                        <ArrowRight className="w-5 h-5" />
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection effect */}
            <div 
              className="absolute -bottom-32 left-0 right-0 h-32 opacity-10"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 229, 255, 0.2), transparent)',
                transform: 'scaleY(-1)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default HighTicketShowcase;
