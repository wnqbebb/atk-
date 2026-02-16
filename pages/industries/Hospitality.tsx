import { Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SEO from '../../components/SEO';
import TransitionLink from '../../components/TransitionLink';

const features = [
  { icon: Calendar, title: 'Rotación por Ocupación', description: 'Ajuste automático de plantilla según previsiones de ocupación.' },
  { icon: TrendingUp, title: 'Gestión de Temporadas', description: 'Planificación anticipada de refuerzos para verano y navidades.' },
  { icon: Users, title: 'Multi-departamento', description: 'Coordinación entre recepción, housekeeping, restaurante y mantenimiento.' },
  { icon: Clock, title: 'Control de Horas Extras', description: 'Alertas automáticas cuando un empleado se acerca al límite.' },
];

const stats = [
  { value: '30%', label: 'Menos costes' },
  { value: '98%', label: 'Satisfacción' },
  { value: '120+', label: 'Hoteles' },
  { value: '25%', label: 'Menos horas extra' },
];

const Hospitality = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos para Hoteles | AioTek"
        description="Solución especializada para hostelería. Rotación perfecta, control de temporadas y multi-departamento."
      />
      
      <section className={`min-h-screen transition-colors ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Hero */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00F0FF] mb-4 block">
              Sector HORECA
            </span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Rotación perfecta y{' '}
              <span className="text-[#00F0FF]">cobertura continua</span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Optimiza tu plantilla según ocupación. Gestión inteligente para hoteles 
              y restaurantes.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Solicitar Demo para Hoteles
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
              Diseñado para <span className="text-[#00F0FF]">Hoteles</span>
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
              Maximiza la ocupación, minimiza costes
            </h2>
            <p className={`mb-8 max-w-xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Únete a los 120+ hoteles que ya optimizan su plantilla con AioTek.
            </p>
            <TransitionLink
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              Solicitar Demo para Hoteles
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hospitality;
