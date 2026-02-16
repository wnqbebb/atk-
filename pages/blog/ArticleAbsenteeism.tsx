import BlogLayout from '../../components/BlogLayout';
import { useTheme } from '../../context/ThemeContext';

const ArticleAbsenteeism = () => {
  const { isDark } = useTheme();
  
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bgCard = isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200';
  const bgHighlight = isDark ? 'bg-[#00F0FF]/5 border-[#00F0FF]/20' : 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
  const bgSuccess = isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200';

  return (
    <BlogLayout
      currentSlug="reducir-ausentismo-laboral"
      title="Cómo AioTek reduce el ausentismo laboral un 40% sin aumentar sueldos"
      description="El ausentismo no siempre es por enfermedad. Descubre cómo una planificación inteligente reduce las ausencias y mejora el bienestar de tu equipo."
      publishDate="2 de Febrero, 2026"
      readTime="5 min"
      author="Laura González"
      category="Productividad"
      categoryColor="green"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    >
      <p className={`text-xl leading-relaxed mb-8 ${textSecondary}`}>
        Cuando hablamos de ausentismo, la primera respuesta suele ser "pagamos mejor". 
        Pero la realidad es más compleja: la mayoría de ausencias están relacionadas 
        con el estrés causado por una mala planificación.
      </p>

      {/* Hero Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
          alt="Equipo feliz trabajando"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-1" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        La verdadera causa del ausentismo
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Solo el 35% del ausentismo laboral está causado por enfermedades físicas reales. 
        El resto? Estrés, burnout, conflictos familiares por horarios imposibles, y 
        desmotivación pura y dura.
      </p>

      {/* Stats */}
      <div className={`p-8 rounded-2xl border my-10 ${bgCard}`}>
        <h3 className={`font-semibold mb-6 ${textPrimary}`}>Causas del ausentismo</h3>
        <div className="space-y-4">
          {[
            { cause: 'Estrés y burnout', percent: 28, color: 'bg-red-500' },
            { cause: 'Problemas familiares (horarios)', percent: 22, color: 'bg-orange-500' },
            { cause: 'Enfermedades físicas', percent: 35, color: 'bg-blue-500' },
            { cause: 'Desmotivación', percent: 15, color: 'bg-zinc-500' },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className={`text-sm ${textSecondary}`}>{item.cause}</span>
                <span className={`text-sm font-semibold ${textPrimary}`}>{item.percent}%</span>
              </div>
              <div className={`h-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-zinc-100'}`}>
                <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 id="section-2" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Cómo la planificación afecta el bienestar
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Cuando un empleado no sabe con anticipación sus turnos, no puede planificar su vida. 
        No puede ir al médico, no puede ir a la reunión del colegio de sus hijos, no puede 
        tener una vida social estable. Eso genera estrés, y el estrés genera ausencias.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 my-10">
        {[
          { icon: '📅', title: 'Previsión', desc: 'Turnos publicados con 4 semanas de antelación' },
          { icon: '⚖️', title: 'Equidad', desc: 'Distribución justa de festivos y fines de semana' },
          { icon: '🔄', title: 'Flexibilidad', desc: 'Intercambios entre compañeros sin burocracia' },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-2xl border text-center ${bgCard}`}>
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className={`font-semibold mb-2 ${textPrimary}`}>{item.title}</h3>
            <p className={`text-sm ${textMuted}`}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Case Study */}
      <div className={`border-l-4 border-green-500 p-6 rounded-r-2xl my-10 ${bgSuccess}`}>
        <p className="text-green-500 font-semibold mb-2">✓ Caso real: Hotel Gran Canaria</p>
        <p className={textMuted}>
          Con 85 empleados en recepción y limpieza, tenían un ausentismo del 12%. 
          Tras implementar planificación automatizada con previsión de turnos y 
          sistema de intercambios, bajaron al <strong className={textPrimary}>4.2%</strong> en 6 meses. 
          Sin aumentar sueldos, solo mejorando la calidad de vida laboral.
        </p>
      </div>

      <h2 id="section-3" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Estrategias que funcionan
      </h2>

      <div className={`p-8 rounded-2xl border my-8 ${bgHighlight}`}>
        <h3 className={`font-semibold mb-6 ${textPrimary}`}>
          Lo que implementamos en AioTek para reducir ausentismo:
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            'Publicación de turnos con 30 días de antelación',
            'Sistema de peticiones de cambio sin confrontación',
            'Distribución equitativa de festivos (transparencia total)',
            'Alertas de acumulación de horas (prevención de burnout)',
            'Respeto estricto de descansos entre turnos',
            'App móvil para consultar turnos en cualquier momento',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className={textSecondary}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
          alt="Equipo colaborando"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-4" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        El costo del ausentismo vs. La inversión
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 my-10">
        <div className={`p-6 rounded-2xl border ${bgCard}`}>
          <p className="text-red-500 font-semibold mb-3">💸 Costo del ausentismo (50 empleados)</p>
          <ul className={`space-y-2 text-sm ${textMuted}`}>
            <li>• Cobertura de bajas: 3,500€/mes</li>
            <li>• Pérdida de productividad: 2,800€/mes</li>
            <li>• Coste de rotación: 1,200€/mes</li>
            <li className="pt-2 border-t border-white/10">
              <strong className={textPrimary}>Total: 7,500€/mes</strong>
            </li>
          </ul>
        </div>
        <div className={`p-6 rounded-2xl border ${bgHighlight}`}>
          <p className="text-[#00F0FF] font-semibold mb-3">✓ Ahorro con reducción del 40%</p>
          <ul className={`space-y-2 text-sm ${textMuted}`}>
            <li>• Ausentismo reducido: 40%</li>
            <li>• Ahorro mensual: 3,000€</li>
            <li>• Mejor clima laboral: Incalculable</li>
            <li className="pt-2 border-t border-white/10">
              <strong className={textPrimary}>ROI: 240% primer año</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgCard}`}>
        <p className={`text-xl mb-2 ${textSecondary}`}>
          ¿Te preocupa el ausentismo en tu equipo?
        </p>
        <p className={`mb-6 ${textMuted}`}>
          Analizamos tu caso y te mostramos soluciones concretas.
        </p>
        <a 
          href="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
        >
          Ver estrategias para mi equipo →
        </a>
      </div>

      <h2 id="section-5" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Conclusión
      </h2>

      <p className={`leading-relaxed ${textMuted}`}>
        El ausentismo no es solo un problema de disciplina o de salud. Es un síntoma 
        de que algo en la organización no funciona bien. La buena noticia es que con 
        herramientas adecuadas, transparencia y previsión, puedes reducirlo drásticamente 
        sin necesidad de aumentar la nómina. Tu equipo estará más feliz, y tu empresa 
        más productiva.
      </p>
    </BlogLayout>
  );
};

export default ArticleAbsenteeism;
