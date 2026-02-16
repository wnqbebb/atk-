import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Server, 
  Activity,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Seguridad Enterprise',
    description: 'Cifrado AES-256, autenticación multifactor y cumplimiento GDPR. Tus datos protegidos con los más altos estándares bancarios.',
    specs: ['Cifrado end-to-end', 'Certificación ISO 27001', 'Auditorías trimestrales'],
    metric: '99.99%',
    metricLabel: 'Uptime garantizado',
    color: '#00F0FF',
  },
  {
    icon: Zap,
    title: 'Performance Extrema',
    description: 'Arquitectura cloud-native con auto-scaling. Procesa miles de turnos simultáneos sin latencia perceptible.',
    specs: ['Sub-100ms respuesta', 'Auto-scaling', 'CDN global'],
    metric: '<100ms',
    metricLabel: 'Tiempo de respuesta',
    color: '#00D4FF',
  },
  {
    icon: Globe,
    title: 'Multi-sede & Global',
    description: 'Gestiona equipos distribuidos en múltiples ubicaciones. Sincronización en tiempo real entre todos tus centros.',
    specs: ['Sincronización RT', 'Zonas horarias', 'Compliance local'],
    metric: '∞',
    metricLabel: 'Ubicaciones',
    color: '#00B8FF',
  },
  {
    icon: Lock,
    title: 'Control de Acceso',
    description: 'Roles y permisos granulares. Define quién puede ver, editar o aprobar según jerarquía y departamento.',
    specs: ['RBAC avanzado', 'SSO/SAML', 'Logs de auditoría'],
    metric: 'RBAC',
    metricLabel: 'Control de roles',
    color: '#009CFF',
  },
  {
    icon: Server,
    title: 'Integraciones API',
    description: 'API REST completa y webhooks. Conecta con SAP, Workday, SAP SuccessFactors y cualquier sistema HR existente.',
    specs: ['REST API v2', 'Webhooks', 'SDK empresarial'],
    metric: '500+',
    metricLabel: 'Endpoints API',
    color: '#0080FF',
  },
  {
    icon: Activity,
    title: 'Analytics Avanzado',
    description: 'Dashboards ejecutivos en tiempo real. Predicción de ausentismo, optimización de costes y forecasting de plantilla.',
    specs: ['BI integrado', 'ML forecasting', 'Export a Excel/PDF'],
    metric: 'Real-time',
    metricLabel: 'Dashboards',
    color: '#0064FF',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
    // Mouse tracking for glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative group p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#0a0a0a]/60 border-white/5 hover:border-[#00F0FF]/30' 
          : 'bg-white/80 border-zinc-100 hover:border-[#00F0FF]/30 shadow-sm hover:shadow-xl'
      }`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      {/* Dynamic glow effect */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
          left: glowX,
          top: glowY,
          x: '-50%',
          y: '-50%',
        }}
      />

      {/* Border glow on hover */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${feature.color}10 0%, transparent 50%, ${feature.color}05 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              isDark 
                ? 'bg-[#00F0FF]/10 border border-[#00F0FF]/30' 
                : 'bg-[#00F0FF]/10 border border-[#00F0FF]/40'
            }`}
          >
            <feature.icon className="w-7 h-7 text-[#00F0FF]" />
          </motion.div>
          
          {/* Metric badge */}
          <div className={`text-right ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            <div className="text-2xl font-bold font-display" style={{ color: feature.color }}>
              {feature.metric}
            </div>
            <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              {feature.metricLabel}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 font-display ${
          isDark ? 'text-white' : 'text-zinc-900'
        }`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          {feature.description}
        </p>

        {/* Specs */}
        <div className="space-y-2">
          {feature.specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
              className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-zinc-500' : 'text-zinc-500'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: feature.color }} />
              {spec}
            </motion.div>
          ))}
        </div>


      </div>
    </motion.div>
  );
};

const EnterpriseFeatures = () => {
  const { isDark } = useTheme();

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-white'
    }`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-10' : 'opacity-5'}`} />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%)',
          }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 5 }}
          className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 184, 212, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              isDark 
                ? 'bg-[#00F0FF]/5 border-[#00F0FF]/30 text-[#00F0FF]' 
                : 'bg-[#00F0FF]/10 border-[#00F0FF]/40 text-[#00B8D4]'
            }`}
          >
            <Server className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">INFRAESTRUCTURA ENTERPRISE</span>
          </motion.div>

          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Tecnología de{' '}
            <span className="text-[#00F0FF]">clase mundial</span>
          </h2>
          
          <p className={`max-w-2xl mx-auto text-lg ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Arquitectura diseñada para empresas que no pueden permitirse el lujo 
            de fallar. Escalabilidad, seguridad y rendimiento garantizados.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`mt-20 pt-16 border-t text-center ${
            isDark ? 'border-white/10' : 'border-zinc-200'
          }`}
        >
          <p className={`text-sm mb-8 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['AWS Partner', 'ISO 27001', 'GDPR Compliant', 'SOC 2 Type II'].map((badge) => (
              <div key={badge} className={`text-lg font-semibold ${
                isDark ? 'text-zinc-600' : 'text-zinc-400'
              }`}>
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
