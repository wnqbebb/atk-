import BlogLayout from '../../components/BlogLayout';
import { useTheme } from '../../context/ThemeContext';

const ArticleExcel = () => {
  const { isDark } = useTheme();
  
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bgCard = isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200';
  const bgHighlight = isDark ? 'bg-[#00F0FF]/5 border-[#00F0FF]/20' : 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
  const bgDanger = isDark ? 'bg-red-500/5 border-red-500/20' : 'bg-red-50 border-red-200';

  return (
    <BlogLayout
      currentSlug="excel-errores-nomina"
      title="Por qué Excel te está costando miles de euros en nómina cada año"
      description="El 73% de las empresas cometen errores semanales en planificación. Descubre el verdadero costo oculto de las hojas de cálculo y cómo eliminarlos."
      publishDate="10 de Febrero, 2026"
      readTime="6 min"
      author="Equipo AioTek"
      category="Errores Costosos"
      categoryColor="red"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    >
      {/* Intro */}
      <div className={textSecondary}>
        <p className="text-xl leading-relaxed mb-8">
          Cada error de cálculo en tu planificación es dinero que nunca recuperarás. 
          Y si crees que el Excel es "suficiente" para gestionar los turnos de tu equipo, 
          este artículo te va a doler.
        </p>
      </div>

      {/* Featured Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80" 
          alt="Hoja de cálculo con errores"
          className="w-full rounded-2xl shadow-2xl"
        />
        <p className={`text-sm mt-3 text-center ${textMuted}`}>
          Las hojas de cálculo pueden parecer inocentes, pero esconden costos enormes
        </p>
      </div>

      {/* Section 1 */}
      <h2 id="section-1" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        El problema real que nadie quiere ver
      </h2>
      
      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        El 73% de las empresas con más de 50 empleados cometen errores semanales en la 
        planificación de turnos. No mensuales, no ocasionalmente: <strong className={textPrimary}>semanales</strong>. 
        Y cada error tiene un costo directo en tu nómina.
      </p>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Pero aquí está el verdadero problema: la mayoría de estos errores pasan desapercibidos 
        durante meses, acumulando pérdidas que pueden representar miles de euros anuales.
      </p>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-3 gap-4 my-10">
        <div className={`p-6 rounded-2xl border ${bgCard} text-center`}>
          <div className="text-4xl font-bold text-red-500 mb-2">73%</div>
          <p className={`text-sm ${textMuted}`}>Cometen errores semanales</p>
        </div>
        <div className={`p-6 rounded-2xl border ${bgCard} text-center`}>
          <div className="text-4xl font-bold text-[#00F0FF] mb-2">15h</div>
          <p className={`text-sm ${textMuted}`}>Perdidas semanales promedio</p>
        </div>
        <div className={`p-6 rounded-2xl border ${bgCard} text-center`}>
          <div className="text-4xl font-bold text-purple-500 mb-2">€47K</div>
          <p className={`text-sm ${textMuted}`}>Pérdida promedio anual</p>
        </div>
      </div>

      {/* Case Study */}
      <div className={`border-l-4 border-red-500 p-6 rounded-r-2xl my-10 ${bgDanger}`}>
        <p className="text-red-500 font-semibold mb-2 flex items-center gap-2">
          <span className="text-xl">💡</span> Caso real
        </p>
        <p className={textMuted}>
          Una clínica médica de Madrid descubrió que llevaban 18 meses pagando incorrectamente 
          las guardias de fin de semana. El error: una fórmula de Excel mal configurada que 
          no consideraba los festivos. El coste acumulado:{' '}
          <strong className={textPrimary}>47,000€</strong>.
        </p>
      </div>

      {/* Section 2 */}
      <h2 id="section-2" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Los errores más costosos (y comunes)
      </h2>

      <div className="space-y-6 my-8">
        {[
          {
            title: 'Horas extras no registradas',
            desc: 'Los empleados trabajan más de lo planificado y el sistema no lo detecta. Resultado: conflictos laborales y sanciones.',
            cost: '2,000-5,000€/mes',
          },
          {
            title: 'Descansos legales ignorados',
            desc: 'Violaciones del convenio colectivo por no respetar horarios mínimos entre turnos.',
            cost: 'Sanciones de hasta 6,000€',
          },
          {
            title: 'Coberturas incompletas',
            desc: 'Turnos sin personal asignado que se descubren el mismo día, generando estrés y costes de emergencia.',
            cost: 'Productividad -30%',
          },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${bgCard}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`font-semibold mb-2 ${textPrimary}`}>{item.title}</h3>
                <p className={`text-sm ${textMuted}`}>{item.desc}</p>
              </div>
              <span className="text-red-500 font-semibold text-sm whitespace-nowrap">
                {item.cost}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" 
          alt="Costos ocultos"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      {/* Section 3 */}
      <h2 id="section-3" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        La solución: validación automática en tiempo real
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Los sistemas automatizados de gestión de turnos eliminan los errores humanos 
        validando cada turno antes de que sea confirmado. Esto significa:
      </p>

      <div className={`p-8 rounded-2xl border my-8 ${bgHighlight}`}>
        <ul className="space-y-4">
          {[
            'Detección automática de conflictos de horarios',
            'Validación de descansos legales según convenio',
            'Alertas de coberturas incompletas',
            'Cálculo preciso de horas extras y festivos',
            'Historial completo de cambios y auditoría',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#00F0FF] text-xl">✓</span>
              <span className={textSecondary}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quote */}
      <blockquote className={`border-l-4 border-[#00F0FF] pl-6 py-2 my-10 ${textSecondary}`}>
        <p className="text-xl italic mb-3">
          "Desde que implementamos el sistema automatizado, redujimos los errores de nómina 
          un 95% y recuperamos 12 horas semanales de trabajo administrativo."
        </p>
        <footer className={textMuted}>
          — Director de RRHH, Clínica San Rafael
        </footer>
      </blockquote>

      {/* Section 4 */}
      <h2 id="section-4" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Calcula tu pérdida actual
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Si gestionas turnos manualmente con Excel, probablemente estés perdiendo entre 
        500€ y 2,000€ mensuales solo en errores de cálculo. Sin contar el tiempo de 
        tu equipo corrigiendo problemas.
      </p>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgCard}`}>
        <p className={`text-lg mb-4 ${textSecondary}`}>
          ¿Quieres saber exactamente cuánto te cuesta el Excel?
        </p>
        <a 
          href="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
        >
          Solicitar auditoría gratuita →
        </a>
      </div>

      {/* Conclusion */}
      <h2 id="section-5" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Conclusión
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Excel fue diseñado para hojas de cálculo, no para gestión compleja de personal. 
        Cada fórmula que escribes es una oportunidad de error. Cada cambio manual es 
        tiempo que podrías invertir en estrategia.
      </p>

      <p className={`leading-relaxed ${textMuted}`}>
        La automatización no es un lujo: es una necesidad cuando tu equipo crece más allá 
        de 20 personas. La pregunta no es si te lo puedes permitir, sino si te puedes 
        permitir seguir sin ello.
      </p>
    </BlogLayout>
  );
};

export default ArticleExcel;
