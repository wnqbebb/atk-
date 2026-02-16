import { Clock, Shield, Users, Activity } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SEO from '../../components/SEO';
import TransitionLink from '../../components/TransitionLink';

const features = [
  { icon: Clock, title: 'Turnos 24/7 Automatizados', description: 'Gestión autónoma de guardias nocturnas, festivos y rotaciones complejas.' },
  { icon: Shield, title: 'Cumplimiento Normativo', description: 'Validación automática de descansos obligatorios y convenios colectivos.' },
  { icon: Users, title: 'Gestión de Guardias', description: 'Asignación inteligente de guardias de urgencia con cobertura garantizada.' },
  { icon: Activity, title: 'Integración con HIS', description: 'Conexión nativa con sistemas de historiales médicos.' },
];

const stats = [
  { value: '60%', label: 'Menos errores' },
  { value: '99.8%', label: 'Cobertura' },
  { value: '20h', label: 'Ahorro semanal' },
  { value: '45+', label: 'Centros médicos' },
];

const Healthcare = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos para Sanidad | AioTek"
        description="Solución especializada para hospitales y clínicas. Gestión 24/7 de guardias, cumplimiento normativo e integración con HIS."
      />
      
      <section className={`min-h-screen transition-colors ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Hero */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00F0FF] mb-4 block">
              Sector Salud
            </span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Turnos 24/7 y guardias{' '}
              <span className="text-[#00F0FF]">gestionadas sin error</span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Gestión autónoma de personal médico y horarios críticos. Optimiza coberturas 24/7, 
              respeta descansos obligatorios y elimina conflictos.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Solicitar Demo para Sanidad
            </TransitionLink>
          </div>
        </div>

        {/* Stats */}
        <div className={`py-12 border-y ${
          isDark ? 'border-zinc-800' : 'border-zinc-200'
        }`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#00F0FF] mb-1">{stat.value}</div>
                  <div className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Funcionalidades para <span className="text-[#00F0FF]">Sanidad</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border transition-all ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-800 hover:border-[#00F0FF]/30' 
                      : 'bg-white border-zinc-200 hover:border-[#00F0FF]/50 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>{feature.title}</h3>
                  <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-20 px-4">
          <div className={`max-w-4xl mx-auto text-center rounded-3xl p-12 border ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800' 
              : 'bg-white border-zinc-200 shadow-lg'
          }`}>
            <h2 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Elimina el caos de las guardias médicas
            </h2>
            <p className={`mb-8 max-w-xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Únete a los 45+ centros médicos que ya confían en AioTek.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Solicitar Demo para Sanidad
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;
