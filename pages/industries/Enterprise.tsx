import { Globe, Shield, Users, BarChart3 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SEO from '../../components/SEO';
import TransitionLink from '../../components/TransitionLink';

const features = [
  { icon: Globe, title: 'Coordinación Multi-sede', description: 'Gestión centralizada de turnos para todas tus ubicaciones.' },
  { icon: Shield, title: 'Cumplimiento Normativo', description: 'Validación automática de convenios colectivos por país.' },
  { icon: Users, title: 'Escalabilidad Masiva', description: 'Desde 100 hasta 10,000+ empleados sin pérdida de rendimiento.' },
  { icon: BarChart3, title: 'Reportes Ejecutivos', description: 'Dashboards avanzados con KPIs de productividad.' },
];

const stats = [
  { value: '40%', label: 'Menos costes admin' },
  { value: '200+', label: 'Empresas' },
  { value: '50k+', label: 'Empleados' },
  { value: '99.9%', label: 'Uptime' },
];

const Enterprise = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos para Grandes Empresas | AioTek"
        description="Solución enterprise escalable para coordinación multi-sede. Cumplimiento normativo y reportes ejecutivos."
      />
      
      <section className={`min-h-screen transition-colors ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Hero */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#7000FF] mb-4 block">
              Enterprise
            </span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Coordinación masiva de{' '}
              <span className="text-[#7000FF]">personal y normativas</span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Escalable a miles de empleados sin perder control. Coordinación perfecta 
              entre sedes, cumplimiento normativo multi-país.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Solicitar Demo Enterprise
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
                  <div className="text-3xl font-bold text-[#7000FF] mb-1">{stat.value}</div>
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
              Infraestructura <span className="text-[#7000FF]">Enterprise-Grade</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border transition-all ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-800 hover:border-[#7000FF]/30' 
                      : 'bg-white border-zinc-200 hover:border-[#7000FF]/50 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7000FF]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#7000FF]" />
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
              Escala sin límites
            </h2>
            <p className={`mb-8 max-w-xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Únete a las 200+ grandes empresas que confían en AioTek.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Solicitar Demo Enterprise
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enterprise;
